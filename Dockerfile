FROM node:18-alpine AS base


###############
FROM base AS deps
WORKDIR /app
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache python3 make g++ git libc6-compat
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile && yarn cache clean


###############
FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN yarn build
RUN cd .next/standalone && npm prune --omit=dev --legacy-peer-deps

######################
# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
#ENV NEXT_SHARP_PATH /app/node_modules/sharp
RUN addgroup --gid 1001 --system nodejs
RUN adduser --system nextjs --uid 1001

COPY --from=builder /app/public ./public
# You only need to copy next.config.js if you are NOT using the default configuration
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"
# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
# ENV NEXT_TELEMETRY_DISABLED 1

CMD ["node", "server.js"]

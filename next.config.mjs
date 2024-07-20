// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',

    async rewrites() {
      return [
        {
          source: '/videos/:path*',
          destination: '/api/videos/:path*',
        },
      ];
    },

    async headers() {
      return [
        {
          source: "/assets/:all*",
          headers: [
            {
              key: "Cache-Control",
              value: "public, immutable, max-age=31536000",
            },
          ],
        },
      ];
    },

    images: {
      formats:['image/avif', 'image/webp'],
      remotePatterns:[
        {
          protocol:'https',
          hostname:'dev-stark.citiverse.io',
          port:'',
          pathname:'/assets/**'
        }
      ]
    }
  
  };

export default nextConfig;

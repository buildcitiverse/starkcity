import Head from "next/head";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { AppConfig } from "../utils/AppConfig";

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
  url?: string;
};

const Meta = (props: IMetaProps) => {
  const router = useRouter();
  const fullUrl = props.canonical || (typeof window !== "undefined" ? window.location.href : '');

  const imageUrl = "https://dev-stark.citiverse.io/assets/images/starkCity_thumbnail.jpg";

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
          key="viewport"
        />
        <meta property="og:image" content={imageUrl} />
        <link
          rel="apple-touch-icon"
          href={`${router.basePath}/apple-touch-icon.png`}
          key="apple"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${router.basePath}/favicon-32x32.png`}
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${router.basePath}/favicon-16x16.png`}
          key="icon16"
        />
        <link
          rel="icon"
          href={`${router.basePath}/favicon.ico`}
          key="favicon"
        />
      </Head>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={fullUrl}
        openGraph={{
          title: props.title,
          description: props.description,
          url: fullUrl,
          locale: AppConfig.locale,
          site_name: AppConfig.site_name,
          images: [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt: '',
            },
          ],
        }}
      />
    </>
  );
};

export { Meta };

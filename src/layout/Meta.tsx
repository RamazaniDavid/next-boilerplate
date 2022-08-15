import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

import { AppConfig } from '@/utils/AppConfig';

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
};

const Meta = (props: IMetaProps) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <meta name="application-name" content={AppConfig.appName} />
        <meta name="apple-mobile-web-app-title" content={AppConfig.appName} />
        <meta name="application-name" content={AppConfig.appName} />
        <meta name="apple-mobile-web-app-title" content={AppConfig.appName} />
        <meta name="msapplication-TileColor" content="#0085ff" />
        
        <meta name="theme-color" content="#0085ff" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        <meta property="og:locale" content="nl_NL" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description} />
        <meta
          property="og:url"
          content={props.canonical || `${router.basePath}/${router.pathname}`}
        />
        <meta property="og:site_name" content={AppConfig.appName} />

        <meta name="twitter:card" content="summary_large_image" />
        {/* <meta
          name="twitter:image"
          content={`${router.basePath}/favicon-32x32.png`}
        />
         <meta
          property="og:image"
          content={`${router.basePath}/favicon-32x32.png`}
        />
        
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />

        <link
          rel="apple-touch-icon"
          href={`${router.basePath}/favicon-32x32.png`}
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
        /> */}
        <link
          rel="icon"
          href={`${router.basePath}/favicon.ico`}
          key="favicon"
        />
      </Head>
      <NextSeo
        robotsProps={{
          nosnippet: true,
          notranslate: true,
          noimageindex: true,
          noarchive: true,
          maxSnippet: -1,
          maxImagePreview: 'none',
          maxVideoPreview: -1,
        }}
        title={props.title}
        description={props.description}
        canonical={
          props.canonical || `${AppConfig.appAddress}/${router.asPath}`
        }
        openGraph={{
          title: props.title,
          description: props.description,
          url: props.canonical,
          locale: AppConfig.locale,
          site_name: AppConfig.appName,
        }}
      />
    </>
  );
};

export { Meta };

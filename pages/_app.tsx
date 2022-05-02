import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';

import Layout from '@/components/navigation/Layout';

import '@/styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const url = `https://laam.dev${router.asPath}`;

  return (
    <>
      <DefaultSeo
        titleTemplate="%s - LAAM"
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url,
          description:
            'Portfolio website of Madrid-based frontend web developer Luis Alejandro Anaya Marín.',
          site_name: 'LAAM | laam.dev',
          images: [],
        }}
        canonical={url}
      />

      <Layout>
        <AnimatePresence exitBeforeEnter initial={false}>
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;

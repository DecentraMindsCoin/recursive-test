import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  <Head>
    <meta
      name="viewport"
      content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=yes, user-scalable=no, viewport-fit=cover"
    />
  </Head>
  return (

      <Component {...pageProps} />

  )
}

export default MyApp

import {
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-br" className="scroll-smooth">
      <Head>
        <meta
          name="google-site-verification"
          content="P8VWrEo0BhVfrSc_Ni7czmNmoYDFplAJHWVFhiV-i6M"
        />
        <meta
          name="google-site-verification"
          content="zsNHXyx-gNjxd1ym6QRAW__MEcW_e06zo-__wYM1OLE"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="author" content="Koru Company" />
        <meta name="theme-color" content="#050505" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

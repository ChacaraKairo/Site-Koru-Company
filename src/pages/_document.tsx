import {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-br" className="scroll-smooth">
      <Head>
        {/* --- Fontes --- */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        {/* --- Favicons e PWA --- */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        {/* --- Meta Tags Estáticas --- */}
        {/* Lembre-se: 'title' e 'description' dinâmicos vão em cada página ou no _app.tsx */}
        <meta
          name="author"
          content="Seu Nome ou Nome da Empresa"
        />
        <meta name="theme-color" content="#111827" />{' '}
        {/* Exemplo: cor escura */}
        {/* Adicione outras meta tags estáticas aqui se necessário */}
      </Head>
      <body className="bg-white text-gray-900 antialiased dark:bg-gray-900 dark:text-gray-50">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

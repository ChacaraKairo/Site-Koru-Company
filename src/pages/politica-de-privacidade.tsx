import Head from 'next/head';
import Link from 'next/link';
import { CONTACT } from '@/config/contact';
import styles from '@/styles/Privacy.module.css';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Política de Privacidade | Koru Company</title>
        <meta
          name="description"
          content="Política de privacidade da Koru Company para dados enviados pelo formulário de contato."
        />
        <meta name="robots" content="index,follow" />
      </Head>
      <main className={styles.page}>
        <article className={styles.content}>
          <Link href="/" className={styles.back}>
            Voltar para a home
          </Link>
          <p className={styles.eyebrow}>Koru Company</p>
          <h1>Política de Privacidade</h1>
          <p>
            Esta política explica como a Koru Company utiliza os dados
            enviados pelo formulário de contato do site.
          </p>

          <h2>Dados coletados</h2>
          <p>
            Podemos coletar nome, empresa, telefone, e-mail e a mensagem
            enviada voluntariamente pelo visitante.
          </p>

          <h2>Finalidade</h2>
          <p>
            Os dados são usados apenas para responder ao contato
            solicitado, entender o cenário apresentado e indicar o melhor
            próximo passo para sistemas, automações, dashboards ou
            soluções digitais.
          </p>

          <h2>Compartilhamento</h2>
          <p>
            A Koru não vende dados pessoais. As informações podem ser
            enviadas para canais internos de atendimento, como e-mail,
            WhatsApp ou ferramentas de notificação, exclusivamente para
            dar continuidade ao contato.
          </p>

          <h2>Retenção</h2>
          <p>
            Os dados podem ser mantidos pelo tempo necessário para
            atendimento comercial, histórico de relacionamento e
            cumprimento de obrigações legais.
          </p>

          <h2>Contato</h2>
          <p>
            Para solicitar informações sobre seus dados, envie uma
            mensagem para{' '}
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
          </p>
        </article>
      </main>
    </>
  );
}

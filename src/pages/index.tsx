import Head from 'next/head';
import { Footer } from '@/components/footer/Footer';
import { Header } from '@/components/header/Header';
import { AboutSection } from '@/components/sections/about/AboutSection';
import { SectionContact } from '@/components/sections/contato/SectionContact';
import { FinalCTA } from '@/components/sections/final-cta/FinalCTA';
import { HeroSection } from '@/components/sections/hero/HeroSection';
import { ImpactSection } from '@/components/sections/impact/ImpactSection';
import { ProblemsSection } from '@/components/sections/problems/ProblemsSection';
import { ProcessSection } from '@/components/sections/process/ProcessSection';
import { ProofSection } from '@/components/sections/proof/ProofSection';
import { SolutionsSection } from '@/components/sections/solutions/SolutionsSection';
import { TechnologiesSection } from '@/components/sections/technologies/TechnologiesSection';
import { CONTACT } from '@/config/contact';

const title =
  'Koru Company | Sistemas, automações e soluções digitais sob medida';
const description =
  'Software house em Indaiatuba que desenvolve sistemas sob medida, automação de processos, dashboards, consultoria em tecnologia e sites profissionais para empresas.';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Koru Company',
  url: CONTACT.siteUrl,
  email: CONTACT.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Indaiatuba',
    addressRegion: 'SP',
    addressCountry: 'BR',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: CONTACT.whatsappLabel,
    contactType: 'customer service',
    availableLanguage: 'Portuguese',
  },
};

export default function Home() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="theme-color" content="#0d0f12" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={CONTACT.siteUrl} />
        <meta
          property="og:image"
          content={`${CONTACT.siteUrl}/imagens/logo.png`}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </Head>

      <Header />
      <main>
        <HeroSection />
        <ProblemsSection />
        <ImpactSection />
        <SolutionsSection />
        <ProofSection />
        <ProcessSection />
        <TechnologiesSection />
        <AboutSection />
        <SectionContact />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

import Head from 'next/head';
import { Footer } from '@/components/footer/Footer';
import { Header } from '@/components/header/Header';
import { AboutSection } from '@/components/sections/about/AboutSection';
import { SectionContact } from '@/components/sections/contato/SectionContact';
import { FinalCTA } from '@/components/sections/final-cta/FinalCTA';
import { HeroSection } from '@/components/sections/hero/HeroSection';
import { ImpactSection } from '@/components/sections/impact/ImpactSection';
import { ProcessSection } from '@/components/sections/process/ProcessSection';
import { SolutionsSection } from '@/components/sections/solutions/SolutionsSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Koru Company | Sistemas, automações e soluções digitais sob medida
        </title>
        <meta
          name="description"
          content="A Koru Company desenvolve sistemas, automações, dashboards e plataformas digitais sob medida para empresas que querem operar com mais eficiência."
        />
        <meta name="theme-color" content="#050505" />
        <meta
          property="og:title"
          content="Koru Company | Sistemas, automações e soluções digitais sob medida"
        />
        <meta
          property="og:description"
          content="Sistemas, automações, dashboards e plataformas digitais sob medida para empresas que querem operar com mais eficiência."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://site-koru-company.vercel.app"
        />
        <meta property="og:image" content="/imagens/logo.png" />
      </Head>

      <Header />
      <main>
        <HeroSection />
        <ImpactSection />
        <SolutionsSection />
        <ProcessSection />
        <AboutSection />
        <SectionContact />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

'use client';

import { Header } from '@/components/header/Header';
import { Carrossel } from '@/components/carrossel/Carrossel';
import { About } from '@/components/sections/quem-somos/About';
import { SectionServices } from '@/components/sections/servicos/SectionServices';
import { SectionContact } from '@/components/sections/contato/SectionContact';
import { Footer } from '@/components/footer/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section id="hero" className="mb-12">
          <Carrossel />
        </section>

        <section
          id="about"
          className="px-6 max-w-screen-xl mx-auto"
        >
          <About />
        </section>

        <section
          id="services"
          className="px-6 max-w-screen-xl mx-auto"
        >
          <SectionServices />
        </section>

        <section
          id="contact"
          className="px-6 max-w-screen-xl mx-auto"
        >
          <SectionContact />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
      <div
        id="copy-popup"
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-white px-4 py-2 rounded shadow-lg opacity-0 transition-opacity duration-500 pointer-events-none z-50"
      >
        Número copiado!
      </div>
    </>
  );
}

'use client';

import { useRevealOnScroll } from '../animation';
import { AboutText } from './AboutText';
import { AboutImages } from './AboutImages';

import aboutSectionStyles from './styles/About.module.css'; // Import do CSS modularizado para a section container

export function About() {
  const sectionRef = useRevealOnScroll();

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`${aboutSectionStyles.aboutSection} opacity-0 translate-y-12 transition-all duration-1000 ease-out [&.visible]:opacity-100 [&.visible]:translate-y-0`}
    >
      <div className={aboutSectionStyles.container}>
        <header>
          <h2
            className={`${aboutSectionStyles.sectionTitle} text-center`}
          >
            Quem Somos
          </h2>
        </header>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <AboutText />
          <AboutImages />
        </div>
      </div>
    </section>
  );
}

'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { FadeInUp } from '@/components/effects/FadeInUp';
import { contactInfo } from '@/data/contact';
import { useLanguage } from '@/hooks/useLanguage';
import { ANIMATION_DURATION } from '@/lib/constants';

export function Hero() {
  const { t } = useLanguage();
  
  const handleScrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-8">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Contenido de texto (mobile first) */}
          <div className="order-2 lg:order-1 space-y-6">
            <FadeInUp delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-primary mb-3 leading-tight text-center lg:text-left">
                {t('hero.title')}
              </h1>
            </FadeInUp>

            <FadeInUp delay={0.4}>
              <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-display font-semibold text-secondary mb-4 text-center lg:text-left">
                {t('hero.subtitle')}
              </h2>
            </FadeInUp>

            <FadeInUp delay={0.6}>
              <p className="text-base sm:text-lg text-text-secondary mb-6 max-w-lg mx-auto lg:mx-0 leading-relaxed text-center lg:text-left">
                {t('hero.description')}
              </p>
            </FadeInUp>

            {/* CTAs */}
            <FadeInUp delay={0.8}>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Button
                  onClick={handleScrollToProjects}
                  variant="outline"
                  size="lg"
                  className="px-6 py-3 text-base font-medium w-full sm:w-auto"
                >
                  {t('hero.cta.projects')}
                  <ArrowDown size={18} className="ml-2" />
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  href={`mailto:${contactInfo.email}`}
                  className="px-6 py-3 text-base font-medium w-full sm:w-auto"
                >
                  <Mail size={18} className="mr-2" />
                  {t('hero.cta.contact')}
                </Button>
              </div>
            </FadeInUp>

            {/* Links sociales */}
            <FadeInUp delay={1.0}>
              <div className="flex gap-4 justify-center lg:justify-start mt-6">
                <motion.a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-lg"
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ duration: ANIMATION_DURATION.fast }}
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </motion.a>
                
                <motion.a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-lg"
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ duration: ANIMATION_DURATION.fast }}
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </motion.a>
                
                <motion.a
                  href={`mailto:${contactInfo.email}`}
                  className="text-text-secondary hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-lg"
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ duration: ANIMATION_DURATION.fast }}
                  aria-label="Email"
                >
                  <Mail size={20} />
                </motion.a>
              </div>
            </FadeInUp>
          </div>

          {/* Foto de perfil */}
          <div className="order-1 lg:order-2 flex justify-center mb-6 lg:mb-0">
            <FadeInUp delay={0.1}>
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: ANIMATION_DURATION.normal }}
              >
                <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden border-4 border-secondary/20 shadow-2xl">
                  <Image
                    src="/images/profile3.png"
                    alt="Ricardo Nigrelli"
                    width={320}
                    height={320}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
                
                {/* Ring decorativo más sutil */}
                <div className="absolute -inset-2 rounded-full border border-secondary/5" />
              </motion.div>
            </FadeInUp>
          </div>
        </div>

        {/* Scroll arrow animado - más compacto */}
        <div className="flex justify-center mt-8 lg:mt-12">
          <motion.button
            onClick={handleScrollToProjects}
            className="text-text-secondary hover:text-primary transition-colors p-3 focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-full hover:bg-primary/5"
            animate={{ y: [0, 8, 0] }}
            transition={{ 
              duration: 2.5, 
              repeat: Infinity, 
              ease: 'easeInOut' 
            }}
            aria-label="Scroll to projects"
          >
            <ArrowDown size={24} />
          </motion.button>
        </div>
      </Container>
    </section>
  );
}
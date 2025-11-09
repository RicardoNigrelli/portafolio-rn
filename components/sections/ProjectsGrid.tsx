'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ProjectCard } from '@/components/common/ProjectCard';
import { ScrollReveal } from '@/components/effects/ScrollReveal';
import { useLanguage } from '@/hooks/useLanguage';
import { projects } from '@/data/projects';

export function ProjectsGrid() {
  const { t } = useLanguage();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="py-16 bg-gray-50/50">
      <Container>
        <ScrollReveal>
          <SectionHeading
            title={t('projects.title')}
            description={t('projects.description')}
            centered
            className="text-center mb-16 mx-auto"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
            >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Call to action adicional */}
        <ScrollReveal delay={0.4}>
          <div className="text-center mt-16">
            <p className="text-text-secondary mb-6">
              {t('projects.interested')}
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center text-secondary font-medium hover:underline"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => {
                e.preventDefault();
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {t('projects.discuss')}
            </motion.a>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { SkillBadge } from '@/components/common/SkillBadge';
import { ScrollReveal } from '@/components/effects/ScrollReveal';
import { useLanguage } from '@/hooks/useLanguage';
import { skillCategories } from '@/data/skills';

export function SkillsSection() {
  const { t } = useLanguage();
  
  return (
    <section id="skills" className="py-16">
      <Container>
        <ScrollReveal>
          <SectionHeading
            title={t('skills.title')}
            description={t('skills.description')}
            centered
            className="text-center mb-16"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <ScrollReveal key={category.label} delay={categoryIndex * 0.1}>
              <motion.div
                className="bg-white p-6 lg:p-8 rounded-2xl border border-border shadow-sm hover:shadow-lg hover:border-secondary/20 transition-all duration-300"
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Encabezado de categoría */}
                <div className="flex items-center mb-5">
                  <span className="text-3xl mr-4">{category.icon}</span>
                  <h3 className="font-display font-bold text-xl lg:text-2xl text-primary">
                    {category.label}
                  </h3>
                </div>

                {/* Skills badges */}
                <motion.div
                  className="flex flex-wrap gap-2"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1
                      }
                    }
                  }}
                >
                  {category.items.map((skill) => (
                    <motion.div
                      key={skill}
                      variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 }
                      }}
                    >
                      <SkillBadge skill={skill} />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Información adicional */}
        <ScrollReveal delay={0.6}>
          <div className="mt-12 lg:mt-16">
            <div className="bg-linear-to-br from-secondary/10 via-primary/5 to-secondary/10 p-8 lg:p-12 rounded-3xl border border-secondary/20 shadow-lg text-center">
              <h3 className="font-display font-bold text-2xl lg:text-3xl text-primary mb-6">
                {t('skills.learning.title')}
              </h3>
              <p className="text-text-secondary max-w-3xl mx-auto text-lg leading-relaxed font-medium">
                {t('skills.learning.description')}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
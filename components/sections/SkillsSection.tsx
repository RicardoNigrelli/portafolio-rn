'use client';

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
            className="mb-10"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <dl className="divide-y divide-border border-y border-border">
            {skillCategories.map((category) => (
              <div
                key={category.label}
                className="grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-2 sm:gap-6 py-5"
              >
                <dt className="font-display font-semibold text-primary text-sm uppercase tracking-wide pt-1">
                  {category.label}
                </dt>
                <dd className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <SkillBadge key={skill} skill={skill} />
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="mt-8 text-text-secondary max-w-2xl leading-relaxed">
            <span className="font-semibold text-primary">{t('skills.infra.title')}: </span>
            {t('skills.infra.description')}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="mt-4 text-text-secondary max-w-2xl leading-relaxed">
            <span className="font-semibold text-primary">{t('skills.learning.title')}: </span>
            {t('skills.learning.description')}
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}

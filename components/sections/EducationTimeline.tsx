'use client';

import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { TimelineItem } from '@/components/common/TimelineItem';
import { ScrollReveal } from '@/components/effects/ScrollReveal';
import { education } from '@/data/education';
import { useLanguage } from '@/hooks/useLanguage';

export function EducationTimeline() {
  const { t } = useLanguage();
  
  return (
    <section id="education" className="py-16 bg-gray-50/50">
      <Container>
        <ScrollReveal>
          <SectionHeading
            title={t('education.title')}
            description={t('education.description')}
            centered
            className="text-center mb-16"
          />
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="space-y-0">
            {education.map((item, index) => (
              <ScrollReveal 
                key={item.id} 
                delay={index * 0.1}
              >
                <TimelineItem
                  item={item}
                  isLast={index === education.length - 1}
                />
              </ScrollReveal>
            ))}
          </div>

          {/* Mensaje adicional */}
        </div>
      </Container>
    </section>
  );
}
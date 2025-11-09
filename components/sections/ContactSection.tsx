'use client';

import { Mail, MapPin } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Button } from '@/components/common/Button';
import { ScrollReveal } from '@/components/effects/ScrollReveal';
import { useLanguage } from '@/hooks/useLanguage';
import { contactInfo } from '@/data/contact';

export function ContactSection() {
  const { t } = useLanguage();
  
  const handleEmail = () => {
    window.open(`mailto:${contactInfo.email}`, '_blank');
  };

  return (
    <section id="contact" className="py-16">
      <Container>
        <ScrollReveal>
          <SectionHeading
            title={t('contact.title')}
            description={t('contact.description')}
            centered
            className="text-center mb-12"
          />
        </ScrollReveal>

        <div className="max-w-2xl mx-auto text-center">
          {/* CTA principal */}
          <ScrollReveal delay={0.2}>
            <div className="mb-8">
              <Button
                onClick={handleEmail}
                variant="secondary"
                size="lg"
                className="text-lg px-10 py-4 font-semibold text-black border border-primary"
              >
                <Mail size={20} className="mr-2" />
                {t('common.sendEmail')}
              </Button>
            </div>
          </ScrollReveal>

          {/* Información de contacto */}
          <ScrollReveal delay={0.4}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg mx-auto">
              <div className="flex items-center justify-center p-4">
                <Mail className="text-secondary mr-3" size={20} />
                <div>
                  <p className="font-semibold text-primary text-sm mb-1">{t('common.email').toUpperCase()}</p>
                  <p className="text-text-secondary text-sm">{contactInfo.email}</p>
                </div>
              </div>

              <div className="flex items-center justify-center p-4">
                <MapPin className="text-secondary mr-3" size={20} />
                <div>
                  <p className="font-semibold text-primary text-sm mb-1">{t('common.location').toUpperCase()}</p>
                  <p className="text-text-secondary text-sm">{contactInfo.location}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
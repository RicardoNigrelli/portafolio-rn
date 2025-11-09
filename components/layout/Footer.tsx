'use client';

import { Container } from '@/components/common/Container';
import { contactInfo } from '@/data/contact';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-white py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Información personal */}
          <div>
            <h3 className="font-display font-bold text-xl mb-4">
              Ricardo Nigrelli
            </h3>
            <p className="text-white/80 mb-4">
              {t('footer.description')}
            </p>
            <p className="text-white/60 text-sm">
              {contactInfo.location}
            </p>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="font-semibold mb-4">{t('common.links')}</h4>
            <div className="space-y-2">
              <a
                href="#projects"
                className="block text-white/80 hover:text-secondary transition-colors"
              >
                Proyectos
              </a>
              <a
                href="#skills"
                className="block text-white/80 hover:text-secondary transition-colors"
              >
                Skills
              </a>
              <a
                href="#education"
                className="block text-white/80 hover:text-secondary transition-colors"
              >
                Educación
              </a>
              <a
                href="#contact"
                className="block text-white/80 hover:text-secondary transition-colors"
              >
                Contacto
              </a>
            </div>
          </div>

          {/* Contacto y redes */}
          <div>
            <h4 className="font-semibold mb-4">Conecta conmigo</h4>
            <div className="space-y-3 mb-4">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center text-white/80 hover:text-secondary transition-colors"
              >
                <Mail size={16} className="mr-2" />
                {contactInfo.email}
              </a>
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-white/80 hover:text-secondary transition-colors"
              >
                <Linkedin size={16} className="mr-2" />
                LinkedIn
              </a>
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-white/80 hover:text-secondary transition-colors"
              >
                <Github size={16} className="mr-2" />
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              © {currentYear} Ricardo Nigrelli. {t('footer.rights')}
            </p>
            <p className="text-white/60 text-sm">
              {t('footer.madeWith')}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
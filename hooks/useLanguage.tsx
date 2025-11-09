'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Traducciones
const translations = {
  es: {
    nav: {
      home: 'Inicio',
      projects: 'Proyectos',
      skills: 'Skills',
      education: 'Educación',
      contact: 'Contacto',
    },
    hero: {
      title: 'Ricardo Nigrelli',
      subtitle: 'Full Stack Developer + UX/UI Designer',
      description: 'En la intersección entre psicología y tecnología, diseño productos digitales pensados para personas reales.',
      cta: {
        projects: 'Ver Proyectos',
        contact: 'Conversemos',
      },
    },
    projects: {
      subtitle: 'Mis Trabajos',
      title: 'Proyectos Destacados',
      description: 'Una selección de proyectos que demuestran mis habilidades en desarrollo frontend, UX/UI design y resolución de problemas.',
      cta: 'Busco proyectos donde la experiencia de usuario y la tecnología se unan para crear algo distinto.',
      interested: '¿Interesado en ver más detalles de algún proyecto?',
      discuss: 'Hablemos sobre tu proyecto →',
      others: 'Otros Proyectos',
      viewWebsite: 'Ver sitio web',
      sections: {
        context: 'Contexto',
        problem: 'El Problema',
        solution: 'La Solución',
        process: 'Proceso de Desarrollo',
        results: 'Resultados & Impacto',
      },
    },
    skills: {
      subtitle: 'Mi Toolkit',
      title: 'Skills & Tecnologías',
      description: 'Herramientas y tecnologías que domino para crear experiencias web completas, desde el diseño hasta el deployment.',
      learning: {
        title: 'En Constante Formación',
        description: 'Actualmente profundizando en IA/Machine Learning, LLMs, Prompt Engineering y las últimas tendencias en desarrollo y UX.',
      },
    },
    education: {
      subtitle: 'Mi Evolución',
      title: 'Educación & Certificaciones',
      description: 'Un recorrido por mi formación académica y profesional, combinando psicología, tecnología y diseño.',
    },
    contact: {
      subtitle: 'Conectemos',
      title: '¿Construimos Algo Juntos?',
      description: 'Cuéntame sobre tu proyecto y trabajemos juntos en su desarrollo.',
      info: 'Información de Contacto',
      email: 'Email',
      phone: 'Teléfono',
      location: 'Ubicación',
      social: 'Sígueme en:',
      prefer: '¿Cómo Prefieres Contactarme?',
      emailTitle: 'Conversemos',
      emailDescription: 'Para consultas formales, propuestas de trabajo o colaboraciones.',
      emailCta: 'Conversemos',
      finalTitle: '¡Construyamos algo increíble juntos!',
      finalDescription: 'Ya sea un proyecto web, una app móvil, consultoría UX o cualquier idea digital que tengas en mente.',
    },
    common: {
      year: 'Año',
      role: 'Mi Rol',
      timeline: 'Duración',
      stack: 'Stack Tecnológico',
      links: 'Enlaces',
      website: 'Sitio web',
      repository: 'Repositorio',
      presentation: 'Presentación',
      back: 'Volver a proyectos',
      viewSite: 'Ver sitio',
      code: 'Código',
      sendEmail: 'Conversemos',
      email: 'EMAIL',
      location: 'UBICACIÓN',
      status: {
        inprogress: 'En curso',
        completed: 'Completado',
      },
    },
    footer: {
      description: 'Full Stack Developer + UX/UI Designer especializado en crear experiencias web intuitivas y dinámicas.',
      rights: 'Todos los derechos reservados.',
      madeWith: 'Diseñado y desarrollado con Next.js + Tailwind CSS',
    },
  },
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      skills: 'Skills',
      education: 'Education',
      contact: 'Contact',
    },
    hero: {
      title: 'Ricardo Nigrelli',
      subtitle: 'Full Stack Developer + UX/UI Designer',
      description: 'At the intersection of psychology and technology, I design digital products for real people.',
      cta: {
        projects: 'View Projects',
        contact: 'Let\'s Talk',
      },
    },
    projects: {
      subtitle: 'My Work',
      title: 'Featured Projects',
      description: 'A selection of projects that showcase my skills in frontend development, UX/UI design and problem-solving.',
      cta: 'I look for projects where user experience and technology come together to create something different.',
      interested: 'Interested in seeing more details about any project?',
      discuss: 'Let\'s talk about your project →',
      others: 'Other Projects',
      viewWebsite: 'View Website',
      sections: {
        context: 'Context',
        problem: 'The Problem',
        solution: 'The Solution',
        process: 'Development Process',
        results: 'Results & Impact',
      },
    },
    skills: {
      subtitle: 'My Toolkit',
      title: 'Skills & Technologies',
      description: 'Tools and technologies I master to create complete web experiences, from design to deployment.',
      learning: {
        title: 'Continuous Learning',
        description: 'Currently diving deep into AI/Machine Learning, LLMs, Prompt Engineering and the latest trends in development and UX.',
      },
    },
    education: {
      subtitle: 'My Evolution',
      title: 'Education & Certifications',
      description: 'A journey through my academic and professional training, combining psychology, technology and design.',
    },
    contact: {
      subtitle: 'Let\'s Connect',
      title: 'Ready to Build Something Together?',
      description: 'Tell me about your project and let\'s work together on its development.',
      info: 'Contact Information',
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      social: 'Follow me:',
      prefer: 'How Do You Prefer to Contact Me?',
      emailTitle: 'Let\'s Talk',
      emailDescription: 'For formal inquiries, work proposals or collaborations.',
      emailCta: 'Write Email',
      finalTitle: 'Let\'s build something amazing together!',
      finalDescription: 'Whether it\'s a web project, mobile app, UX consulting or any digital idea you have in mind.',
    },
    common: {
      year: 'Year',
      role: 'My Role',
      timeline: 'Duration',
      stack: 'Tech Stack',
      links: 'Links',
      website: 'Website',
      repository: 'Repository',
      presentation: 'Presentation',
      back: 'Back to projects',
      viewSite: 'View Site',
      code: 'Code',
      sendEmail: 'Let\'s Talk',
      email: 'EMAIL',
      location: 'LOCATION',
      status: {
        inprogress: 'In Progress',
        completed: 'Completed',
      },
    },
    footer: {
      description: 'Full Stack Developer + UX/UI Designer specialized in creating intuitive and dynamic web experiences.',
      rights: 'All rights reserved.',
      madeWith: 'Designed and developed with Next.js + Tailwind CSS',
    },
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('language') as Language;
      if (savedLanguage && (savedLanguage === 'es' || savedLanguage === 'en')) {
        return savedLanguage;
      }
    }
    return 'es';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: unknown = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && value !== null && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key; // Return key if translation not found
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

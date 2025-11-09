// Interfaces para la educación
export interface EducationItem {
  id: string;
  title: {
    es: string;
    en: string;
  };
  institution: string;
  duration: string;
  status: 'Completado' | 'En curso';
  description?: {
    es: string;
    en: string;
  };
}

export const education: EducationItem[] = [
  {
    id: 'psicologia-uai',
    title: {
      es: 'Licenciatura en Psicología',
      en: 'Bachelor\'s Degree in Psychology'
    },
    institution: 'Universidad Abierta Interamericana (UAI)',
    duration: '2021-2027',
    status: 'En curso',
    description: {
      es: 'Formación en psicología que aporta una perspectiva única al desarrollo UX/UI y comprensión del comportamiento del usuario.',
      en: 'Psychology training that brings a unique perspective to UX/UI development and understanding of user behavior.'
    }
  },
  {
    id: 'ibm-skillsbuild',
    title: {
      es: 'IBM SkillsBuild',
      en: 'IBM SkillsBuild'
    },
    institution: 'IBM',
    duration: 'Sep-Dic 2025',
    status: 'En curso',
    description: {
      es: 'Programa de desarrollo profesional en tecnologías IBM y mejores prácticas de desarrollo.',
      en: 'Professional development program in IBM technologies and development best practices.'
    }
  },
  {
    id: 'ui-avanzado-talento',
    title: {
      es: 'UI Avanzado',
      en: 'Advanced UI'
    },
    institution: 'Talento Tech',
    duration: 'Mar-Jul 2025',
    status: 'Completado',
    description: {
      es: 'Especialización en diseño de interfaces avanzadas y sistemas de design.',
      en: 'Specialization in advanced interface design and design systems.'
    }
  },
  {
    id: 'uxui-design-talento',
    title: {
      es: 'UX/UI Design',
      en: 'UX/UI Design'
    },
    institution: 'Talento Tech',
    duration: 'Sep-Dic 2024',
    status: 'Completado',
    description: {
      es: 'Formación completa en experiencia de usuario y diseño de interfaces.',
      en: 'Complete training in user experience and interface design.'
    }
  },
  {
    id: 'fullstack-henry',
    title: {
      es: 'Full Stack Developer',
      en: 'Full Stack Developer'
    },
    institution: 'Henry',
    duration: 'Mar-Ago 2024',
    status: 'Completado',
    description: {
      es: 'Bootcamp intensivo de desarrollo full stack con JavaScript, React, Node.js y bases de datos.',
      en: 'Intensive full stack development bootcamp with JavaScript, React, Node.js and databases.'
    }
  },
  {
    id: 'english-certificate-ef',
    title: {
      es: 'EF SET English Certificate',
      en: 'EF SET English Certificate'
    },
    institution: 'EF Education First',
    duration: '2024',
    status: 'Completado',
    description: {
      es: 'B2 Upper Intermediate - 57/100. Certificación internacional de inglés.',
      en: 'B2 Upper Intermediate - 57/100. International English certification.'
    }
  }
];
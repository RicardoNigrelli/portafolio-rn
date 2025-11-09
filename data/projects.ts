// Interfaces para los proyectos
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  url?: string;
  github?: string;
  presentation?: string;
  type: 'Event Landing' | 'UX Research' | 'Ecommerce' | 'UI Design';
  year: number;
  stack: string[];
  problem: string;
  solution: string;
  results: string[];
  featured: boolean;
  details?: {
    context: string;
    role: string;
    timeline: string;
    process: string[];
  };
}

export const projects: Project[] = [
  {
    id: 'falsa-boda',
    title: 'Falsa Boda',
    description: 'Desarrollé la web de un evento exclusivo, priorizando la experiencia visual y la facilidad de uso para invitados.',
    image: '/images/falsaboda.png',
    url: 'https://falsaboda.urbanbuenosaires.org/',
    type: 'Event Landing',
    year: 2024,
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    problem: 'Crear una experiencia web elegante para un evento exclusivo que capture la esencia del evento y facilite la gestión de invitaciones.',
    solution: 'Desarrollé una landing page con diseño minimalista y sofisticado, incluyendo sistema de RSVP, galería interactiva y optimización móvil.',
    results: [
      'Diseño responsivo que funciona perfectamente en todos los dispositivos',
      'Sistema de RSVP funcional integrado',
      'Carga rápida y experiencia fluida',
      'Estética elegante que refleja la temática del evento'
    ],
    featured: true,
    details: {
      context: 'Proyecto personal para demostrar habilidades de desarrollo frontend y diseño UX/UI.',
      role: 'Full Stack Developer & UX/UI Designer',
      timeline: '2 semanas',
      process: [
        'Investigación y análisis de referencias',
        'Diseño de wireframes y mockups',
        'Desarrollo frontend con Next.js',
        'Implementación de animaciones',
        'Testing y optimización'
      ]
    }
  },
  {
    id: 'ux-citas-seguras',
    title: 'UX Citas Seguras',
    description: 'Analicé el comportamiento de usuarios y transformé esa información en soluciones digitales para mejorar la seguridad.',
    image: '/images/proyecto-ux.png',
    presentation: 'https://docs.google.com/presentation/d/1por20vgzmDIxu-0HylNDiSlD3v0UgIRO/edit?usp=sharing&ouid=105695743952816245272&rtpof=true&sd=true',
    type: 'UX Research',
    year: 2024,
    stack: ['Figma', 'User Research', 'Prototyping', 'Design Thinking'],
    problem: 'Las aplicaciones de citas actuales no priorizan la seguridad de los usuarios, especialmente de mujeres y grupos vulnerables.',
    solution: 'Realicé investigación de usuarios, análisis competitivo y diseñé soluciones innovadoras para mejorar la seguridad en las citas online.',
    results: [
      'Identificación de 5 problemas principales de seguridad',
      'Propuesta de 3 funcionalidades innovadoras',
      'Prototipo de alta fidelidad validado con usuarios',
      'Roadmap de implementación para desarrolladores'
    ],
    featured: true,
    details: {
      context: 'Proyecto final del curso UX/UI Design en Talento Tech.',
      role: 'UX Researcher & Designer',
      timeline: '6 semanas',
      process: [
        'Investigación de usuarios y entrevistas',
        'Análisis competitivo y benchmarking',
        'Definición de personas y journey maps',
        'Ideación y prototipado',
        'Testing de usabilidad y iteración'
      ]
    }
  },
  {
    id: 'refriviedma',
    title: 'RefriViedma',
    description: 'Sistema completo de catálogo: desde arquitectura de información hasta implementación responsive.',
    image: '/images/refriviedma.png',
    url: 'https://refriviedma.com.ar/',
    type: 'Ecommerce',
    year: 2024,
    stack: ['React', 'JavaScript', 'CSS3', 'Responsive Design'],
    problem: 'Empresa local necesitaba presencia digital para mostrar sus servicios y productos de refrigeración.',
    solution: 'Desarrollé un sitio web profesional con catálogo de productos, galería de trabajos realizados y formularios de contacto.',
    results: [
      'Sitio web profesional y responsive',
      'Catálogo organizado por categorías',
      'Formularios de contacto funcionales',
      'Mejora en la presencia digital de la empresa'
    ],
    featured: false,
    details: {
      context: 'Proyecto real para empresa local de refrigeración.',
      role: 'Frontend Developer & Designer',
      timeline: '3 semanas',
      process: [
        'Reunión con cliente y análisis de requerimientos',
        'Diseño de arquitectura y wireframes',
        'Desarrollo del frontend',
        'Integración de formularios',
        'Deploy y entrega final'
      ]
    }
  },
  {
    id: 'ui-design-project',
    title: 'UI Design Portfolio',
    description: 'Creación de sistemas de diseño escalables: componentes, patrones y metodologías para interfaces modernas.',
    image: '/images/proyecto-ui.png',
    url: 'https://www.figma.com/design/wdTj3Sr9jJchEHiP1HwW69/Proyecto-UI---Ricardo-Nigrelli?node-id=0-1&t=bmpK6egcdPWVxEO6-1',
    type: 'UI Design',
    year: 2025,
    stack: ['Figma', 'Design Systems', 'Component Libraries', 'Prototyping'],
    problem: 'Crear interfaces consistentes y escalables que mejoren la experiencia de usuario y faciliten el desarrollo.',
    solution: 'Desarrollé un sistema de diseño completo con componentes reutilizables, guías de estilo y patrones de interacción.',
    results: [
      'Sistema de diseño escalable y consistente',
      'Biblioteca de componentes reutilizables',
      'Mejoras significativas en usabilidad',
      'Proceso de design optimizado para desarrollo'
    ],
    featured: true,
    details: {
      context: 'Especialización en UI Avanzado en Talento Tech para dominar interfaces modernas.',
      role: 'UI Designer',
      timeline: '4 meses',
      process: [
        'Research de tendencias y mejores prácticas',
        'Creación de design system base',
        'Diseño de componentes avanzados',
        'Testing de usabilidad',
        'Documentación y handoff'
      ]
    }
  }
];
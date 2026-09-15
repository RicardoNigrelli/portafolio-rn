// Interfaces para los proyectos
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  url?: string;
  github?: string;
  presentation?: string;
  type: 'producto' | 'backend' | 'landing' | 'ux' | 'ui';
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
    id: 'urban-proyecta',
    title: 'Urban Proyecta',
    description: 'Sistema de proyección en vivo: un panel de operador controla la pantalla y todo se sincroniza en tiempo real. En uso desde mayo de 2026.',
    image: '/images/projects/urban-proyecta.png',
    url: 'https://urban-proyecta-frontend.vercel.app/dashboard',
    github: 'https://github.com/RicardoNigrelli/live-worship-projection',
    type: 'producto',
    year: 2026,
    stack: ['Next.js 14', 'TypeScript', 'Socket.IO', 'Express', 'Prisma', 'PostgreSQL'],
    problem: 'Proyectar en un servicio en vivo obliga a que quien opera esté sentado en la máquina del proyector, haciendo clic en las diapositivas una por una. Es frágil: una sola máquina, un solo operador, sin control remoto.',
    solution: 'Separé el operador de la pantalla. Un panel controla letras, placas y multimedia desde cualquier dispositivo, y las pantallas conectadas se sincronizan por WebSockets con aislamiento por sala, de modo que dos servicios simultáneos no se pisan.',
    results: [
      'En producción desde mayo de 2026',
      'Lo operan tres personas además de mí',
      'Sincronización en tiempo real entre panel y pantallas',
      'Aislamiento por sala para servicios simultáneos'
    ],
    featured: true,
    details: {
      context: 'Desarrollado por iniciativa propia para la comunidad en la que participo como voluntario.',
      role: 'Full Stack Developer & Arquitectura',
      timeline: 'Desde mayo 2026, en evolución',
      process: [
        'Relevamiento del flujo real de un servicio en vivo',
        'Decisión de arquitectura: separar operador de pantalla',
        'Capa de tiempo real con Socket.IO y salas aisladas',
        'Panel de operador y vistas de proyección',
        'Copia sanitizada con datos sintéticos para portafolio'
      ]
    }
  },
  {
    id: 'facturacion-arca',
    title: 'Facturación electrónica ARCA/AFIP',
    description: 'Backend que emite comprobantes fiscales contra ARCA/AFIP, con colas, idempotencia estricta y trazabilidad hasta el CAE.',
    image: '/images/projects/facturacion-arca.png',
    url: 'https://nestjs-facturacion-electronica-demo.vercel.app/api/docs',
    github: 'https://github.com/RicardoNigrelli/nestjs-facturacion-electronica-demo',
    type: 'backend',
    year: 2026,
    stack: ['NestJS', 'TypeScript', 'BullMQ', 'Redis', 'PostgreSQL', 'Swagger'],
    problem: 'Facturar contra AFIP no es trivial: cada comprobante necesita un CAE que solo emite el organismo, la numeración es secuencial por punto de venta y no admite duplicados ni huecos, el token de autenticación vence cada 12 horas, y si el proceso se cae a mitad de un lote reintentar no puede duplicar facturas.',
    solution: 'Emisión asincrónica con colas y reintentos, idempotencia en dos niveles —constraint único en base de datos más verificación previa contra AFIP— y persistencia de cada request y response para auditoría y reconciliación.',
    results: [
      'Idempotencia estricta: un mismo pedido nunca genera dos comprobantes',
      'Trazabilidad completa de cada operación hasta su CAE',
      'Colas con reintentos y backoff ante fallos del organismo',
      'Demo pública explorable desde Swagger'
    ],
    featured: true,
    details: {
      context: 'Copia de portafolio sanitizada. La demo corre siempre contra un AFIP simulado, forzado por código: nunca se conecta al organismo real.',
      role: 'Backend Developer',
      timeline: 'Junio a agosto 2026',
      process: [
        'Estudio de los servicios WSAA y WSFEv1 de AFIP',
        'Diseño del flujo operación → comprobante → CAE',
        'Idempotencia y manejo de reintentos',
        'Auditoría y reconciliación de cada llamada',
        'Sanitización y publicación con AFIP en modo simulado'
      ]
    }
  },
  {
    id: 'falsa-boda',
    title: 'Falsa Boda',
    description: 'Desarrollé la web de un evento exclusivo, priorizando la experiencia visual y la facilidad de uso para invitados.',
    image: '/images/falsaboda.png',
    url: 'https://falsaboda.urbanbuenosaires.org/',
    type: 'landing',
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
    image: '/images/projects/ux-citas-seguras.jpg',
    presentation: 'https://docs.google.com/presentation/d/1por20vgzmDIxu-0HylNDiSlD3v0UgIRO/edit',
    type: 'ux',
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
    id: 'ui-design-project',
    title: 'UI Design Portfolio',
    description: 'Diseño de TribuXmusic, una app para descubrir recitales y reservar: del reporte UX y los wireframes a mano alzada a las pantallas finales, con pruebas de usabilidad.',
    image: '/images/projects/ui-design-portfolio.png',
    url: 'https://www.figma.com/design/wdTj3Sr9jJchEHiP1HwW69/Proyecto-UI---Ricardo-Nigrelli?node-id=0-1&t=bmpK6egcdPWVxEO6-1',
    type: 'ui',
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
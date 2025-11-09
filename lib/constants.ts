// Constantes globales del proyecto
export const SITE_CONFIG = {
  name: 'Ricardo Nigrelli',
  title: 'Ricardo Nigrelli - Full Stack Developer & UX/UI Designer',
  description: 'Portfolio de Ricardo Nigrelli. Full Stack Developer + UX/UI Designer especializado en experiencias web intuitivas y dinámicas.',
  url: 'https://ricardonigrelli.dev',
  author: 'Ricardo Nigrelli',
  keywords: ['fullstack', 'developer', 'uxui', 'designer', 'next.js', 'react', 'typescript', 'portfolio'],
} as const;

export const NAVIGATION_ITEMS = [
  { label: 'nav.home', href: '#home' },
  { label: 'nav.projects', href: '#projects' },
  { label: 'nav.skills', href: '#skills' },
  { label: 'nav.education', href: '#education' },
  { label: 'nav.contact', href: '#contact' },
] as const;

export const ANIMATION_DURATION = {
  fast: 0.3,
  normal: 0.6,
  slow: 0.8,
} as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;
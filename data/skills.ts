// Interfaces para las habilidades
export interface SkillCategory {
  label: string;
  icon: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    label: 'Frontend',
    icon: '📱',
    items: ['React', 'Next.js', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Figma']
  },
  {
    label: 'Backend',
    icon: '🖥️',
    items: ['Node.js', 'PHP', 'Laravel', 'Express']
  },
  {
    label: 'Databases',
    icon: '🗄️',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Prisma', 'Mongoose']
  },
  {
    label: 'Design',
    icon: '🎨',
    items: ['Figma', 'UX/UI', 'Design Thinking', 'User Research']
  },
  {
    label: 'Soft Skills',
    icon: '🧠',
    items: ['Pensamiento UX', 'Autonomía', 'Comunicación', 'Trabajo en equipo']
  }
];
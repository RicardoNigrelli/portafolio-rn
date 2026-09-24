// Interfaces para las habilidades
export interface SkillCategory {
  label: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    label: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3']
  },
  {
    label: 'Backend',
    items: ['PHP', 'Laravel', 'Node.js', 'Express', 'NestJS', 'Socket.IO', 'REST APIs']
  },
  {
    label: 'Datos',
    items: ['PostgreSQL', 'MySQL', 'Prisma', 'Drizzle ORM']
  },
  {
    label: 'Cloud y datos',
    items: ['Azure Data Factory', 'Azure Functions', 'Power Apps', 'BigQuery', 'Cloud Run', 'Cloud Composer / Airflow', 'Power BI', 'Docker']
  },
  {
    label: 'Diseño',
    items: ['Figma', 'UX/UI', 'Design Thinking', 'User Research']
  }
];

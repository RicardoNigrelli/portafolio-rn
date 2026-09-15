import {
  siReact,
  siNextdotjs,
  siTypescript,
  siJavascript,
  siTailwindcss,
  siHtml5,
  siCss,
  siPhp,
  siLaravel,
  siNodedotjs,
  siExpress,
  siNestjs,
  siSocketdotio,
  siPostgresql,
  siMysql,
  siPrisma,
  siDrizzle,
  siFigma,
} from 'simple-icons';

/**
 * Marcas de simple-icons (CC0-1.0) para las tecnologias del stack.
 *
 * Se renderizan inline y en monocromo, heredando el color del texto: la marca
 * ayuda a encontrar la tecnologia por su forma antes que por la palabra, sin
 * convertirse en un muro de logos a todo color que compita con los proyectos.
 *
 * Las entradas que no son un producto -REST APIs, UX/UI, Design Thinking,
 * User Research- no tienen marca y van solo con texto. Es correcto que se
 * distingan: son practicas, no herramientas.
 *
 * Los logos son marcas registradas de sus titulares; se usan para referirse a
 * la tecnologia, que es el uso nominativo habitual.
 */
const ICONS: Record<string, { path: string; title: string }> = {
  'React': siReact,
  'Next.js': siNextdotjs,
  'TypeScript': siTypescript,
  'JavaScript': siJavascript,
  'Tailwind CSS': siTailwindcss,
  'HTML5': siHtml5,
  'CSS3': siCss,
  'PHP': siPhp,
  'Laravel': siLaravel,
  'Node.js': siNodedotjs,
  'Express': siExpress,
  'NestJS': siNestjs,
  'Socket.IO': siSocketdotio,
  'PostgreSQL': siPostgresql,
  'MySQL': siMysql,
  'Prisma': siPrisma,
  'Drizzle ORM': siDrizzle,
  'Figma': siFigma,
};

export function getSkillIconPath(skill: string): string | null {
  return ICONS[skill]?.path ?? null;
}

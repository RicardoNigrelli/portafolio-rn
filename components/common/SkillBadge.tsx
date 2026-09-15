'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { getSkillIconPath } from '@/lib/skillIcons';

interface SkillBadgeProps {
  skill: string;
  delay?: number;
  className?: string;
}

export function SkillBadge({ skill, delay = 0, className }: SkillBadgeProps) {
  const iconPath = getSkillIconPath(skill);

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        delay,
        ease: 'easeOut'
      }}
      whileHover={{
        scale: 1.08,
        y: -2
      }}
      className={cn(
        'inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-primary text-sm font-semibold rounded-xl border border-secondary/20 cursor-default',
        'hover:bg-secondary/20 hover:border-secondary/40 hover:shadow-md transition-all duration-200',
        className
      )}
    >
      {iconPath && (
        // Monocromo: hereda el color del texto en vez de usar el color de marca,
        // para que la fila lea como una lista y no como un muro de logos.
        // aria-hidden porque el nombre de la tecnologia ya esta en el texto.
        <svg
          role="img"
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="size-4 shrink-0 fill-current opacity-70"
        >
          <path d={iconPath} />
        </svg>
      )}
      {skill}
    </motion.span>
  );
}

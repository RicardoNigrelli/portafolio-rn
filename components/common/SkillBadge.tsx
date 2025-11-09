'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SkillBadgeProps {
  skill: string;
  delay?: number;
  className?: string;
}

export function SkillBadge({ skill, delay = 0, className }: SkillBadgeProps) {
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
        'inline-block px-4 py-2 bg-secondary/10 text-primary text-sm font-semibold rounded-xl border border-secondary/20 cursor-default',
        'hover:bg-secondary/20 hover:border-secondary/40 hover:shadow-md transition-all duration-200',
        className
      )}
    >
      {skill}
    </motion.span>
  );
}
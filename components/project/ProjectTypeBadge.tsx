'use client';

import { Project } from '@/data/projects';
import { useLanguage } from '@/hooks/useLanguage';

export function ProjectTypeBadge({ type }: { type: Project['type'] }) {
  const { t } = useLanguage();
  return (
    <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
      {t(`common.type.${type}`)}
    </span>
  );
}

/** Variante sin pastilla, para la grilla de "Otros proyectos". */
export function ProjectTypeBadgeText({ type }: { type: Project['type'] }) {
  const { t } = useLanguage();
  return (
    <p className="text-xs font-medium uppercase tracking-wide text-text-secondary mb-1">
      {t(`common.type.${type}`)}
    </p>
  );
}

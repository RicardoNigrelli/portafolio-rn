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

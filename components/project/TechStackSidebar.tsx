'use client';

import { SkillBadge } from '@/components/common/SkillBadge';
import { Project } from '@/data/projects';
import { useLanguage } from '@/hooks/useLanguage';

interface TechStackSidebarProps {
  project: Project;
}

export function TechStackSidebar({ project }: TechStackSidebarProps) {
  const { t } = useLanguage();

  return (
    <div className="bg-white p-6 rounded-xl border border-border">
      <h3 className="font-display font-semibold text-lg text-primary mb-4">
        {t('common.stack')}
      </h3>
      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech, index) => (
          <SkillBadge key={tech} skill={tech} delay={index * 0.05} />
        ))}
      </div>
    </div>
  );
}
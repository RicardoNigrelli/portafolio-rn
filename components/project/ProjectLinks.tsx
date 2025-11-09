'use client';

import { ExternalLink, Github } from 'lucide-react';
import { Project } from '@/data/projects';
import { useLanguage } from '@/hooks/useLanguage';

interface ProjectLinksProps {
  project: Project;
}

export function ProjectLinks({ project }: ProjectLinksProps) {
  const { t } = useLanguage();

  return (
    <div className="bg-white p-6 rounded-xl border border-border">
      <h3 className="font-display font-semibold text-lg text-primary mb-4">
        {t('common.links')}
      </h3>
      <div className="space-y-3">
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors"
          >
            <ExternalLink size={16} />
            {t('common.website')}
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors"
          >
            <Github size={16} />
            {t('common.repository')}
          </a>
        )}
        {project.presentation && (
          <a
            href={project.presentation}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors"
          >
            <ExternalLink size={16} />
            {t('common.presentation')}
          </a>
        )}
      </div>
    </div>
  );
}
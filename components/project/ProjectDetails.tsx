'use client';

import { Calendar, User, Target } from 'lucide-react';
import { Project } from '@/data/projects';
import { useLanguage } from '@/hooks/useLanguage';

interface ProjectDetailsProps {
  project: Project;
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  const { t } = useLanguage();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
      {/* Timeline */}
      <div className="bg-white p-6 rounded-xl border border-border">
        <div className="flex items-center mb-3">
          <Calendar className="text-secondary mr-3" size={20} />
          <h3 className="font-semibold text-primary">{t('common.timeline')}</h3>
        </div>
        <p className="text-text-secondary">{project.details?.timeline}</p>
      </div>
      
      {/* Mi rol */}
      <div className="bg-white p-6 rounded-xl border border-border">
        <div className="flex items-center mb-3">
          <User className="text-secondary mr-3" size={20} />
          <h3 className="font-semibold text-primary">{t('common.role')}</h3>
        </div>
        <p className="text-text-secondary">{project.details?.role}</p>
      </div>

      {/* Año */}
      <div className="bg-white p-6 rounded-xl border border-border">
        <div className="flex items-center mb-3">
          <Target className="text-secondary mr-3" size={20} />
          <h3 className="font-semibold text-primary">{t('common.year')}</h3>
        </div>
        <p className="text-text-secondary">{project.year}</p>
      </div>
    </div>
  );
}
'use client';

import { CheckCircle } from 'lucide-react';
import { Project } from '@/data/projects';
import { useLanguage } from '@/hooks/useLanguage';

interface ProjectContentProps {
  project: Project;
}

export function ProjectContent({ project }: ProjectContentProps) {
  const { t } = useLanguage();

  return (
    <div className="lg:col-span-2 space-y-12">
      {/* Contexto */}
      {project.details?.context && (
        <section>
          <h2 className="text-h2-mobile lg:text-h2-desktop font-display font-bold text-primary mb-6">
            {t('projects.sections.context')}
          </h2>
          <p className="text-text-secondary leading-relaxed">
            {project.details.context}
          </p>
        </section>
      )}
      
      {/* Problema */}
      <section>
        <h2 className="text-h2-mobile lg:text-h2-desktop font-display font-bold text-primary mb-6">
          {t('projects.sections.problem')}
        </h2>
        <p className="text-text-secondary leading-relaxed">
          {project.problem}
        </p>
      </section>
      
      {/* Solución */}
      <section>
        <h2 className="text-h2-mobile lg:text-h2-desktop font-display font-bold text-primary mb-6">
          {t('projects.sections.solution')}
        </h2>
        <p className="text-text-secondary leading-relaxed">
          {project.solution}
        </p>
      </section>
      
      {/* Proceso */}
      {project.details?.process && (
        <section>
          <h2 className="text-h2-mobile lg:text-h2-desktop font-display font-bold text-primary mb-6">
            {t('projects.sections.process')}
          </h2>
          <div className="space-y-4">
            {project.details.process.map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="shrink-0 w-8 h-8 bg-secondary/20 text-secondary rounded-full flex items-center justify-center text-sm font-semibold mr-4 mt-1">
                  {index + 1}
                </div>
                <p className="text-text-secondary">{step}</p>
              </div>
            ))}
          </div>
        </section>
      )}
      
      {/* Resultados */}
      <section>
        <h2 className="text-h2-mobile lg:text-h2-desktop font-display font-bold text-primary mb-6">
          {t('projects.sections.results')}
        </h2>
        <div className="space-y-3">
          {project.results.map((result, index) => (
            <div key={index} className="flex items-start">
              <CheckCircle className="text-secondary shrink-0 mr-3 mt-1" size={20} />
              <p className="text-text-secondary">{result}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
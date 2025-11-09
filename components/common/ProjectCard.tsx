'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '@/data/projects';
import { Button } from './Button';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/hooks/useLanguage';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const { t } = useLanguage();
  return (
    <motion.div
      className={cn(
        'bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300 border border-border min-h-[420px] flex flex-col',
        className
      )}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {/* Imagen del proyecto */}
      <div className="relative h-48 sm:h-52 overflow-hidden shrink-0">
        <motion.div
          className="relative w-full h-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 95vw, (max-width: 768px) 85vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>
        
        {/* Badge del tipo de proyecto */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1.5 bg-primary/90 text-white text-xs font-semibold rounded-full">
            {project.type}
          </span>
        </div>
      </div>

      {/* Contenido */}
      <div className="p-5 space-y-3 flex-1 flex flex-col text-center">
        <div className="space-y-2 flex-1">
          <h3 className="text-xl lg:text-2xl font-display font-bold text-primary mb-3 leading-tight">
            {project.title}
          </h3>
          <p className="text-text-secondary leading-relaxed text-sm line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Stack de tecnologías */}
        <div className="flex flex-wrap gap-1.5 pt-1 justify-center">
          {project.stack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 bg-secondary/10 text-primary text-xs font-medium rounded-md"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 3 && (
            <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs font-medium rounded-md">
              +{project.stack.length - 3}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-2 pt-2 mt-auto justify-center">
          {project.url && (
            <Button
              variant="outline"
              size="sm"
              href={project.url}
              className="text-xs"
            >
              <ExternalLink size={14} className="mr-1" />
              {t('common.viewSite')}
            </Button>
          )}
          {project.github && (
            <Button
              variant="ghost"
              size="sm"
              href={project.github}
              className="text-xs"
            >
              <Github size={14} className="mr-1" />
              {t('common.code')}
            </Button>
          )}
          {project.presentation && (
            <Button
              variant="ghost"
              size="sm"
              href={project.presentation}
              className="text-xs border border-primary"
            >
              <ExternalLink size={14} className="mr-1" />
              {t('common.presentation')}
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
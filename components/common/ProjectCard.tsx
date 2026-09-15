'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
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
      {/* 16:9, no alto fijo: con h-48 el contenedor quedaba en 2.67:1 y recortaba
          un tercio de la miniatura, comiendose titulos y cabeceras. */}
      <div className="relative aspect-video overflow-hidden shrink-0">
        <motion.div
          className="relative w-full h-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Link href={`/projects/${project.id}`} aria-label={project.title} className="absolute inset-0 block">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 95vw, (max-width: 768px) 85vw, (max-width: 1200px) 50vw, 33vw"
          />
          </Link>
        </motion.div>
        
        {/* Badge del tipo de proyecto */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1.5 bg-primary/90 text-white text-xs font-semibold rounded-full">
            {t(`common.type.${project.type}`)}
          </span>
        </div>
      </div>

      {/* Contenido */}
      <div className="p-5 space-y-3 flex-1 flex flex-col">
        <div className="space-y-2 flex-1">
          <h3 className="text-xl lg:text-2xl font-display font-bold text-primary mb-3 leading-tight">
            <Link href={`/projects/${project.id}`} className="hover:underline underline-offset-4">
              {project.title}
            </Link>
          </h3>
          <p className="text-text-secondary leading-relaxed text-sm line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Stack de tecnologías */}
        <div className="flex flex-wrap gap-1.5 pt-1">
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
        <div className="flex flex-wrap gap-2 pt-2 mt-auto items-center">
          <Button
            variant="primary"
            size="sm"
            href={`/projects/${project.id}`}
            className="text-xs"
          >
            {t('common.viewCase')}
            <ArrowRight size={14} className="ml-1" />
          </Button>
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
              variant="outline"
              size="sm"
              href={project.presentation}
              className="text-xs"
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
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { ProjectLinks } from '@/components/project/ProjectLinks';
import { ProjectTypeBadge, ProjectTypeBadgeText } from '@/components/project/ProjectTypeBadge';
import { ProjectDetails } from '@/components/project/ProjectDetails';
import { TechStackSidebar } from '@/components/project/TechStackSidebar';
import { ProjectContent } from '@/components/project/ProjectContent';
import { BackToProjects } from '@/components/project/BackToProjects';
import { ViewWebsiteButton } from '@/components/project/ViewWebsiteButton';
import { OtherProjectsHeading } from '@/components/project/OtherProjectsHeading';
import { projects } from '@/data/projects';

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

// Generar metadata dinámico
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find(p => p.id === id);

  if (!project) {
    return {
      title: 'Proyecto no encontrado',
    };
  }
  
  return {
    title: `${project.title} - Ricardo Nigrelli`,
    description: project.description,
    openGraph: {
      title: `${project.title} - Ricardo Nigrelli`,
      description: project.description,
      images: [project.image],
    },
  };
}

// Generar rutas estáticas
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find(p => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-20">
      <Container>
        {/* Header con botón de regreso */}
        <div className="mb-8">
          <BackToProjects />
        </div>

        {/* Hero del proyecto */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="mb-4">
                <ProjectTypeBadge type={project.type} />
              </div>
              
              <h1 className="text-h1-mobile lg:text-h1-desktop font-display font-bold text-primary mb-4">
                {project.title}
              </h1>
              
              <p className="text-lg text-text-secondary mb-8">
                {project.description}
              </p>
              
              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                {project.url && (
                  <ViewWebsiteButton url={project.url} label={project.urlLabel} />
                )}
                
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary rounded-lg font-medium transition-colors hover:bg-primary hover:text-white"
                  >
                    <Github size={20} className="mr-2" />
                    Ver código
                  </a>
                )}
                
                {project.presentation && (
                  <a
                    href={project.presentation}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 text-primary rounded-lg font-medium transition-colors hover:bg-primary/10"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Ver presentación
                  </a>
                )}
              </div>
            </div>
            
            {/* Imagen del proyecto */}
            <div className="relative w-full max-w-2xl mx-auto lg:max-w-none">
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-card">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 80vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Información del proyecto */}
        {project.details && (
          <ProjectDetails project={project} />
        )}

        {/* Contenido principal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Contenido principal */}
          <ProjectContent project={project} />
          
          {/* Sidebar */}
          <div className="space-y-8">
            {/* Stack tecnológico */}
            <TechStackSidebar project={project} />
            
            {/* Links útiles */}
            <ProjectLinks project={project} />
          </div>
        </div>
        
        {/* Navegación a otros proyectos */}
        <div className="border-t border-border pt-12 pb-20">
          <OtherProjectsHeading />
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {projects
              .filter(p => p.id !== project.id)
              .map((otherProject) => (
                <Link
                  key={otherProject.id}
                  href={`/projects/${otherProject.id}`}
                  className="group block"
                >
                  {/* La miniatura va en 16:9 como en las tarjetas del home: un
                      recorte cuadrado de 64px sobre una captura de pantalla
                      completa no se entendia. */}
                  <div className="relative aspect-video rounded-lg overflow-hidden border border-border mb-3">
                    <Image
                      src={otherProject.image}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 45vw, (max-width: 1024px) 45vw, 22vw"
                    />
                  </div>
                  <ProjectTypeBadgeText type={otherProject.type} />
                  <h4 className="font-semibold text-primary leading-snug group-hover:text-secondary-ink transition-colors">
                    {otherProject.title}
                  </h4>
                </Link>
              ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
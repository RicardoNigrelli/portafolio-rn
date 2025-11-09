import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { ProjectLinks } from '@/components/project/ProjectLinks';
import { ProjectDetails } from '@/components/project/ProjectDetails';
import { TechStackSidebar } from '@/components/project/TechStackSidebar';
import { ProjectContent } from '@/components/project/ProjectContent';
import { BackToProjects } from '@/components/project/BackToProjects';
import { ViewWebsiteButton } from '@/components/project/ViewWebsiteButton';
import { OtherProjectsHeading } from '@/components/project/OtherProjectsHeading';
import { projects } from '@/data/projects';

interface ProjectPageProps {
  params: {
    id: string;
  };
}

// Generar metadata dinámico
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projects.find(p => p.id === params.id);
  
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

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find(p => p.id === params.id);
  
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {project.type}
                </span>
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
                  <ViewWebsiteButton url={project.url} />
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
            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden shadow-card">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
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
        <div className="border-t border-border pt-12">
          <OtherProjectsHeading />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects
              .filter(p => p.id !== project.id)
              .slice(0, 2)
              .map((otherProject) => (
                <Link
                  key={otherProject.id}
                  href={`/projects/${otherProject.id}`}
                  className="group bg-white p-6 rounded-xl border border-border hover:shadow-md transition-all"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 relative rounded-lg overflow-hidden mr-4">
                      <Image
                        src={otherProject.image}
                        alt={otherProject.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary group-hover:text-secondary transition-colors">
                        {otherProject.title}
                      </h4>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
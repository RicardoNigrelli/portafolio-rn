'use client';

import { ExternalLink } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

interface ViewWebsiteButtonProps {
  url: string;
}

export function ViewWebsiteButton({ url }: ViewWebsiteButtonProps) {
  const { t } = useLanguage();

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-8 py-3 bg-secondary text-black font-semibold rounded-xl hover:bg-secondary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
    >
      <ExternalLink size={18} className="mr-2" />
      {t('projects.viewWebsite')}
    </a>
  );
}
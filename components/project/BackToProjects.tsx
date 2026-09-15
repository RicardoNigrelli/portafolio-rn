'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

export function BackToProjects() {
  const { t } = useLanguage();

  return (
    <Link 
      href="/#projects" 
      className="inline-flex items-center text-secondary-ink font-medium hover:text-secondary-ink/80 transition-colors mb-8"
    >
      <ArrowLeft size={16} className="mr-2" />
      {t('common.back')}
    </Link>
  );
}
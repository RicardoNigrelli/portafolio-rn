'use client';

import { useLanguage } from '@/hooks/useLanguage';

export function OtherProjectsHeading() {
  const { t } = useLanguage();

  return (
    <h3 className="font-display font-semibold text-xl text-primary mb-8 text-center">
      {t('projects.others')}
    </h3>
  );
}
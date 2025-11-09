'use client';

import { motion } from 'framer-motion';
import { EducationItem } from '@/data/education';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/hooks/useLanguage';

interface TimelineItemProps {
  item: EducationItem;
  isLast?: boolean;
  delay?: number;
}

export function TimelineItem({ item, isLast = false, delay = 0 }: TimelineItemProps) {
  const { t, language } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      className="relative"
    >
      {/* Línea de timeline */}
      {!isLast && (
        <div className="absolute left-4 top-8 w-0.5 h-full bg-border" />
      )}
      
      {/* Punto del timeline */}
      <div className={cn(
        'absolute left-2 top-2 w-4 h-4 rounded-full border-2',
        item.status === 'En curso' 
          ? 'bg-secondary border-secondary' 
          : 'bg-white border-primary'
      )} />
      
      {/* Contenido */}
      <div className="ml-10 pb-8">
        <div className="bg-white p-6 lg:p-8 rounded-2xl border border-border shadow-sm hover:shadow-lg hover:border-secondary/20 transition-all duration-300">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="font-display font-bold text-xl lg:text-2xl text-primary mb-2">
                {typeof item.title === 'string' ? item.title : item.title[language]}
              </h3>
              <p className="text-secondary font-semibold text-lg">
                {item.institution}
              </p>
            </div>
            <span className={cn(
              'px-3 py-1.5 rounded-xl text-xs font-semibold shadow-sm',
              item.status === 'En curso'
                ? 'bg-secondary/10 text-secondary border border-secondary/20'
                : 'bg-primary/10 text-primary border border-primary/20'
            )}>
              {item.status === 'En curso' ? t('common.status.inprogress') : t('common.status.completed')}
            </span>
          </div>
          
          <p className="text-sm text-text-secondary/80 mb-4 font-medium">
            {item.duration}
          </p>
          
          {item.description && (
            <p className="text-text-secondary leading-relaxed font-medium">
              {typeof item.description === 'string' ? item.description : item.description[language]}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeading({ 
  title, 
  subtitle, 
  description, 
  className,
  centered = false 
}: SectionHeadingProps) {
  return (
    <div className={cn(
      'space-y-4',
      centered && 'text-center',
      className
    )}>
      {subtitle && (
        <p className="text-xs font-bold text-secondary tracking-[0.2em] uppercase mb-3">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-primary leading-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className={cn(
          "text-lg sm:text-xl text-text-secondary max-w-3xl leading-relaxed font-medium",
          centered ? "text-center mx-auto" : ""
        )}>
          {description}
        </p>
      )}
    </div>
  );
}
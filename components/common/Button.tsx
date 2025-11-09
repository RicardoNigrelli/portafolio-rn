'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ANIMATION_DURATION } from '@/lib/constants';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const variants = {
  primary: 'bg-primary text-white hover:bg-black hover:text-white',
  secondary: 'bg-secondary text-primary hover:bg-black hover:text-white',
  outline: 'border-2 border-primary text-primary hover:bg-black hover:text-white hover:border-black',
  ghost: 'text-primary hover:bg-black hover:text-white'
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg'
};

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className,
  href,
  onClick,
  disabled = false,
  type = 'button'
}: ButtonProps) {
  const baseClasses = cn(
    'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer',
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: ANIMATION_DURATION.fast }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: ANIMATION_DURATION.fast }}
    >
      {children}
    </motion.button>
  );
}
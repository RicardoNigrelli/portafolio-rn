'use client';

import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface UseScrollRevealOptions {
  threshold?: number;
  triggerOnce?: boolean;
}

export function useScrollReveal(options: UseScrollRevealOptions = {}) {
  const ref = useRef(null);
  const {
    threshold = 0.1,
    triggerOnce = true
  } = options;

  const isInView = useInView(ref, {
    once: triggerOnce,
    amount: threshold
  });

  return { ref, isInView };
}
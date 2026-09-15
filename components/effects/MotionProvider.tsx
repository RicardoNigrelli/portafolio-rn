'use client';

import { MotionConfig } from 'framer-motion';

/**
 * Respeta `prefers-reduced-motion` del sistema en todas las animaciones de
 * framer-motion (WCAG 2.3.3). Con `reducedMotion="user"`, framer descarta las
 * animaciones de transform y layout cuando el usuario pide movimiento reducido,
 * y conserva las de opacidad, que no disparan malestar vestibular.
 *
 * Va en la raiz porque las animaciones estan repartidas en nueve componentes:
 * aca se resuelve una vez en lugar de parchear cada uno.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

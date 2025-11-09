'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { NAVIGATION_ITEMS } from '@/lib/constants';
import { useIsMobile } from '@/hooks/useMediaQuery';
import { useLanguage } from '@/hooks/useLanguage';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const { language, setLanguage, t } = useLanguage();

  const handleLinkClick = (href: string) => {
    setIsMenuOpen(false);
    
    // Smooth scroll a la sección
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <motion.header
      className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="font-display font-bold text-xl text-primary"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <button
              onClick={() => handleLinkClick('#home')}
              className="focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-md px-1"
            >
              Ricardo Nigrelli
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="flex items-center space-x-6">
              <nav className="hidden md:flex space-x-8">
                {NAVIGATION_ITEMS.map((item, index) => (
                  <motion.button
                    key={item.href}
                    onClick={() => handleLinkClick(item.href)}
                    className="text-text-primary hover:text-secondary transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-md px-2 py-1"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    {t(item.label)}
                  </motion.button>
                ))}
              </nav>
              
              {/* Language Toggle */}
              <motion.button
                onClick={toggleLanguage}
                className="flex items-center space-x-1 px-3 py-1.5 text-sm font-medium text-text-primary hover:text-secondary border border-border hover:border-secondary/30 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Globe size={16} />
                <span>{language.toUpperCase()}</span>
              </motion.button>
            </div>
          )}

          {/* Mobile Menu Button and Language Toggle */}
          {isMobile && (
            <div className="flex items-center space-x-2">
              {/* Mobile Language Toggle */}
              <motion.button
                onClick={toggleLanguage}
                className="flex items-center space-x-1 px-2 py-1 text-sm font-medium text-text-primary hover:text-secondary border border-border hover:border-secondary/30 rounded-md transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Globe size={14} />
                <span className="text-xs">{language.toUpperCase()}</span>
              </motion.button>
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          )}
        </div>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-border"
          >
            <Container>
              <nav className="py-4 space-y-2">
                {NAVIGATION_ITEMS.map((item, index) => (
                  <motion.button
                    key={item.href}
                    onClick={() => handleLinkClick(item.href)}
                    className="block w-full text-left px-4 py-3 text-text-primary hover:bg-primary/10 hover:text-secondary transition-colors rounded-lg font-medium"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    {t(item.label)}
                  </motion.button>
                ))}
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
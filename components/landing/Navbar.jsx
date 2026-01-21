"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Network, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { createPageUrl } from '@/utils';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { label: 'Quem Somos', href: '/#sobre' },
  { label: 'Serviços', href: '/#servicos' },
  { label: 'Portfólio', href: '/#portfolio' },
  { label: 'Nosso Time', href: '/nossotime', isPage: true },
  { label: 'Processo de Trabalho', href: '/processotrabalho', isPage: true },
  { label: 'Processo Seletivo', href: '/processoseletivo', isPage: true },
  { label: 'Contato', href: '/#contato' }
];

export default function Navbar({ isDark, onThemeToggle }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? isDark 
              ? 'bg-gray-900/95 backdrop-blur-md shadow-sm' 
              : 'bg-white/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <a 
              href="#hero"
              onClick={(e) => { e.preventDefault(); scrollToSection('#hero'); }}
              className="flex items-center"
            >
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/696a4037491fb9026d847ef2/9e6e2a6fe_CopyofLogoFronteiraTECverticalfundotransparente13.png" 
                alt="FronteiraTec" 
                className="h-14 object-contain"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-[#1B5E20] ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
              <Link href="/#contato">
                <Button
                  className="bg-[#EF6C00] hover:bg-[#E65100] text-white rounded-full px-6 shadow-lg shadow-orange-500/20"
                >
                  Fale Conosco
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-xl transition-colors ${
                  isDark ? 'hover:bg-white/10' : 'hover:bg-gray-100'
                }`}
              >
                {isMobileMenuOpen ? (
                  <X className={`w-6 h-6 ${isDark ? 'text-white' : 'text-gray-900'}`} />
                ) : (
                  <Menu className={`w-6 h-6 ${isDark ? 'text-white' : 'text-gray-900'}`} />
                )}
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className={`fixed inset-0 z-40 pt-24 md:hidden ${isDark ? 'bg-gray-900' : 'bg-white'}`}
          >
            <div className="px-6 py-8 space-y-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={`block text-2xl font-medium hover:text-[#1B5E20] transition-colors ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link href="/#contato" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button
                    className="w-full h-14 bg-[#EF6C00] hover:bg-[#E65100] text-white text-lg rounded-full mt-4"
                  >
                    Fale Conosco
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
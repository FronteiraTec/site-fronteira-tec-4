"use client"

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/landing/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import AboutSection from '@/components/landing/AboutSection';
import ServicesSection from '@/components/landing/ServicesSection';
import PortfolioSection from '@/components/landing/PortfolioSection';
import ContactSection from '@/components/landing/ContactSection';
import Footer from '@/components/landing/Footer';

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('theme');
    const darkMode = saved === 'dark';
    setIsDark(darkMode);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }
  }, [isDark, mounted]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div suppressHydrationWarning className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <Navbar isDark={isDark} onThemeToggle={toggleTheme} />
      <main>
        <HeroSection isDark={isDark} />
        <AboutSection isDark={isDark} />
        <ServicesSection isDark={isDark} />
        <PortfolioSection isDark={isDark} />
        <ContactSection isDark={isDark} />
      </main>
      <Footer isDark={isDark} />
    </div>
  );
}
"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/landing/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import AboutSection from '@/components/landing/AboutSection';
import ServicesSection from '@/components/landing/ServicesSection';
import PortfolioSection from '@/components/landing/PortfolioSection';
import ContactSection from '@/components/landing/ContactSection';
import Footer from '@/components/landing/Footer';
import SEOHead from '@/components/SEOHead';
import SitemapGenerator from '@/components/SitemapGenerator';

export default function Home() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      return saved === 'dark';
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <SEOHead />
      <SitemapGenerator />
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
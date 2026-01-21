"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { 
  FileText, 
  ClipboardList, 
  Users, 
  Sparkles,
  ExternalLink,
  CheckCircle2,
  Circle,
  Clock,
  Rocket,
  Target,
  Trophy,
  Heart,
  Lightbulb,
  Code,
  Briefcase
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import SEOHead from '@/components/SEOHead';
import { 
  timelineData as timelineConfig, 
  benefits as benefitsConfig, 
  inscricaoLink 
} from '@/components/config/processoSeletivoConfig';

const iconMap = {
  FileText,
  Clock,
  Target,
  Users,
  Code,
  CheckCircle2,
  Trophy,
  Rocket,
  Lightbulb,
  Heart,
  Briefcase
};

// Mapeia os dados do config com os ícones reais
const timelineData = timelineConfig.map(item => ({
  ...item,
  icon: iconMap[item.iconName] || FileText
}));

const benefits = benefitsConfig.map(item => ({
  ...item,
  icon: iconMap[item.iconName] || Rocket
}));

function TimelineCard({ item, index, isLast }) {
  const Icon = item.icon;
  const isCompleted = item.status === 'completed';
  const isCurrent = item.status === 'current';

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex items-start gap-6"
    >
      {/* Timeline Line and Dot */}
      <div className="flex flex-col items-center">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 ${
          isCompleted 
            ? 'bg-gradient-to-br from-[#1B5E20] to-green-500 text-white' 
            : isCurrent 
              ? 'bg-gradient-to-br from-[#EF6C00] to-orange-400 text-white animate-pulse' 
              : 'bg-gray-200 text-gray-400'
        }`}>
          <Icon className="w-6 h-6" />
        </div>
        {!isLast && (
          <div className={`w-1 h-20 mt-2 rounded-full transition-all duration-300 ${
            isCompleted ? 'bg-gradient-to-b from-[#1B5E20] to-green-400' : 'bg-gray-200'
          }`} />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        <span className={`text-sm font-semibold ${
          isCompleted ? 'text-[#1B5E20]' : isCurrent ? 'text-[#EF6C00]' : 'text-gray-400'
        }`}>
          {item.date}
        </span>
        <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2">{item.title}</h3>
        <p className="text-gray-600 leading-relaxed">{item.description}</p>
        {isCurrent && (
          <span className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-[#EF6C00]/10 text-[#EF6C00] rounded-full text-sm font-semibold">
            <span className="w-2 h-2 bg-[#EF6C00] rounded-full animate-pulse" />
            Etapa Atual
          </span>
        )}
      </div>
    </motion.div>
  );
}

function BenefitCard({ benefit, index, isDark }) {
  const Icon = benefit.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`p-6 rounded-2xl transition-all duration-300 hover:shadow-xl group ${
        isDark ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:shadow-green-100'
      }`}
    >
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 ${
        isDark ? 'bg-[#1B5E20]/20' : 'bg-[#1B5E20]/10'
      }`}>
        <Icon className={`w-7 h-7 ${isDark ? 'text-green-400' : 'text-[#1B5E20]'}`} />
      </div>
      <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        {benefit.title}
      </h3>
      <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
        {benefit.description}
      </p>
    </motion.div>
  );
}

export default function ProcessoSeletivo() {
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
      <SEOHead 
        title="Processo Seletivo | FronteiraTec"
        description="Participe do processo seletivo da FronteiraTec! Venha fazer parte da nossa equipe e desenvolva suas habilidades em projetos reais."
        keywords="processo seletivo, empresa júnior, vagas, fronteiratec, estágio, oportunidade"
      />
      <Navbar isDark={isDark} onThemeToggle={toggleTheme} />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className={`relative py-20 md:py-28 overflow-hidden ${
          isDark 
            ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
            : 'bg-gradient-to-br from-white via-green-50/30 to-orange-50/20'
        }`}>
          {/* Smoke Effects */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{
                x: [0, 30, -20, 0],
                y: [0, -20, 10, 0],
                scale: [1, 1.2, 0.9, 1],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              className={`absolute top-10 right-[10%] w-[400px] h-[400px] rounded-full blur-[100px] ${isDark ? 'bg-[#1B5E20]/20' : 'bg-[#1B5E20]/10'}`}
            />
            <motion.div
              animate={{
                x: [0, -30, 20, 0],
                y: [0, 30, -20, 0],
                scale: [1, 0.9, 1.2, 1],
              }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className={`absolute bottom-10 left-[10%] w-[350px] h-[350px] rounded-full blur-[100px] ${isDark ? 'bg-[#EF6C00]/20' : 'bg-[#EF6C00]/10'}`}
            />
          </div>

          <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#EF6C00]/20 to-[#1B5E20]/20 text-[#EF6C00] text-sm font-bold mb-8"
              >
                <Sparkles className="w-4 h-4" />
                Processo Seletivo 2024.2
                <span className="w-2 h-2 bg-[#EF6C00] rounded-full animate-pulse" />
              </motion.div>
              
              <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Faça parte da{' '}
                <span className={`bg-gradient-to-r ${isDark ? 'from-green-400 to-emerald-300' : 'from-[#1B5E20] to-green-600'} bg-clip-text text-transparent`}>
                  FronteiraTec
                </span>
              </h1>
              
              <p className={`text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Está interessado em fazer parte de uma Empresa Júnior? Não precisa ser desenvolvedor! 
                Inscreva-se e concorra a uma vaga de acordo com seu perfil.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#EF6C00] to-orange-500 hover:from-[#E65100] hover:to-orange-600 text-white text-lg font-bold rounded-full shadow-xl shadow-orange-500/30 transition-all"
                >
                  <FileText className="w-5 h-5" />
                  Inscreva-se Agora
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
                
                <motion.a
                  href="#timeline"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`inline-flex items-center justify-center gap-3 px-8 py-4 border-2 text-lg font-bold rounded-full transition-all ${
                    isDark 
                      ? 'border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900' 
                      : 'border-[#1B5E20] text-[#1B5E20] hover:bg-[#1B5E20] hover:text-white'
                  }`}
                >
                  <ClipboardList className="w-5 h-5" />
                  Ver Etapas
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className={`py-20 transition-colors duration-500 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-[#EF6C00] font-semibold text-sm tracking-wider uppercase">
                Por que participar?
              </span>
              <h2 className={`text-3xl md:text-4xl font-bold mt-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                O que você vai ganhar
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <BenefitCard key={benefit.title} benefit={benefit} index={index} isDark={isDark} />
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section id="timeline" className={`py-20 transition-colors duration-500 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-[#EF6C00] font-semibold text-sm tracking-wider uppercase">
                Cronograma
              </span>
              <h2 className={`text-3xl md:text-5xl font-bold mt-4 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Roadmap <span className={isDark ? 'text-green-400' : 'text-[#1B5E20]'}>2024.2</span>
              </h2>
              <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Acompanhe todas as etapas do processo seletivo
              </p>
            </motion.div>

            <div className="space-y-2">
              {timelineData.map((item, index) => (
                <TimelineCard 
                  key={index} 
                  item={item} 
                  index={index}
                  isLast={index === timelineData.length - 1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#1B5E20] via-green-700 to-[#1B5E20]">
          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#EF6C00]/20 rounded-full blur-3xl" />
          </div>

          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block mb-6"
              >
                <Users className="w-20 h-20 text-white/90" />
              </motion.div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Venha fazer parte do nosso time!
              </h2>
              <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                Junte-se a nós e desenvolva suas habilidades em um ambiente colaborativo, 
                inovador e cheio de oportunidades de crescimento.
              </p>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#EF6C00] to-orange-500 hover:from-[#E65100] hover:to-orange-600 text-white text-xl font-bold rounded-full shadow-2xl shadow-orange-500/40 transition-all"
              >
                <Sparkles className="w-6 h-6" />
                Inscreva-se Agora
                <ExternalLink className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer isDark={isDark} />
    </div>
  );
}
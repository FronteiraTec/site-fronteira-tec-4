"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Users, History, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import SEOHead from '@/components/SEOHead';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { membrosAtuais, exMembros } from '@/components/config/timeConfig';

function MemberCard({ membro, isDark, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 ${
        isDark ? 'bg-gray-800' : 'bg-white'
      }`}
    >
      <div className="p-6 text-center">
        {/* Foto */}
        <div className="relative mx-auto w-32 h-32 mb-4">
          <img
            src={membro.foto}
            alt={membro.nome}
            className="w-full h-full object-cover rounded-full border-4 border-[#1B5E20]/20 group-hover:border-[#EF6C00] transition-colors duration-300"
          />
          <div className={`absolute inset-0 rounded-full bg-[#1B5E20]/10 group-hover:bg-transparent transition-colors duration-300`} />
        </div>

        {/* Info */}
        <h3 className={`text-lg font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {membro.nome}
        </h3>
        <p className="text-[#EF6C00] font-semibold text-sm mb-1">
          {membro.cargo}
        </p>
        <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          {membro.curso}
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-3">
          {membro.linkedin && (
            <a
              href={membro.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 ${
                isDark 
                  ? 'bg-gray-700 text-gray-400 hover:bg-[#1B5E20] hover:text-white' 
                  : 'bg-gray-100 text-gray-500 hover:bg-[#1B5E20] hover:text-white'
              }`}
            >
              <Linkedin className="w-4 h-4" />
            </a>
          )}
          {membro.github && (
            <a
              href={membro.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 ${
                isDark 
                  ? 'bg-gray-700 text-gray-400 hover:bg-[#1B5E20] hover:text-white' 
                  : 'bg-gray-100 text-gray-500 hover:bg-[#1B5E20] hover:text-white'
              }`}
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function ExMemberCard({ membro, isDark, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
        isDark ? 'bg-gray-800/50 hover:bg-gray-800' : 'bg-gray-50 hover:bg-gray-100'
      }`}
    >
      <img
        src={membro.foto}
        alt={membro.nome}
        className="w-16 h-16 object-cover rounded-full border-2 border-gray-200 grayscale hover:grayscale-0 transition-all duration-300"
      />
      <div>
        <h4 className={`font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          {membro.nome}
        </h4>
        <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
          {membro.cargo}
        </p>
        <p className={`text-xs ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
          {membro.periodo}
        </p>
      </div>
    </motion.div>
  );
}

export default function NossoTime() {
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
        title="Nosso Time | FronteiraTec"
        description="Conheça os membros da FronteiraTec - Empresa Júnior de tecnologia. Estudantes talentosos desenvolvendo soluções inovadoras."
        keywords="equipe, time, membros, empresa júnior, fronteiratec, desenvolvedores"
      />
      <Navbar isDark={isDark} onThemeToggle={toggleTheme} />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className={`py-20 transition-colors duration-500 ${
          isDark 
            ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
            : 'bg-gradient-to-br from-white via-gray-50 to-green-50'
        }`}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="text-[#EF6C00] font-semibold text-sm tracking-wider uppercase">
                Nossa Equipe
              </span>
              <h1 className={`text-4xl md:text-6xl font-bold mt-4 mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Nosso <span className={isDark ? 'text-green-400' : 'text-[#1B5E20]'}>Time</span>
              </h1>
              <p className={`text-lg md:text-xl leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Somos estudantes apaixonados por tecnologia, unidos pelo propósito de desenvolver 
                soluções inovadoras enquanto construímos nossa formação profissional. Cada membro 
                contribui com talento, dedicação e vontade de transformar ideias em realidade.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Membros Atuais */}
        <section className={`py-20 transition-colors duration-500 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-12"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                isDark ? 'bg-[#1B5E20]/20' : 'bg-[#1B5E20]/10'
              }`}>
                <Users className={`w-7 h-7 ${isDark ? 'text-green-400' : 'text-[#1B5E20]'}`} />
              </div>
              <div>
                <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Membros Atuais
                </h2>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  Conheça quem faz a FronteiraTec acontecer
                </p>
              </div>
            </motion.div>

            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {membrosAtuais.map((membro, index) => (
                  <CarouselItem key={membro.id} className="pl-4 sm:basis-1/2 lg:basis-1/3">
                    <MemberCard 
                      membro={membro} 
                      isDark={isDark} 
                      index={index} 
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-4 mt-8">
                <CarouselPrevious className={`relative left-0 translate-x-0 ${isDark ? 'bg-gray-800 border-gray-700 text-white hover:bg-gray-700' : ''}`} />
                <CarouselNext className={`relative right-0 translate-x-0 ${isDark ? 'bg-gray-800 border-gray-700 text-white hover:bg-gray-700' : ''}`} />
              </div>
            </Carousel>
          </div>
        </section>

        {/* Ex-Membros */}
        <section className={`py-20 transition-colors duration-500 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-12"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                isDark ? 'bg-gray-700' : 'bg-gray-200'
              }`}>
                <History className={`w-7 h-7 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
              </div>
              <div>
                <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Ex-Membros
                </h2>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  Quem ajudou a construir nossa história
                </p>
              </div>
            </motion.div>

            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {exMembros.map((membro, index) => (
                  <CarouselItem key={membro.id} className="pl-4 sm:basis-1/2 lg:basis-1/4">
                    <ExMemberCard 
                      membro={membro} 
                      isDark={isDark} 
                      index={index} 
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-4 mt-8">
                <CarouselPrevious className={`relative left-0 translate-x-0 ${isDark ? 'bg-gray-800 border-gray-700 text-white hover:bg-gray-700' : ''}`} />
                <CarouselNext className={`relative right-0 translate-x-0 ${isDark ? 'bg-gray-800 border-gray-700 text-white hover:bg-gray-700' : ''}`} />
              </div>
            </Carousel>
          </div>
        </section>

        {/* CTA Section */}
        <section className={`py-20 transition-colors duration-500 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Quer fazer parte do nosso time?
              </h2>
              <p className={`text-lg mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Acompanhe nosso processo seletivo e venha construir sua carreira com a gente.
              </p>
              <a
                href="/ProcessoSeletivo"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#EF6C00] hover:bg-[#E65100] text-white font-semibold rounded-full shadow-lg shadow-orange-500/25 transition-all duration-300"
              >
                Ver Processo Seletivo
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer isDark={isDark} />
    </div>
  );
}
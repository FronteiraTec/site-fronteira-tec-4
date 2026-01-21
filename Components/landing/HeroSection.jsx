import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ParticleNetwork from './ParticleNetwork';

export default function HeroSection({ isDark = false }) {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-500 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-white via-gray-50 to-green-50'
    }`}>
      <ParticleNetwork isDark={isDark} />
      
      {/* Smoke Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Green smoke clouds */}
        <motion.div
          animate={{
            x: [0, 30, -20, 10, 0],
            y: [0, -20, 10, -30, 0],
            scale: [1, 1.2, 0.9, 1.1, 1],
            opacity: [0.3, 0.5, 0.3, 0.4, 0.3],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute top-10 right-[10%] w-[500px] h-[500px] rounded-full blur-[100px] ${isDark ? 'bg-[#1B5E20]/30' : 'bg-[#1B5E20]/20'}`}
        />
        <motion.div
          animate={{
            x: [0, -40, 20, -10, 0],
            y: [0, 30, -20, 40, 0],
            scale: [1, 0.8, 1.3, 0.9, 1],
            opacity: [0.2, 0.4, 0.2, 0.35, 0.2],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className={`absolute top-[30%] left-[5%] w-[400px] h-[400px] rounded-full blur-[120px] ${isDark ? 'bg-[#1B5E20]/25' : 'bg-[#1B5E20]/15'}`}
        />
        <motion.div
          animate={{
            x: [0, 50, -30, 20, 0],
            y: [0, -40, 20, -10, 0],
            scale: [1, 1.1, 0.85, 1.15, 1],
            opacity: [0.25, 0.4, 0.2, 0.35, 0.25],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className={`absolute bottom-[20%] right-[20%] w-[350px] h-[350px] rounded-full blur-[90px] ${isDark ? 'bg-[#1B5E20]/20' : 'bg-[#1B5E20]/10'}`}
        />

        {/* Orange smoke clouds */}
        <motion.div
          animate={{
            x: [0, -30, 40, -20, 0],
            y: [0, 40, -30, 20, 0],
            scale: [1, 1.15, 0.85, 1.2, 1],
            opacity: [0.25, 0.45, 0.25, 0.4, 0.25],
          }}
          transition={{ duration: 17, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className={`absolute bottom-[10%] left-[15%] w-[450px] h-[450px] rounded-full blur-[110px] ${isDark ? 'bg-[#EF6C00]/25' : 'bg-[#EF6C00]/15'}`}
        />
        <motion.div
          animate={{
            x: [0, 35, -25, 15, 0],
            y: [0, -25, 35, -15, 0],
            scale: [1, 0.9, 1.2, 0.95, 1],
            opacity: [0.2, 0.35, 0.2, 0.3, 0.2],
          }}
          transition={{ duration: 19, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className={`absolute top-[15%] left-[40%] w-[380px] h-[380px] rounded-full blur-[100px] ${isDark ? 'bg-[#EF6C00]/20' : 'bg-[#EF6C00]/12'}`}
        />
        <motion.div
          animate={{
            x: [0, -20, 30, -40, 0],
            y: [0, 20, -40, 30, 0],
            scale: [1, 1.25, 0.8, 1.1, 1],
            opacity: [0.3, 0.5, 0.25, 0.4, 0.3],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className={`absolute top-[50%] right-[5%] w-[320px] h-[320px] rounded-full blur-[80px] ${isDark ? 'bg-[#EF6C00]/30' : 'bg-[#EF6C00]/18'}`}
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8"
          >
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/696a4037491fb9026d847ef2/9e6e2a6fe_CopyofLogoFronteiraTECverticalfundotransparente13.png" 
              alt="FronteiraTec" 
              className="h-32 md:h-40 mx-auto object-contain"
            />
          </motion.div>

          {/* Main heading */}
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
            <span className="block">Transformamos ideias em</span>
            <span className={isDark ? 'text-green-400' : 'text-[#1B5E20]'}>soluções digitais</span>
          </h1>

          {/* Subtitle */}
          <p className={`text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Desenvolvimento de software sob medida para impulsionar 
            o crescimento do seu negócio com tecnologia de ponta.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                onClick={() => scrollToSection('contato')}
                className="bg-[#EF6C00] hover:bg-[#E65100] text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-orange-500/25 transition-all duration-300"
              >
                Peça um Orçamento
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
            
            <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button 
                          variant="outline"
                          onClick={() => scrollToSection('servicos')}
                          className={`border-2 px-8 py-6 text-lg rounded-full transition-all duration-300 ${
                            isDark 
                              ? 'border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900' 
                              : 'border-[#1B5E20] text-[#1B5E20] hover:bg-[#1B5E20] hover:text-white'
                          }`}
                        >
                          Conheça nossos serviços
                        </Button>
                      </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="cursor-pointer"
            onClick={() => scrollToSection('sobre')}
          >
            <ChevronDown className={`w-8 h-8 ${isDark ? 'text-green-400/50' : 'text-[#1B5E20]/50'}`} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
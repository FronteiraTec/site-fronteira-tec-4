"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  FileText, 
  CalendarDays, 
  Code2, 
  CheckCircle2, 
  HeadphonesIcon,
  ArrowRight,
  MessageCircle,
  Target,
  Users,
  BookOpen
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import SEOHead from '@/components/SEOHead';

const etapas = [
  {
    numero: 1,
    titulo: 'Contato e Diagnóstico',
    descricao: 'Realizamos uma reunião inicial para entender suas necessidades, o contexto do problema e os objetivos do projeto. Esse é o momento de alinhar expectativas e identificar a melhor solução.',
    objetivo: 'Compreender profundamente o desafio do cliente.',
    icon: MessageSquare
  },
  {
    numero: 2,
    titulo: 'Proposta Técnica e Comercial',
    descricao: 'Com base no diagnóstico, elaboramos uma proposta detalhada contendo escopo, tecnologias recomendadas, prazos estimados e valores transparentes.',
    objetivo: 'Apresentar uma solução clara e viável.',
    icon: FileText
  },
  {
    numero: 3,
    titulo: 'Planejamento do Projeto',
    descricao: 'Organizamos todas as atividades, definimos os responsáveis por cada tarefa e criamos um cronograma detalhado para garantir entregas pontuais.',
    objetivo: 'Estruturar o projeto para máxima eficiência.',
    icon: CalendarDays
  },
  {
    numero: 4,
    titulo: 'Desenvolvimento / Execução',
    descricao: 'Nossa equipe inicia a implementação da solução, mantendo o cliente informado através de validações periódicas e entregas incrementais.',
    objetivo: 'Transformar o planejamento em realidade.',
    icon: Code2
  },
  {
    numero: 5,
    titulo: 'Entrega e Validação',
    descricao: 'Apresentamos a solução final ao cliente, realizamos os ajustes necessários e conduzimos a homologação para garantir total satisfação.',
    objetivo: 'Garantir que a entrega atenda às expectativas.',
    icon: CheckCircle2
  },
  {
    numero: 6,
    titulo: 'Suporte e Acompanhamento',
    descricao: 'Oferecemos orientações finais, documentação completa e suporte pós-entrega para assegurar o sucesso contínuo da solução implementada.',
    objetivo: 'Manter o relacionamento e garantir resultados.',
    icon: HeadphonesIcon
  }
];

const diferenciais = [
  {
    icon: MessageCircle,
    titulo: 'Comunicação Transparente',
    descricao: 'Mantemos você informado em cada etapa, com canais abertos e feedback constante.'
  },
  {
    icon: Target,
    titulo: 'Metodologia Estruturada',
    descricao: 'Processos bem definidos que garantem qualidade e previsibilidade nas entregas.'
  },
  {
    icon: Users,
    titulo: 'Acompanhamento Contínuo',
    descricao: 'Validações periódicas para garantir que o projeto está no caminho certo.'
  },
  {
    icon: BookOpen,
    titulo: 'Aprendizado Aplicado',
    descricao: 'Conhecimento acadêmico de ponta aplicado diretamente aos desafios do mercado.'
  }
];

function EtapaCard({ etapa, isDark, index }) {
  const Icon = etapa.icon;
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`flex items-start gap-6 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* Número e Linha */}
      <div className="flex flex-col items-center">
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg ${
          isDark ? 'bg-gradient-to-br from-[#1B5E20] to-green-600' : 'bg-gradient-to-br from-[#1B5E20] to-green-500'
        }`}>
          {etapa.numero}
        </div>
        {index < etapas.length - 1 && (
          <div className={`w-0.5 h-24 mt-4 ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`} />
        )}
      </div>

      {/* Conteúdo */}
      <div className={`flex-1 pb-8 ${isEven ? 'md:text-left' : 'md:text-right'}`}>
        <div className={`inline-flex items-center gap-3 mb-3 ${isEven ? '' : 'md:flex-row-reverse'}`}>
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
            isDark ? 'bg-[#EF6C00]/20' : 'bg-[#EF6C00]/10'
          }`}>
            <Icon className="w-6 h-6 text-[#EF6C00]" />
          </div>
          <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {etapa.titulo}
          </h3>
        </div>
        <p className={`mb-3 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          {etapa.descricao}
        </p>
        <p className={`text-sm font-medium ${isDark ? 'text-green-400' : 'text-[#1B5E20]'}`}>
          🎯 {etapa.objetivo}
        </p>
      </div>
    </motion.div>
  );
}

function DiferencialCard({ diferencial, isDark, index }) {
  const Icon = diferencial.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`p-6 rounded-2xl transition-all duration-300 hover:shadow-lg ${
        isDark ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:bg-gray-50'
      }`}
    >
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${
        isDark ? 'bg-[#1B5E20]/20' : 'bg-[#1B5E20]/10'
      }`}>
        <Icon className={`w-7 h-7 ${isDark ? 'text-green-400' : 'text-[#1B5E20]'}`} />
      </div>
      <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        {diferencial.titulo}
      </h3>
      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
        {diferencial.descricao}
      </p>
    </motion.div>
  );
}

export default function ProcessoTrabalho() {
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

  const scrollToContact = () => {
    window.location.href = '/#contato';
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <SEOHead 
        title="Processo de Trabalho | FronteiraTec"
        description="Conheça como a FronteiraTec executa seus projetos: do diagnóstico inicial à entrega final, com metodologia estruturada e comunicação transparente."
        keywords="processo de trabalho, metodologia, desenvolvimento de software, empresa júnior, fronteiratec"
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
                Como Trabalhamos
              </span>
              <h1 className={`text-4xl md:text-6xl font-bold mt-4 mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Processo de <span className={isDark ? 'text-green-400' : 'text-[#1B5E20]'}>Trabalho</span>
              </h1>
              <p className={`text-lg md:text-xl leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Nossa metodologia é baseada em transparência, organização e foco em resultados. 
                Cada projeto passa por etapas bem definidas para garantir qualidade e satisfação 
                em todas as entregas.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Etapas do Processo */}
        <section className={`py-20 transition-colors duration-500 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Nossas Etapas
              </h2>
              <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Do primeiro contato à entrega final, cada passo é planejado para o seu sucesso.
              </p>
            </motion.div>

            <div className="space-y-2">
              {etapas.map((etapa, index) => (
                <EtapaCard 
                  key={etapa.numero} 
                  etapa={etapa} 
                  isDark={isDark} 
                  index={index} 
                />
              ))}
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section className={`py-20 transition-colors duration-500 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="text-[#EF6C00] font-semibold text-sm tracking-wider uppercase">
                Por que nos escolher
              </span>
              <h2 className={`text-3xl md:text-4xl font-bold mt-4 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Diferenciais do Nosso Processo
              </h2>
              <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                O que torna a FronteiraTec a escolha certa para o seu projeto.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {diferenciais.map((diferencial, index) => (
                <DiferencialCard 
                  key={diferencial.titulo} 
                  diferencial={diferencial} 
                  isDark={isDark} 
                  index={index} 
                />
              ))}
            </div>
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
              className={`p-12 rounded-3xl ${
                isDark 
                  ? 'bg-gradient-to-br from-[#1B5E20]/20 to-gray-800' 
                  : 'bg-gradient-to-br from-[#1B5E20]/5 to-green-50'
              }`}
            >
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Pronto para começar seu projeto?
              </h2>
              <p className={`text-lg mb-8 max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Entre em contato conosco e descubra como podemos transformar sua ideia em uma solução digital de sucesso.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={scrollToContact}
                  className="bg-[#EF6C00] hover:bg-[#E65100] text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-orange-500/25 transition-all duration-300"
                >
                  Solicite um Orçamento
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.open('https://wa.me/5549988935115', '_blank')}
                  className={`px-8 py-6 text-lg rounded-full border-2 transition-all duration-300 ${
                    isDark 
                      ? 'border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900' 
                      : 'border-[#1B5E20] text-[#1B5E20] hover:bg-[#1B5E20] hover:text-white'
                  }`}
                >
                  Fale com a FronteiraTec
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer isDark={isDark} />
    </div>
  );
}
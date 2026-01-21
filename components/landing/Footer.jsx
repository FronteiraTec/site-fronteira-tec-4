import React from 'react';
import { motion } from 'framer-motion';
import { Network, ArrowUp, Mail, Phone, MapPin, Linkedin, Instagram, Github } from 'lucide-react';
import Link from 'next/link';
import { createPageUrl } from '@/utils';

export default function Footer({ isDark = false }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0D3311] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/696a4037491fb9026d847ef2/9e6e2a6fe_CopyofLogoFronteiraTECverticalfundotransparente13.png" 
                alt="FronteiraTec" 
                className="h-20 object-contain"
              />
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full text-xs font-medium text-white/80 mb-4">
              <span className="w-2 h-2 bg-[#EF6C00] rounded-full"></span>
              Empresa Júnior • Sem Fins Lucrativos
            </div>
            <p className="text-white/70 leading-relaxed mb-6">
              Somos uma Empresa Júnior formada por estudantes universitários, 
              transformando ideias em soluções digitais inovadoras com propósito educacional.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: 'https://www.linkedin.com/company/fronteira-tec/', label: 'LinkedIn' },
                { icon: Instagram, href: 'https://www.instagram.com/fronteira_tec/', label: 'Instagram' },
                { icon: Github, href: 'https://github.com/FronteiraTec/', label: 'GitHub' }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/70 hover:bg-[#EF6C00] hover:text-white transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {[
                { label: 'Quem Somos', href: 'sobre' },
                { label: 'Serviços', href: 'servicos' },
                { label: 'Portfólio', href: 'portfolio' },
                { label: 'Contato', href: 'contato' }
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={`#${link.href}`}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="text-white/70 hover:text-[#EF6C00] transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#EF6C00]" />
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  href={createPageUrl('NossoTime')}
                  className="text-white/70 hover:text-[#EF6C00] transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EF6C00]" />
                  Nosso Time
                </Link>
              </li>
              <li>
                <Link
                  href={createPageUrl('ProcessoTrabalho')}
                  className="text-white/70 hover:text-[#EF6C00] transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EF6C00]" />
                  Processo de Trabalho
                </Link>
              </li>
              <li>
                <Link
                  href={createPageUrl('ProcessoSeletivo')}
                  className="text-white/70 hover:text-[#EF6C00] transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EF6C00]" />
                  Processo Seletivo
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Serviços</h4>
            <ul className="space-y-3">
              {[
                'Desenvolvimento Web',
                'Aplicativos Mobile',
                'Sistemas Empresariais',
                'Consultoria em TI',
                'UI/UX Design'
              ].map((service) => (
                <li key={service}>
                  <span className="text-white/70 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#EF6C00]" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#EF6C00] mt-0.5 flex-shrink-0" />
                <span className="text-white/70">
                  Chapecó, SC - Brasil
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#EF6C00] flex-shrink-0" />
                <a href="tel:+5511999999999" className="text-white/70 hover:text-white transition-colors">
                  (49) 98893-5115
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#EF6C00] flex-shrink-0" />
                <a href="mailto:contato@fronteiratec.com.br" className="text-white/70 hover:text-white transition-colors">
                  contato@fronteiratec.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/50 text-center md:text-left">
              © {new Date().getFullYear()} FronteiraTec. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6 text-sm text-white/50">
              {/* <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a> */}
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="w-10 h-10 rounded-lg bg-[#EF6C00] flex items-center justify-center hover:bg-[#E65100] transition-colors shadow-lg"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
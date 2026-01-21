import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, Award } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Foco em Resultados',
    description: 'Cada projeto é desenvolvido com objetivos claros e mensuráveis.'
  },
  {
    icon: Users,
    title: 'Parceria',
    description: 'Trabalhamos lado a lado com nossos clientes em cada etapa.'
  },
  {
    icon: Lightbulb,
    title: 'Inovação',
    description: 'Utilizamos as tecnologias mais modernas do mercado.'
  },
  {
    icon: Award,
    title: 'Excelência',
    description: 'Comprometidos com a qualidade em cada linha de código.'
  }
];

export default function AboutSection({ isDark = false }) {
  return (
    <section id="sobre" className={`py-24 transition-colors duration-500 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#EF6C00] font-semibold text-sm tracking-wider uppercase">
              Quem Somos
            </span>
            <h2 className={`text-4xl md:text-5xl font-bold mt-4 mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Conectando tecnologia e <span className={isDark ? 'text-green-400' : 'text-[#1B5E20]'}>inovação</span>
            </h2>
            <p className={`text-lg leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              A <strong className={isDark ? 'text-green-400' : 'text-[#1B5E20]'}>FronteiraTec</strong> nasceu da paixão por transformar 
              desafios complexos em soluções digitais elegantes. Somos uma empresa de tecnologia 
              especializada em desenvolvimento de software personalizado, focada em entregar 
              resultados que impulsionam o crescimento dos nossos parceiros.
            </p>
            <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Com uma equipe multidisciplinar de desenvolvedores, designers e estrategistas, 
              criamos experiências digitais que combinam performance técnica com design 
              centrado no usuário.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12">
              {[
                // { value: '50+', label: 'Projetos Entregues' },
                // { value: '5+', label: 'Anos de Experiência' },
                // { value: '98%', label: 'Clientes Satisfeitos' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-center lg:text-left"
                >
                  <div className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-green-400' : 'text-[#1B5E20]'}`}>{stat.value}</div>
                  <div className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`p-6 rounded-2xl transition-colors duration-300 group ${
                  isDark 
                    ? 'bg-gray-700/50 hover:bg-[#1B5E20]/20' 
                    : 'bg-gray-50 hover:bg-[#1B5E20]/5'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                  isDark 
                    ? 'bg-[#1B5E20]/20 group-hover:bg-[#1B5E20]/30' 
                    : 'bg-[#1B5E20]/10 group-hover:bg-[#1B5E20]/20'
                }`}>
                  <value.icon className={`w-6 h-6 ${isDark ? 'text-green-400' : 'text-[#1B5E20]'}`} />
                </div>
                <h3 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{value.title}</h3>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
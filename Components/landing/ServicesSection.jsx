import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Smartphone, 
  Cloud, 
  Database, 
  ShieldCheck, 
  BarChart3,
  ArrowUpRight
} from 'lucide-react';
import { services } from '@/components/config/servicosConfig';

const iconMap = {
  Code2,
  Smartphone,
  Cloud,
  Database,
  ShieldCheck,
  BarChart3
};

export default function ServicesSection({ isDark = false }) {
  return (
    <section id="servicos" className={`py-24 transition-colors duration-500 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-[#EF6C00] font-semibold text-sm tracking-wider uppercase">
            Nossos Serviços
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold mt-4 mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Soluções completas para sua <span className={isDark ? 'text-green-400' : 'text-[#1B5E20]'}>transformação digital</span>
          </h2>
          <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Oferecemos um portfólio completo de serviços para atender todas as 
            necessidades tecnológicas do seu negócio.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Code2;
            return (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={`group relative rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden ${
              isDark ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            {/* Hover gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
              isDark ? 'from-[#1B5E20]/10 to-transparent' : 'from-[#1B5E20]/5 to-transparent'
            }`} />

            <div className="relative z-10">
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#1B5E20] transition-colors duration-300 ${
                isDark ? 'bg-[#1B5E20]/20' : 'bg-[#1B5E20]/10'
              }`}>
                <IconComponent className={`w-7 h-7 group-hover:text-white transition-colors duration-300 ${
                  isDark ? 'text-green-400' : 'text-[#1B5E20]'
                }`} />
              </div>

                {/* Content */}
                <h3 className={`text-xl font-bold mb-3 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {service.title}
                  <ArrowUpRight className="w-5 h-5 text-[#EF6C00] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </h3>
                <p className={`mb-6 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className={`px-3 py-1 text-xs font-medium rounded-full transition-colors duration-300 ${
                        isDark 
                          ? 'bg-gray-700 text-gray-300 group-hover:bg-[#1B5E20]/20 group-hover:text-green-400' 
                          : 'bg-gray-100 text-gray-700 group-hover:bg-[#1B5E20]/10 group-hover:text-[#1B5E20]'
                      }`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
              );
          })}
        </div>
      </div>
    </section>
  );
}
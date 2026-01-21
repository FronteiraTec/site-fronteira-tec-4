import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Instagram,
  MessageCircle,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const contactInfo = [
  {
    icon: Mail,
    title: 'E-mail',
    value: 'contato@fronteiratec.com.br',
    link: 'mailto:contato@fronteiratec.com.br'
  },
  {
    icon: Phone,
    title: 'Telefone',
    value: '(49) 98893-5115',
    link: 'tel:+5549988935115'
  },
  {
    icon: MapPin,
    title: 'Localização',
    value: 'Chapecó, SC - Brasil',
    link: null
  }
];

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/company/fronteira-tec/', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/fronteira_tec/', label: 'Instagram' },
  { icon: MessageCircle, href: 'https://wa.me/5549988935115', label: 'WhatsApp' }
];

export default function ContactSection({ isDark = false }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Format message for WhatsApp
    const whatsappNumber = '5549988935115';
    const text = `*Novo contato via site FronteiraTec*%0A%0A*Nome:* ${formData.name}%0A*E-mail:* ${formData.email}%0A*Telefone:* ${formData.phone || 'Não informado'}%0A%0A*Mensagem:*%0A${formData.message}`;
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;
    window.open(whatsappUrl, '_blank');
    
    toast.success('Redirecionando para o WhatsApp...');
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contato" className={`py-24 transition-colors duration-500 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
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
            Contato
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold mt-4 mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Vamos <span className={isDark ? 'text-green-400' : 'text-[#1B5E20]'}>conversar?</span>
          </h2>
          <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Estamos prontos para entender seu desafio e criar a solução 
            perfeita para seu negócio.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`flex items-start gap-4 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow ${
                    isDark ? 'bg-gray-800' : 'bg-white'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    isDark ? 'bg-[#1B5E20]/20' : 'bg-[#1B5E20]/10'
                  }`}>
                    <info.icon className={`w-5 h-5 ${isDark ? 'text-green-400' : 'text-[#1B5E20]'}`} />
                  </div>
                  <div>
                    <p className={`text-sm mb-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{info.title}</p>
                    {info.link ? (
                      <a 
                        href={info.link}
                        className={`font-medium transition-colors ${
                          isDark ? 'text-white hover:text-green-400' : 'text-gray-900 hover:text-[#1B5E20]'
                        }`}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Siga-nos nas redes sociais</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className={`w-11 h-11 rounded-xl shadow-sm flex items-center justify-center hover:bg-[#1B5E20] hover:text-white transition-all duration-300 ${
                      isDark ? 'bg-gray-800 text-gray-400' : 'bg-white text-gray-600'
                    }`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className={`rounded-2xl p-8 shadow-sm ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Nome completo
                  </label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Seu nome"
                    className={`h-12 rounded-xl focus:border-[#1B5E20] focus:ring-[#1B5E20] ${
                      isDark ? 'bg-gray-700 border-gray-600 text-white placeholder:text-gray-400' : 'border-gray-200'
                    }`}
                    required
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    E-mail
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="seu@email.com"
                    className={`h-12 rounded-xl focus:border-[#1B5E20] focus:ring-[#1B5E20] ${
                      isDark ? 'bg-gray-700 border-gray-600 text-white placeholder:text-gray-400' : 'border-gray-200'
                    }`}
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Telefone
                </label>
                <Input
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(00) 00000-0000"
                  className={`h-12 rounded-xl focus:border-[#1B5E20] focus:ring-[#1B5E20] ${
                    isDark ? 'bg-gray-700 border-gray-600 text-white placeholder:text-gray-400' : 'border-gray-200'
                  }`}
                />
              </div>

              <div className="mb-8">
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Mensagem
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Descreva seu projeto ou necessidade..."
                  className={`min-h-[140px] rounded-xl focus:border-[#1B5E20] focus:ring-[#1B5E20] resize-none ${
                    isDark ? 'bg-gray-700 border-gray-600 text-white placeholder:text-gray-400' : 'border-gray-200'
                  }`}
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 bg-[#EF6C00] hover:bg-[#E65100] text-white text-lg rounded-xl shadow-lg shadow-orange-500/25 transition-all duration-300 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    >
                      <Send className="w-5 h-5" />
                    </motion.div>
                    Enviando...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    Enviar Mensagem
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
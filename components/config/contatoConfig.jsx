/**
 * CONFIGURAÇÃO DE CONTATO - FronteiraTec
 * 
 * Edite este arquivo para atualizar as informações de contato.
 * As alterações serão refletidas automaticamente na seção de contato e footer.
 */

export const contactInfo = {
  email: 'contato@fronteiratec.com.br',
  phone: '(49) 98893-5115',
  phoneWhatsApp: '5511999999999', // Formato para link do WhatsApp (sem caracteres especiais)
  location: 'Chapecó, SC - Brasil',
  address: 'Chapecó, SC - Brasil'
};

export const socialLinks = {
  linkedin: '#',
  instagram: '#',
  github: '#',
  whatsapp: 'https://wa.me/5549988935115' // Link direto do WhatsApp
};

// Mensagem padrão do WhatsApp ao enviar o formulário
export const whatsappDefaultMessage = (name, email, phone, message) => {
  return `*Nova mensagem do site FronteiraTec*%0A%0A*Nome:* ${name}%0A*Email:* ${email}%0A*Telefone:* ${phone}%0A%0A*Mensagem:*%0A${message}`;
};

// Número do WhatsApp para receber mensagens do formulário
export const whatsappNumber = '5549988935115';
/**
 * CONFIGURAÇÃO DO PORTFÓLIO - FronteiraTec
 * 
 * Edite este arquivo para atualizar os projetos do portfólio.
 * As alterações serão refletidas automaticamente na seção de portfólio.
 */

// Categorias disponíveis para filtro
export const categories = ['Todos', 'Web', 'Sistemas']; // pode adicionar mais categorias se necessário

// Projetos do portfólio
export const projects = [
  {
    id: 1,
    title: 'Site SemFronteiras',
    category: 'Web', // Deve ser uma das categorias acima
    description: 'Site institucional para a Empresa Júnior SemFronteiras, focado em ofertar serviços de consultoria empresarial.',
    image: '/imagens/SemFronteiras.png',
    tech: ['React', 'HTML', 'Tailwind CSS', 'JavaScript']
  },

  {
    id: 2,
    title: 'Sistema da Incubadora de Negócios',
    category: 'Sistemas',
    description: 'Sistema integrado para a gestão dos incubados.',
    image: '/imagens/inne.png',
    tech: ['React.js', 'Node.js', 'PostgreSQL']
  },

];
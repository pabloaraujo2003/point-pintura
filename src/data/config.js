import paintingInteriorImage from "../assets/painting-interior.svg";
import paintingCommercialImage from "../assets/painting-commercial.svg";
import paintingExteriorImage from "../assets/painting-exterior.svg";

export const companyData = {
  name: "Point da Pintura",
  owners: ["Fabio", "Rocelio"],
  ownersLabel: "Fabio e Rocelio",
  phone: "5521964149614", // Formato para link do WhatsApp
  phoneFormatted: "(21) 96414-9640",
  city: "Rio de Janeiro",
  email: "fabioalbuquerquepinturaspva@gmail.com.br",
  address: "Atendimento em toda a região do Rio de Janeiro",
  socials: {
    instagram: "https://instagram.com/pointda.pintura",
    facebook: "https://facebook.com/pointda.pintura",
  }
};

export const services = [
  {
    id: 1,
    title: "Pintura Residencial",
    description: "Ambientes internos e externos com acabamento limpo, acolhedor e valorização do imóvel.",
    icon: "Home"
  },
  {
    id: 2,
    title: "Pintura Comercial",
    description: "Lojas, escritórios e fachadas comerciais com execução organizada e imagem profissional.",
    icon: "Building"
  },
  {
    id: 3,
    title: "Reformas e Acabamentos",
    description: "Preparação de superfície, correções, textura, retoques e acabamento final com padrão profissional.",
    icon: "Construction"
  }
];

export const projects = [
  {
    id: 1,
    title: "Apartamento Renovado",
    category: "Residencial",
    description: "Projeto com pintura interna em tons claros, correções finas e acabamento acetinado.",
    image: paintingInteriorImage
  },
  {
    id: 2,
    title: "Escritório Corporativo",
    category: "Comercial",
    description: "Aplicação de cores institucionais com organização, limpeza e agilidade na entrega.",
    image: paintingCommercialImage
  },
  {
    id: 3,
    title: "Fachada Residencial",
    category: "Externa",
    description: "Renovação externa com proteção contra umidade e visual mais valorizado.",
    image: paintingExteriorImage
  },
  {
    id: 4,
    title: "Loja Comercial",
    category: "Comercial",
    description: "Execução em horário planejado para reduzir impacto e manter a operação do espaço.",
    image: paintingCommercialImage
  },
  {
    id: 5,
    title: "Ambiente Integrado",
    category: "Residencial",
    description: "Renovação de sala e cozinha com tintas laváveis e visual contemporâneo.",
    image: paintingInteriorImage
  },
  {
    id: 6,
    title: "Área Comum Reformada",
    category: "Reformas",
    description: "Correções, preparação e pintura de áreas coletivas com acabamento uniforme.",
    image: paintingExteriorImage
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Ricardo Oliveira",
    role: "Proprietário de Imóvel",
    content: "A Point da Pintura foi extremamente cuidadosa. O acabamento ficou elegante e o ambiente foi entregue limpo e no prazo.",
    rating: 5
  },
  {
    id: 2,
    name: "Ana Costa",
    role: "Arquiteta",
    content: "A equipe transmite confiança desde o orçamento. A execução é organizada e o resultado final valoriza muito o projeto.",
    rating: 5
  },
  {
    id: 3,
    name: "Marcos Santos",
    role: "Gerente Comercial",
    content: "Conseguimos renovar a loja com rapidez e sem bagunça. Foi uma entrega profissional do início ao fim.",
    rating: 5
  }
];

export const features = [
  {
    title: "Atendimento Acolhedor",
    description: "Relacionamento próximo, claro e respeitoso em todas as etapas."
  },
  {
    title: "Planejamento e Prazo",
    description: "Cronograma definido com compromisso real de entrega."
  },
  {
    title: "Orçamento Objetivo",
    description: "Proposta clara, detalhada e alinhada ao escopo do serviço."
  },
  {
    title: "Acabamento Profissional",
    description: "Execução cuidadosa para um resultado limpo, técnico e duradouro."
  },
  {
    title: "Organização e Limpeza",
    description: "Proteção do ambiente e cuidado com cada detalhe da obra."
  },
  {
    title: "Confiança no Serviço",
    description: "Postura profissional para transmitir segurança do orçamento à entrega."
  }
];

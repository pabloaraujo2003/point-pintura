import paintingInteriorImage from "../assets/painting-interior.svg";
import paintingCommercialImage from "../assets/painting-commercial.svg";
import paintingExteriorImage from "../assets/painting-exterior.svg";

export const companyData = {
  name: "Point Pintura",
  owners: ["Fabio", "Rocelio"],
  ownersLabel: "Fabio e Rocelio",
  phone: "5521964149614", // Formato para link do WhatsApp
  phoneFormatted: "(21) 96414-9640",
  city: "Rio de Janeiro ",
  email: "fabioalbuquerquepinturaspva@gmail.com.br",
  address: "Atendimento em toda a região do Rio de janeiro",
  socials: {
    instagram: "https://instagram.com/pointda.pintura",
    facebook: "https://facebook.com/pointda.pintura",
  }
};

export const services = [
  {
    id: 1,
    title: "Pintura Residencial",
    description: "Transformamos sua casa com acabamento impecável, do clássico ao moderno.",
    icon: "Home"
  },
  {
    id: 2,
    title: "Pintura Comercial",
    description: "Pintura de salas comerciais, lojas e escritórios com agilidade e limpeza.",
    icon: "Building"
  },
  {
    id: 3,
    title: "Pintura Interna",
    description: "Cuidado redobrado com seus móveis e pisos. Acabamento fino em paredes e tetos.",
    icon: "Paintbrush"
  },
  {
    id: 4,
    title: "Pintura Externa",
    description: "Proteção e beleza para fachadas, utilizando as melhores tintas do mercado.",
    icon: "Umbrella"
  },
  {
    id: 5,
    title: "Textura e Grafiato",
    description: "Efeitos decorativos que trazem personalidade e resistência para suas paredes.",
    icon: "Layers"
  },
  {
    id: 6,
    title: "Portões e Grades",
    description: "Pintura eletrostática ou convencional para proteção contra ferrugem e renovação visual.",
    icon: "Shield"
  },
  {
    id: 7,
    title: "Acabamento e Retoques",
    description: "Pequenos reparos e retoques precisos para deixar tudo como novo.",
    icon: "CheckCircle"
  },
  {
    id: 8,
    title: "Preparação de Superfícies",
    description: "Lixamento, emassamento e tratamento de trincas para uma pintura duradoura.",
    icon: "Construction"
  }
];

export const projects = [
  {
    id: 1,
    title: "Apartamento Vila Mariana",
    category: "Residencial",
    description: "Pintura completa com acabamento acetinado em tons pastéis.",
    image: paintingInteriorImage
  },
  {
    id: 2,
    title: "Escritório Itaim Bibi",
    category: "Comercial",
    description: "Aplicação de cores corporativas e textura em parede de destaque.",
    image: paintingCommercialImage
  },
  {
    id: 3,
    title: "Fachada de Sobrado",
    category: "Externa",
    description: "Pintura externa com tinta emborrachada para máxima proteção.",
    image: paintingExteriorImage
  },
  {
    id: 4,
    title: "Loja de Shopping",
    category: "Comercial",
    description: "Trabalho realizado em horário especial com rapidez e limpeza total.",
    image: paintingCommercialImage
  },
  {
    id: 5,
    title: "Cozinha e Sala Integrada",
    category: "Residencial",
    description: "Renovação de ambientes com tintas laváveis de alta qualidade.",
    image: paintingInteriorImage
  },
  {
    id: 6,
    title: "Condomínio Residencial",
    category: "Externa",
    description: "Pintura de áreas comuns e muros com textura decorativa.",
    image: paintingExteriorImage
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Ricardo Oliveira",
    role: "Proprietário de Imóvel",
    content: "O João foi extremamente profissional. Entregou no prazo, não fez sujeira e o acabamento ficou impecável. Recomendo muito!",
    rating: 5
  },
  {
    id: 2,
    name: "Ana Costa",
    role: "Arquiteta",
    content: "Trabalho com a Point Pintura em vários projetos. A atenção aos detalhes e a qualidade do material utilizado fazem toda a diferença.",
    rating: 5
  },
  {
    id: 3,
    name: "Marcos Santos",
    role: "Gerente Comercial",
    content: "Pintamos nossa loja inteira em um final de semana. Equipe ágil, organizada e muito educada. Nota 10!",
    rating: 5
  }
];

export const features = [
  {
    title: "Atendimento de Qualidade",
    description: "Foco total na satisfação do cliente desde o primeiro contato."
  },
  {
    title: "Pontualidade",
    description: "Respeitamos rigorosamente os prazos acordados."
  },
  {
    title: "Orçamento Rápido",
    description: "Enviamos sua cotação de forma ágil e detalhada."
  },
  {
    title: "Acabamento Profissional",
    description: "Técnicas modernas para um resultado de alto padrão."
  },
  {
    title: "Organização e Limpeza",
    description: "Cuidamos do seu espaço como se fosse nosso."
  },
  {
    title: "Materiais de Qualidade",
    description: "Trabalhamos com as melhores marcas do mercado."
  }
];

import { PizzaFlavor, PackageFeature, Testimonial, FAQItem, GalleryItem } from '../types';

import heroImg from '../assets/images/capa.png';
import img01 from '../assets/images/01.jpeg';
import img02 from '../assets/images/005.png';
import img03 from '../assets/images/03.jpeg';
import img04 from '../assets/images/04.jpeg';
import img005 from '../assets/images/005.png';
import img006 from '../assets/images/006.png';
import img007 from '../assets/images/007.png';
import img008 from '../assets/images/008.png';
import flavorsImg from '../assets/images/pizzataco_flavors_display_1785810795381.jpg';
import packagingImg from '../assets/images/pizzataco_packaging_set_1785810808508.jpg';
import eventTeamImg from '../assets/images/pizzataco_event_team_1785810825237.jpg';
import logoImg from '../assets/images/pizzataco_gold_seal_1785815612971.jpg';
import bannerLogoImg from '../assets/images/pizzataco_banner_logo_1785814463178.jpg';
import maosImg from '../assets/images/maos.png';
import piz01Img from '../assets/images/piz01.png';
import piz02Img from '../assets/images/piz02.png';

export const ASSETS = {
  hero: heroImg,
  img01,
  img02,
  img03,
  img04,
  img005,
  img006,
  img007,
  img008,
  flavorsDisplay: flavorsImg,
  packaging: packagingImg,
  eventTeam: eventTeamImg,
  logo: logoImg,
  bannerLogo: bannerLogoImg,
  maos: maosImg,
  piz01: piz01Img,
  piz02: piz02Img,
};

export const INSTAGRAM_HANDLE = "@pizzataco_eventos";
export const INSTAGRAM_URL = "https://www.instagram.com/pizzataco_eventos/";
export const WHATSAPP_NUMBER = "5511999394768"; // Number formatted for WhatsApp link
export const WHATSAPP_DISPLAY = "(11) 99939-4768";

export const PIZZA_FLAVORS: PizzaFlavor[] = [
  {
    id: 'abobrinha',
    name: 'Abobrinha Especial',
    category: 'gourmet',
    description: 'A queridinha do cardápio! Abobrinha fatiada fina temperada, queijo derretido de alta qualidade, azeite extra virgem e orégano.',
    ingredients: ['Massa Crocante', 'Mussarela Especial', 'Abobrinha Temperada', 'Parmessão', 'Azeite Extra Virgem'],
    badge: 'Mais Pedido',
    image: flavorsImg,
    isPopular: true
  },
  {
    id: 'calabresa',
    name: 'Calabresa Artesanal',
    category: 'tradicional',
    description: 'Calabresa moída levemente apimentada, bastante mussarela, cebola roxa marinada e azeitonas fatiadas.',
    ingredients: ['Massa Crocante', 'Mussarela', 'Calabresa Faturada/Moída', 'Cebola Roxa', 'Molho de Tomate Rústico'],
    badge: 'Mais Pedido',
    image: packagingImg,
    isPopular: true
  },
  {
    id: 'frango-catupiry',
    name: 'Frango com Catupiry®',
    category: 'tradicional',
    description: 'Frango desfiado suculento bem temperado com ervas finas e generosa camada do autêntico Catupiry cremoso.',
    ingredients: ['Massa Crocante', 'Frango Desfiado Temperado', 'Catupiry Original', 'Milho Doce Opcional', 'Mussarela'],
    badge: 'Favorito das Crianças',
    image: flavorsImg,
    isPopular: true
  },
  {
    id: 'margherita',
    name: 'Margherita Premium',
    category: 'vegetariano',
    description: 'Mussarela de cura artesanal, rodelas de tomate fresco, folhas de manjericão fresco e toque de parmesão.',
    ingredients: ['Massa Crocante', 'Mussarela', 'Tomate Fresco', 'Manjericão da Horta', 'Parmesão Ralado'],
    badge: 'Gourmet',
    image: heroImg,
  },
  {
    id: 'quatro-queijos',
    name: 'Quatro Queijos Supremo',
    category: 'gourmet',
    description: 'Combinação aveludada de Mussarela, Provolone defumado, Gorgonzola suave e Catupiry cremoso.',
    ingredients: ['Massa Crocante', 'Mussarela', 'Provolone', 'Gorgonzola', 'Catupiry'],
    badge: 'Mais Pedido',
    image: packagingImg,
    isPopular: true
  },
  {
    id: 'bacon-milho',
    name: 'Bacon Crocante com Milho',
    category: 'tradicional',
    description: 'Cubes de bacon sequinhos e crocantes, milho verde selecionado e abundante queijo derretido.',
    ingredients: ['Massa Crocante', 'Bacon Crocante', 'Milho Doce', 'Mussarela', 'Orégano'],
    image: flavorsImg
  },
  {
    id: 'pepperoni',
    name: 'Pepperoni & Cream Cheese',
    category: 'gourmet',
    description: 'Fatias de pepperoni levemente defumado, mussarela e toque especial de cream cheese aveludado.',
    ingredients: ['Massa Crocante', 'Pepperoni Defumado', 'Mussarela', 'Cream Cheese', 'Pimenta Sutil'],
    badge: 'Chef Special',
    image: heroImg
  },
  {
    id: 'portuguesa',
    name: 'Portuguesa Especial',
    category: 'tradicional',
    description: 'Presunto picadinho, ovo ralado, cebola, ervilha fresca, mussarela e azeitona preta.',
    ingredients: ['Massa Crocante', 'Presunto Cozido', 'Ovo', 'Mussarela', 'Ervilha', 'Cebola'],
    image: packagingImg
  },
  {
    id: 'queijo-brie-damasco',
    name: 'Brie com Geleia de Damasco',
    category: 'gourmet',
    description: 'Incrível combinação agridoce de queijo Brie derretido com geleia artesanal de damasco.',
    ingredients: ['Massa Crocante', 'Queijo Brie', 'Geleia de Damasco', 'Mussarela', 'Nozes Tostadas'],
    badge: 'Lançamento',
    image: flavorsImg
  },
  {
    id: 'nutella-morango',
    name: 'Nutella® com Morango',
    category: 'doce',
    description: 'Verdadeira Nutella abundante recheando a massa quente com morangos frescos fatiados.',
    ingredients: ['Massa Crocante Doce', 'Nutella Original', 'Morangos Frescos', 'Açúcar de Confeiteiro'],
    badge: 'Mais Pedido',
    image: packagingImg,
    isPopular: true
  },
  {
    id: 'doce-de-leite-banana',
    name: 'Doce de Leite com Banana e Canela',
    category: 'doce',
    description: 'Doce de leite cremoso argentino, banana fatiada dourada no forno e canela polvilhada.',
    ingredients: ['Massa Crocante', 'Doce de Leite Cremoso', 'Banana Fatiada', 'Canela em Pó'],
    badge: 'Favorito das Crianças',
    image: heroImg
  },
  {
    id: 'romeu-julieta',
    name: 'Romeu & Julieta Gourmet',
    category: 'doce',
    description: 'Goiabada cascão bem derretida combinada com queijo minas padrão e mussarela quentinha.',
    ingredients: ['Massa Crocante', 'Goiabada Cascão', 'Queijo Minas Padrão', 'Mussarela'],
    image: flavorsImg
  }
];

export const SALGADAS_FLAVORS = [
  'Calabresa',
  'Frango Catupiry',
  'Bacon',
  'Brócolis Catupiry',
  'Quatro Queijos',
  'Moda da Casa',
  'Lombo Catupiry',
  'Milho',
  'Portuguesa',
  'Fricassé',
  'Cebola na Manteiga',
  'Cebola Caramelizada',
  'Strogonoff',
  'Alho e Óleo',
  'Milho e Bacon',
  'Calabresa Doce',
  'Mussarela',
  'Chester com Cheddar',
  'Siciliana',
  'Baconlis',
  'Basca',
  'Entrevero',
  'Suprema',
  'Gaúcha',
  'Frango Temperado',
  'Marguerita',
  'Jardineira',
  'Iscas ao Alho e Óleo',
  'Brócolis ao Molho Branco',
  'Toscana',
  'Mc Pizza',
  'Calabresa aos 4Q',
  'Azeitona',
  'Branca de Neve',
  'Palmito',
  'Napolitana',
  'Carne de Panela',
  'Calabresa Forte',
  'Mr Pizza',
  'Chester aos 4Q'
];

export const DOCES_FLAVORS = [
  'Chocolate Preto',
  'Choco Misto',
  'Brigadeiro',
  'Confete',
  'Prestígio',
  'Sensação Preta',
  'Sensação Mista',
  'Chocolate Branco',
  'Beijinho',
  'Oreo',
  'Formigueiro',
  'Paçoca Branca',
  'Sensação Branca',
  'Charge',
  'Chico',
  'Banana com Canela',
  'Cocada',
  'Doce de Leite'
];

export const PACKAGE_FEATURES: PackageFeature[] = [
  {
    id: 'team',
    title: 'Equipe Profissional Completa',
    description: 'Pizzaiolo experiente uniformizado e ajudante dedicados a assar e servir seus convidados durante todo o evento.',
    iconName: 'Users',
    highlight: 'Pizzaiolo + Ajudante'
  },
  {
    id: 'oven',
    title: 'Forno de Alta Performance',
    description: 'Forno compacto e elétrico ou a gás que assa as pizzas tacos em minutos, mantendo a massa super crocante e o queijo derretido.',
    iconName: 'Flame',
    highlight: 'Assado em 3 minutos'
  },
  {
    id: 'structure',
    title: 'Estrutura Completa de Montagem',
    description: 'Bancada elegante, panos de prato, espátulas, potes térmicos e todo o maquinário necessário. Você não precisa ceder nada!',
    iconName: 'Boxes',
    highlight: 'Autônomo & Limpo'
  },
  {
    id: 'packaging',
    title: 'Embalagens Exclusivas Pizza Taco',
    description: 'Servido nas nossas caixinhas/mangas coloridas e higiênicas em formato de taco. Sem necessidade de pratos ou talheres!',
    iconName: 'PackageCheck',
    highlight: 'Sem pratos ou talheres'
  },
  {
    id: 'premade',
    title: 'Pizzas Pré-Montadas e Recheadas',
    description: 'As pizzas já chegam preparadas e recheadas nos sabores escolhidos por você, prontas para ir ao forno direto no evento.',
    iconName: 'CheckCircle2',
    highlight: 'Qualidade Padronizada'
  },
  {
    id: 'cleaning',
    title: 'Limpeza e Organização',
    description: 'Nossa equipe deixa a área de trabalho tinindo e 100% limpa ao final do evento. Zero dor de cabeça para o anfitrião!',
    iconName: 'Sparkles',
    highlight: 'Sua cozinha limpa'
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Você Escolhe o Cardápio',
    description: 'Selecione os sabores salgados e doces favoritos no nosso menu. Nós preparamos tudo com ingredientes frescos.',
    iconName: 'UtensilsCrossed',
    bgImage: img005
  },
  {
    step: '02',
    title: 'Nós Levamos Toda a Estrutura',
    description: 'Nossa equipe chega com antecedência ao local escolhido com fornos, bancadas, insumos e embalagens.',
    iconName: 'Truck',
    bgImage: img006
  },
  {
    step: '03',
    title: 'Pizzas Assadas na Hora',
    description: 'O pizzaiolo assa os Pizza Tacos na temperatura ideal na frente dos seus convidados. Quentinho, cheiroso e crocante!',
    iconName: 'Flame',
    bgImage: img007
  },
  {
    step: '04',
    title: 'Todos Saboreiam Sem Sujeira',
    description: 'Servido nas embalagens exclusivas práticas, sem precisar lavar pratos ou talheres. Festa 100% livre de preocupações!',
    iconName: 'Smile',
    bgImage: img008
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Carolina & Gabriel',
    eventType: 'Aniversário de 30 Anos',
    location: 'São Paulo - SP',
    comment: 'Foi o maior sucesso da festa! Todo mundo elogiou a facilidade do Pizza Taco. A massa é crocante demais, recheio quentinho e a equipe foi super atenciosa.',
    rating: 5,
    date: 'Julho, 2026',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    guestsCount: 45
  },
  {
    id: 't2',
    name: 'Rodrigo M. Mendes',
    eventType: 'Evento Corporativo de Fim de Ano',
    location: 'Alphaville - Barueri',
    comment: 'Contratamos para 80 colaboradores da nossa empresa. A agilidade do forno e da equipe impressionou! Sem filas e a pizza de abobrinha é espetacular.',
    rating: 5,
    date: 'Junho, 2026',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    guestsCount: 80
  },
  {
    id: 't3',
    name: 'Mariana de Oliveira',
    eventType: 'Chá Revelação / Batizado',
    location: 'Santo André - SP',
    comment: 'Incrível! Não precisei me preocupar com nada. Chegaram no horário, montaram tudo rapidinho e deixaram o espaço limpíssimo no final. Nota 1000!',
    rating: 5,
    date: 'Maio, 2026',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    guestsCount: 60
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'espaco',
    question: 'Qual o espaço e infraestrutura que o local precisa ter?',
    answer: 'Precisamos apenas de um espaço plano de aproximadamente 2m x 1,5m para a montagem da nossa bancada e uma tomada elétrica comum (110V ou 220V) para o forno e iluminação. Se não houver energia, também temos opção de forno a gás!',
    category: 'estrutura'
  },
  {
    id: 'duracao',
    question: 'Qual a duração do serviço de buffet no evento?',
    answer: 'Nosso buffet padrão atende durante 3 a 4 horas de serviço contínuo de pizza à vontade. Chegamos aproximadamente 1 hora antes do início para montagem e aquecimento do forno.',
    category: 'logistica'
  },
  {
    id: 'quantidade',
    question: 'Existe um número mínimo de pessoas para contratar?',
    answer: 'Atendemos desde pequenas reuniões intimistas a partir de 20 pessoas até grandes eventos corporativos com mais de 300 convidados.',
    category: 'logistica'
  },
  {
    id: 'sabores',
    question: 'Quantos sabores posso escolher para o meu evento?',
    answer: 'Você pode escolher até 6 sabores salgados e 2 sabores doces do nosso cardápio no pacote padrão. Para eventos maiores, podemos personalizar o menu com mais variedade.',
    category: 'cardapio'
  },
  {
    id: 'regiao',
    question: 'Quais regiões a Pizza Taco atende?',
    answer: 'Atendemos toda a Grande São Paulo, ABCD, Alphaville, Granja Viana e litoral/interior paulista sob consulta de deslocamento.',
    category: 'logistica'
  },
  {
    id: 'sobras',
    question: 'E se sobrar pizzas preparadas?',
    answer: 'Todas as pizzas pré-escolhidas contratadas pertencem a você! Se ao final do evento houver pizzas não assadas, embalamos com cuidado para você guardar na geladeira.',
    category: 'estrutura'
  },
  {
    id: 'restricoes_alimentares',
    question: 'Vocês oferecem opções vegetarianas, veganas ou sem lactose?',
    answer: 'Sim! Nosso cardápio conta com opções vegetarianas deliciosas como Abobrinha Especial e Margherita. Também adaptamos recheios sem lactose ou veganos sob demanda informada no momento da contratação.',
    category: 'cardapio'
  },
  {
    id: 'bebidas_loucas',
    question: 'O buffet inclui bebidas ou pratos e talheres?',
    answer: 'Nosso serviço tem como diferencial a praticidade da Pizza Taco servida quentinha em invólucros de papel acoplado individual, dispensando pratos e talheres! As bebidas e serviços adicionais podem ser agregados ao seu pacote sob consulta.',
    category: 'estrutura'
  },
  {
    id: 'formas_pagamento',
    question: 'Quais são as formas de pagamento e como funciona a reserva?',
    answer: 'A reserva da data é confirmada mediante sinal de 30%. O saldo restante pode ser quitado via Pix ou parcelado no cartão de crédito em até 12x até a data estipulada em contrato.',
    category: 'logistica'
  },
  {
    id: 'equipe_uniformizada',
    question: 'A equipe vem uniformizada para o atendimento no evento?',
    answer: 'Com certeza! Toda a nossa equipe de pizzaiolos e auxiliares se apresenta devidamente uniformizada, com equipamentos higienizados e treinamento para um atendimento atencioso e ágil.',
    category: 'estrutura'
  },
  {
    id: 'locais_abertos',
    question: 'É possível realizar o buffet em áreas abertas ou ao ar livre?',
    answer: 'Sim! Atendemos em quintais, chácaras, terraços e garagens. Solicitamos apenas uma cobertura (tenda ou varanda) para proteção do forno contra vento forte, sol direto ou chuva.',
    category: 'estrutura'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Nossa estrutura e apresentação nos eventos',
    type: 'Buffet',
    imageUrl: img01,
    likes: 342,
    instagramUrl: INSTAGRAM_URL
  },
  {
    id: 'g2',
    title: 'Pizza Taco quentinha e crocante pronta para servir',
    type: 'Sabor Especial',
    imageUrl: img02,
    likes: 512,
    instagramUrl: INSTAGRAM_URL
  },
  {
    id: 'g3',
    title: 'Variedades do cardápio preparadas na hora',
    type: 'Variedade',
    imageUrl: img03,
    likes: 420,
    instagramUrl: INSTAGRAM_URL
  },
  {
    id: 'g4',
    title: 'Embalagem prática e exclusiva Pizza Taco',
    type: 'Embalagem',
    imageUrl: img04,
    likes: 680,
    instagramUrl: INSTAGRAM_URL
  }
];

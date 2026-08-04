import { ASSETS } from './pizzaData';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: 'Dicas para Festas' | 'Gastronomia' | 'Bastidores' | 'Eventos Corporativos';
  excerpt: string;
  content: string[];
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  tags: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Como Calcular a Quantidade Ideal de Pizza Taco para o seu Evento',
    slug: 'como-calcular-quantidade-ideal-pizza-taco',
    category: 'Dicas para Festas',
    excerpt: 'Descubra a fórmula infalível para calcular fatias por pessoa, evitando desperdícios e garantindo que todos os convidados saiam encantados.',
    featured: true,
    author: {
      name: 'Equipe Pizza Taco',
      role: 'Especialistas em Eventos',
    },
    date: '02 de Agosto, 2026',
    readTime: '5 min de leitura',
    image: ASSETS.flavorsDisplay,
    tags: ['Planejamento', 'Cálculo de Porções', 'Buffet em Casa'],
    content: [
      'Organizar um evento memorável envolve atenção a diversos detalhes, e o cálculo das bebidas e alimentos costuma ser uma das principais dúvidas dos anfitriões. Quando o assunto é o buffet de Pizza Taco, a boa notícia é que o formato prático e a variedade de sabores tornam essa conta muito mais simples e assertiva.',
      '### A Regra Geral do Nosso Buffet Rodízio',
      'No formato oferecido pela Pizza Taco, o atendimento funciona no estilo de rodízio contínuo assado na hora no seu evento. Isso significa que a quantidade total de massa e recheios é pré-dimensionada com uma margem de segurança para garantir fartura do início ao fim.',
      'Para planejamento geral, estimamos uma média de **5 a 7 fatias de pizza salgada por adulto** e cerca de **2 fatias de pizza doce** ao final da recepção.',
      '### Fatores que Alteram o Consumo:',
      '- **Perfil dos Convidados:** Eventos com público majoritariamente jovem ou masculino costumam ter um consumo 20% superior à média.',
      '- **Duração do Evento:** Nosso serviço padrão é dimensionado para 3 a 4 horas de festa. Se o evento ultrapassar 5 horas, recomendamos reforçar o planejamento.',
      '- **Bebidas Servidas:** Cervejas e chopp gelado harmonizam perfeitamente com pizza e estimulam o apetite de forma descontraída.',
      '### E para Crianças?',
      'Crianças de 0 a 5 anos normalmente não entram na contagem principal, enquanto crianças de 6 a 11 anos são calculadas como meia porção (equivalente a 3 fatias salgadas).',
      'Com o Pizza Taco, você não precisa se preocupar com louças ou sobrantes complicados: servimos tudo em saquinhos acoplados individuais crocantes e quentinhos!'
    ]
  },
  {
    id: '2',
    title: 'O Segredo do Formato Taco: Praticidade e Sabor em Cada Dobra',
    slug: 'o-segredo-do-formato-taco',
    category: 'Gastronomia',
    excerpt: 'Esqueça os pratos e talheres! Saiba como o formato dobrado no papel acoplado mantém a pizza quentinha e permite socializar em pé com liberdade.',
    featured: false,
    author: {
      name: 'Chef Executivo Pizza Taco',
      role: 'Desenvolvimento Gastronômico',
    },
    date: '28 de Julho, 2026',
    readTime: '4 min de leitura',
    image: ASSETS.packaging,
    tags: ['Inovação', 'Praticidade', 'Design Gastronômico'],
    content: [
      'A pizza é uma paixão mundial indiscutível, mas em eventos sociais e festas com muitos convidados em pé, o consumo tradicional de pizza em prato e talher pode engessar a movimentação e limitar a interação entre as pessoas.',
      'Foi exatamente pensando no dinamismo das celebrações modernas que surgiu a ideia do **Pizza Taco**.',
      '### O Papel Acoplado e a Retenção de Calor',
      'Nosso invólucro de papel acoplado de grau alimentício tem uma dupla função essencial: ele isola termicamente a fatia dobrada ao meio mantendo o queijo Derretido por mais tempo e evita que o molho ou o azeite escorram nas mãos dos convidados.',
      '### Liberdade para Socializar',
      'Com o Pizza Taco em uma das mãos e um drink na outra, os convidados circulam livremente pela pista de dança, jardim ou salão de festas sem precisar procurar uma mesa para se sentar. É a fusão perfeita entre a sofisticação artesanal italiana e o dinamismo da street food mexicana!'
    ]
  },
  {
    id: '3',
    title: 'Harmonização de Bebidas com Pizzas Doces e Salgadas no Evento',
    slug: 'harmonizacao-de-bebidas-com-pizzas',
    category: 'Gastronomia',
    excerpt: 'Vinho, cerveja artesanal ou drinks autorais? Veja as melhores seleções para destacar a riqueza de recheios do nosso buffet.',
    featured: false,
    author: {
      name: 'Sommelier Convidado',
      role: 'Consultor de Bebidas',
    },
    date: '20 de Julho, 2026',
    readTime: '6 min de leitura',
    image: ASSETS.img03,
    tags: ['Harmonização', 'Vinhos', 'Drinks', 'Cervejas'],
    content: [
      'Um buffet de pizza impecável fica ainda mais inesquecível quando acompanhado pelas bebidas certas. O segredo da harmonização está em equilibrar a acidez do molho de tomate, a gordura dos queijos e a intensidade dos temperos.',
      '### 1. Pizzas Leves e Aromáticas (Ex: Abobrinha Especial e Margherita)',
      'Combinam brilhantemente com **Cervejas Pilsen ou Witbier**, ou ainda vinhos brancos leves como Sauvignon Blanc ou Pinot Grigio. Bebidas refrescantes cortam a gordura sutil do queijo e ressaltam as ervas finas.',
      '### 2. Pizzas Encorpadas (Ex: Calabresa Artesanal e Bacon)',
      'Pedem cervejas com mais corpo, como uma **IPA ou Red Ale**, além de vinhos tintos jovens de boa acidez como Chianti, Malbec ou Merlot.',
      '### 3. Pizzas Doces (Ex: Nutella com Morango e Banana com Canela)',
      'Para finalizar a noite com chave de ouro, nada como um cálice de **Vinho do Porto**, espumante Moscatel bem gelado ou café expresso recém-tirado.'
    ]
  },
  {
    id: '4',
    title: 'Checklist Definitivo para Organizar uma Festa em Casa Sem Estresse',
    slug: 'checklist-definitivo-festa-em-casa',
    category: 'Dicas para Festas',
    excerpt: 'Planejar uma recepção residencial pode ser leve e prazeroso. Veja nosso passo a passo com linha do tempo de 30 dias para o sucesso total.',
    featured: false,
    author: {
      name: 'Equipe de Eventos',
      role: 'Planejamento e Gestão',
    },
    date: '12 de Julho, 2026',
    readTime: '7 min de leitura',
    image: ASSETS.eventTeam,
    tags: ['Checklist', 'Organização', 'Festa Residencial'],
    content: [
      'Quem gosta de receber amigos e familiares em casa sabe que o segredo de uma recepção memorável é a antecipação. Ninguém quer passar a própria festa trancado na cozinha limpando pratos ou checando o forno.',
      '### 30 Dias Antes:',
      '- Defina a data, horário e estimativa de lista de convidados.',
      '- Reserve o serviço de buffet da Pizza Taco para garantir a disponibilidade da equipe na sua data preferida.',
      '### 15 Dias Antes:',
      '- Envie os convites digitais com pedido de confirmação de presença (RSVP).',
      '- Defina a playlist musical e cheque pontos de iluminação ambiente.',
      '### 3 Dias Antes:',
      '- Compre bebidas não alcoólicas, gelo e verifique o espaço onde nossa equipe montará a bancada de forno e apoio.',
      '### No Dia da Festa:',
      '- Relaxe! A equipe Pizza Taco chega com antecedência prévia, leva toda a estrutura necessária e deixa o local impecável.'
    ]
  },
  {
    id: '5',
    title: 'Bastidores: A Ciência e Arte da Nossa Massa de Fermentação Natural',
    slug: 'bastidores-massa-fermentacao-natural',
    category: 'Bastidores',
    excerpt: 'Conheça o processo artesanal de maturação por 48 horas que torna a massa da Pizza Taco tão leve, crocante e fácil de digerir.',
    featured: false,
    author: {
      name: 'Mestre Pizzaiolo',
      role: 'Chefe de Produção',
    },
    date: '05 de Julho, 2026',
    readTime: '5 min de leitura',
    image: ASSETS.maos,
    tags: ['Fermentação Natural', 'Artesanal', 'Qualidade'],
    content: [
      'Você já se perguntou por que algumas pizzas causam sensação de peso no estômago enquanto outras parecem leves como uma nuvem? O segredo está no tempo de fermentação e na fermentação lenta a frio.',
      '### As 48 Horas de Maturação',
      'Na Pizza Taco, não utilizamos aceleradores químicos ou fermentos industriais em excesso. Nossa massa passa por um descanso refrigerado de no mínimo 48 horas.',
      'Durante esse período, as leveduras naturais quebram os açúcares e glúten complexos do trigo. O resultado é uma massa extremamente aromática, aerada, com alvéolos dourados e digestibility incomparável.',
      'Quando assada em altíssima temperatura em nossos fornos portáteis no seu evento, a borda infla e ganha aquela crocância inconfundível!'
    ]
  },
  {
    id: '6',
    title: 'Eventos Corporativos: Por Que o Buffet Interativo Conecta Pessoas',
    slug: 'eventos-corporativos-buffet-interativo',
    category: 'Eventos Corporativos',
    excerpt: 'Promova networking ativo em convenções e reuniões de empresa com uma experiência gastronômica dinâmica, moderna e altamente engajadora.',
    featured: false,
    author: {
      name: 'Consultor B2B',
      role: 'Eventos Corporativos',
    },
    date: '22 de Junho, 2026',
    readTime: '4 min de leitura',
    image: ASSETS.img007,
    tags: ['Corporativo', 'Networking', 'Confraternização'],
    content: [
      'As festas de fim de ano, lançamentos de produtos e convenções corporativas mudaram drasticamente nos últimos anos. Buffets tradicionais sentados perdem espaço para formatos descontraídos onde os colaboradores podem trocar ideias livremente.',
      '### Agilidade sem Filas',
      'Nosso fluxo de atendimento móvel evita as longas e cansativas filas de refeitório. Os tacos de pizza saem quentinhos continuamente e são distribuídos diretamente na área social do evento.',
      '### Personalização para sua Marca',
      'Oferecemos opções de personalização da embalagem com a identidade do seu evento corporativo, opções vegetarianas e acompanhamento atencioso de garçons treinados.'
    ]
  }
];

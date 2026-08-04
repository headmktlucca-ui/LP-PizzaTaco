export interface PizzaFlavor {
  id: string;
  name: string;
  category: 'tradicional' | 'gourmet' | 'vegetariano' | 'doce';
  description: string;
  ingredients: string[];
  badge?: 'Mais Pedido' | 'Lançamento' | 'Favorito das Crianças' | 'Gourmet' | 'Chef Special';
  image: string;
  isPopular?: boolean;
}

export interface PackageFeature {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlight?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  eventType: string;
  location: string;
  comment: string;
  rating: number;
  date: string;
  avatar: string;
  guestsCount: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'estrutura' | 'pagamento' | 'cardapio' | 'logistica';
}

export interface CalculatorState {
  adults: number;
  children: number;
  eventType: string;
  eventDurationHours: number;
  eventDate: string;
  eventLocation: string;
  selectedFlavors: string[];
  includeBeverages: boolean;
  includeDessertSpecial: boolean;
  clientName: string;
  clientPhone: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  type: string;
  imageUrl: string;
  likes: number;
  instagramUrl: string;
}

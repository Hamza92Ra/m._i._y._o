export type Lang = 'fr' | 'en' | 'ar';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  qty: number;
}

export interface MenuItem {
  id: string;
  name?: string;
  nameKey?: string;
  descKey: string;
  price: number;
  emoji?: string;
  badge?: boolean;
  special?: boolean;
}

export interface Category {
  id: string;
  icon: string;
  titleKey: string;
  items: MenuItem[];
}
export interface MenuItem {
  id: string;
  name?: string;
  nameKey?: string;
  descKey: string;
  price: number;
  image?: string;      // <-- AJOUTE ÇA
  emoji?: string;      // tu peux garder ou supprimer
  badge?: boolean;
  special?: boolean;
}
// lib/types.ts
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
  image?: string;
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
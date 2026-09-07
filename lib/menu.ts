import type { Category } from './types';

export const categories: Category[] = [
  {
    id: 'mac',
    icon: 'fas fa-cheese',
    titleKey: 'cat_mac',
    items: [
      { id: 'mac1', name: 'Mac & Cheese', descKey: 'desc_mac1', price: 35, emoji: '🧀' },
      { id: 'mac2', nameKey: 'name_mac2', descKey: 'desc_mac2', price: 45, emoji: '🥓' },
      { id: 'mac3', nameKey: 'name_mac3', descKey: 'desc_mac3', price: 55, emoji: '🍖' },
    ],
  },
  {
    id: 'burgers',
    icon: 'fas fa-burger',
    titleKey: 'cat_burgers',
    items: [
      { id: 'burg1', name: 'Cheeseburger', descKey: 'desc_burg1', price: 40, emoji: '🍔' },
      { id: 'burg2', nameKey: 'name_burg2', descKey: 'desc_burg2', price: 59, emoji: '🍔', badge: true },
      { id: 'burg3', name: 'Chickenburger', descKey: 'desc_burg3', price: 40, emoji: '🐔' },
      { id: 'burg4', nameKey: 'name_burg4', descKey: 'desc_burg4', price: 59, emoji: '🐔' },
    ],
  },
  {
    id: 'sandwich',
    icon: 'fas fa-bread-slice',
    titleKey: 'cat_sandwich',
    items: [
      { id: 'sand1', nameKey: 'name_sand1', descKey: 'desc_sand1', price: 35, emoji: '🥖' },
      { id: 'sand2', nameKey: 'name_sand2', descKey: 'desc_sand2', price: 35, emoji: '🍗' },
      { id: 'sand3', nameKey: 'name_sand3', descKey: 'desc_sand3', price: 49, emoji: '🥩' },
    ],
  },
  {
    id: 'lunch',
    icon: 'fas fa-box-open',
    titleKey: 'cat_lunch',
    items: [
      { id: 'lunch1', nameKey: 'name_lunch', descKey: 'desc_lunch', price: 65, special: true },
    ],
  },
];

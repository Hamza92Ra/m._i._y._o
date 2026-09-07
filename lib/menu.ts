import type { Category } from './types';

export const categories: Category[] = [
  {
    id: 'salades',
    icon: 'fas fa-leaf',
    titleKey: 'cat_salades',
    items: [
      { id: 'sal1', name: 'Salade du Chef', descKey: 'desc_sal1', price: 24, image: '/images/salade-chef.png' },
      { id: 'sal2', name: 'Salade de Pâtes', descKey: 'desc_sal2', price: 24, image: '/images/salade-pates.png' },
      { id: 'sal3', name: 'Salade Fraîcheur', descKey: 'desc_sal3', price: 29, image: '/images/salade-fraicheur.png' },
    ],
  },
  {
    id: 'mac',
    icon: 'fas fa-cheese',
    titleKey: 'cat_mac',
    items: [
      { id: 'mac1', name: 'Mac & Cheese', descKey: 'desc_mac1', price: 35, image: '/images/mac-cheese.png' },
      { id: 'mac2', nameKey: 'name_mac2', descKey: 'desc_mac2', price: 45, image: '/images/mac-cheese-charcuterie.png' },
      { id: 'mac3', nameKey: 'name_mac3', descKey: 'desc_mac3', price: 55, image: '/images/mac-cheese-pepperoni.png' },
    ],
  },
  {
    id: 'fried',
    icon: 'fas fa-fire',
    titleKey: 'cat_fried',
    items: [
      { id: 'fr1', name: 'Corndog', descKey: 'desc_fr1', price: 20, image: '/images/corndog.png' },
      { id: 'fr2', name: 'Cheese Fries', descKey: 'desc_fr2', price: 25, image: '/images/cheese-fries.png' },
      { id: 'fr3', name: 'Cheese Potatoes', descKey: 'desc_fr3', price: 30, image: '/images/cheese-potatoes.png' },
      { id: 'fr4', name: 'Chicken Crunch (5pcs)', descKey: 'desc_fr4', price: 30, image: '/images/chicken-crunch.png' },
    ],
  },
  {
    id: 'burgers',
    icon: 'fas fa-burger',
    titleKey: 'cat_burgers',
    items: [
      { id: 'burg1', name: 'Cheeseburger', descKey: 'desc_burg1', price: 40, image: '/images/burger-cheese.png' },
      { id: 'burg2', nameKey: 'name_burg2', descKey: 'desc_burg2', price: 59, image: '/images/burger-double-cheese.png', badge: true },
      { id: 'burg3', name: 'Chickenburger', descKey: 'desc_burg3', price: 40, image: '/images/burger-chicken.png' },
      { id: 'burg4', nameKey: 'name_burg4', descKey: 'desc_burg4', price: 59, image: '/images/burger-double-chicken.png' },
    ],
  },
  {
    id: 'sandwich',
    icon: 'fas fa-bread-slice',
    titleKey: 'cat_sandwich',
    items: [
      { id: 'sand1', nameKey: 'name_sand1', descKey: 'desc_sand1', price: 35, image: '/images/sandwich-viande-hachee.png' },
      { id: 'sand2', nameKey: 'name_sand2', descKey: 'desc_sand2', price: 35, image: '/images/sandwich-poulet.png' },
      { id: 'sand3', nameKey: 'name_sand3', descKey: 'desc_sand3', price: 49, image: '/images/sandwich-viande-boeuf.png' },
    ],
  },
  {
    id: 'desserts',
    icon: 'fas fa-ice-cream',
    titleKey: 'cat_desserts',
    items: [
      {
        id: 'des1', name: 'Salade de Fruits', price: 15, image: '../public/images/dessert-peche-lotus.png',
        descKey: ''
      },
      {
        id: 'des2', name: 'Pêché Gourmand', price: 20, image: '/images/dessert-peche.png',
        descKey: ''
      },
      { id: 'des3', name: 'Pêché Gourmand Lotus', price: 20, image: '/images/dessert-peche-lotus.png' ,descKey:''},
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
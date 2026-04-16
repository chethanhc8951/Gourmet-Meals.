export interface FoodItem {
  id: string;
  name: string;
  image: string;
  price: number;
  description: string;
  calories: number;
  ingredients: string[];
}

export const MENU_DATA: FoodItem[] = [
  {
    id: '1',
    name: 'Classic Wagyu Burger',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop',
    price: 18.99,
    description: 'Juicy Wagyu beef patty topped with aged cheddar, caramelized onions, and our secret truffle aioli on a toasted brioche bun.',
    calories: 850,
    ingredients: ['Wagyu Beef', 'Aged Cheddar', 'Caramelized Onions', 'Truffle Aioli', 'Brioche Bun', 'Arugula'],
  },
  {
    id: '2',
    name: 'Garden Fresh Salad',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop',
    price: 12.50,
    description: 'A vibrant mix of organic greens, cherry tomatoes, cucumbers, avocado, and toasted pumpkin seeds with a lemon-tahini dressing.',
    calories: 320,
    ingredients: ['Organic Greens', 'Cherry Tomatoes', 'Cucumbers', 'Avocado', 'Pumpkin Seeds', 'Lemon-Tahini Dressing'],
  },
  {
    id: '3',
    name: 'Truffle Mushroom Pasta',
    image: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=800&auto=format&fit=crop',
    price: 22.00,
    description: 'Artisanal pappardelle pasta tossed in a rich wild mushroom cream sauce, finished with fresh truffle shavings and parmesan.',
    calories: 680,
    ingredients: ['Pappardelle Pasta', 'Wild Mushrooms', 'Heavy Cream', 'Fresh Black Truffle', 'Parmesan', 'Parsley'],
  },
  {
    id: '4',
    name: 'Seared Atlantic Salmon',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=800&auto=format&fit=crop',
    price: 26.50,
    description: 'Pan-seared Atlantic salmon fillet served over a bed of roasted asparagus and garlic butter fingerling potatoes.',
    calories: 540,
    ingredients: ['Atlantic Salmon', 'Asparagus', 'Fingerling Potatoes', 'Garlic Butter', 'Lemon', 'Dill'],
  },
  {
    id: '5',
    name: 'Spicy Tuna Poke Bowl',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop',
    price: 16.00,
    description: 'Fresh ahi tuna cubes marinated in spicy mayo and soy, topped with edamame, seaweed salad, and pickled ginger over sushi rice.',
    calories: 450,
    ingredients: ['Ahi Tuna', 'Sushi Rice', 'Edamame', 'Seaweed Salad', 'Pickled Ginger', 'Spicy Mayo'],
  },
  {
    id: '6',
    name: 'Dark Chocolate Lava Cake',
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=800&auto=format&fit=crop',
    price: 9.50,
    description: 'Warm, gooey dark chocolate cake with a molten center, served with a scoop of vanilla bean gelato and fresh raspberries.',
    calories: 520,
    ingredients: ['Dark Chocolate', 'Butter', 'Eggs', 'Vanilla Gelato', 'Raspberries', 'Cocoa Powder'],
  },
];

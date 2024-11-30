export const menuItems = [
  {
    id: '1',
    name: 'Truffle Arancini',
    description: 'Crispy risotto balls with black truffle and mozzarella',
    price: 16,
    image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80',
    category: 'Starters',
    dietary: ['vegetarian']
  },
  {
    id: '2',
    name: 'Wagyu Ribeye',
    description: 'Grade A5 Japanese Wagyu with roasted vegetables',
    price: 65,
    image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?auto=format&fit=crop&q=80',
    category: 'Main Courses'
  }
] as const;
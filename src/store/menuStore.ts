import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { MenuItem } from '../types';

interface MenuState {
  items: MenuItem[];
  addItem: (item: MenuItem) => void;
  updateItem: (id: string, item: MenuItem) => void;
  deleteItem: (id: string) => void;
  getItemsByCategory: (category: string) => MenuItem[];
}

export const useMenuStore = create<MenuState>()(
  persist(
    (set, get) => ({
      items: [
        {
          id: '1',
          name: 'Truffle Risotto',
          description: 'Creamy risotto with black truffle and parmesan',
          price: 28,
          category: 'Main Course',
          image: 'https://images.unsplash.com/photo-1673421983526-7d6ed9534a65?auto=format&fit=crop&q=80',
          dietary: ['vegetarian']
        },
        {
          id: '2',
          name: 'Wagyu Steak',
          description: 'A5 Japanese Wagyu with roasted vegetables',
          price: 85,
          category: 'Main Course',
          image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?auto=format&fit=crop&q=80'
        }
      ],
      addItem: (item) => set((state) => ({ 
        items: [...state.items, item] 
      })),
      updateItem: (id, updatedItem) => set((state) => ({
        items: state.items.map((item) => 
          item.id === id ? { ...item, ...updatedItem } : item
        )
      })),
      deleteItem: (id) => set((state) => ({
        items: state.items.filter((item) => item.id !== id)
      })),
      getItemsByCategory: (category) => {
        const { items } = get();
        return category === 'All' 
          ? items 
          : items.filter((item) => item.category === category);
      }
    }),
    {
      name: 'menu-storage'
    }
  )
);
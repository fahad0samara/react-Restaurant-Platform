import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type OrderStatus = 'pending' | 'preparing' | 'ready' | 'served' | 'cancelled';

export interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  specialInstructions?: string;
}

export interface Order {
  id: string;
  tableNumber: string;
  items: OrderItem[];
  status: OrderStatus;
  priority: number;
  createdAt: string;
  estimatedCompletionTime?: string;
  completedAt?: string;
}

interface KitchenState {
  orders: Order[];
  addOrder: (order: Omit<Order, 'id' | 'createdAt'>) => void;
  updateOrderStatus: (id: string, status: OrderStatus) => void;
  updateEstimatedTime: (id: string, time: string) => void;
  completeOrder: (id: string) => void;
  cancelOrder: (id: string) => void;
  getOrdersByStatus: (status: OrderStatus) => Order[];
  getPendingOrdersCount: () => number;
}

export const useKitchenStore = create<KitchenState>()(
  persist(
    (set, get) => ({
      orders: [],
      addOrder: (order) =>
        set((state) => ({
          orders: [
            {
              ...order,
              id: Math.random().toString(36).substr(2, 9),
              createdAt: new Date().toISOString(),
            },
            ...state.orders,
          ],
        })),
      updateOrderStatus: (id, status) =>
        set((state) => ({
          orders: state.orders.map((order) =>
            order.id === id ? { ...order, status } : order
          ),
        })),
      updateEstimatedTime: (id, time) =>
        set((state) => ({
          orders: state.orders.map((order) =>
            order.id === id ? { ...order, estimatedCompletionTime: time } : order
          ),
        })),
      completeOrder: (id) =>
        set((state) => ({
          orders: state.orders.map((order) =>
            order.id === id
              ? {
                  ...order,
                  status: 'served',
                  completedAt: new Date().toISOString(),
                }
              : order
          ),
        })),
      cancelOrder: (id) =>
        set((state) => ({
          orders: state.orders.map((order) =>
            order.id === id
              ? {
                  ...order,
                  status: 'cancelled',
                  completedAt: new Date().toISOString(),
                }
              : order
          ),
        })),
      getOrdersByStatus: (status) => {
        const { orders } = get();
        return orders.filter((order) => order.status === status);
      },
      getPendingOrdersCount: () => {
        const { orders } = get();
        return orders.filter((order) => order.status === 'pending').length;
      },
    }),
    {
      name: 'kitchen-storage',
    }
  )
);
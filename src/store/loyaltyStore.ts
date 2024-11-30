import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface LoyaltyPoints {
  userId: string;
  points: number;
  history: {
    id: string;
    date: string;
    points: number;
    description: string;
    type: 'earned' | 'redeemed';
  }[];
}

interface LoyaltyState {
  userPoints: Record<string, LoyaltyPoints>;
  addPoints: (userId: string, points: number, description: string) => void;
  redeemPoints: (userId: string, points: number, description: string) => boolean;
  getPoints: (userId: string) => number;
  getHistory: (userId: string) => LoyaltyPoints['history'];
}

export const useLoyaltyStore = create<LoyaltyState>()(
  persist(
    (set, get) => ({
      userPoints: {},
      addPoints: (userId, points, description) =>
        set((state) => {
          const currentPoints = state.userPoints[userId] || { points: 0, history: [], userId };
          return {
            userPoints: {
              ...state.userPoints,
              [userId]: {
                ...currentPoints,
                points: currentPoints.points + points,
                history: [
                  {
                    id: Math.random().toString(36).substr(2, 9),
                    date: new Date().toISOString(),
                    points,
                    description,
                    type: 'earned',
                  },
                  ...currentPoints.history,
                ],
              },
            },
          };
        }),
      redeemPoints: (userId, points, description) => {
        const currentPoints = get().userPoints[userId]?.points || 0;
        if (currentPoints < points) return false;

        set((state) => ({
          userPoints: {
            ...state.userPoints,
            [userId]: {
              ...state.userPoints[userId],
              points: currentPoints - points,
              history: [
                {
                  id: Math.random().toString(36).substr(2, 9),
                  date: new Date().toISOString(),
                  points: -points,
                  description,
                  type: 'redeemed',
                },
                ...state.userPoints[userId].history,
              ],
            },
          },
        }));
        return true;
      },
      getPoints: (userId) => get().userPoints[userId]?.points || 0,
      getHistory: (userId) => get().userPoints[userId]?.history || [],
    }),
    {
      name: 'loyalty-storage',
    }
  )
);
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Review {
  id: string;
  userId: string;
  userName: string;
  menuItemId: string;
  rating: number;
  comment: string;
  date: string;
}

interface ReviewState {
  reviews: Review[];
  addReview: (review: Review) => void;
  updateReview: (id: string, review: Partial<Review>) => void;
  deleteReview: (id: string) => void;
  getReviewsByMenuItem: (menuItemId: string) => Review[];
  getAverageRating: (menuItemId: string) => number;
}

export const useReviewStore = create<ReviewState>()(
  persist(
    (set, get) => ({
      reviews: [],
      addReview: (review) => 
        set((state) => ({ reviews: [...state.reviews, review] })),
      updateReview: (id, updatedReview) =>
        set((state) => ({
          reviews: state.reviews.map((review) =>
            review.id === id ? { ...review, ...updatedReview } : review
          ),
        })),
      deleteReview: (id) =>
        set((state) => ({
          reviews: state.reviews.filter((review) => review.id !== id),
        })),
      getReviewsByMenuItem: (menuItemId) => {
        const { reviews } = get();
        return reviews.filter((review) => review.menuItemId === menuItemId);
      },
      getAverageRating: (menuItemId) => {
        const reviews = get().getReviewsByMenuItem(menuItemId);
        if (reviews.length === 0) return 0;
        const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
        return sum / reviews.length;
      },
    }),
    {
      name: 'reviews-storage',
    }
  )
);
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import ReactStars from 'react-rating-stars-component';
import { useReviewStore } from '../../store/reviewStore';
import { useAuthStore } from '../../store/authStore';
import { toast } from 'react-hot-toast';

const reviewSchema = z.object({
  rating: z.number().min(1).max(5),
  comment: z.string().min(10, 'Comment must be at least 10 characters'),
});

type ReviewFormData = z.infer<typeof reviewSchema>;

interface ReviewFormProps {
  menuItemId: string;
  onSuccess?: () => void;
}

export default function ReviewForm({ menuItemId, onSuccess }: ReviewFormProps) {
  const { user } = useAuthStore();
  const { addReview } = useReviewStore();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<ReviewFormData>({
    resolver: zodResolver(reviewSchema),
  });

  const onSubmit = (data: ReviewFormData) => {
    if (!user) {
      toast.error('Please login to submit a review');
      return;
    }

    const review = {
      id: Math.random().toString(36).substr(2, 9),
      userId: user.id,
      userName: user.name,
      menuItemId,
      rating: data.rating,
      comment: data.comment,
      date: new Date().toISOString(),
    };

    addReview(review);
    toast.success('Review submitted successfully');
    onSuccess?.();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Rating
        </label>
        <ReactStars
          count={5}
          onChange={(rating: number) => setValue('rating', rating)}
          size={24}
          activeColor="#ef4444"
        />
        {errors.rating && (
          <p className="mt-1 text-sm text-red-600">{errors.rating.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Comment
        </label>
        <textarea
          {...register('comment')}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
          placeholder="Share your experience..."
        />
        {errors.comment && (
          <p className="mt-1 text-sm text-red-600">{errors.comment.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
      >
        Submit Review
      </button>
    </form>
  );
}
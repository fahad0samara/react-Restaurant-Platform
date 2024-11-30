import React from 'react';
import { format } from 'date-fns';
import { Star } from 'lucide-react';
import { useReviewStore } from '../../store/reviewStore';
import { motion } from 'framer-motion';

interface ReviewListProps {
  menuItemId: string;
}

export default function ReviewList({ menuItemId }: ReviewListProps) {
  const { getReviewsByMenuItem, getAverageRating } = useReviewStore();
  const reviews = getReviewsByMenuItem(menuItemId);
  const averageRating = getAverageRating(menuItemId);

  return (
    <div className="space-y-6">
      {reviews.length > 0 && (
        <div className="flex items-center gap-2 mb-4">
          <Star className="h-5 w-5 text-yellow-400 fill-current" />
          <span className="text-lg font-semibold">{averageRating.toFixed(1)}</span>
          <span className="text-gray-500">({reviews.length} reviews)</span>
        </div>
      )}

      <div className="space-y-4">
        {reviews.map((review, index) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="border rounded-lg p-4"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                  <span className="text-sm font-medium text-red-600">
                    {review.userName.charAt(0)}
                  </span>
                </div>
                <span className="font-medium">{review.userName}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < review.rating
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500">
                  {format(new Date(review.date), 'MMM d, yyyy')}
                </span>
              </div>
            </div>
            <p className="text-gray-600">{review.comment}</p>
          </motion.div>
        ))}

        {reviews.length === 0 && (
          <p className="text-center text-gray-500 py-4">
            No reviews yet. Be the first to review!
          </p>
        )}
      </div>
    </div>
  );
}
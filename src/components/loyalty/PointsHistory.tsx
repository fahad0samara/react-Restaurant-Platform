import React from 'react';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { useLoyaltyStore } from '../../store/loyaltyStore';
import { useAuthStore } from '../../store/authStore';

export default function PointsHistory() {
  const { user } = useAuthStore();
  const { getHistory } = useLoyaltyStore();
  
  if (!user) return null;
  
  const history = getHistory(user.id);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Points History</h3>
      
      <div className="space-y-3">
        {history.map((entry, index) => (
          <motion.div
            key={entry.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-full ${
                entry.type === 'earned' 
                  ? 'bg-green-100 text-green-600'
                  : 'bg-red-100 text-red-600'
              }`}>
                {entry.type === 'earned' ? (
                  <TrendingUp className="h-5 w-5" />
                ) : (
                  <TrendingDown className="h-5 w-5" />
                )}
              </div>
              <div>
                <p className="font-medium">{entry.description}</p>
                <p className="text-sm text-gray-500">
                  {format(new Date(entry.date), 'MMM d, yyyy')}
                </p>
              </div>
            </div>
            <span className={`font-semibold ${
              entry.type === 'earned' ? 'text-green-600' : 'text-red-600'
            }`}>
              {entry.type === 'earned' ? '+' : '-'}{Math.abs(entry.points)}
            </span>
          </motion.div>
        ))}

        {history.length === 0 && (
          <p className="text-center text-gray-500 py-4">
            No points history yet. Start earning points with your orders!
          </p>
        )}
      </div>
    </div>
  );
}
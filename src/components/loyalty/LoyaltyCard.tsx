import React from 'react';
import { motion } from 'framer-motion';
import QRCode from 'qrcode.react';
import { Crown, Gift } from 'lucide-react';
import { useLoyaltyStore } from '../../store/loyaltyStore';
import { useAuthStore } from '../../store/authStore';

export default function LoyaltyCard() {
  const { user } = useAuthStore();
  const { getPoints } = useLoyaltyStore();
  
  if (!user) return null;
  
  const points = getPoints(user.id);
  const tier = points >= 2000 ? 'Platinum' : points >= 1000 ? 'Gold' : 'Silver';
  const nextTier = tier === 'Silver' ? 'Gold' : tier === 'Gold' ? 'Platinum' : 'Max';
  const pointsToNextTier = tier === 'Silver' ? 1000 - points : tier === 'Gold' ? 2000 - points : 0;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-gradient-to-r from-red-600 to-red-800 rounded-xl p-6 text-white shadow-xl"
    >
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-xl font-semibold mb-1">{user.name}</h3>
          <div className="flex items-center gap-2">
            <Crown className="h-5 w-5" />
            <span>{tier} Member</span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold">{points}</div>
          <div className="text-sm opacity-75">Points</div>
        </div>
      </div>

      {tier !== 'Platinum' && (
        <div className="mb-6">
          <div className="flex justify-between text-sm mb-2">
            <span>Progress to {nextTier}</span>
            <span>{pointsToNextTier} points needed</span>
          </div>
          <div className="h-2 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-white"
              style={{
                width: `${(points / (tier === 'Silver' ? 1000 : 2000)) * 100}%`,
              }}
            />
          </div>
        </div>
      )}

      <div className="flex justify-between items-end">
        <div className="flex items-center gap-2">
          <Gift className="h-5 w-5" />
          <span className="text-sm">Scan to earn points</span>
        </div>
        <div className="bg-white p-2 rounded-lg">
          <QRCode
            value={`LOYALTY-${user.id}`}
            size={64}
            level="L"
            includeMargin={false}
          />
        </div>
      </div>
    </motion.div>
  );
}
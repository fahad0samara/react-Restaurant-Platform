import React from 'react';
import { motion } from 'framer-motion';
import { Star, Gift, Award, Trophy } from 'lucide-react';
import Navbar from '../../components/Navbar';

const rewards = [
  {
    id: '1',
    name: 'Free Dessert',
    points: 500,
    description: 'Enjoy any dessert from our menu on the house',
    icon: Gift
  },
  {
    id: '2',
    name: 'Priority Reservations',
    points: 1000,
    description: 'Get priority booking for special events and peak hours',
    icon: Star
  },
  {
    id: '3',
    name: "Chef's Table Experience",
    points: 2500,
    description: 'Exclusive dining experience at our chef\'s table',
    icon: Award
  }
];

export default function Rewards() {
  const userPoints = 750;
  const membershipLevel = userPoints >= 2000 ? 'Platinum' : userPoints >= 1000 ? 'Gold' : 'Silver';

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-12 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-sm p-6"
        >
          <div className="text-center mb-8">
            <Trophy className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Your Rewards</h2>
            <div className="flex items-center justify-center gap-2">
              <span className="text-lg">{membershipLevel} Member</span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                {userPoints} points
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {rewards.map((reward, index) => (
              <motion.div
                key={reward.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border rounded-lg p-6 text-center"
              >
                <reward.icon className="h-8 w-8 mx-auto mb-4 text-red-600" />
                <h3 className="text-lg font-medium mb-2">{reward.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{reward.description}</p>
                <div className="flex items-center justify-center gap-2 text-sm">
                  <span>{reward.points} points</span>
                  <button
                    disabled={userPoints < reward.points}
                    className={`px-4 py-2 rounded-md ${
                      userPoints >= reward.points
                        ? 'bg-red-600 text-white hover:bg-red-700'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    Redeem
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-medium mb-4">How to Earn Points</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Dining',
                  description: 'Earn 1 point for every $1 spent on food and beverages',
                  icon: Star
                },
                {
                  title: 'Events',
                  description: 'Double points when attending special events',
                  icon: Gift
                },
                {
                  title: 'Referrals',
                  description: '500 bonus points for each friend you refer',
                  icon: Award
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="p-2 bg-white rounded-lg">
                    <item.icon className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
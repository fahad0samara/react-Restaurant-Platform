import React from 'react';
import { format } from 'date-fns';
import { Calendar, Clock, Users, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';

const reservations = [
  {
    id: '1',
    date: '2024-03-25',
    time: '19:00',
    guests: 4,
    table: 'Table 12',
    status: 'confirmed',
    specialRequests: 'Window seat preferred'
  },
  {
    id: '2',
    date: '2024-04-01',
    time: '20:00',
    guests: 2,
    table: 'Table 5',
    status: 'pending',
    specialRequests: 'Anniversary celebration'
  }
];

export default function Reservations() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-12 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-sm p-6"
        >
          <h2 className="text-2xl font-semibold mb-6">My Reservations</h2>
          
          <div className="space-y-6">
            {reservations.map((reservation) => (
              <motion.div
                key={reservation.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="border rounded-lg p-6 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Reservation #{reservation.id}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    reservation.status === 'confirmed'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {reservation.status}
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-gray-400" />
                    <span>{format(new Date(reservation.date), 'MMMM d, yyyy')}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-gray-400" />
                    <span>{reservation.time}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-gray-400" />
                    <span>{reservation.guests} guests</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-gray-400" />
                    <span>{reservation.table}</span>
                  </div>
                </div>
                
                {reservation.specialRequests && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Special Requests:</span>{' '}
                      {reservation.specialRequests}
                    </p>
                  </div>
                )}
                
                <div className="flex gap-2 mt-4">
                  <button className="btn btn-secondary">Modify</button>
                  <button className="btn btn-secondary text-red-600">Cancel</button>
                </div>
              </motion.div>
            ))}
          </div>
          
          {reservations.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">No reservations found.</p>
              <button className="btn btn-primary mt-4">Make a Reservation</button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
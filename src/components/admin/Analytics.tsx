import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', reservations: 4, revenue: 400 },
  { name: 'Tue', reservations: 3, revenue: 300 },
  { name: 'Wed', reservations: 6, revenue: 600 },
  { name: 'Thu', reservations: 8, revenue: 800 },
  { name: 'Fri', reservations: 12, revenue: 1200 },
  { name: 'Sat', reservations: 15, revenue: 1500 },
  { name: 'Sun', reservations: 10, revenue: 1000 },
];

export default function Analytics() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Analytics Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          { label: 'Total Reservations', value: '58' },
          { label: 'Revenue', value: '$5,800' },
          { label: 'Active Tables', value: '12' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-sm text-gray-600">{stat.label}</p>
            <p className="text-2xl font-semibold mt-2">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Weekly Overview</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="revenue" stroke="#ef4444" fill="#fee2e2" />
              <Area type="monotone" dataKey="reservations" stroke="#3b82f6" fill="#dbeafe" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
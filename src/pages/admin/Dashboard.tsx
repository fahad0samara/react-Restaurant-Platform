import React from 'react';
import { 
  Users, 
  CalendarDays, 
  DollarSign, 
  TrendingUp 
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const stats = [
  { 
    label: 'Total Customers',
    value: '2,345',
    change: '+12%',
    icon: Users,
    trend: 'up'
  },
  {
    label: 'Reservations',
    value: '145',
    change: '+8%',
    icon: CalendarDays,
    trend: 'up'
  },
  {
    label: 'Revenue',
    value: '$23,456',
    change: '+23%',
    icon: DollarSign,
    trend: 'up'
  },
  {
    label: 'Growth',
    value: '18%',
    change: '+2%',
    icon: TrendingUp,
    trend: 'up'
  }
];

const chartData = [
  { date: '2024-01', revenue: 12000, customers: 156 },
  { date: '2024-02', revenue: 19000, customers: 187 },
  { date: '2024-03', revenue: 15000, customers: 163 },
  { date: '2024-04', revenue: 22000, customers: 198 },
  { date: '2024-05', revenue: 28000, customers: 234 },
  { date: '2024-06', revenue: 25000, customers: 215 }
];

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-8">Dashboard Overview</h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <stat.icon className="h-6 w-6 text-gray-400" />
              <span className={`text-sm font-medium ${
                stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </span>
            </div>
            <p className="text-2xl font-semibold text-gray-900 mb-1">{stat.value}</p>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Revenue & Customer Overview</h2>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Area
                yAxisId="left"
                type="monotone"
                dataKey="revenue"
                stroke="#ef4444"
                fill="#fee2e2"
                name="Revenue"
              />
              <Area
                yAxisId="right"
                type="monotone"
                dataKey="customers"
                stroke="#3b82f6"
                fill="#dbeafe"
                name="Customers"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
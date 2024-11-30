import React from 'react';
import { motion } from 'framer-motion';
import { Package, AlertTriangle, RefreshCcw, TrendingUp } from 'lucide-react';

const inventory = [
  {
    id: '1',
    name: 'Premium Wagyu Beef',
    category: 'Meat',
    quantity: 45,
    unit: 'kg',
    reorderPoint: 50,
    lastRestocked: '2024-03-15',
    status: 'low'
  },
  {
    id: '2',
    name: 'Truffle Oil',
    category: 'Condiments',
    quantity: 28,
    unit: 'bottles',
    reorderPoint: 20,
    lastRestocked: '2024-03-10',
    status: 'good'
  }
];

export default function Inventory() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Inventory Management</h1>
        <button className="btn btn-primary flex items-center gap-2">
          <RefreshCcw className="h-5 w-5" />
          Update Stock
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: 'Total Items',
            value: '234',
            change: '+5 this week',
            icon: Package
          },
          {
            title: 'Low Stock Items',
            value: '12',
            change: 'Need attention',
            icon: AlertTriangle,
            urgent: true
          },
          {
            title: 'Stock Value',
            value: '$45,234',
            change: '+8.3% this month',
            icon: TrendingUp
          }
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-gray-100 rounded-lg">
                <stat.icon className={`h-6 w-6 ${
                  stat.urgent ? 'text-red-600' : 'text-gray-600'
                }`} />
              </div>
              <span className={`text-sm ${
                stat.urgent ? 'text-red-600' : 'text-green-600'
              }`}>{stat.change}</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900">{stat.value}</h3>
            <p className="text-sm text-gray-600">{stat.title}</p>
          </motion.div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4">Current Stock</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Item
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Quantity
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Restocked
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {inventory.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {item.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {item.quantity} {item.unit}
                      </div>
                      <div className="text-sm text-gray-500">
                        Reorder at: {item.reorderPoint}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        item.status === 'low'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(item.lastRestocked).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
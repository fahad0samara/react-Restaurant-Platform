import React from 'react';
import { motion } from 'framer-motion';
import { Clock, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import { useKitchenStore, OrderStatus } from '../../store/kitchenStore';
import { format } from 'date-fns';

const statusColors = {
  pending: 'bg-yellow-100 text-yellow-800',
  preparing: 'bg-blue-100 text-blue-800',
  ready: 'bg-green-100 text-green-800',
  served: 'bg-gray-100 text-gray-800',
  cancelled: 'bg-red-100 text-red-800',
};

export default function KitchenDisplay() {
  const { orders, updateOrderStatus, updateEstimatedTime, completeOrder, cancelOrder } = useKitchenStore();
  const [selectedStatus, setSelectedStatus] = React.useState<OrderStatus>('pending');

  const filteredOrders = orders.filter((order) => order.status === selectedStatus);

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Kitchen Display System</h2>
        <div className="flex gap-2">
          {(['pending', 'preparing', 'ready', 'served', 'cancelled'] as OrderStatus[]).map((status) => (
            <button
              key={status}
              onClick={() => setSelectedStatus(status)}
              className={`px-4 py-2 rounded-md capitalize ${
                selectedStatus === status
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredOrders.map((order) => (
          <motion.div
            key={order.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-sm border p-4"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-lg font-semibold">Table {order.tableNumber}</span>
                <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                  statusColors[order.status]
                }`}>
                  {order.status}
                </span>
              </div>
              <span className="text-sm text-gray-500">
                {format(new Date(order.createdAt), 'HH:mm')}
              </span>
            </div>

            <div className="space-y-2 mb-4">
              {order.items.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <div>
                    <span className="font-medium">{item.quantity}x</span>{' '}
                    <span>{item.name}</span>
                  </div>
                  {item.specialInstructions && (
                    <span className="text-sm text-gray-500 italic">
                      {item.specialInstructions}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {order.status === 'pending' && (
              <div className="flex gap-2">
                <button
                  onClick={() => updateOrderStatus(order.id, 'preparing')}
                  className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Start Preparing
                </button>
                <button
                  onClick={() => cancelOrder(order.id)}
                  className="p-2 text-red-600 hover:text-red-700"
                >
                  <XCircle className="h-6 w-6" />
                </button>
              </div>
            )}

            {order.status === 'preparing' && (
              <div className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="time"
                    className="flex-1 px-4 py-2 border rounded-md"
                    onChange={(e) => updateEstimatedTime(order.id, e.target.value)}
                  />
                  <button
                    onClick={() => updateOrderStatus(order.id, 'ready')}
                    className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                  >
                    Mark Ready
                  </button>
                </div>
              </div>
            )}

            {order.status === 'ready' && (
              <button
                onClick={() => completeOrder(order.id)}
                className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
              >
                Mark Served
              </button>
            )}

            {order.estimatedCompletionTime && (
              <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
                <Clock className="h-4 w-4" />
                <span>Est. completion: {order.estimatedCompletionTime}</span>
              </div>
            )}

            {order.priority > 1 && (
              <div className="mt-2 flex items-center gap-2 text-sm text-red-600">
                <AlertTriangle className="h-4 w-4" />
                <span>High Priority</span>
              </div>
            )}
          </motion.div>
        ))}

        {filteredOrders.length === 0 && (
          <div className="col-span-full text-center py-12 text-gray-500">
            No orders with status: {selectedStatus}
          </div>
        )}
      </div>
    </div>
  );
}
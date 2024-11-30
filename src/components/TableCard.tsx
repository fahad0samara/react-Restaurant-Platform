import React from 'react';
import { TableBooking } from '../types';
import { Users } from 'lucide-react';

interface TableCardProps {
  table: TableBooking;
  onSelect: () => void;
}

export default function TableCard({ table, onSelect }: TableCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <img
          src={table.image}
          alt={`Table for ${table.capacity}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2">
          <span className="bg-black/75 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
            <Users className="h-4 w-4" />
            {table.capacity}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-1">Table {table.id}</h3>
          <p className="text-gray-600 text-sm">{table.location}</p>
        </div>
        
        <button
          onClick={onSelect}
          disabled={!table.isAvailable}
          className={`w-full py-2 px-4 rounded-md ${
            table.isAvailable
              ? 'bg-red-600 text-white hover:bg-red-700'
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
          }`}
        >
          {table.isAvailable ? 'Select Table' : 'Not Available'}
        </button>
      </div>
    </div>
  );
}
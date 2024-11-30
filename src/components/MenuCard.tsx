import React from 'react';
import { MenuItem } from '../types';
import { ArrowRight } from 'lucide-react';

interface MenuCardProps {
  item: MenuItem;
  onBookTable: () => void;
  onViewDetails: () => void;
}

export default function MenuCard({ item, onBookTable, onViewDetails }: MenuCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
        {item.dietary && item.dietary.length > 0 && (
          <div className="absolute top-2 right-2">
            <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs">
              {item.dietary[0]}
            </span>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <span className="text-red-600 font-medium">${item.price}</span>
        </div>
        <p className="text-gray-600 text-sm mb-4">{item.description}</p>
        
        <div className="flex gap-2">
          <button
            onClick={onBookTable}
            className="flex-1 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 flex items-center justify-center gap-2"
          >
            Book Table
            <ArrowRight className="h-4 w-4" />
          </button>
          <button
            onClick={onViewDetails}
            className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
}
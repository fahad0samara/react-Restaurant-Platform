import React from 'react';
import { Dialog } from '@headlessui/react';
import { MenuItem } from '../types';
import { X } from 'lucide-react';

interface MenuDetailsProps {
  item: MenuItem;
  isOpen: boolean;
  onClose: () => void;
  onBookTable: () => void;
}

export default function MenuDetails({ item, isOpen, onClose, onBookTable }: MenuDetailsProps) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-2xl w-full bg-white rounded-lg shadow-xl">
          <div className="relative h-64">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover rounded-t-lg"
            />
            <button
              onClick={onClose}
              className="absolute top-2 right-2 p-2 bg-black/50 rounded-full text-white hover:bg-black/75"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <Dialog.Title className="text-2xl font-semibold">
                  {item.name}
                </Dialog.Title>
                <p className="text-gray-600">{item.category}</p>
              </div>
              <span className="text-2xl text-red-600 font-semibold">
                ${item.price}
              </span>
            </div>
            
            <p className="text-gray-700 mb-6">{item.description}</p>
            
            {item.dietary && item.dietary.length > 0 && (
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Dietary Information</h4>
                <div className="flex gap-2">
                  {item.dietary.map((diet) => (
                    <span
                      key={diet}
                      className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                    >
                      {diet}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            <button
              onClick={onBookTable}
              className="w-full bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700"
            >
              Book a Table
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
import React, { useState } from 'react';
import { menuItems } from '../data/menuItems';
import MenuCard from './MenuCard';
import MenuDetails from './MenuDetails';

export default function FoodGallery() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const handleBookTable = () => {
    setIsDetailsOpen(false);
    // Navigate to reservations
    window.location.href = '#reservations';
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-16">Our Specialties</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <MenuCard
              key={item.id}
              item={item}
              onBookTable={handleBookTable}
              onViewDetails={() => {
                setSelectedItem(item);
                setIsDetailsOpen(true);
              }}
            />
          ))}
        </div>
      </div>

      {selectedItem && (
        <MenuDetails
          item={selectedItem}
          isOpen={isDetailsOpen}
          onClose={() => setIsDetailsOpen(false)}
          onBookTable={handleBookTable}
        />
      )}
    </section>
  );
}
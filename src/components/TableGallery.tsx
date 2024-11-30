import React from 'react';
import { tables } from '../data/tables';
import TableCard from './TableCard';

export default function TableGallery() {
  const handleTableSelect = (tableId: string) => {
    // Handle table selection
    console.log(`Selected table: ${tableId}`);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-16">Available Tables</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tables.map((table) => (
            <TableCard
              key={table.id}
              table={table}
              onSelect={() => handleTableSelect(table.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
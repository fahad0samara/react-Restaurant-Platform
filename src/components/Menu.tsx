import React from 'react';

const menuItems = [
  {
    category: "Starters",
    items: [
      { name: "Truffle Arancini", price: 16, description: "Crispy risotto balls with black truffle and mozzarella" },
      { name: "Tuna Tartare", price: 18, description: "Fresh tuna with avocado, citrus, and wasabi aioli" }
    ]
  },
  {
    category: "Main Courses",
    items: [
      { name: "Wagyu Ribeye", price: 65, description: "Grade A5 Japanese Wagyu with roasted vegetables" },
      { name: "Lobster Linguine", price: 45, description: "Fresh Maine lobster with house-made pasta" }
    ]
  }
];

export default function Menu() {
  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-16">Our Menu</h2>
        
        <div className="grid md:grid-cols-2 gap-16">
          {menuItems.map((section) => (
            <div key={section.category}>
              <h3 className="text-2xl font-serif mb-6">{section.category}</h3>
              <div className="space-y-8">
                {section.items.map((item) => (
                  <div key={item.name} className="border-b border-gray-200 pb-6">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-xl font-medium">{item.name}</h4>
                      <span className="text-xl text-red-600">${item.price}</span>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
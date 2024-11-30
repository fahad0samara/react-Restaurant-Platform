import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import Navbar from '../../components/Navbar';
import { useMenuStore } from '../../store/menuStore';

const categories = ['All', 'Appetizer', 'Main Course', 'Dessert', 'Beverage'];
const dietaryFilters = ['vegetarian', 'vegan', 'gluten-free', 'dairy-free'];

export default function Menu() {
  const { items, getItemsByCategory } = useMenuStore();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDietary, setSelectedDietary] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const filteredItems = getItemsByCategory(selectedCategory).filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDietary = selectedDietary.length === 0 || 
                          selectedDietary.every(diet => item.dietary?.includes(diet));
    return matchesSearch && matchesDietary;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-12 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-sm p-6"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <h2 className="text-2xl font-semibold">Our Menu</h2>
            
            <div className="flex items-center gap-4">
              <div className="relative flex-1 md:w-64">
                <input
                  type="text"
                  placeholder="Search menu..."
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50"
              >
                <Filter className="h-5 w-5" />
                <span className="hidden md:inline">Filters</span>
              </button>
            </div>
          </div>

          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-6 p-4 border rounded-lg"
            >
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium mb-2">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-3 py-1 rounded-full text-sm ${
                          selectedCategory === category
                            ? 'bg-red-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2">Dietary Preferences</h3>
                  <div className="flex flex-wrap gap-2">
                    {dietaryFilters.map(diet => (
                      <button
                        key={diet}
                        onClick={() => {
                          setSelectedDietary(prev =>
                            prev.includes(diet)
                              ? prev.filter(d => d !== diet)
                              : [...prev, diet]
                          );
                        }}
                        className={`px-3 py-1 rounded-full text-sm ${
                          selectedDietary.includes(diet)
                            ? 'bg-green-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {diet}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm overflow-hidden border"
              >
                <div className="relative h-48">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  {item.dietary && item.dietary.length > 0 && (
                    <div className="absolute top-2 right-2">
                      {item.dietary.map(diet => (
                        <span
                          key={diet}
                          className="ml-1 inline-block bg-green-500 text-white px-2 py-1 rounded-full text-xs"
                        >
                          {diet}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.category}</p>
                    </div>
                    <span className="text-lg font-semibold text-red-600">
                      ${item.price}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  
                  <button className="w-full bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
                    Order Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">No menu items found matching your criteria.</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
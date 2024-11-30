import React from 'react';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import Menu from '../../components/Menu';
import FoodGallery from '../../components/FoodGallery';
import TableGallery from '../../components/TableGallery';
import Reservations from '../../components/Reservations';
import Contact from '../../components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Menu />
      <FoodGallery />
      <TableGallery />
      <Reservations />
      <Contact />
      
      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Saveur. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
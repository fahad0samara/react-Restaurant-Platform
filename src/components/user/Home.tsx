import React from 'react';
import Navbar from '../Navbar';
import Hero from '../Hero';
import Menu from '../Menu';
import FoodGallery from '../FoodGallery';
import TableGallery from '../TableGallery';
import Reservations from '../Reservations';
import Contact from '../Contact';

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
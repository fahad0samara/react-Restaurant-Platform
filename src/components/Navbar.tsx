import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UtensilsCrossed, Menu, X, User } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout, isAdmin } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white text-xl font-serif flex items-center gap-2">
              <UtensilsCrossed className="h-6 w-6" />
              <span>Saveur</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {!isAdmin() && (
                <>
                  <a href="#menu" className="text-white hover:text-gray-300">Menu</a>
                  <a href="#reservations" className="text-white hover:text-gray-300">Reservations</a>
                  <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
                </>
              )}
              
              {user ? (
                <div className="flex items-center space-x-4">
                  {isAdmin() ? (
                    <Link to="/admin" className="text-white hover:text-gray-300">
                      Dashboard
                    </Link>
                  ) : (
                    <Link to="/profile" className="text-white hover:text-gray-300">
                      <User className="h-5 w-5" />
                    </Link>
                  )}
                  <button
                    onClick={handleLogout}
                    className="text-white hover:text-gray-300"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {!isAdmin() && (
              <>
                <a
                  href="#menu"
                  className="text-white block px-3 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Menu
                </a>
                <a
                  href="#reservations"
                  className="text-white block px-3 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Reservations
                </a>
                <a
                  href="#contact"
                  className="text-white block px-3 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
              </>
            )}
            
            {user ? (
              <>
                {isAdmin() ? (
                  <Link
                    to="/admin"
                    className="text-white block px-3 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                ) : (
                  <Link
                    to="/profile"
                    className="text-white block px-3 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Profile
                  </Link>
                )}
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="text-white block px-3 py-2 w-full text-left"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="text-white block px-3 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
import React from 'react';
import { BarChart, Users, Calendar, Settings } from 'lucide-react';
import { Link, Outlet } from 'react-router-dom';

export default function Dashboard() {
  const menuItems = [
    { icon: BarChart, label: 'Analytics', path: 'analytics' },
    { icon: Users, label: 'Users', path: 'users' },
    { icon: Calendar, label: 'Reservations', path: 'reservations' },
    { icon: Settings, label: 'Settings', path: 'settings' },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-xl font-semibold">Admin Dashboard</h2>
        </div>
        <nav className="mt-4">
          {menuItems.map(({ icon: Icon, label, path }) => (
            <Link
              key={path}
              to={path}
              className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-50"
            >
              <Icon className="h-5 w-5" />
              <span>{label}</span>
            </Link>
          ))}
        </nav>
      </aside>

      <main className="flex-1 p-8 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
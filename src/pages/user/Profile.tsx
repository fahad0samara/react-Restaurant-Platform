import React from 'react';
import { useAuthStore } from '../../store/authStore';
import Navbar from '../../components/Navbar';

export default function Profile() {
  const { user } = useAuthStore();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-12 pt-24">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold mb-6">My Profile</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <p className="mt-1 text-gray-900">{user?.name}</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <p className="mt-1 text-gray-900">{user?.email}</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Role</label>
              <p className="mt-1 text-gray-900 capitalize">{user?.role}</p>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-lg font-medium mb-4">My Reservations</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-600">No reservations found.</p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-medium mb-4">Account Settings</h3>
            <div className="space-y-4">
              <button className="btn btn-secondary w-full">
                Change Password
              </button>
              <button className="btn btn-secondary w-full">
                Update Profile
              </button>
              <button className="btn btn-secondary w-full">
                Notification Preferences
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
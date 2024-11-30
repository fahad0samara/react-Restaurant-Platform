import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LoadingSpinner from './components/common/LoadingSpinner';
import ProtectedRoute from './components/auth/ProtectedRoute';
import AdminLayout from './layouts/AdminLayout';

// Lazy load components
const Dashboard = React.lazy(() => import('./pages/admin/Dashboard'));
const UserManagement = React.lazy(() => import('./pages/admin/UserManagement'));
const MenuManagement = React.lazy(() => import('./pages/admin/MenuManagement'));
const ReservationManagement = React.lazy(() => import('./pages/admin/ReservationManagement'));
const Settings = React.lazy(() => import('./pages/admin/Settings'));
const Analytics = React.lazy(() => import('./pages/admin/Analytics'));
const Marketing = React.lazy(() => import('./pages/admin/Marketing'));
const Inventory = React.lazy(() => import('./pages/admin/Inventory'));
const StaffSchedule = React.lazy(() => import('./pages/admin/StaffSchedule'));
const Home = React.lazy(() => import('./pages/user/Home'));
const Profile = React.lazy(() => import('./pages/user/Profile'));
const Reservations = React.lazy(() => import('./pages/user/Reservations'));
const Menu = React.lazy(() => import('./pages/user/Menu'));
const Events = React.lazy(() => import('./pages/user/Events'));
const GiftCards = React.lazy(() => import('./pages/user/GiftCards'));
const Rewards = React.lazy(() => import('./pages/user/Rewards'));
const Contact = React.lazy(() => import('./pages/user/Contact'));
const Login = React.lazy(() => import('./pages/auth/Login'));
const Register = React.lazy(() => import('./pages/auth/Register'));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-right" />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Protected user routes */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute allowedRoles={['user', 'admin']}>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-reservations"
            element={
              <ProtectedRoute allowedRoles={['user']}>
                <Reservations />
              </ProtectedRoute>
            }
          />
          <Route
            path="/gift-cards"
            element={
              <ProtectedRoute allowedRoles={['user']}>
                <GiftCards />
              </ProtectedRoute>
            }
          />
          <Route
            path="/rewards"
            element={
              <ProtectedRoute allowedRoles={['user']}>
                <Rewards />
              </ProtectedRoute>
            }
          />
          
          {/* Admin routes */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="users" element={<UserManagement />} />
            <Route path="menu" element={<MenuManagement />} />
            <Route path="reservations" element={<ReservationManagement />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="marketing" element={<Marketing />} />
            <Route path="inventory" element={<Inventory />} />
            <Route path="staff-schedule" element={<StaffSchedule />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          {/* Catch-all route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </QueryClientProvider>
  );
}
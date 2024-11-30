export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  dietary?: string[];
}

export interface TableBooking {
  id: string;
  capacity: number;
  isAvailable: boolean;
  location: string;
  image: string;
}

export interface TimeSlot {
  time: string;
  available: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  lastActive: string;
  status: 'active' | 'inactive';
}
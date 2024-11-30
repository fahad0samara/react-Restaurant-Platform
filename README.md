# 🍽️ Saveur Restaurant Platform

A modern, full-featured restaurant management platform built with React, TypeScript, and Tailwind CSS. This application provides both customer-facing features and an administrative dashboard for restaurant management.

## 🌟 Key Features

### Customer Features
- **Interactive Menu Browsing**: Dynamic menu with filtering, search, and dietary preferences
- **Real-time Table Reservations**: Advanced booking system with table visualization
- **Online Ordering**: Seamless ordering experience with real-time updates
- **Loyalty Program**: Points system with rewards and member tiers
- **Gift Cards**: Digital gift card purchase and management
- **Events & Special Occasions**: Book and manage special dining events
- **User Profiles**: Personalized accounts with order history and preferences

### Administrative Features
- **Dashboard Analytics**: Real-time business insights and metrics
- **Menu Management**: Dynamic menu updates with instant customer visibility
- **Reservation System**: Comprehensive table and booking management
- **User Management**: Customer and staff account administration
- **Inventory Control**: Stock tracking and alerts
- **Staff Scheduling**: Employee shift management with calendar integration
- **Marketing Tools**: Campaign management and promotion tracking

## 🚀 Technology Stack

### Frontend
- **React 18**: Latest React features with TypeScript
- **Tailwind CSS**: Utility-first styling with custom configurations
- **Framer Motion**: Smooth animations and transitions
- **React Router**: Client-side routing with protected routes
- **React Query**: Efficient data fetching and caching
- **Zustand**: Lightweight state management
- **Recharts**: Interactive charts and analytics
- **FullCalendar**: Advanced calendar functionality

### UI Components
- **Headless UI**: Accessible UI components
- **Lucide Icons**: Modern icon system
- **Custom Components**: Reusable UI library

### Performance Optimizations
- **Code Splitting**: Lazy loading of routes and components
- **Image Optimization**: Responsive images with lazy loading
- **State Management**: Efficient updates with Zustand
- **Caching**: React Query for data caching
- **Bundle Optimization**: Vite for fast builds

## 📂 Project Structure

```
src/
├── components/
│   ├── admin/          # Admin dashboard components
│   ├── user/           # Customer-facing components
│   ├── common/         # Shared components
│   └── ui/             # Reusable UI components
├── pages/
│   ├── admin/          # Admin routes
│   ├── user/           # Customer routes
│   └── auth/           # Authentication pages
├── store/              # State management
├── utils/              # Utility functions
├── hooks/              # Custom React hooks
└── types/              # TypeScript definitions
```

## 🛠️ Setup & Installation

1. **Clone the repository**
```bash
cd saveur-restaurant
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Build for production**
```bash
npm run build
```

## 🔐 Authentication

### Demo Accounts
- **Admin Account**
  - Email: admin@example.com
  - Password: admin

- **Customer Account**
  - Email: user@example.com
  - Password: user

## 💻 Key Components

### Admin Dashboard
- **Analytics**: Real-time business metrics
- **Menu Management**: CRUD operations for menu items
- **Reservation Management**: Table booking system
- **User Management**: Customer and staff administration
- **Inventory**: Stock tracking and alerts
- **Marketing**: Campaign management

### Customer Interface
- **Interactive Menu**: Search, filter, and dietary preferences
- **Reservation System**: Table selection and booking
- **Profile Management**: Order history and preferences
- **Loyalty Program**: Points tracking and rewards
- **Gift Cards**: Purchase and management
- **Events**: Special occasion bookings

## 🎨 Design System

### Typography
- **Primary**: Inter (sans-serif)
- **Secondary**: Playfair Display (serif)

### Colors
- **Primary**: Red (#EF4444)
- **Secondary**: Gray scale
- **Accent**: Custom theme colors

### Components
- **Buttons**: Multiple variants with animations
- **Cards**: Consistent styling with hover effects
- **Forms**: Validated inputs with error handling
- **Tables**: Sortable and filterable
- **Modals**: Accessible dialogs
- **Alerts**: Toast notifications

## 🔄 State Management

### Zustand Stores
- **Auth Store**: User authentication and permissions
- **Menu Store**: Menu items and categories
- **Reservation Store**: Booking management
- **Loyalty Store**: Points and rewards
- **Notification Store**: System notifications

## 📱 Responsive Design

- **Mobile First**: Optimized for all screen sizes
- **Breakpoints**: Consistent responsive layout
- **Touch Friendly**: Mobile-optimized interactions
- **Progressive Enhancement**: Core functionality for all devices

## ⚡ Performance Features

- **Code Splitting**: Route-based chunking
- **Lazy Loading**: Components and images
- **Caching**: API responses and assets
- **Bundle Optimization**: Efficient code splitting
- **Image Optimization**: Responsive images
- **Animation Performance**: GPU-accelerated animations

## 🔒 Security Features

- **Authentication**: JWT-based auth system
- **Protected Routes**: Role-based access control
- **Input Validation**: Form validation and sanitization
- **Error Handling**: Graceful error management
- **API Security**: Secure API communication

## 🚀 Deployment

The application can be deployed to:
- Netlify
- Vercel
- AWS
- Any static hosting service

## 📈 Future Enhancements

- [ ] Online payment integration
- [ ] Real-time order tracking
- [ ] Kitchen display system
- [ ] Inventory automation
- [ ] Customer feedback system
- [ ] Advanced analytics
- [ ] Mobile app version

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Support

For support, email support@saveur.com or join our Slack channel.

## 🙏 Acknowledgments

- React Team
- Tailwind CSS
- Framer Motion
- All contributors
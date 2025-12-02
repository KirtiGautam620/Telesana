<div align="center">

# 🏥 Telesana

**Modern Healthcare Management System**

[![Next.js](https://img.shields.io/badge/Next.js-15.5.3-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-24.x-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)

[Features](#-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [Project Structure](#-project-structure) • [API Documentation](#-api-endpoints)

</div>

---

## 📋 Overview

Telesana is a full-stack healthcare management platform that connects patients with doctors through modern telemedicine solutions. The application provides appointment scheduling, patient profile management, calendar integration, and real-time notifications.

### 🎯 Purpose

To streamline healthcare delivery by providing:
- Easy appointment booking with doctors
- Patient profile and health record management
- Interactive calendar for tracking appointments
- Secure authentication and user management
- Real-time notifications for appointments and health updates

---

## ✨ Features

### 🔐 Authentication System
- User registration and login with JWT authentication
- Secure password handling
- Session management with localStorage
- Protected routes for dashboard access

### 👤 Patient Management
- **User Profile Creation**: Complete patient profiles with personal information
- **Health Information**: Track height, weight, blood group, and medical history
- **Profile Editing**: Update patient information anytime
- **Gender Options**: Male, Female, Other

### 📅 Appointment System
- **Doctor Selection**: Browse and select from available doctors
- **Appointment Booking**: Schedule appointments with preferred doctors
- **Multiple Modes**: Video consultation or in-person visits
- **Appointment Status**: Track SCHEDULED, COMPLETED, or CANCELLED appointments
- **Appointment History**: View all past and upcoming appointments

### 📆 Calendar Integration
- **Monthly Calendar View**: Visual representation of appointments
- **Date Highlighting**: Days with appointments are prominently highlighted
- **Appointment Indicators**: Pulsing green dots show appointment days
- **Hover Tooltips**: Quick view of appointment details on hover
- **Appointment Details Sidebar**: Click any date to see full appointment information

### 👨‍⚕️ Doctor Directory
- Browse all available doctors
- View doctor specializations (Cardiology, General Physician, Dermatology, Orthopedics, Pediatrics)
- See doctor qualifications, experience, and consultation fees
- Demo doctors available for testing

### 🔔 Notifications System
- **Appointment Reminders**: Get notified about upcoming appointments
- **Health Reminders**: Medication alerts and health tips
- **Doctor Messages**: Receive updates from healthcare providers
- **System Updates**: Stay informed about new features
- **Unread Counter**: Track unread notifications with badge
- **Mark as Read**: Individual or bulk mark as read functionality

### 📊 Dashboard
- **Professional Dark Theme**: Modern glassmorphism design
- **User Profile Display**: Avatar, username, and email
- **Quick Navigation**: Access all features from sidebar
- **Responsive Layout**: Works on desktop and mobile devices

### 🎨 User Interface
- **Modern Design**: Clean, professional interface with gradient accents
- **Smooth Animations**: Hover effects and transitions throughout
- **Responsive**: Mobile-friendly design
- **Toast Notifications**: Real-time feedback for user actions
- **Loading States**: Visual feedback during data fetching

---

## 🛠 Tech Stack

### Frontend
- **Framework**: Next.js 15.5.3 (App Router)
- **Library**: React 19.1.0
- **Language**: JavaScript (ES6+)
- **Styling**: CSS Modules, Custom CSS
- **UI Components**:
  - React Icons (Icons library)
  - React Calendar (Calendar component)
  - React Hot Toast (Toast notifications)
  - Chakra UI (UI components)
  - Material-UI (Additional components)
  - Framer Motion (Animations)
- **HTTP Client**: Axios
- **Routing**: Next.js App Router

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database ORM**: Prisma
- **Authentication**: JWT (JSON Web Tokens)
- **CORS**: Enabled for frontend communication
- **API Port**: 4000

### Database
- **ORM**: Prisma
- **Schema**: Relational database with tables for:
  - Users
  - Patients
  - Doctors
  - Appointments
  - Health Passbook
  - Prescriptions

---

## 📁 Project Structure

```
Telesana/
├── frontend/                    # Next.js frontend application
│   ├── public/                  # Static assets
│   │   ├── logo.png
│   │   ├── home.png
│   │   └── noavatar.png
│   ├── src/
│   │   ├── app/                 # Next.js app directory
│   │   │   ├── page.js          # Home page
│   │   │   ├── layout.js        # Root layout
│   │   │   ├── about/           # About page
│   │   │   ├── contact/         # Contact page
│   │   │   ├── doctors/         # All doctors page
│   │   │   ├── faq/             # FAQ page
│   │   │   ├── login/           # Login page
│   │   │   ├── signup/          # Signup page
│   │   │   ├── dashboard/       # Dashboard routes
│   │   │   │   ├── page.jsx     # Dashboard home
│   │   │   │   ├── Appointments/     # Appointments management
│   │   │   │   ├── calendar/         # Calendar view
│   │   │   │   ├── notifications/    # Notifications center
│   │   │   │   ├── userDetails/      # User profile
│   │   │   │   ├── HealthSummary/    # Health records
│   │   │   │   └── settings/         # Settings page
│   │   │   └── ui/              # UI components
│   │   └── components/          # Reusable components
│   │       ├── Navbar.jsx       # Navigation bar
│   │       ├── Chatbot.jsx      # AI chatbot
│   │       └── ConditionalFooter.jsx
│   ├── package.json             # Frontend dependencies
│   ├── next.config.mjs          # Next.js configuration
│   └── tsconfig.json            # TypeScript configuration
│
├── backend/                     # Express.js backend
│   ├── controllers/             # Route controllers
│   │   ├── authControllers.js
│   │   ├── patientController.js
│   │   ├── appointmentController.js
│   │   ├── doctorController.js
│   │   └── healthControllers.js
│   ├── routes/                  # API routes
│   │   ├── authRoutes.js
│   │   ├── patientRoutes.js
│   │   ├── appointmentRoutes.js
│   │   ├── doctorRoutes.js
│   │   └── healthRoutes.js
│   ├── services/                # Business logic
│   │   ├── patientService.js
│   │   ├── appointmentService.js
│   │   └── doctorService.js
│   ├── middlewares/             # Express middlewares
│   │   └── authMiddleware.js    # JWT authentication
│   ├── prisma/                  # Prisma schema and migrations
│   ├── index.js                 # Server entry point
│   └── package.json             # Backend dependencies
│
├── vercel.json                  # Vercel deployment configuration
├── .vercelignore               # Vercel ignore file
└── README.md                    # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn
- MySQL database (for backend)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vtushar06/Telesana.git
   cd Telesana
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd ../backend
   npm install
   ```

4. **Configure Environment Variables**

   Create `.env` file in `backend/` directory:
   ```env
   DATABASE_URL="your_database_connection_string"
   JWT_SECRET="your_jwt_secret_key"
   PORT=4000
   ```

5. **Setup Database**
   ```bash
   cd backend
   npx prisma migrate dev
   npx prisma generate
   node seed.js  # Optional: Seed demo doctors
   ```

### Running the Application

1. **Start Backend Server** (Terminal 1)
   ```bash
   cd backend
   node index.js
   ```
   Backend will run on `http://localhost:4000`

2. **Start Frontend Development Server** (Terminal 2)
   ```bash
   cd frontend
   npm run dev
   ```
   Frontend will run on `http://localhost:3000`

3. **Open in Browser**
   ```
   http://localhost:3000
   ```

---

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Patient Management
- `GET /api/patient/profile` - Get patient profile (requires auth)
- `POST /api/patient/profile` - Create patient profile (requires auth)
- `PUT /api/patient/profile` - Update patient profile (requires auth)

### Doctors
- `GET /api/doctors` - Get all doctors
- `GET /api/doctor/:id` - Get doctor by ID

### Appointments
- `GET /api/appointments` - Get user's appointments (requires auth)
- `POST /api/appointments` - Book new appointment (requires auth)
- `GET /api/appointments/:userId` - Get appointments by user ID

### Health Records
- `GET /api/health/passbook` - Get health passbook (requires auth)
- `PUT /api/health/passbook` - Update health passbook (requires auth)

---

## 🎯 User Workflow

1. **Sign Up** → Create account with username, email, password
2. **Login** → Access dashboard with credentials
3. **Create Profile** → Fill patient details (required before booking)
4. **Browse Doctors** → View available doctors and their specializations
5. **Book Appointment** → Select doctor, date, time, and consultation mode
6. **View Calendar** → See all appointments in calendar view
7. **Check Notifications** → Stay updated with appointment reminders
8. **Manage Profile** → Update health information anytime

---

## 🔒 Security Features

- JWT-based authentication
- Password encryption (bcrypt)
- Protected API routes with middleware
- Token expiration handling
- Secure HTTP headers with CORS
- Input validation on all forms
- SQL injection prevention with Prisma ORM

---

## 🌐 Deployment

### Vercel Deployment (Frontend)

1. **Configure Root Directory**
   - Set Root Directory to `frontend` in Vercel settings
   - Enable "Include source files outside Root Directory"

2. **Environment Variables**
   - Add any required environment variables in Vercel dashboard

3. **Deploy**
   - Push to main branch to trigger auto-deployment
   - Or use Vercel CLI: `vercel --prod`

### Backend Deployment

- Deploy backend separately to platforms like:
  - Railway
  - Render
  - Heroku
  - AWS EC2

---

## 📦 Key Dependencies

### Frontend
- `next`: 15.5.3
- `react`: 19.1.0
- `react-hot-toast`: Toast notifications
- `react-icons`: Icon library
- `react-calendar`: Calendar component
- `axios`: HTTP client

### Backend
- `express`: Web framework
- `@prisma/client`: Database ORM
- `jsonwebtoken`: JWT authentication
- `bcrypt`: Password hashing
- `cors`: Cross-origin resource sharing

---

## 🐛 Known Issues & Limitations

1. **Patient Profile Required**: Users must create a patient profile before booking appointments
2. **Demo Doctors**: Uses fallback demo doctors if database is empty
3. **No Real-time Updates**: Notifications are static, not real-time
4. **Single Role**: Currently only supports patient role (no doctor portal)

---

## 🔄 Recent Updates

- ✅ Fixed Vercel deployment configuration for monorepo
- ✅ Added professional dark theme for dashboard
- ✅ Enhanced calendar with appointment highlighting
- ✅ Implemented notifications system
- ✅ Added patient profile management
- ✅ Fixed appointment booking API
- ✅ Improved navbar and sidebar styling

---

## 👥 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is created for educational and demonstration purposes.

---

## 📞 Contact

For questions or support, please open an issue in the GitHub repository.

---

<div align="center">

**Built with ❤️ for better healthcare access**

[⬆ Back to Top](#-telesana)

</div>

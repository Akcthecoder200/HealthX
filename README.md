# 🏥 HealthX - Doctor Appointment Management System

![HealthX Logo](https://img.shields.io/badge/HealthX-Doctor%20Appointment%20System-blue?style=for-the-badge)

## 📋 Table of Contents
- [About](#about)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## 🩺 About

HealthX is a comprehensive doctor appointment management system built with the MERN stack. It provides a seamless experience for patients to book appointments with doctors, while offering powerful administrative tools for healthcare providers to manage their practice efficiently.

### Key Highlights:
- **Patient Portal**: Easy appointment booking and management
- **Doctor Management**: Complete doctor profile management
- **Admin Dashboard**: Comprehensive administrative controls
- **Real-time Updates**: Instant appointment status updates
- **Responsive Design**: Optimized for all devices
- **Secure Authentication**: JWT-based secure login system

## ✨ Features

### 👨‍⚕️ For Patients
- ✅ User registration and secure login
- ✅ Browse doctors by specialty
- ✅ View detailed doctor profiles
- ✅ Book appointments with preferred doctors
- ✅ Manage personal profile
- ✅ View appointment history
- ✅ Cancel appointments
- ✅ Real-time appointment status updates

### 🏥 For Administrators
- ✅ Secure admin authentication
- ✅ Add new doctors to the system
- ✅ Manage doctor profiles and availability
- ✅ View all appointments
- ✅ Cancel appointments
- ✅ Dashboard with analytics
- ✅ Patient management
- ✅ System-wide settings

### 👩‍⚕️ For Doctors
- ✅ Doctor profile management
- ✅ Availability status control
- ✅ Appointment scheduling
- ✅ Patient information access

## 🛠 Technology Stack

### Frontend
- **React.js 18.3.1** - Modern UI library
- **Vite 5.4.1** - Fast build tool and development server
- **React Router 6.26.2** - Client-side routing
- **Tailwind CSS 3.4.11** - Utility-first CSS framework
- **Axios 1.7.7** - HTTP client for API calls
- **React Toastify 10.0.5** - Elegant notifications

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js 4.21.0** - Web application framework
- **MongoDB 8.7.0** - NoSQL database with Mongoose ODM
- **JWT 9.0.2** - JSON Web Tokens for authentication
- **Bcrypt 5.1.1** - Password hashing
- **Cloudinary 2.5.0** - Image upload and management
- **Multer 1.4.5** - File upload middleware
- **CORS 2.8.5** - Cross-origin resource sharing

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS post-processing
- **Autoprefixer** - CSS vendor prefixing
- **Nodemon** - Development server auto-restart

## 📁 Project Structure

```
HealthX/
├── backend/                 # Backend API server
│   ├── config/             # Database and service configurations
│   │   ├── cloudinary.js   # Cloudinary setup
│   │   └── mongodb.js      # MongoDB connection
│   ├── controllers/        # Business logic controllers
│   │   ├── adminController.js
│   │   ├── doctorController.js
│   │   └── userController.js
│   ├── middlewares/        # Custom middleware functions
│   │   ├── authAdmin.js    # Admin authentication
│   │   ├── authUser.js     # User authentication
│   │   └── multer.js       # File upload configuration
│   ├── models/            # Database models/schemas
│   │   ├── appointmentModel.js
│   │   ├── doctorModel.js
│   │   └── userModel.js
│   ├── routes/            # API route definitions
│   │   ├── adminRoute.js
│   │   ├── doctorRoute.js
│   │   └── userRoute.js
│   ├── .env               # Environment variables
│   ├── package.json       # Backend dependencies
│   └── server.js          # Main server file
│
├── frontend/              # Patient-facing React application
│   ├── src/
│   │   ├── assets/        # Static assets and sample data
│   │   ├── components/    # Reusable React components
│   │   │   ├── Banner.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── RelatedDoctor.jsx
│   │   │   ├── SpecialityMenu.jsx
│   │   │   └── TopDoctors.jsx
│   │   ├── context/       # React Context for state management
│   │   │   └── AppContext.jsx
│   │   ├── pages/         # Page components
│   │   │   ├── About.jsx
│   │   │   ├── Appointment.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Doctors.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── MyAppointments.jsx
│   │   │   └── MyProfile.jsx
│   │   ├── App.jsx        # Main App component
│   │   └── main.jsx       # Application entry point
│   ├── .env               # Frontend environment variables
│   ├── index.html         # HTML template
│   ├── package.json       # Frontend dependencies
│   └── tailwind.config.js # Tailwind CSS configuration
│
└── admin/                 # Admin panel React application
    ├── src/
    │   ├── assets/        # Admin-specific assets
    │   ├── components/    # Admin UI components
    │   │   ├── Navbar.jsx
    │   │   └── Sidebar.jsx
    │   ├── context/       # Admin context providers
    │   │   ├── AdminContext.jsx
    │   │   ├── AppContext.jsx
    │   │   └── DoctorContext.jsx
    │   ├── pages/         # Admin page components
    │   │   ├── Login.jsx
    │   │   └── Admin/
    │   │       ├── AddDoctor.jsx
    │   │       ├── AllAppointments.jsx
    │   │       ├── Dashboard.jsx
    │   │       └── DoctorsList.jsx
    │   ├── App.jsx        # Admin App component
    │   └── main.jsx       # Admin entry point
    ├── .env               # Admin environment variables
    ├── package.json       # Admin dependencies
    └── tailwind.config.js # Admin Tailwind configuration
```

## � Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v16.0.0 or higher)
- **npm** (v8.0.0 or higher)
- **MongoDB** (local installation or MongoDB Atlas account)
- **Git** (for cloning the repository)

## 🚀 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/Akcthecoder200/HealthX.git
cd HealthX
```

### 2. Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env
# Edit .env with your configuration (see Configuration section)

# Start the backend server
npm run start
# or for development with auto-restart
npm run server
```

### 3. Frontend Setup
```bash
# Navigate to frontend directory
cd ../frontend

# Install dependencies
npm install

# Create environment file
echo "VITE_BACKEND_URL=http://localhost:4000" > .env

# Start the frontend development server
npm run dev
```

### 4. Admin Panel Setup
```bash
# Navigate to admin directory
cd ../admin

# Install dependencies
npm install

# Create environment file
echo "VITE_BACKEND_URL=http://localhost:4000" > .env

# Start the admin development server
npm run dev
```

## ⚙️ Configuration

### Backend Environment Variables (.env)

```env
# MongoDB Connection
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net

# Cloudinary Configuration (for image uploads)
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_SECRET_KEY=your_secret_key

# JWT Secret (use a strong random string)
JWT_SECRET=your_jwt_secret_key

# Admin Credentials
ADMIN_EMAIL=admin@healthx.com
ADMIN_PASSWORD=your_admin_password

# Server Port
PORT=4000
```

### Frontend Environment Variables (.env)

```env
# Backend API URL
VITE_BACKEND_URL=http://localhost:4000
```

### Admin Environment Variables (.env)

```env
# Backend API URL
VITE_BACKEND_URL=http://localhost:4000
```

## 🎯 Usage

### Accessing the Applications

- **Patient Portal**: http://localhost:5173
- **Admin Panel**: http://localhost:5174
- **Backend API**: http://localhost:4000

### Default Admin Credentials

- **Email**: admin@healthx.com
- **Password**: your_admin_password (as set in backend .env)

### Sample Doctor Specialties

The system includes sample doctors in the following specialties:
- General Physician
- Gynecologist
- Dermatologist
- Pediatricians
- Neurologist
- Gastroenterologist

## 📡 API Documentation

### Authentication Endpoints

#### User Registration
```http
POST /api/user/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

#### User Login
```http
POST /api/user/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

#### Admin Login
```http
POST /api/admin/login
Content-Type: application/json

{
  "email": "admin@healthx.com",
  "password": "admin_password"
}
```

### Doctor Endpoints

#### Get All Doctors
```http
GET /api/doctor/list
```

#### Add Doctor (Admin Only)
```http
POST /api/admin/add-doctor
Authorization: Bearer admin_token
Content-Type: multipart/form-data

{
  "name": "Dr. John Smith",
  "email": "doctor@example.com",
  "password": "doctorpass",
  "speciality": "General physician",
  "degree": "MBBS",
  "experience": "5 Years",
  "about": "Experienced doctor...",
  "fees": 100,
  "address": {
    "line1": "123 Main St",
    "line2": "City, State"
  },
  "image": "doctor_image.jpg"
}
```

### Appointment Endpoints

#### Book Appointment
```http
POST /api/user/book-appointment
Authorization: Bearer user_token
Content-Type: application/json

{
  "docId": "doctor_id",
  "slotDate": "2024-01-15",
  "slotTime": "10:00 AM"
}
```

#### Get User Appointments
```http
GET /api/user/appointments
Authorization: Bearer user_token
```

#### Cancel Appointment
```http
POST /api/user/cancel-appointment
Authorization: Bearer user_token
Content-Type: application/json

{
  "appointmentId": "appointment_id"
}
```

## 🔐 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: Bcrypt encryption for password security
- **Input Validation**: Server-side validation for all inputs
- **CORS Protection**: Configured cross-origin resource sharing
- **File Upload Security**: Secure image upload with Cloudinary
- **Admin Authorization**: Protected admin routes and functions

## 🎨 UI/UX Features

- **Responsive Design**: Mobile-first responsive design
- **Modern UI**: Clean and intuitive user interface
- **Loading States**: Proper loading indicators
- **Error Handling**: User-friendly error messages
- **Toast Notifications**: Real-time feedback system
- **Form Validation**: Client-side and server-side validation
- **Image Optimization**: Optimized image loading and caching

## 🚦 Development Scripts

### Backend Scripts
```bash
npm start          # Start production server
npm run server     # Start development server with nodemon
```

### Frontend Scripts
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

### Admin Scripts
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

## 🛡️ Database Schema

### User Model
```javascript
{
  name: String (required),
  email: String (required, unique),
  password: String (required),
  image: String (default: placeholder),
  address: Object,
  gender: String,
  dob: String,
  phone: String
}
```

### Doctor Model
```javascript
{
  name: String (required),
  email: String (required, unique),
  password: String (required),
  image: String (required),
  speciality: String (required),
  degree: String (required),
  experience: String (required),
  about: String (required),
  available: Boolean (default: true),
  fees: Number (required),
  address: Object (required),
  date: Number (required),
  slots_booked: Object (default: {})
}
```

### Appointment Model
```javascript
{
  userId: ObjectId (required),
  docId: ObjectId (required),
  slotDate: String (required),
  slotTime: String (required),
  userData: Object (required),
  docData: Object (required),
  amount: Number (required),
  date: Number (required),
  cancelled: Boolean (default: false),
  payment: Boolean (default: false),
  isCompleted: Boolean (default: false)
}
```

## 🌍 How it looks

<details>
<summary><h3> 📸 - Demo Images </h3></summary>

<img src='https://github.com/user-attachments/assets/768d1f94-29e3-4466-90c5-418278abb2ce' width="100%"/>

#

<img src='https://github.com/user-attachments/assets/c66e8a38-6c8f-4b07-ab43-4ede3c087a09' width="100%"/>

#

<img src='https://github.com/user-attachments/assets/6bc93c7b-2e47-414a-ac9c-f7abbe8871b4' width="100%"/>

#

<img src='https://github.com/user-attachments/assets/ba5625b0-2a40-4429-b3c8-e6a5f4e23676' width="100%"/>

#

<img src='https://github.com/user-attachments/assets/7d6f1afb-f767-4464-8189-33df6a1cc2b8' width="100%"/>

#

<img src='https://github.com/user-attachments/assets/c7d8da6e-6bc4-485a-a6ce-8ed52ceff819' width="100%"/>

</details>

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Akcthecoder200** - *Initial work* - [GitHub](https://github.com/Akcthecoder200)

## 🙏 Acknowledgments

- React.js community for excellent documentation
- MongoDB team for the robust database solution
- Tailwind CSS for the utility-first CSS framework
- Cloudinary for image management services
- All contributors who helped in making this project better

## 📞 Support

If you have any questions or need help with setup, please:

1. Check the [Issues](https://github.com/Akcthecoder200/HealthX/issues) page
2. Create a new issue if your problem isn't already listed
3. Contact the maintainer through GitHub

---

**Made with ❤️ for better healthcare management**


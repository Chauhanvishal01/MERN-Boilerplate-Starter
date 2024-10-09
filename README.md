# MERN Boilerplate

A boilerplate project for quickly starting full-stack development with the **MERN (MongoDB, Express.js, React, Node.js)** stack. This setup includes JWT authentication, database connection, and routing with essential packages like bcrypt, cookie-parser, and axios for a seamless development experience.

## Table of Contents
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

### Backend
- **Node.js** with **Express.js**
- **MongoDB** and **Mongoose**
- **JWT Authentication**
- **bcrypt** for password hashing
- **cookie-parser**, **cors**, **dotenv**
- **Nodemon** for auto-reloading during development

### Frontend
- **React** (via **Vite** for fast development)
- **React Router DOM** for routing
- **Axios** for API requests
- **React Toastify** for notifications
- **Tailwind CSS** for styling

## Features
- **JWT Authentication**: Token-based authentication for secure login and protected routes.
- **User Management**: Register, login, and manage users.
- **Database Integration**: Seamlessly connect to MongoDB.
- **Responsive Frontend**: Using Tailwind CSS for clean and responsive UI.
- **API Routes**: Pre-configured backend routes and middleware.
- **Error Handling**: Centralized error handling for clean, readable code.

## Installation

### Prerequisites
- Node.js installed
- MongoDB running locally or remotely
- Git (to clone the repository)

### Backend Setup

1. Clone the repository:
   ```bash
   git clone <your-repository-url>
   cd mern-boilerplate
   ```

2. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```

3. A `.env` file is included in the boilerplate. Open it and add your values for the following environment variables:
   ```env
   PORT=5000                # The port on which the server will run
   MONGO_DB_URI=your_mongo_db_uri  # Replace with your MongoDB connection URI
   JWT_SECRET_KEY=your_jwt_secret_key  # Replace with your JWT secret key
   JWT_EXPIRE=7d           # Duration for which the JWT token will be valid
   FRONTEND_URL=http://localhost:3000  # Change this if your frontend is running on a different port or host



4. Start the backend server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm run dev
   ```

## Folder Structure

```bash
mern-boilerplate/
│
├── backend/
│   ├── controllers/
│   ├── database/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── .env
│   └── server.js
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── index.html
│
├── README.md
```

## Contributing
Feel free to contribute by opening a pull request. Any improvements to code organization, security, or features are welcome!😊

## License
This project is licensed under the MIT License.

---


# Expense Management System

A full-stack web application for managing personal and organizational expenses. Built with Node.js, Express, MongoDB (backend), and React (frontend).

## Features
- User authentication (register, login)
- Add, edit, delete expenses
- View expenses in a dashboard
- Responsive UI
- Loading spinner and layout components

## Technologies Used
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Frontend:** React, React Router
- **Other:** CSS, JWT, bcrypt

## Folder Structure
```
Expense-Management-System/
├── server.js                # Entry point for backend
├── config/
│   └── connectDb.js         # MongoDB connection
├── controllers/
│   └── userController.js    # User logic
├── models/
│   └── userModel.js         # User schema
├── routes/
│   └── userRoute.js         # User routes
├── client/
│   ├── src/
│   │   ├── App.js           # Main React component
│   │   ├── components/      # Reusable components
│   │   ├── pages/           # Page components
│   │   └── ...
│   ├── public/              # Static files
│   └── ...
└── ...
```

## Getting Started

### Prerequisites
- Node.js (v14+)
- npm
- MongoDB (local or Atlas)

### Backend Setup
1. Install dependencies:
	```powershell
	npm install
	```
2. Configure MongoDB connection in `config/connectDb.js`.
3. Start backend server:
	```powershell
	node server.js
	```

### Frontend Setup
1. Navigate to client folder:
	```powershell
	cd client
	```
2. Install dependencies:
	```powershell
	npm install
	```
3. Start React app:
	```powershell
	npm start
	```

### Environment Variables
Create a `.env` file in the root for backend secrets:
```
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

## API Endpoints
- `POST /api/users/register` - Register new user
- `POST /api/users/login` - Login user
- `GET /api/expenses` - Get expenses (protected)
- `POST /api/expenses` - Add expense (protected)
- `PUT /api/expenses/:id` - Edit expense (protected)
- `DELETE /api/expenses/:id` - Delete expense (protected)

## Scripts
- `npm start` - Start backend server
- `npm run dev` - Start backend with nodemon (if configured)
- `cd client && npm start` - Start frontend


## Author
- Sahil Bharadwaj




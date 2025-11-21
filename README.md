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
- MongoDB Atlas account (or local MongoDB)

### Installation & Setup

**1. Clone the repository:**
```powershell
git clone https://github.com/sahil-bharadwaj/Expense-Management-System.git
cd Expense-Management-System
```

**2. Backend Setup:**
```powershell
# Install backend dependencies
npm install

# Create config/.env file
# Add your MongoDB connection string
```

Create `config/.env` file with:
```
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/expense_db?retryWrites=true&w=majority
```

**3. Frontend Setup:**
```powershell
# Navigate to client folder
cd client

# Install frontend dependencies
npm install

# Install moment for date formatting
npm install moment

# Go back to root
cd ..
```

**4. Run the Application:**

**Option A - Run both servers concurrently:**
```powershell
npm run dev
```

**Option B - Run separately:**

Terminal 1 (Backend):
```powershell
npm start
```

Terminal 2 (Frontend):
```powershell
cd client
npm start
```

The app will open at `http://localhost:3000` and backend runs on `http://localhost:8080`

## API Endpoints

### User Routes
- `POST /api/v1/users/register` - Register new user
- `POST /api/v1/users/login` - Login user

### Expense Routes
- `POST /api/v1/expenses/get-expenses` - Get all expenses for a user
- `POST /api/v1/expenses/add-expense` - Add new expense
- `PUT /api/v1/expenses/edit-expense/:id` - Update expense
- `DELETE /api/v1/expenses/delete-expense/:id` - Delete expense

## Available Scripts

### Root Directory
- `npm start` - Start backend server
- `npm run server` - Start backend with nodemon (auto-restart)
- `npm run client` - Start frontend from root
- `npm run dev` - Run both backend and frontend concurrently

### Client Directory
- `npm start` - Start React development server
- `npm run build` - Build for production
- `npm test` - Run tests

## Usage Guide

1. **Register:** Create a new account with name, email, and password
2. **Login:** Sign in with your credentials
3. **Dashboard:** View all your expenses and income transactions
4. **Add Transaction:** Click "Add New" button to add income or expense
   - Select type (Income/Expense)
   - Choose category (Salary, Food, Bills, etc.)
   - Enter amount, title, date, and description
5. **Edit Transaction:** Click edit icon on any transaction to modify
6. **Delete Transaction:** Click delete icon to remove a transaction
7. **Filter:** Use the type selector to filter by Income/Expense/All
8. **Logout:** Click logout button to end session

## Project Structure Details

```
Backend:
- server.js: Express server setup
- config/connectDb.js: MongoDB connection
- models/: Mongoose schemas (User, Expense)
- controllers/: Business logic
- routes/: API endpoints

Frontend:
- src/pages/: React page components
- src/components/: Reusable UI components
- src/App.js: Main routing setup
```

## Contributing
1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License.

## Author
- Sahil Bharadwaj

## Acknowledgments
- Built with MERN Stack
- UI components from Ant Design
- Icons from Ant Design Icons

---
⭐ Star this repo if you find it helpful!




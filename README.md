# Store Rating Platform Backend

This is the **backend REST API** for a Store Rating Platform built with **Express.js** and **PostgreSQL**. It manages user authentication, role-based access, store and rating management, and administrative features.  
**Frontend and deployment instructions are not included here**.

---

## 🛠️ Tech Stack

- **Backend:** Express.js (Node.js)
- **Database:** PostgreSQL
- **Environment Management:** dotenv
- **Authentication:** JWT, bcryptjs
- **Query Layer:** pg (node-postgres)

---

## 📁 Project Structure
backend/
└── src/
├── config/
│ └── db.js
├── controllers/
│ ├── ratingController.js
│ ├── storeController.js
│ └── userController.js
├── middleware/
│ ├── auth.js
│ └── role.js
├── models/
│ ├── ratingModel.js
│ ├── storeModel.js
│ └── userModel.js
├── routes/
│ ├── admin.js
│ ├── ratingRoutes.js
│ ├── storeRoutes.js
│ └── userRoutes.js
└── index.js
├── .env
├── package.json


---

## 🚦 Features

- **User Roles:** System Administrator, Store Owner, Normal User
- **Authentication:** Signup, Login, JWT authentication, bcrypt password hashing
- **Role-Based Access:** Middleware for protected endpoints
- **Stores:** CRUD, rating aggregation, owner management
- **Ratings:** Users can submit/update ratings (1-5), see their own and store average
- **Admin:** Add/manage users & stores, dashboard of stats, user/store/ratings queries with filtering and sorting
- **Form Validation:** Server-side enforcement of field and format requirements

---

## ⚙️ Setup Instructions

1. **Clone the repository**
git clone https://github.com/DevxPiyush/Review-System---Backend
cd Backend-Project

2. **Install dependencies**
npm i or npm install


3. **Configure environment variables**
- Create a `.env` file in root:
  ```
  DB_USER=postgres
  DB_HOST=localhost
  DB_NAME=assignment
  DB_PASSWORD=12345
  DB_PORT=5432
  JWT_SECRET=your_jwt_secret_key
  PORT=3000
  ```

4. **Set up the PostgreSQL schema**
- Create tables for `users`, `stores`, `ratings` based on your model files.

5. **Run the server**
npm start
- Or with live reload:
npx nodemon src/index.js


---

## 🔑 API Overview

- **POST /api/auth/signup** – User registration
- **POST /api/auth/login** – User login, returns JWT
- **CRUD routes** for Users, Stores, Ratings as per controllers/routes files
- **All admin features available to authenticated/admin role**

---

## 📌 Notes

- All requests/responses are in JSON.
- Make sure your database is running before starting the backend.
- All endpoints require JWT except public authentication routes.
- See controller and route files for detailed API documentation.


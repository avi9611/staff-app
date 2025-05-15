#  Staff Management App

A full-stack web application to manage staff members efficiently. Users can add, edit, delete staff, assign departments and roles, view staff profiles in a responsive card layout, and filter staff by criteria.

### Live Demo

- 🔗 Frontend: [https://staff-app-three.vercel.app](https://staff-app-three.vercel.app)
- 🔗 Backend: Hosted on Render

---

##  Features

-  Add new staff
-  Edit staff details
-  Delete staff records
-  Assign department and role
-  View staff profiles in a responsive card layout
-  Filter staff by department or role
-  Toast notifications for user actions

---

##  Tech Stack

### Frontend

-  **React.js** with **TypeScript**
-  **TailwindCSS** for styling
-  **React Toastify** for notifications
-  **Axios** for API requests
-  **Vite** for development and bundling

### Backend

-  **Node.js** with **Express.js**
-  **TypeScript**
-  **MongoDB** with **Mongoose**
-  **dotenv** for environment config
-  **CORS** for cross-origin access

---

##  Project Structure
staff-app/
├── client/ # React frontend
│ ├── components/ # Reusable UI components
│ ├── pages/ # Page-level components
│ ├── services/ # API service layer
│ └── main.tsx # Entry point
├── server/ # Express backend
│ ├── models/ # Mongoose schemas
│ ├── routes/ # API route handlers
│ └── index.ts # Entry point
├── .env # Environment variables
└── package.json


---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/avi9611/staff-app.git
cd staff-app

### Setup Backend
cd server
npm install
# Create .env file and add:
# MONGO_URI=<your-mongodb-uri>
# PORT=5000

npm run dev

###Setup Frontend
cd ../client
npm install
npm run dev



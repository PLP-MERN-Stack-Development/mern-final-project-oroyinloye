# Agroconnect

Agroconnect is a web application designed to connect farmers, buyers, and agricultural service providers.  
It provides a simple platform for **registration, login, and dashboard access**, enabling users to manage their agricultural activities and build trusted networks.

---

## Features
- **Home Page**: Welcome message and introduction to Agroconnect.
- **Register**: Create new accounts with name, email, and password.
- **Login**: Authenticate users and store JWT tokens securely.
- **Dashboard**: Displays user profile details after login.
- **Logout**: Clears session and redirects to login.
- **Protected Routes**: Dashboard is only accessible when logged in.
- **Responsive Navbar**: Clean navigation with conditional links.

---

## Tech Stack
- **Frontend**: React.js (React Router v6, functional components, hooks)
- **Backend**: Node.js + Express.js (REST API endpoints for auth)
- **Database**: MongoDB (user storage)
- **Authentication**: JWT (JSON Web Tokens)
- **Styling**: CSS (global variables + component styles)

---

## Project Structure
src/ 
├── components/ 
              │ └── Navbar.js 
              │ └── Navbar.css 
├── pages/ 
         │ └── Home.js 
         │ └── Register.js 
         │ └── Login.js 
         │ └── Dashboard.js 
├── App.js 
├── App.css 
└── index.js

---

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/agroconnect.git
   cd agroconnect

2. Install dependencies:
    npm install

3. Start the frontend:
    npm start

4. Backend setup (in /server folder):  
    npm install
    npm run dev

5. Access Anywhere
Once deployed, Agroconnect can be accessed globally via:

Frontend (React): https://agroconnect-vfag.onrender.com

Backend (API): https://mern-final-project-g7hp.onrender.com


 ## Authentication Flow
User registers → data stored in MongoDB.
User logs in → JWT token issued.
Token stored in localStorage.
Dashboard fetches profile using Authorization: Bearer <token>.
Logout clears token and redirects to login.

## Contributor
Richard Oyinloye

## License
MIT License — free to use and modify.
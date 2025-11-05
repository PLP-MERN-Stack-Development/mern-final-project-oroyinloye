# AgroConnect
A Farmer-Buyer Marketplace Project
Testing deployment

https://mern-final-project-oroyinloye.onrender.com/

# AgroConnect – MERN Stack Capstone Project

AgroConnect is a full-stack web application built with the MERN stack to connect farmers with agricultural experts and resources. It enables user registration, secure login, and access to a dashboard for managing agricultural data and insights.

## Live Demo

- **Frontend**: [agroconnect-frontend.netlify.app](https://agroconnect-frontend.netlify.app)
- **Backend**: [agroconnect-backend](https://mern-final-project-oroyinloye.onrender.com)

## Tech Stack

- **Frontend**: React, React Router, Axios
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Authentication**: JWT, bcrypt
- **CI/CD**: GitHub Actions
- **Deployment**: Netlify (frontend), Render (backend)

## Setup Instructions

```bash
# Clone the repo
git clone https://github.com/PLP-MERN-Stack-Development/mern-final-project-oroyinloye.git

# Install frontend
cd client
npm install
npm start

# Install backend
cd ../server
npm install
npm run dev

## Testing
# Run backend tests
cd server
npm test

## Documentation
API Docs
User Guide
Architecture Overview

Screenshots

## Demo Video
Watch the 5-minute walkthrough

## Author
Richard Oroyinloye – GitHub

## 2. Basic Test Setup

### Backend (Express + Jest + Supertest)

**Install dependencies:**
```bash
cd server
npm install --save-dev jest supertest


## Architecture Diagram
[ React Frontend ]
       |
       ↓
[ Express API Server ]
       |
       ↓
[ MongoDB Database ]

## Include in docs/architecture.md:
Component breakdown
Data flow (frontend → backend → DB)
Auth flow (JWT)
Deployment flow (GitHub → Netlify/Render)

AgroConnect API Documentation
## Base URL
Code
https://mern-final-project-oroyinloye.onrender.com/api

## Authentication
Method: JWT (JSON Web Token)

Header Format:

Code
Authorization: Bearer <token>
Required for all protected routes (e.g., dashboard, user profile)

## User Endpoints
POST /register
Register a new user

Request Body:

json
{
  "name": "Richard",
  "email": "richard@example.com",
  "password": "securePassword123"
}
Response:

json
{
  "message": "User registered successfully",
  "user": {
    "_id": "abc123",
    "name": "Richard",
    "email": "richard@example.com"
  },
  "token": "jwt_token_here"
}
Errors:
400 Bad Request: Missing fields or invalid email
409 Conflict: Email already exists

POST /login
Authenticate user and return token

Request Body:

json
{
  "email": "richard@example.com",
  "password": "securePassword123"
}
Response:

json
{
  "message": "Login successful",
  "token": "jwt_token_here"
}
Errors:
401 Unauthorized: Invalid credentials

GET /profile
Get logged-in user's profile

Headers:
Code
Authorization: Bearer <token>
Response:

json
{
  "_id": "abc123",
  "name": "Richard",
  "email": "richard@example.com"
}
Errors:
401 Unauthorized: Missing or invalid token

Agro Data Endpoints (Example)
GET /crops
Fetch list of crops

Response:

json
[
  {
    "id": "crop1",
    "name": "Maize",
    "season": "Rainy",
    "region": "North Central"
  },
  ...
]
POST /crops
Add a new crop (admin only)

## Headers:
Code
Authorization: Bearer <admin_token>
Request Body:

json
{
  "name": "Cassava",
  "season": "Dry",
  "region": "South West"
}
Response:

json
{
  "message": "Crop added successfully",
  "crop": { ... }
}
## Error Handling
All errors follow this format:

json
{
  "error": "Descriptive error message"
}
Common status codes:
400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
500 Internal Server Error

## Notes
All endpoints return JSON
Use HTTPS in production
Rate limiting and input validation are enforced

## AgroConnect API Documentation

## Base URL

https://mern-final-project-oroyinloye.onrender.com/api

Code

---

## Authentication

- **Method**: JWT (JSON Web Token)
- **Header Format**:
Authorization: Bearer <token>

Code
- Required for all protected routes (e.g., dashboard, user profile)

---

## User Endpoints

### `POST /register`
Register a new user

- **Request Body**:
```json
{
"name": "Richard",
"email": "richard@example.com",
"password": "securePassword123"
}
Response:

json
{
  "message": "User registered successfully",
  "user": {
    "_id": "abc123",
    "name": "Richard",
    "email": "richard@example.com"
  },
  "token": "jwt_token_here"
}
Errors:
400 Bad Request: Missing fields or invalid email
409 Conflict: Email already exists

POST /login
Authenticate user and return token

Request Body:

json
{
  "email": "richard@example.com",
  "password": "securePassword123"
}
Response:

json
{
  "message": "Login successful",
  "token": "jwt_token_here"
}
Errors:

401 Unauthorized: Invalid credentials

GET /profile
Get logged-in user's profile

Headers:

Code
Authorization: Bearer <token>
Response:

json
{
  "_id": "abc123",
  "name": "Richard",
  "email": "richard@example.com"
}
Errors:

401 Unauthorized: Missing or invalid token

## Agro Data Endpoints
GET /crops
Fetch list of crops

Response:

json
[
  {
    "id": "crop1",
    "name": "Maize",
    "season": "Rainy",
    "region": "North Central"
  },
  ...
]
POST /crops
Add a new crop (admin only)

Headers:

Code
Authorization: Bearer <admin_token>
Request Body:

json
{
  "name": "Cassava",
  "season": "Dry",
  "region": "South West"
}
Response:

json
{
  "message": "Crop added successfully",
  "crop": {
    "id": "crop2",
    "name": "Cassava",
    "season": "Dry",
    "region": "South West"
  }
}
## Error Handling
All errors follow this format:

json
{
  "error": "Descriptive error message"
}
Common status codes:
400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
500 Internal Server Error

## Notes
All endpoints return JSON
Use HTTPS in production
Rate limiting and input validation are enforced

Code

---

Once you've added this file to your repo, commit and push it:

```bash
git add docs/api.md
git commit -m "Add API documentation"
git push
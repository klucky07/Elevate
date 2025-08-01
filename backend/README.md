# Backend Authentication API

This backend provides comprehensive authentication functionality for the startup-investor platform.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file with the following variables:
```env
MONGO_URL=mongodb://localhost:27017/your_database_name
JWT_SECRET=your_super_secret_jwt_key_here_make_it_long_and_random
PORT=3000
```

3. Start the server:
```bash
npm start
```

## Authentication Endpoints

### Base URL: `http://localhost:3000/api/auth`

### 1. Register User
**POST** `/register`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "investor" // or "startup" or "admin"
}
```

**Response:**
```json
{
  "message": "User registered successfully",
  "user": {
    "_id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "investor",
    "createdAt": "2024-01-01T00:00:00.000Z"
  },
  "token": "jwt_token_here"
}
```

### 2. Login User
**POST** `/login`

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "message": "Login successful",
  "user": {
    "_id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "investor",
    "createdAt": "2024-01-01T00:00:00.000Z"
  },
  "token": "jwt_token_here"
}
```

### 3. Get User Profile
**GET** `/profile`

**Headers:**
```
Authorization: Bearer jwt_token_here
```

**Response:**
```json
{
  "user": {
    "_id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "investor",
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

### 4. Update User Profile
**PUT** `/profile`

**Headers:**
```
Authorization: Bearer jwt_token_here
```

**Request Body:**
```json
{
  "name": "John Smith",
  "email": "johnsmith@example.com"
}
```

**Response:**
```json
{
  "message": "Profile updated successfully",
  "user": {
    "_id": "user_id",
    "name": "John Smith",
    "email": "johnsmith@example.com",
    "role": "investor",
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

### 5. Change Password
**PUT** `/change-password`

**Headers:**
```
Authorization: Bearer jwt_token_here
```

**Request Body:**
```json
{
  "currentPassword": "oldpassword123",
  "newPassword": "newpassword123"
}
```

**Response:**
```json
{
  "message": "Password changed successfully"
}
```

### 6. Logout
**POST** `/logout`

**Headers:**
```
Authorization: Bearer jwt_token_here
```

**Response:**
```json
{
  "message": "Logged out successfully"
}
```

### 7. Verify Token
**GET** `/verify`

**Headers:**
```
Authorization: Bearer jwt_token_here
```

**Response:**
```json
{
  "message": "Token is valid",
  "user": {
    "userId": "user_id",
    "email": "john@example.com",
    "role": "investor"
  }
}
```

## Error Responses

All endpoints return appropriate HTTP status codes:

- `200` - Success
- `201` - Created (for registration)
- `400` - Bad Request (validation errors)
- `401` - Unauthorized (invalid credentials)
- `403` - Forbidden (invalid token)
- `404` - Not Found
- `500` - Internal Server Error

Error response format:
```json
{
  "message": "Error description"
}
```

## Security Features

- Password hashing using bcryptjs (12 salt rounds)
- JWT tokens with 24-hour expiration
- Input validation and sanitization
- Unique email constraint
- Role-based access control (investor, startup, admin)
- Token-based authentication middleware

## User Roles

- `investor` - For investors looking to fund startups
- `startup` - For startup companies seeking funding
- `admin` - For platform administrators 
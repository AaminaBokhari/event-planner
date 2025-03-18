# Event Planning System

A Node.js application that serves as an event planning system.

## Features

- User authentication
- Event creation and management
- Event categorization
- View events by date or category

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Start MongoDB
4. Run the application: `npm start`

## API Endpoints

### Authentication
- POST /api/auth/register - Register a new user
- POST /api/auth/login - Login and get token
- GET /api/auth/me - Get current user info

### Categories
- POST /api/categories - Create a category
- GET /api/categories - Get all categories
- PUT /api/categories/:id - Update a category
- DELETE /api/categories/:id - Delete a category

### Events
- POST /api/events - Create an event
- GET /api/events - Get all events
- GET /api/events/category/:categoryId - Get events by category
- PUT /api/events/:id - Update an event
- DELETE /api/events/:id - Delete an event
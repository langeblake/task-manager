# Task Manager App

A simple CRUD application built with **React (TypeScript)**, **Node.js**, **PostgreSQL**, and **Docker**.

## Features

- **Frontend**: React with TypeScript, Vite
- **Backend**: Node.js with Express
- **Database**: PostgreSQL
- **Containerization**: Docker for easy deployment and environment consistency

## Project Structure

```
task-manager/
├── backend/               # Node.js backend API
│   ├── Dockerfile         # Docker configuration for backend
│   ├── index.js           # Express server setup
│   └── package.json       # Backend dependencies
├── frontend/              # React + TypeScript frontend
│   ├── Dockerfile         # Docker configuration for frontend
│   ├── src/               # React source code
│   ├── vite.config.ts     # Vite configuration
│   └── package.json       # Frontend dependencies
├── docker-compose.yml     # Orchestrates backend, frontend, and database services
└── README.md              # Project documentation
```

## Prerequisites

- [Docker](https://www.docker.com/get-started) installed on your machine
- [Node.js](https://nodejs.org/) (for local development without Docker)
- [PostgreSQL](https://www.postgresql.org/) (optional for local DB setup)

## Getting Started

### 1. Clone the Repository

```
git clone https://github.com/your-username/task-manager.git
cd task-manager
```

### 2. Run with Docker

Build and run the application using Docker Compose:

```
docker compose up --build
```

This will start the following services:

- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **Backend API**: [http://localhost:5000](http://localhost:5000)
- **PostgreSQL Database**: running on port 5432

### 3. Environment Variables

Create a `.env` file in the `backend` directory for database credentials if needed (Docker handles most defaults):

```
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DB=taskdb
PORT=5000
```

### 4. Run Locally Without Docker (Optional)

#### Backend:

```
cd backend
npm install
npm run dev
```

#### Frontend:

```
cd frontend
npm install
npm run dev
```

### 5. Test API with Postman or `curl`

**POST a new task:**

```
curl -X POST http://localhost:5000/tasks \
-H "Content-Type: application/json" \
-d '{"title": "Learn Docker", "description": "Build a simple app"}'
```

**GET all tasks:**

```
curl http://localhost:5000/tasks
```

## Technologies Used

- **Frontend:** React, TypeScript, Vite
- **Backend:** Node.js, Express
- **Database:** PostgreSQL
- **Containerization:** Docker, Docker Compose



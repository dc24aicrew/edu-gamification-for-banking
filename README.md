# Banking Education Gamification Platform

This project is a gamification platform for banking education that simulates real-world banking scenarios for training purposes.

## Architecture

- **Frontend**: React with TypeScript
- **Backend**: NestJS (Node.js framework)
- **Database**: PostgreSQL
- **Containerization**: Docker

## Project Structure

- `frontend/`: React application
- `backend/`: NestJS application
- `database/`: Database scripts
- `docker/`: Docker configuration files
- `docs/`: Project documentation

## Prerequisites

- Node.js (v14+)
- npm or yarn
- Docker and Docker Compose (for containerized development)

## Development Setup

### Using Docker (Recommended)

1. Clone the repository:
```bash
git clone https://github.com/dc24aicrew/edu-gamification-for-banking.git
cd edu-gamification-for-banking
```

2. Start the services with Docker Compose:
```bash
cd docker
docker-compose up
```

This will start:
- Frontend at http://localhost:3000
- Backend API at http://localhost:3001/api
- PostgreSQL database at localhost:5432

### Manual Setup

#### Frontend (React)

1. Install dependencies:
```bash
cd frontend
npm install
```

2. Start the development server:
```bash
npm start
```

The frontend will be available at http://localhost:3000

#### Backend (NestJS)

1. Install dependencies:
```bash
cd backend
npm install
```

2. Create a `.env` file with database connection details:
```
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_DATABASE=banking_gamification
JWT_SECRET=your_jwt_secret_key
```

3. Start the development server:
```bash
npm run start:dev
```

The API will be available at http://localhost:3001/api

#### Database (PostgreSQL)

1. Install and start PostgreSQL (if not using Docker)
2. Create a database:
```bash
createdb banking_gamification
```

3. Initialize the schema:
```bash
psql -d banking_gamification -f database/schema.sql
```

## Features

- Simulation experience for banking scenarios
- User authentication and role-based access
- Leaderboard tracking
- Admin panel for managing simulations and users

## License

This project is proprietary and confidential.
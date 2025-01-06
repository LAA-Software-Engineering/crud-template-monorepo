# CRUD Template Monorepo

A full-stack CRUD example application for managing books with authentication, featuring a Go backend API and React TypeScript frontend.

## Project Structure

```
book-management-system/
├── backend/
│   ├── cmd/
│   ├── pkg/
│   ├── docker-compose.yml
│   └── README.md
├── frontend/
│   ├── src/
│   ├── package.json
│   └── README.md
└── README.md
```

## Features

### Backend

- RESTful API with Go
- JWT Authentication
- PostgreSQL Database
- Redis Cache
- API Key Protection
- Rate Limiting
- Swagger Documentation

### Frontend

- React TypeScript UI
- Material Design
- Protected Routes
- CRUD Operations
- Form Validation
- Responsive Design

## Prerequisites

- Go 1.23+
- Node.js 14+
- Docker and Docker Compose
- PostgreSQL 13+
- Redis

## Quick Start

1. Clone the repository:

```bash
git clone https://github.com/LAA-Software-Engineering/crud-template-monorepo
cd crud-template-monorepo
```

2. Start the backend:

```bash
cd backend
make setup
make build-docker
make up
```

3. Start the frontend:

```bash
cd frontend
yarn install
yarn start
```

## Configuration

### Backend

Create `.env` file in `/backend`:

```env
POSTGRES_HOST=localhost
POSTGRES_DB=bookdb
POSTGRES_USER=postgres
POSTGRES_PASSWORD=your-password
POSTGRES_PORT=5432
JWT_SECRET=your-jwt-secret
API_SECRET_KEY=your-api-key
```

### Frontend

Create `.env` file in `/frontend`:

```env
REACT_APP_API_URL=http://localhost:8001/api/v1
REACT_APP_API_KEY=your-api-key
```

## API Documentation

Access Swagger documentation at:

```
http://localhost:8001/swagger/index.html
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

MIT

## Acknowledgments

- Go Gin Framework
- React
- Material-UI
- And all other open-source libraries used in this project

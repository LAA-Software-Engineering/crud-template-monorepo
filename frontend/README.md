# CRUD Template Frontend

A React TypeScript application for managing books with authentication, CRUD operations, and a modern material design interface.

## Features

- User Authentication (Login/Register)
- Book Management:
  - View all books in a paginated table
  - Add new books
  - Edit existing books
  - Delete books
- Material-UI Components
- Responsive Design
- Type-Safe Development with TypeScript
- Secure API Communication

## Tech Stack

- React 18
- TypeScript 4
- Material-UI (MUI) v5
- Axios for API requests
- React Router v6
- React Hook Form for form management
- Tailwind CSS for styling
- Date-fns for date formatting

## Prerequisites

- Node.js 14+ and npm/yarn
- Backend API running on http://localhost:8001

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd frontend
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the frontend root directory:

```env
REACT_APP_API_URL=http://localhost:8001/api/v1
REACT_APP_API_KEY=your-api-key
```

## Development

Start the development server:

```bash
npm start
# or
yarn start
```

The application will be available at `http://localhost:3000`.

## Building for Production

```bash
npm run build
# or
yarn build
```

## Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── auth/
│   │   │   ├── LoginForm.tsx
│   │   │   └── RegisterForm.tsx
│   │   └── books/
│   │       ├── BookTable.tsx
│   │       └── BookModal.tsx
│   ├── pages/
│   │   ├── LoginPage.tsx
│   │   ├── RegisterPage.tsx
│   │   └── BooksPage.tsx
│   ├── services/
│   │   ├── api.ts
│   │   └── axios.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   └── index.tsx
├── package.json
└── tsconfig.json
```

## API Integration

The frontend communicates with the backend API using Axios. All API calls require:

- `X-API-Key` header for authentication
- JWT token in Authorization header for protected routes

## Authentication Flow

1. User registers/logs in
2. JWT token is received and stored in localStorage
3. Token is included in all subsequent API requests
4. 401 responses trigger automatic logout

## Available Scripts

- `yarn start`: Start development server
- `yarn test`: Run tests
- `yarn build`: Build for production
- `yarn eject`: Eject from Create React App

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

MIT

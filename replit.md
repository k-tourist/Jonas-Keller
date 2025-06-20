# replit.md

## Overview
This is a full-stack web application showcasing a personal portfolio website for "Alex Thompson - Full Stack Developer". The application is built using a modern tech stack with React for the frontend, Express.js for the backend, and PostgreSQL with Drizzle ORM for data persistence. The project follows a monorepo structure with shared schemas and clean separation between client and server code.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack React Query for server state management
- **Build Tool**: Vite for development and production builds
- **UI Components**: Radix UI primitives with custom styling

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: tsx for TypeScript execution in development
- **Production**: esbuild for bundling server code

### Data Storage
- **Database**: PostgreSQL (configured for Neon serverless)
- **ORM**: Drizzle ORM with Drizzle Kit for migrations
- **Schema**: Shared TypeScript schema definitions between client and server
- **Validation**: Zod for runtime type validation

## Key Components

### Project Structure
```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # React components including UI library
│   │   ├── pages/          # Route components
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/           # Utilities and configurations
├── server/                 # Backend Express application
│   ├── index.ts           # Main server entry point
│   ├── routes.ts          # API route definitions
│   ├── storage.ts         # Data access layer with memory fallback
│   └── vite.ts           # Vite development middleware
├── shared/                # Shared code between client and server
│   └── schema.ts         # Database schema and types
└── migrations/           # Database migration files
```

### Authentication & User Management
- User schema with username/password authentication
- Zod validation schemas for user input
- Memory storage implementation with interface for easy database integration

### UI/UX Features
- Portfolio sections: Hero, Experience, Skills, Projects, Contact
- Responsive design with mobile-first approach
- Intersection Observer hooks for scroll animations
- Toast notifications for user feedback
- Form handling with validation

## Data Flow

### Development Flow
1. Vite dev server serves React application
2. Express server handles API routes with `/api` prefix
3. Database operations through Drizzle ORM
4. Shared schemas ensure type safety between client and server

### Production Flow
1. Vite builds optimized client bundle
2. esbuild bundles server code for Node.js
3. Express serves static files and API endpoints
4. Database operations through connection pooling

### Storage Layer
- Interface-based storage design (`IStorage`)
- Memory storage implementation for development
- Easy migration path to PostgreSQL implementation
- CRUD operations: `getUser`, `getUserByUsername`, `createUser`

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL serverless connection
- **drizzle-orm & drizzle-kit**: Database ORM and migration tools
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Headless UI component primitives
- **tailwindcss**: Utility-first CSS framework
- **wouter**: Lightweight client-side routing

### Development Tools
- **vite**: Build tool and dev server
- **tsx**: TypeScript execution for development
- **esbuild**: Production bundling for server
- **@replit/vite-plugin-***: Replit-specific development plugins

## Deployment Strategy

### Replit Configuration
- **Platform**: Autoscale deployment target
- **Build Command**: `npm run build` (Vite + esbuild)
- **Start Command**: `npm run start` (production server)
- **Development**: `npm run dev` (tsx with Vite middleware)
- **Port Configuration**: Internal 5000, external 80

### Database Setup
- PostgreSQL 16 module enabled in Replit
- Environment variable `DATABASE_URL` required
- Drizzle migrations in `./migrations` directory
- Schema push command: `npm run db:push`

### Build Process
1. **Frontend Build**: Vite compiles React app to `dist/public`
2. **Backend Build**: esbuild bundles server to `dist/index.js`
3. **Static Serving**: Express serves built frontend from `dist/public`
4. **API Routes**: Express handles backend routes with `/api` prefix

## Changelog
```
Changelog:
- June 20, 2025. Initial setup - Created modern portfolio with animations, timeline, skills, projects
- June 20, 2025. Fixed Vercel deployment - Added proper build configuration and deployment guide
```

## User Preferences
```
Preferred communication style: Simple, everyday language.
```
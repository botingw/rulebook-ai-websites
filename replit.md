# Rulebook-AI Landing Page

## Overview

This is a full-stack web application serving as a landing page for Rulebook-AI, a CLI tool that manages composable rule packs for AI coding assistants. The application showcases the product's features, demonstrates CLI usage, highlights community ecosystem integration, and provides GitHub statistics. Built as a modern web application with React frontend and Express backend, it demonstrates the product's cross-platform compatibility across Cursor, CLINE, RooCode, and Windsurf AI assistants.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React with TypeScript**: Single-page application using modern React patterns with functional components and hooks
- **Wouter**: Lightweight client-side routing for navigation between different landing page approaches
- **Tailwind CSS + shadcn/ui**: Utility-first CSS framework with professional component library for consistent styling
- **TanStack Query**: Server state management for API calls with caching and error handling
- **Vite**: Fast build tool and development server with hot module replacement

### Backend Architecture
- **Express.js**: Lightweight REST API server with middleware for logging and error handling
- **Node.js with ESM**: Modern JavaScript runtime using ES modules
- **GitHub API Integration**: Service layer for fetching repository statistics and community data
- **In-memory Storage**: Simple storage implementation for user data with interface-based design allowing future database integration

### Data Storage Solutions
- **Drizzle ORM**: Type-safe database toolkit configured for PostgreSQL with schema definitions
- **Neon Database**: PostgreSQL-compatible serverless database (configured but not actively used in current implementation)
- **Migration System**: Database schema versioning with Drizzle Kit for deployment consistency

### Authentication and Authorization
- **Session-based Architecture**: Prepared for session management with connect-pg-simple for PostgreSQL session storage
- **User Schema**: Basic user model with username/password fields ready for authentication implementation

### External Dependencies
- **GitHub API**: Fetches real-time repository statistics (stars, forks) and community pack counts
- **Neon Database**: Serverless PostgreSQL database for persistent data storage
- **Vercel/Railway Deployment**: Cloud hosting platform optimized for Node.js applications
- **npm/pip Package Registries**: Distribution channels for the CLI tool being promoted

The application follows a clear separation of concerns with shared types between frontend and backend, modular component architecture, and prepared infrastructure for scaling. The landing page approach allows experimentation with different messaging strategies while maintaining the same underlying architecture.
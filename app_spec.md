# Firestore Note-Taking App - Current Specification

## Project Overview
A React-based note-taking application with Firebase authentication and local state management. Currently implements basic CRUD operations with a clean UI but lacks Firestore integration.

## Current Architecture

### Tech Stack
- **Frontend**: React 19.2.0 + Vite
- **State Management**: Zustand with persistence
- **Routing**: React Router DOM v7
- **Authentication**: Firebase Auth (Email/Password + Google OAuth)
- **UI**: Custom CSS with modular styling
- **Notifications**: React Hot Toast
- **Icons**: React Icons

### Directory Structure
```
src/
├── assets/           # Static assets and global CSS
├── components/       # Reusable UI components
│   ├── appComponents/    # App-specific components
│   └── authComponents/   # Auth-specific components
├── config/          # Configuration files
├── forms/           # Form components
├── layouts/         # Layout components
├── pages/           # Page components
├── routes/          # Routing configuration
├── state/           # Zustand stores
└── services/        # (Planned) Service layer
```

## Current Features

### 1. Authentication System
- **Email/Password**: Login and registration forms
- **Google OAuth**: Google sign-in integration
- **Auth State Management**: Real-time auth state listener via `onAuthStateChanged`
- **Protected Routes**: Basic route structure with auth separation

### 2. Note Management (Local Only)
- **CRUD Operations**:
  - Create: Placeholder component (`CreateNote.jsx`)
  - Read: Dashboard displays all notes
  - Update: Inline editing with `contentEditable`
  - Delete: Not yet implemented
- **State Persistence**: Zustand with localStorage persistence
- **Note Structure**:
  ```javascript
  {
    id: string,
    title: string,
    content: string,
    createdAt: string (ISO),
    updatedAt: string (ISO)
  }
  ```

### 3. UI Components
- **Dashboard**: Grid/list view of notes with preview
- **Note Editor**: Inline editing with auto-save simulation
- **Navigation**: Basic navbar with auth state
- **Forms**: Reusable form components (AuthInput, AuthButton)
- **Error Pages**: 404 and 500 error pages

### 4. Routing
```
/                   -> AppLayout (protected)
  /home            -> Dashboard (note list)
  /create          -> CreateNote (placeholder)
  /edit/:id        -> PageView (note editor)
/auth              -> Auth page (login/register)
/*                 -> 404 page
```

## Current Implementation Details

### State Management (`src/state/`)
- **AuthStore.js**: Manages user authentication state
- **NoteStore.js**: Manages notes with local persistence
  - Currently stores 10 hardcoded notes
  - Implements basic CRUD actions

### Firebase Configuration (`src/config/`)
- **firebase.js**: Firebase app initialization
- **config.js**: Environment-based configuration

### Key Components
1. **Dashboard.jsx**: Displays note cards with click-to-edit
2. **PageView.jsx**: Inline note editor with auto-save
3. **Auth.jsx**: Authentication page with mode switching
4. **AuthForm.jsx**: Reusable auth form component

## Data Flow
1. User authenticates via Firebase Auth
2. Auth state updates AuthStore via listener
3. Notes are loaded from localStorage via Zustand
4. UI components subscribe to store changes
5. Note edits update local state (not persisted to Firestore)

## Current Limitations
1. **No Firestore Integration**: Notes are stored locally only
2. **No User Isolation**: All users see the same notes
3. **Basic CRUD**: Missing delete functionality
4. **No Real-time Updates**: Changes aren't synced across sessions/devices
5. **Placeholder Components**: CreateNote is empty

## Dependencies
```json
{
  "firebase": "^12.10.0",
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "react-hot-toast": "^2.6.0",
  "react-icons": "^5.6.0",
  "react-router-dom": "^7.13.1",
  "zustand": "^5.0.11"
}
```

## Development Setup
- **Build Tool**: Vite
- **Linting**: ESLint with React plugins
- **Environment**: `.env.local` for Firebase config
- **Port**: Default Vite dev server

## Next Steps (From Current State)
The app has a solid foundation with:
1. Working authentication system
2. Clean component architecture
3. Basic note management UI
4. Responsive styling system

Missing the core Firestore integration that would make this a true cloud-based note-taking app.
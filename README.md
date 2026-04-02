# NoteFlow

<p align="center">
  <img src="src/assets/images/icon-large.png" alt="NoteFlow Logo" width="100" />
</p>

<p align="center">
  A modern, real-time note-taking application built with React and Firebase
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat-square&logo=react" alt="React">
  <img src="https://img.shields.io/badge/Firebase-12.10.0-FFCA28?style=flat-square&logo=firebase" alt="Firebase">
  <img src="https://img.shields.io/badge/Zustand-5.0.11-44338F?style=flat-square" alt="Zustand">
  <img src="https://img.shields.io/badge/React_Router-7.13.1-CA4245?style=flat-square&logo=react-router" alt="React Router">
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.2.1-06B6D4?style=flat-square&logo=tailwind-css" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Vite-7.3.1-646CFF?style=flat-square&logo=vite" alt="Vite">
</p>

## Features

### 🔐 Authentication
* Email/Password registration and login
* Google OAuth sign-in
* Persistent authentication state
* Secure logout functionality

### 📝 Note Management
* Create and edit notes in a unified editor
* Auto-save on blur for seamless editing
* Real-time search/filtering by title or content
* Delete notes with confirmation modal
* Timestamps for creation and last update

### 🎨 UI/UX
* Responsive design with Tailwind CSS
* Animated gradient authentication screen
* Toast notifications for user feedback
* Error boundary for graceful error handling
* Custom 404 and 500 error pages

### 🚀 Tech Stack

| Technology | Purpose |
|------------|---------|
| React 19 | UI framework |
| Firebase Auth | Authentication |
| Firestore | Database |
| Zustand | State management |
| React Router | Navigation |
| Vite | Build tool |

## Project Structure

```
src/
├── assets/
│   └── images/          # Static assets
├── components/          # Reusable UI components
│   ├── AuthButton.jsx   # Styled button for auth forms
│   ├── AuthInput.jsx    # Styled input for auth forms
│   ├── DeleteModal.jsx  # Confirmation modal for deletion
│   ├── ErrorBoundary.jsx # Catches and displays errors
│   ├── Footer.jsx       # Footer component
│   └── Navbar.jsx       # Top navigation with search
├── config/
│   ├── config.js        # Environment configuration
│   └── firebase.js      # Firebase initialization
├── layouts/
│   └── AppLayout.jsx    # Main layout wrapper
├── pages/
│   ├── Auth.jsx         # Login/Register page
│   ├── Dashboard.jsx    # Notes listing grid
│   ├── Logout.jsx       # Logout handler
│   ├── NoteEditor.jsx   # Unified create/edit view
│   ├── Page404.jsx      # 404 error page
│   └── Page500.jsx      # 500 error page
├── routes/
│   ├── Routes.jsx       # Route definitions
│   └── urls.js          # Centralized URL constants
├── services/
│   └── firebase/
│       ├── AuthService.js # Auth operations
│       └── NoteService.js # CRUD operations
├── store/
│   ├── AuthStore.js     # Auth state management
│   └── NoteStore.js     # Notes state management
├── App.jsx
├── main.jsx
└── index.css
```

## Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/` | Dashboard | Home - displays all user notes |
| `/auth` | Auth | Login/Register page |
| `/auth?mode=login` | Auth | Login form |
| `/auth?mode=register` | Auth | Registration form |
| `/create` | NoteEditor | Create new note |
| `/edit/:id` | NoteEditor | Edit existing note |
| `/logout` | Logout | Sign out user |
| `*` | Page404 | Not found page |

## State Management

### NoteStore
```javascript
{
  notes: [],           // All notes from Firestore
  loading: false,      // Loading state
  searchQuery: '',     // Current search term
  showModal: false,    // Delete modal visibility
}
```

### AuthStore
```javascript
{
  user: null,          // Firebase user object
  setUser: (user) => {},    // Set current user
  clearUser: () => {},      // Clear on logout
}
```

## Setup Instructions

### Prerequisites
* Node.js 18+ installed
* A Firebase project with:
  * Authentication enabled (Email/Password + Google)
  * Firestore database created
  * Web app configuration

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd firestore-notetaking

# Install dependencies
npm install

# Create config file
cp src/config/config.example.js src/config/config.js

# Configure Firebase
# Edit src/config/config.js with your Firebase credentials
```

### Configuration

Create `src/config/config.js`:

```javascript
const Config = {
  firebase: {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID"
  }
}

export default Config
```

### Running the App

```bash
# Development mode
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Firebase Data Model

### Users Collection (`users/{uid}`)
```javascript
{
  uid: string,
  email: string,
  displayName: string,
  photoURL: string,
  createdAt: timestamp,
  updatedAt: timestamp,
  deletedAt: timestamp | null
}
```

### Notes Collection (`notes/{noteId}`)
```javascript
{
  title: string,
  content: string,
  userId: string,
  createdAt: timestamp,
  updatedAt: timestamp
}
```

## Key Implementation Details

### URL Constants
All routes are centralized in `src/routes/urls.js` for easy maintenance:
```javascript
export const urls = {
  home: '/',
  auth: '/auth',
  logout: '/logout',
  create: '/create',
  edit: '/edit/:id',
  add: '/create',
  page404: '*'
}
```

### Unified Note Editor
The `NoteEditor` component handles both create and edit modes:
* No `id` param → Create mode (empty fields)
* With `id` param → Edit mode (loads existing note)
* Auto-saves on blur for seamless editing

### Real-time Search
Search is implemented client-side for instant feedback:
* Updates on every keystroke
* Filters by title or content
* Case-insensitive matching

## License

MIT License - feel free to use this project for learning or as a starter template.

<p align="center">
  Made with ❤️ using React & Firebase
</p>

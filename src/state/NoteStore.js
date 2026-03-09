import { create } from "zustand";
import { persist  } from "zustand/middleware";

const useNoteStore = create(persist((set, get) => ({
  notes: [
    {
      id: 'n1a2b3',
      title: 'Project Ideas',
      content: 'Brainstorm possible thesis or final project ideas for the semester.',
      createdAt: '2026-03-01T09:15:00',
      updatedAt: '2026-03-01T10:20:00'
    },
    {
      id: 'n4c5d6',
      title: 'React Router Notes',
      content: 'Remember to use useParams() to access dynamic route values like :id.',
      createdAt: '2026-03-02T13:05:00',
      updatedAt: '2026-03-02T14:00:00'
    },
    {
      id: 'n7e8f9',
      title: 'Firebase Setup',
      content: 'Initialize Firebase with initializeApp() and store config keys in environment variables.',
      createdAt: '2026-03-03T08:40:00',
      updatedAt: '2026-03-03T09:10:00'
    },
    {
      id: 'n10g11',
      title: 'Zustand State Tips',
      content: 'Zustand stores can be accessed outside React using store.getState(). Useful for beforeunload saving.',
      createdAt: '2026-03-04T11:20:00',
      updatedAt: '2026-03-04T11:45:00'
    },
    {
      id: 'n12h13',
      title: 'UI Improvements',
      content: 'Add note preview cards, better typography, and a floating create-note button.',
      createdAt: '2026-03-04T16:00:00',
      updatedAt: '2026-03-04T16:30:00'
    },
    {
      id: 'n14i15',
      title: 'Search Feature',
      content: 'Filter notes based on title and content. Consider debouncing input for better performance.',
      createdAt: '2026-03-05T09:50:00',
      updatedAt: '2026-03-05T10:05:00'
    },
    {
      id: 'n16j17',
      title: 'Keyboard Shortcuts',
      content: 'Ctrl + N to create a new note. Ctrl + S to manually save note changes.',
      createdAt: '2026-03-05T14:10:00',
      updatedAt: '2026-03-05T14:35:00'
    },
    {
      id: 'n18k19',
      title: 'ContentEditable Reminder',
      content: 'Always sanitize contentEditable input and update state carefully to avoid cursor jumping.',
      createdAt: '2026-03-06T08:25:00',
      updatedAt: '2026-03-06T08:55:00'
    },
    {
      id: 'n20l21',
      title: 'Future Features',
      content: 'Markdown support, note tags, folder organization, and offline syncing.',
      createdAt: '2026-03-06T17:10:00',
      updatedAt: '2026-03-06T17:45:00'
    },
    {
      id: 'n22m23',
      title: 'Deployment Checklist',
      content: 'Optimize images, remove console logs, configure Firebase rules, and deploy to Vercel.',
      createdAt: '2026-03-07T12:00:00',
      updatedAt: '2026-03-07T12:30:00'
    }
  ],
  addNote: (note) => set((state) => ({ notes: [...state.notes, note] })),
  removeNote: (id) => set((state) => ({ notes: state.notes.filter((note) => note.id !== id) })),
  updateNote: (id, updatedNote) => set((state) => ({ notes: state.notes.map((note) => note.id === id ? { ...note, ...updatedNote } : note) })),
  getNoteById: (id) => {
    const { notes } = get();
    return notes.find((note) => note.id === id);
  },
}), {
  name: 'app',
}))

export default useNoteStore
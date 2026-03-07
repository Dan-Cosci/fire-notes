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
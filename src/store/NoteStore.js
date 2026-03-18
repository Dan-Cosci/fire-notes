import { create } from "zustand";
import { persist  } from "zustand/middleware";

const useNoteStore = create(persist((set, get) => ({
  notes: [
    
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
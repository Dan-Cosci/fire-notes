import { create } from "zustand";
import { persist  } from "zustand/middleware";

import NoteService from '../services/firebase/NoteService.js'

const useNoteStore = create(persist((set, get) => ({
  notes: [],
  loading: false,

  setLoading: (loading) => set({ loading }),
  getNote: async (userId) => {
    const notes = await NoteService.getNotes(userId)
    set({ notes })
  },
  
  updateNote: async (note) => {
    await NoteService.updateNote(note);
    get().getNote(note.userId);
    set({loading: false})
  },

}), {
  name: 'app',
}))

export default useNoteStore
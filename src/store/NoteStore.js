import { create } from "zustand";
import { persist  } from "zustand/middleware";

import NoteService from '../services/firebase/NoteService.js'

const useNoteStore = create(persist((set, get) => ({
  loading: false,
  setLoading: (loading) => set({ loading }),
  notes: [],
  getNote: async (userId) => {
    const notes = await NoteService.getNotes(userId)
    set({ notes })
  },
  
}), {
  name: 'app',
}))

export default useNoteStore
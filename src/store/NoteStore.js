import { create } from "zustand";
import { persist  } from "zustand/middleware";

import NoteService from '../services/firebase/NoteService.js'
import useAuthStore from './AuthStore.js';

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

  createNote: async (note) => {
    const userId = useAuthStore.getState().user?.uid;
    if (!userId) return null;
    const noteId = await NoteService.createNote(note, userId);
    await get().getNote(userId);
    return noteId;
  },

}), {
  name: 'app',
}))

export default useNoteStore
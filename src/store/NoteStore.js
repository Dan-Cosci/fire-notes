import { create } from "zustand";
import { persist  } from "zustand/middleware";

import NoteService from '../services/firebase/NoteService.js'
import useAuthStore from './AuthStore.js';

const useNoteStore = create(persist((set, get) => ({
  notes: [],
  noteToDelete: null,
  loading: false,
  showModal: false,
  searchQuery: '',

  setNoteToDelete: (note) => set({ noteToDelete: note }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  setShowModal: () => set((state) => ({ showModal: !state.showModal })),


  getFilteredNotes: () => {
    const { notes, searchQuery } = get();
    if (!searchQuery.trim()) return notes;
    const query = searchQuery.toLowerCase();
    return notes.filter(note => 
      note.title?.toLowerCase().includes(query) ||
      note.content?.toLowerCase().includes(query)
    );
  },

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

  deleteNote: async () => {
    await NoteService.deleteNote(get().noteToDelete);
    get().getNote(useAuthStore.getState().user?.uid);
  },

}), {
  name: 'app',
  partialize: (state) => ({
    notes: state.notes,
    loading: state.loading,
    searchQuery: state.searchQuery,
  }),
}))

export default useNoteStore
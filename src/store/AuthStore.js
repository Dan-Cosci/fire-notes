import { create } from "zustand";
import { persist } from 'zustand/middleware'

import { auth } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";

const useAuthStore = create(persist((set) => ({
  user: null,
  loading: true,

  setUser: (user) => set({ user }),
  setLoading: (loading) => set({ loading }),
}), {
  name: 'auth',
} ));

// Listen to Firebase auth state
onAuthStateChanged(auth, (user) => {
  useAuthStore.setState({
    user: user || null,
    loading: false,
  });
});

export default useAuthStore;
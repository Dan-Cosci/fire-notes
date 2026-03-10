import { create } from "zustand";
import { persist } from 'zustand/middleware'

import { auth } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";

const useAuthStore = create(persist((set) => ({
  user: null,
  loading: true,

  setUser: (user) => {
    const { uid, email, displayName, photoURL } = user;
    set({ user : { uid, email, displayName, photoURL } })
},
  setLoading: (loading) => set({ loading }),
}), {
  name: 'auth',
} ));

// Listen to Firebase auth state
onAuthStateChanged(auth, (user) => {

  useAuthStore.setState({
    user: user ? { uid: user.uid, email: user.email, displayName: user.displayName, photoURL: user.photoURL } : null,
    loading: false,
  });
});

export default useAuthStore;
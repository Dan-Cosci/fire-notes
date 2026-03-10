import { auth, db,GoogleProvider } from "../../config/firebase";
import {  
  signInWithPopup, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword } from 'firebase/auth';


const AuthService = {
  regularSignUp: async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User created:', user);
      return user;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  },

  regularSignIn: async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      return user;
    } catch (error) {
      console.error('Error signing in:', error);
      throw error;
    }
  },

  googleSignIn: async () => {
    try {
      const result = await signInWithPopup(auth, GoogleProvider);
      const user = result.user;
      console.log('User signed in with Google:', user);
      return user;
    } catch (error) {
      console.error('Error signing in with Google:', error);
      throw error;
    }
  },

  signOut: async () => {
    try {
      await auth.signOut();
      console.log('User signed out successfully');
    } catch (error) {
      console.error('Error signing out:', error);
      throw error;
    }
  },
} 
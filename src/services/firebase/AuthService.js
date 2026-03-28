import { auth, db, GoogleProvider } from "../../config/firebase";
import {  
  updateProfile,
  signInWithEmailAndPassword, 
  signInWithPopup, 
  getRedirectResult,
  createUserWithEmailAndPassword, 
  signInWithRedirect
} from 'firebase/auth';

import { doc, setDoc, getDoc } from 'firebase/firestore';

const createUserDoc = async (user) => {
  const { uid, email, displayName, photoURL } = user;
  const userRef = doc(db, 'users', uid);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) await setDoc(userRef, {
    uid: uid,
    email:email,
    displayName:displayName || '',
    photoURL: photoURL || '',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    deletedAt: null,
  });

  return userRef;
}

const AuthService = {
  regularSignUp: async (email, password, displayName) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await updateProfile(user, { displayName });
      await createUserDoc(user);
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
      const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);

      if (isMobile) {
        // Mobile: use redirect
        await signInWithRedirect(auth, GoogleProvider);
        // Result will be handled after redirect in app initialization
        return null; // cannot return user immediately
      } else {
        // Desktop: use popup
        const result = await signInWithPopup(auth, GoogleProvider);
        const user = result.user;
        await createUserDoc(user);
        console.log("User signed in with Google (desktop):", user);
        return user;
      }
    } catch (error) {
      console.error("Error signing in with Google:", error);
      throw error;
    }
  },

  handleRedirectResult: async () => {
    try {
      const result = await getRedirectResult(auth);
      if (result && result.user) {
        const user = result.user;
        await createUserDoc(user);
        console.log("User signed in with Google (mobile redirect):", user);
        return user;
      }
      return null; // no redirect result
    } catch (error) {
      console.error("Error handling redirect result:", error);
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

export default AuthService;
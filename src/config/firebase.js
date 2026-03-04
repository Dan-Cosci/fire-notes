import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import Config from './config.js'

const frb = Config.firebase;

const firebaseConfig = {
  apiKey: frb.apiKey,
  authDomain: frb.authDomain,
  projectId: frb.projectId,
  storageBucket: frb.storageBucket,
  messagingSenderId: frb.messagingSenderId,
  appId: frb.appId,
  measurementId: frb.measurementId
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
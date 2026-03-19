import { db } from '../../config/firebase.js';
import { collection, query, where, getDocs, addDoc, doc, updateDoc, deleteDoc, getDoc } from 'firebase/firestore';


const NoteService = {
  getNotes : async (userId) => {
    if(!userId) return [];
    const ref = collection(db, 'notes');
    const q = query(ref, where('userId', '==', userId));
    const querySnapshot = await getDocs(q);
    const notes = [];
    querySnapshot.forEach((doc) => {
      notes.push({ id: doc.id, ...doc.data() });
    });
    return notes;

  },
  createNote: async (note, userId) => {
    if (!userId || !note) return;
    const ref = collection(db, 'notes');
    const docRef = await addDoc(ref, { ...note, userId });
    return docRef.id;
  },
  updateNote: async (noteId, updatedNote) => {
    if (!noteId || !updatedNote) return;
    const docRef = doc(db, 'notes', noteId);
    await updateDoc(docRef, updatedNote); 
    return noteId;
  },
  deleteNote: async (noteId) => {
    if (!noteId) return;
    const docRef = doc(db, 'notes', noteId);
    await deleteDoc(docRef);
    return noteId;
  },
  getNoteById: async (noteId) => {
    if (!noteId) return null;
    const docRef = doc(db, 'notes', noteId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) return { id: docSnap.id, ...docSnap.data() };
    return null;
  }
}

export default NoteService;
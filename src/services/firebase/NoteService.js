import { db } from '../../config/firebase.js';
import { collection, query, where, getDocs, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';


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
    const docRef = await addDoc(ref, { ...note, userId, createdAt:new Date() });
    return docRef.id;
  },
  updateNote: async (updatedNote) => {
    if (!updatedNote) return;
    const docRef = doc(db, 'notes', updatedNote.id);
    // Exclude the 'id' field when updating the document
    const { id, ...noteData } = updatedNote;
    await updateDoc(docRef, noteData); 
    return { id, ...noteData };
  },
  deleteNote: async (noteId) => {
    if (!noteId) return;
    const docRef = doc(db, 'notes', noteId);
    await deleteDoc(docRef);
    return noteId;
  },
}

export default NoteService;
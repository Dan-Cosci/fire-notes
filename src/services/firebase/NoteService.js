import { db } from '../../config/firebase.js';
import { collection, query, where, getDocs } from 'firebase/firestore';


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
  createNote: async () => {},
  updateNote: async () => {},
  deleteNote: async () => {},
  getNoteById: async () => {}
}

export default NoteService;
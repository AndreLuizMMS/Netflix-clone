import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth';

import {} from 'firebase/firestore' 

const firebaseConfig = {
  apiKey: 'AIzaSyCKLPgXo1IDFbMy8KOroRG-ERGQ8emC6yw',
  authDomain: 'netflix-clone-6b4e8.firebaseapp.com',
  projectId: 'netflix-clone-6b4e8',
  storageBucket: 'netflix-clone-6b4e8.appspot.com',
  messagingSenderId: '576093261965',
  appId: '1:576093261965:web:55ebc32a50fcf445a192c4'
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const createUser = async (email, password) => {
  if (!password || !email) return; // se nao tiver nenhum, break
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const loginExistentUser = async (email, password) => {
  if (!password || !email) return; // se nao tiver nenhum, break
  return await signInWithEmailAndPassword(auth, email, password);
};

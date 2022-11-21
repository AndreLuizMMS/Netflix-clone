import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

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

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth, name) => {
  if (!userAuth) return; // se nao tiver nenhum
  const userDoc = doc(db, 'users', userAuth.uid);

  const UserSnapshot = await getDoc(userDoc);

  if (!UserSnapshot.exists()) {
    const { email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDoc, {
        email,
        name,
        createdAt
      });
      console.log('criou');
    } catch (err) {
      console.log(err);
    }
  }
};

export const getUserFromDB = async user => {
  const userDoc = doc(db, 'users', user.uid);
  const userDocRef = await getDoc(userDoc);
  // console.log(userDocRef.data());
  return userDocRef.data();
};

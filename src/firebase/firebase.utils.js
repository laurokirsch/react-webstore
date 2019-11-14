import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAHwjooqHNHbonqZcKmAiNXcMhLVhrWuKE',
  authDomain: 'webstore-a2a58.firebaseapp.com',
  databaseURL: 'https://webstore-a2a58.firebaseio.com',
  projectId: 'webstore-a2a58',
  storageBucket: 'webstore-a2a58.appspot.com',
  messagingSenderId: '1098153023989',
  appId: '1:1098153023989:web:1cd0b6c2a5839909eea8bc'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // Gets user reference from the DB
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // This function retuns a reference even if the user doesn't exist in the DB, but with property exists: false
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account ' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

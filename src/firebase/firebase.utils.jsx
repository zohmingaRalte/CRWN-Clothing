import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC6A0XYliTvCV5iC66dGKJgCNeMNvM6vfU",
  authDomain: "crwn-db-f5a7a.firebaseapp.com",
  projectId: "crwn-db-f5a7a",
  storageBucket: "crwn-db-f5a7a.appspot.com",
  messagingSenderId: "869164563164",
  appId: "1:869164563164:web:f3285f7eb0cadee2369219",
  measurementId: "G-R3B5ET2RVQ",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

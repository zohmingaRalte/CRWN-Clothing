import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAWyH10aYuQaThhAoy3Lb25x9aUZfIzYxE",
  authDomain: "lenghermawii-35aa5.firebaseapp.com",
  projectId: "lenghermawii-35aa5",
  storageBucket: "lenghermawii-35aa5.appspot.com",
  messagingSenderId: "27832352916",
  appId: "1:27832352916:web:5f7efeb20dfed41203f481",
  measurementId: "G-D23P0T05S8",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

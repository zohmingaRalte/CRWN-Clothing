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

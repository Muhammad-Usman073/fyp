import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  signInWithRedirect,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA4KK4265ENEjqi7Gwm11-dYvXzt1s3Qyk",
  authDomain: "multifasahalaza.firebaseapp.com",
  projectId: "multifasahalaza",
  storageBucket: "multifasahalaza.appspot.com",
  messagingSenderId: "814276640728",
  appId: "1:814276640728:web:a8c81e3deee30e113fbcad",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export const auth = getAuth();
export const authUser = getAuth().currentUser;
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});
export const signInWithGooglePopUp = async (validity) => {
  const emailVarification = await signInWithPopup(auth, googleProvider);
  return emailVarification;
};
export const signInWithGoogleRedirect = () => {
  signInWithRedirect(auth, googleProvider);
};
export const signUpWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return;
  }

  const createAccount = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  return createAccount;
};
export const signInUsingEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return;
  }
  const signIn = await signInWithEmailAndPassword(auth, email, password);
  return signIn;
};

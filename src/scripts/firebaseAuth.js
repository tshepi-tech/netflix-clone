// NPM Packages
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  deleteUser,
} from "firebase/auth";

// Project file
import { authentification } from "./firebase";

// Methods
export async function createUser(email, password) {
  const userCredential = await createUserWithEmailAndPassword(
    authentification,
    email,
    password
  );

  return userCredential.user.uid;
}

//remove your own account, person who is logged in
export async function removeUser() {
  const user = authentification.currentUser;
  await deleteUser(user);
}

export async function loginUser(email, password) {
  const userCredential = await signInWithEmailAndPassword(
    authentification,
    email,
    password
  );
  return userCredential.user.uid;
}

export async function logoutUser() {
  signOut(authentification);
}

export async function resetUser(email) {
  await sendPasswordResetEmail(authentification, email);
}

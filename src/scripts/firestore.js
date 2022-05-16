// NPM packages
import { doc, collection } from "firebase/firestore";
import { addDoc, getDoc, getDocs, setDoc, deleteDoc } from "firebase/firestore";

// Project files
import { firestore } from "./firebase";

//Methods

// --Create
export async function createDocumentWithId(path, id, data) {
  const documentReference = doc(firestore, path, id);
  await setDoc(documentReference, data);

  return true;
}

export async function addDocument(path, data) {
  const documentPath = collection(firestore, path);
  const document = await addDoc(documentPath, data);

  return document.id;
}

//--read

export async function readDocument(path, id) {
  const documentPath = doc(firestore, path, id);
  const document = await getDoc(documentPath);

  return document.data();
}

export async function readCollection(path) {
  const collectionPath = collection(firestore, path); // firebase-fe2/firestore/drivers
  const snapshot = await getDocs(collectionPath);
  const documents = snapshot.docs.map((item) => {
    return { id: item.id, ...item.data() };
  });

  return documents;
}
// -- Update
export async function updateDocument(path, data) {
  const id = data.id;
  const documentPath = doc(firestore, path, id);

  await setDoc(documentPath, data);
  return "Succeed modifying document";
}

// -- Delete
export async function deleteDocument(path, id) {
  const documentPath = doc(firestore, path, id);

  await deleteDoc(documentPath);
}

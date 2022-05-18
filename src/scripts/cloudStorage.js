//NPM packages
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

//Project file
import { cloudStorage } from "./firebase";

//Methods

//--Create
export async function createFile(filePath, file) {
  const fileReference = ref(cloudStorage, filePath);
  await uploadBytes(fileReference, file); //upload file to server
  return await getDownloadURL(fileReference); //getting URL
}

// -- Delete
export async function deleteFile(filePath) {
  const fileReference = ref(cloudStorage, filePath);

  await deleteObject(fileReference);
}

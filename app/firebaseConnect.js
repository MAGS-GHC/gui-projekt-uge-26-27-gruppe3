// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdxow3XCOdSjuNRBzi9kMZt_0bsV9E684",
  authDomain: "stadionbookingskoleproject.firebaseapp.com",
  projectId: "stadionbookingskoleproject",
  storageBucket: "stadionbookingskoleproject.appspot.com",
  messagingSenderId: "400617141781",
  appId: "1:400617141781:web:d82f13bc82e58b640f801c",
  measurementId: "G-XX8C3Y6QRP",
};
const app = initializeApp(firebaseConfig);

export default app;

// The below code is what you need to get data from the database right now
// you get what documents that are under the collection "section" on the
// database currently you only get "a" back
// import firebase from './firebaseConnect.js';
// import { getFirestore, collection, getDocs } from 'firebase/firestore';

// const db = getFirestore(firebase)
// const testCol = collection(db, 'section');
// const snapshot = await getDocs(testCol);
// const doc = snapshot.docs.map(doc => doc.data())
// console.log(doc);

// This is how you can refer to a specific document
// const docRef = doc(db, 'collectionName', 'documentId');

// This is how you can refer to a specific collection
// const colRef = collection(db, 'collectionName');

// This is how you can change a field value for a document
// 'fieldToUpdate' is a variable and 'newValue' is aswell
// await updateDoc(docRef, { [fieldToUpdate]: newValue });

// This is how you can create a new collection
// await addDoc(collectionRef, { /* document data */ });

// This is how you can create a document
// await setDoc(docRef, { /* document data */ });

// This is a example on how document data should look like if
// you have more than one datapoint you want to create/update
// const documentData = {
//   field1: 'value1',
//   field2: 42,
//   field3: true,
//   field4: { nestedField: 'nestedValue' },
// };

// This is how you delete a specific document
// await deleteDoc(docRef);

// This is how you empty a specific collection
// const querySnapshot = await getDocs(collectionRef);
//
//   querySnapshot.forEach((doc) => {
//     deleteDoc(doc.ref);
//   });

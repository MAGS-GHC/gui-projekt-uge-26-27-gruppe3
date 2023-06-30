import firebase from '../firebaseConnect.js';
import { getFirestore, doc, getDocFromServer } from 'firebase/firestore';

export default async function GameData(GameID) {
const db = getFirestore(firebase)
const docRef = doc(db, 'Kampe', GameID);
const snapshot = await getDocFromServer(docRef);
console.log(snapshot.data());
};
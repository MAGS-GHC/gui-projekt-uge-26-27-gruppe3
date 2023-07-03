import firebase from '../firebaseConnect.js';
import { getFirestore, doc, getDocFromServer, col, getDocs} from 'firebase/firestore';

export default async function GameData(GameID) {
const db = getFirestore(firebase)
const colRef = col(db, 'Kampe');
const snapshot = await getDocs(colRef);
snapshot.forEach(s => console.log(s));
};

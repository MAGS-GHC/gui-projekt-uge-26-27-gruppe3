import firebase from './firebaseConnect.js';
import { getFirestore, collection, getDocs} from 'firebase/firestore';

export const GetAllGameData = async() => {
const db = getFirestore(firebase);
const colRef = collection(db, 'Kampe');
const snapshotArray = await getDocs(colRef);
let gameData = [];
snapshotArray.forEach(s => gameData.push(s.data()));

// var kampDato = parseDatoString(props.dato);
gameData.sort((a, b) => new Date(parseDatoString(a.date)) - new Date(parseDatoString(b.datetime)))

// Hjælpefunktion til at konvertere datoformatet til et Date-objekt
function parseDatoString(dato) {
    var splittedeDato = dato.split(" ");
    var dag = parseInt(splittedeDato[1], 10);
    var maaned = parseMaaned(splittedeDato[2]);
    return new Date(new Date().getFullYear(), maaned - 1, dag); // Måneder i JavaScript er nulbaserede
}

// Hjælpefunktion til at konvertere månedsnavnet til en numerisk værdi
function parseMaaned(maaned) {
    var maaneder = {
        JANUAR: 1,
        FEBRUAR: 2,
        MARTS: 3,
        APRIL: 4,
        MAJ: 5,
        JUNI: 6,
        JULI: 7,
        AUGUST: 8,
        SEPTEMBER: 9,
        OKTOBER: 10,
        NOVEMBER: 11,
        DECEMBER: 12,
    };
    return maaneder[maaned.toUpperCase()];
}
return gameData;
};

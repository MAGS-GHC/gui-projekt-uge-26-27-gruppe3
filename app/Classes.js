"use client";
import { Noto_Serif_Tamil } from "next/font/google";
import { app } from "./firebaseConnect";
import firebase from "./firebaseConnect.js";

import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  doc,
  getDoc,
} from "firebase/firestore";

// Section class
export class Section {
  constructor(id, rowsCount, rows, standing) {
    this.id = id;
    this.rowsCount = rowsCount;
    this.rows = rows;
    this.standing = standing;
  }
}
// Row class
export class Row {
  constructor(id, seatCount, seat) {
    this.id = id;
    this.seatCount = seatCount;
    this.seats = seat;
  }
  toObject() {
    return { id: this.id, seatCount: this.seatCount, seats: this.seats };
  }
}
// Seat class
export class Seat {
  constructor(id, number, reserved, price) {
    this.id = id;
    this.number = number;
    this.reserved = reserved;
    this.price = price;
  }
}
// Ticket class
export class Ticket {
  constructor(ticketId, userId, section, row, seat) {
    this.ticketId = ticketId;
    this.userId = userId;
    this.section = section;
    this.row = row;
    this.seat = seat;
  }
}
//User class
export class User {
  constructor(userId, ticket) {
    this.userId = userId;
    this.ticket = ticket;
  }
}
// function that gets all the seats from a section
const getSeat = async (id, section) => {
  const returnArray = [];
  const db = getFirestore(firebase);
  const col = collection(db, `${id}-seat`);
  const seat = await getDocs(col);
  const data = seat.docs.map((doc) => doc.data());
  data.forEach((x) => {
    returnArray.push(new Seat(x.id, x.number, x.reserved, x.price));
  });
  return returnArray;
};

//function that gets all the rows from a section with the seats to each row
const getRow = async (id, section) => {
  const returnArray = [];
  const seats = await getSeat(id, section);
  const db = getFirestore(firebase);
  const col = collection(db, `${id}-row`);
  const row = await getDocs(col);
  const data = row.docs.map((doc) => doc.data());
  for (let i = 0; i < data.length; i++) {
    const newRow = new Row(data[i].id, data[i].seatCount, []);
    for (let y = 0; y < seats.length; y++) {
      if (seats[y].id.includes(newRow.id + "-")) {
        newRow.seats.push(seats[y]);
      }
    }
    returnArray.push(newRow);
  }
  return returnArray;
};
//function that get a section from the db with all its data
export const getSection = async (id, sections) => {
  const db = getFirestore(firebase);
  const col = doc(db, `${id}-section`, sections);
  const section = await getDoc(col);
  const row = await getRow(id, sections);
  console.log(
    new Section(
      section.data().id,
      section.data().rowsCount,
      row,
      section.data().standing
    )
  );
};

// const addSection = async () => {
//   const db = getFirestore(firebase);
//   const col = collection(db, "VFF-BFF-section");
//   const setdoc = await setDoc(doc(col, "L"), {
//     id: "L",
//     rowsCount: 18,
//     standing: false,
//   });
// };
// addSection();
// const addRows = async () => {
//   const db = getFirestore(firebase);
//   const col = collection(db, "VFF-BFF-row");
// for (let i = 1; i <= 17; i++) {
//   const setdoc = await setDoc(doc(col, `L-${i}`), {
//     id: `L-${i}`,
//     seatCount: 34,
//   });
// }
//};
//addRows();

// const addSeats = async () => {
//   const db = getFirestore(firebase);
//   const col = collection(db, "VFF-BFF-seat");
//   for (let x = 1; x <= 17; x++) {
//     for (let i = 1; i <= 34; i++) {
//       const setdoc = await setDoc(doc(col, `L-${x}-${i}`), {
//         id: `L-${x}-${i}`,
//         number: `${i}`,
//         reserved: false,
//         price: 0,
//       });
//     }
//   }
// };
// addSeats();

const CreateMatch = async (id) => {};
const CreateSections = async () => {};
const CreateRows = async (rows) => {};
const CreateSeats = async () => {};

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
import { get } from "firebase/database";

export class Match {
  constructor(
    id,
    date,
    time,
    outTeam,
    homeTeam,
    homeTeamLogo,
    outTeamLogo,
    openingTime,
    sections
  ) {
    this.id = id;
    this.date = date;
    this.time = time;
    this.outTeam = outTeam;
    (this.homeTeam = homeTeam), (this.homeTeamLogo = homeTeamLogo);
    this.outTeamLogo = outTeamLogo;
    this.openingTime = openingTime;
    this.sections = sections;
  }
}
export class Section {
  constructor(
    id,
    rowsCount,
    standing,
    size,
    rows = this.getRows(id, rowsCount, size)
  ) {
    this.id = id;
    this.rowsCount = rowsCount;
    this.rows = rows;
    this.standing = standing;
    this.size = size;
  }
  getRows(id, rowsCount, size) {
    let returnArray = [];
    for (let i = 1; i <= rowsCount; i++) {
      if (size == "Large") {
        returnArray.push(new Row(id + "-" + i, 10, []));
      } else {
        returnArray.push(new Row(id + "-" + i, 6, []));
      }
    }
    return returnArray;
  }
  toObject() {
    return { id: this.id, rowsCount: this.rowsCount, standing: this.standing };
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
    return { id: this.id, seatCount: this.seatCount };
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
  async toObject() {
    return {
      id: this.id,
      number: this.number,
      reserved: this.reserved,
      price: this.price,
    };
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
const getSeat = async (id) => {
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
const getRow = async (id) => {
  const returnArray = [];
  const seats = await getSeat(id);
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
const getSection = async (id) => {
  let sections = [];
  const db = getFirestore(firebase);
  const col = collection(db, `${id}-sections`);
  const section = await getDocs(col);
  const data = section.docs.map((doc) => doc.data());
  await Promise.all(
    data.map(async (x) => {
      const row = await getRow(x.id);
      const thisSection = new Section(x.id, x.rowsCount, x.standing, null, row);
      sections.push(thisSection);
    })
  );
  return sections;
};
export const getMatch = async (id) => {
  const sections = await getSection(id);
  const db = getFirestore(firebase);
  const doco = doc(db, "Kampe", id);
  const data = await getDoc(doco);

  return new Match(
    data.data().id,
    data.data().date,
    data.data().time,
    data.data().outTeam,
    data.data().homeTeam,
    data.data().homeTeamLogo,
    data.data().outTeamLogo,
    data.data().openingTime,
    sections
  );
};

//getMatch("FCNVFF230723");
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
const CreateSeats = async (sections) => {
  const db = getFirestore(firebase);
  sections.forEach(async (x) => {
    x.rows.forEach(async (y) => {
      const col = collection(db, x.id + "-seat");
      for (let i = 1; i <= y.seatCount; i++) {
        const seat = new Seat(`${y.id}-${i}`, i, false, 0);
        const setdoc = await setDoc(doc(col, `${y.id}-${i}`), seat.toObject());
      }
    });
  });
};
const CreateRows = async (sections) => {
  const db = getFirestore(firebase);
  sections.forEach(async (x) => {
    x.rows.forEach(async (y) => {
      const col = collection(db, x.id + "-row");
      const setdoc = await setDoc(doc(col, y.id), y.toObject());
    });
  });
};
const CreateSections = async (id, sections) => {
  const db = getFirestore(firebase);
  const col = collection(db, `${id}-sections`);
  sections.forEach(async (x) => {
    const setdoc = await setDoc(doc(col, x.id), x.toObject());
  });
};

export const CreateMatch = async (id) => {
  const sections = [
    new Section(id + "-A", 5, false, "Large"),
    new Section(id + "-B", 5, true, "Large"),
    new Section(id + "-C", 5, false, "Large"),
    new Section(id + "-D", 5, false, "Small"),
    new Section(id + "-E", 5, false, "Small"),
    new Section(id + "-F", 5, false, "Small"),
    new Section(id + "-G", 5, false, "Large"),
    new Section(id + "-H", 5, false, "Large"),
    new Section(id + "-I", 5, false, "Large"),
    new Section(id + "-J", 5, false, "Small"),
    new Section(id + "-K", 5, false, "Small"),
    new Section(id + "-L", 5, false, "Small"),
  ];
  CreateSections(id, sections);
  CreateRows(sections);
  CreateSeats(sections);
};
//CreateMatch("FCNVFF230723");

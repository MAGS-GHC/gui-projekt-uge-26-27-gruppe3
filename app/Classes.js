import { Noto_Serif_Tamil } from "next/font/google";
import { app } from "./firebaseConnect";
import firebase from "./firebaseConnect.js";
import { getFirestore, collection, getDocs } from "firebase/firestore";
export class Section {
  constructor(id, rowsCount, sectionId, standing) {
    this.id = id;
    this.rowsCount = rowsCount;
    this.sectionId = sectionId;
    this.standing = standing;
  }
  toObject() {
    id: this.id;
    rowsCount: this.rowsCount;
    sectionId: this.rectionId;
    standing: this.standing;
  }
}

export class Row {
  constructor(id, seat, rowId) {
    this.id = id;
    this.seat = seat;
    this.rowId = rowId;
  }
  toObject() {
    id: this.id;
    seat: this.seat;
    rowId: this.rowId;
  }
}

export class Seat {
  constructor(id, number, reserved, price) {
    this.id = id;
    this.number = number;
    this.reserved = reserved;
    this.price = price;
  }
  toObject() {
    id: this.id;
    number: this.number;
    reserved: this.reserved;
    price: this.price;
  }
}
export class Ticket {
  constructor(ticketId, userId, section, row, seat) {
    this.ticketId = ticketId;
    this.userId = userId;
    this.section = section;
    this.row = row;
    this.seat = seat;
  }

  toObject() {
    ticketId: this.ticketId;
    userId: this.userId;
    section: this.section;
    row: this.row;
    seat: this.seat;
  }
}
export class User {
  constructor(userId, ticket) {
    this.userId = userId;
    this.ticket = ticket;
  }
  toObject() {
    userId: this.userId;
    ticket: this.ticket;
  }
}

export const getSection = async (id) => {
  const db = getFirestore(firebase);
  const col = collection(db, "section");
  const snapshot = await getDocs(testCol);
};

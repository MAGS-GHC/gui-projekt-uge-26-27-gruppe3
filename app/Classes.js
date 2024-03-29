import { Noto_Serif_Tamil } from "next/font/google";
import { app } from "./firebaseConnect";
import firebase from "./firebaseConnect.js";
import { getUserData } from "./getUserData.js";

import {
    getFirestore,
    collection,
    getDocs,
    setDoc,
    doc,
    getDoc,
    updateDoc,
    deleteDoc,
} from "firebase/firestore";
import { get } from "firebase/database";

export class Order {
    constructor(id, seatsId, createTime, totalPrice) {
        this.id = id;
        this.seatsId = seatsId;
        this.createTime = createTime;
        this.totalPrice = totalPrice;
    }
    toObject() {
        return {
            id: this.id,
            seatsId: this.seatsId,
            createTime: this.createTime,
            totalPrice: this.totalPrice,
        };
    }
}

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
        sections = null
    ) {
        this.id = id;
        this.date = date;
        this.time = time;
        this.outTeam = outTeam;
        this.homeTeam = homeTeam;
        this.homeTeamLogo = homeTeamLogo;
        this.outTeamLogo = outTeamLogo;
        this.openingTime = openingTime;
        this.sections = sections;
    }
    toObject() {
        return {
            id: this.id,
            date: this.date,
            time: this.time,
            outTeam: this.outTeam,
            homeTeam: this.homeTeam,
            homeTeamLogo: this.homeTeamLogo,
            outTeamLogo: this.outTeamLogo,
            openingTime: this.openingTime,
        };
    }
}
export class Section {
    constructor(id, section, rowsCount, seatCount, standing, size, seats = null) {
        this.id = id;
        this.section = section;
        this.rowsCount = rowsCount;
        this.standing = standing;
        this.size = size;
        this.seatCount = seatCount;
        this.seats = seats;
    }
    // getRows(id, rowsCount, size) {
    //   rows = this.getRows(id, rowsCount, size)
    //     let returnArray = [];
    //     for (let i = 1; i <= rowsCount; i++) {
    //         if (size == "Large") {
    //             returnArray.push(new Row(id + "-" + i, i, 10, []));
    //         } else {
    //             returnArray.push(new Row(id + "-" + i, i, 6, []));
    //         }
    //     }
    //     return returnArray;
    // }
    toObject() {
        return {
            id: this.id,
            section: this.section,
            rowsCount: this.rowsCount,
            standing: this.standing,
            seatCount: this.seatCount,
        };
    }
}
// Row class
export class Row {
    constructor(id, row, seatCount, seat) {
        this.id = id;
        this.row = row;
        this.seatCount = seatCount;
        this.seats = seat;
    }
    toObject() {
        return {
            id: this.id,
            row: this.row,
            seatCount: this.seatCount,
        };
    }
}
// Seat class
export class Seat {
    constructor(
        id,
        matchId,
        number,
        reserved,
        price,
        sessionId = null,
        bought = false,

        reservedTime = "null"
    ) {
        this.id = id;
        this.matchId = matchId;
        this.number = number;
        this.reserved = reserved;
        this.price = price;
        this.bought = bought;
        this.sessionId = sessionId;
        this.reservedTime = reservedTime;
    }
    toObject() {
        return {
            id: this.id,
            matchId: this.matchId,
            number: this.number,
            reserved: this.reserved,
            price: this.price,
            bought: this.bought,
            sessionId: this.sessionId,
            reservedTime: this.reservedTime,
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
        returnArray.push(
            new Seat(
                x.id,
                x.matchId,
                x.number,
                x.reserved,
                x.price,
                x.sessionId,
                x.bought,
                x.reservedTime
            )
        );
    });
    return returnArray;
};

//function that gets all the rows from a section with the seats to each row
// const getRow = async (matchId) => {
//     const returnArray = [];
//     const seats = await getSeat(matchId);
//     const db = getFirestore(firebase);
//     const col = collection(db, `${matchId}-row`);
//     const row = await getDocs(col);
//     const data = row.docs.map((doc) => doc.data());
//     for (let i = 0; i < data.length; i++) {
//         const newRow = new Row(data[i].id, data[i].row, data[i].seatCount, []);
//         for (let y = 0; y < seats.length; y++) {
//             if (seats[y].id.includes(newRow.id + "-")) {
//                 newRow.seats.push(seats[y]);
//             }
//         }
//         returnArray.push(newRow);
//     }
//     return returnArray;
// };
//function that get a section from the db with all its data
const getSection = async (id) => {
    let sections = [];
    const db = getFirestore(firebase);
    const col = collection(db, `${id}-sections`);
    const section = await getDocs(col);
    const data = section.docs.map((doc) => doc.data());
    const seats = await getSeat(id);
    await Promise.all(
        data.map(async (x) => {
            let seatsArray = [];
            seats.forEach((y) => {
                if (y.id.includes(x.id + "-")) {
                    seatsArray.push(y);
                }
            });
            const thisSection = new Section(
                x.id,
                x.section,
                x.rowsCount,
                x.seatCount,
                x.standing,
                null,
                seatsArray
            );
            sections.push(thisSection);
        })
    );
    return sections;
};
//function that gets a match from the db and insert all its data
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
    // return new Match(
    //     "FCNVFF240723",
    //     "Fredag 24. JULI",
    //     "19:00",
    //     "LYNGBY BK",
    //     "VIBORG FF",
    //     "vff",
    //     "lyngby",
    //     "17:00",
    //     [
    //         new Section("FCNVFF240723-A", "A", 5, false, null, [
    //             new Row("FCNVFF240723-A-1", 1, 3, [
    //                 new Seat("FCNVFF240723-A-1-1", 1, false, 0),
    //                 new Seat("FCNVFF240723-A-1-2", 2, false, 0),
    //                 new Seat("FCNVFF240723-A-1-3", 3, false, 0),
    //             ]),
    //             new Row("FCNVFF240723-A-2", 2, 3, [
    //                 new Seat("FCNVFF240723-A-2-1", 1, false, 0),
    //                 new Seat("FCNVFF240723-A-2-2", 2, false, 0),
    //                 new Seat("FCNVFF240723-A-2-3", 3, false, 0),
    //             ]),
    //         ]), new Section("FCNVFF240723-B", "B", 5, false, null,
    //         [new Row("FCNVFF240723-B-1","1", 2, [
    //         new Seat("FCNVFF240723-B-1-1", 1, false, 0),
    //         new Seat("FCNVFF240723-B-1-2", 2, false, 0)]),
    //         new Row("FCNVFF240723-B-2","2", 2,
    //         [new Seat("FCNVFF240723-B-2-1", 1, false, 0),
    //         new Seat("FCNVFF240723-B-2-2", 2, false, 0)]) ]
    // );
};

//const match = getMatch("FCNVFF230723");
//console.log(match);
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
// const CreateSeats = async (id, sections) => {
//     const db = getFirestore(firebase);
//     sections.forEach(async (x) => {
//         x.rows.forEach(async (y) => {
//             const col = collection(db, id + "-seat");
//             for (let i = 1; i <= y.seatCount; i++) {
//                 const seat = new Seat(`${y.id}-${i}`, i, false, 0);
//                 const setdoc = await setDoc(doc(col, `${y.id}-${i}`), seat.toObject());
//             }
//         });
//     });
// };
// const CreateRows = async (id, sections) => {
//     const db = getFirestore(firebase);
//     sections.forEach(async (x) => {
//         x.rows.forEach(async (y) => {
//             const col = collection(db, id + "-row");
//             const setdoc = await setDoc(doc(col, y.id), y.toObject());
//         });
//     });
// };
// const CreateSections = async (id, sections) => {
//     const db = getFirestore(firebase);
//     const col = collection(db, `${id}-sections`);
//     sections.forEach(async (x) => {
//         const setdoc = await setDoc(doc(col, x.id), x.toObject());
//     });
// };

// export const CreateMatch = async (
//     id,
//     date,
//     time,
//     outTeam,
//     homeTeam,
//     homeTeamLogo,
//     outTeamLogo,
//     openingTime
// ) => {
//     const sections = [
//         new Section(id + "-A", "A", 5, false, "Large"),
//         new Section(id + "-B", "B", 5, true, "Large"),
//         new Section(id + "-C", "C", 5, false, "Large"),
//         new Section(id + "-D", "D", 5, false, "Small"),
//         new Section(id + "-E", "E", 5, false, "Small"),
//         new Section(id + "-F", "F", 5, false, "Small"),
//         new Section(id + "-G", "G", 5, false, "Large"),
//         new Section(id + "-H", "H", 5, false, "Large"),
//         new Section(id + "-I", "I", 5, false, "Large"),
//         new Section(id + "-J", "J", 5, false, "Small"),
//         new Section(id + "-K", "K", 5, false, "Small"),
//         new Section(id + "-L", "L", 5, false, "Small"),
//     ];
//     CreateSections(id, sections);
//     CreateRows(id, sections);
//     CreateSeats(id, sections);
//     const match = new Match(
//         id,
//         date,
//         time,
//         outTeam,
//         homeTeam,
//         homeTeamLogo,
//         outTeamLogo,
//         openingTime
//     );
//     const db = getFirestore(firebase);
//     const col = collection(db, "Kampe");
//     const setdoc = await setDoc(doc(col, id), match.toObject());
// };
const CreateSeats = async (id, sections) => {
    const db = getFirestore(firebase);
    sections.forEach(async (x) => {
        const col = collection(db, id + "-seat");
        for (let i = 1; i <= x.seatCount * x.rowsCount; i++) {
            const seat = new Seat(`${x.id}-${i}`, id, i, false, 10);
            const setdoc = await setDoc(doc(col, `${x.id}-${i}`), seat.toObject());
        }
    });
};

const CreateSections = async (id, sections) => {
    const db = getFirestore(firebase);
    const col = collection(db, `${id}-sections`);
    sections.forEach(async (x) => {
        const setdoc = await setDoc(doc(col, x.id), x.toObject());
    });
};
export const getUserId = async () => {
    return await getUserData().userId;
};
export const CreateMatch = async (
    id,
    date,
    time,
    outTeam,
    homeTeam,
    homeTeamLogo,
    outTeamLogo,
    openingTime
) => {
    const sections = [
        new Section(id + "-A", "A", 3, 5, false, "Large"),
        new Section(id + "-B", "B", 2, 5, true, "Large"),
        // new Section(id + "-C", "C", 5, 10, false, "Large"),
        // new Section(id + "-D", "D", 5, 10, false, "Small"),
        // new Section(id + "-E", "E", 5, 10, false, "Small"),
        // new Section(id + "-F", "F", 5, 10, false, "Small"),
        // new Section(id + "-G", "G", 5, 10, false, "Large"),
        // new Section(id + "-H", "H", 5, 10, false, "Large"),
        // new Section(id + "-I", "I", 5, 10, false, "Large"),
        // new Section(id + "-J", "J", 5, 10, false, "Small"),
        // new Section(id + "-K", "K", 5, 10, false, "Small"),
        // new Section(id + "-L", "L", 5, 10, false, "Small"),
    ];
    CreateSections(id, sections);
    CreateSeats(id, sections);
    const match = new Match(
        id,
        date,
        time,
        outTeam,
        homeTeam,
        homeTeamLogo,
        outTeamLogo,
        openingTime
    );
    const db = getFirestore(firebase);
    const col = collection(db, "Kampe");
    const setdoc = await setDoc(doc(col, id), match.toObject());
};
// CreateMatch(
//     "FCNVFF240723",
//     "Fredag 24. JULI",
//     "19:00",
//     "LYNGBY BK",
//     "VIBORG FF",
//     "vff",
//     "lyngby",
//     "17:00"
// );

export const UpdateSeat = async (matchId, seatId, seat) => {
    const db = getFirestore(firebase);
    const doco = doc(db, matchId + "-seat", seatId);
    const updatedSeat = updateDoc(doco, seat.toObject());
};

//UpdateSeat("FCNVFF240723", "FCNVFF240723-A-1-1");

setInterval(async () => {
    const db = getFirestore(firebase);
    const col = collection(db, "seat-reserved");
    const seats = await getDocs(col);

    const data = seats.docs.map((doc) => doc.data());
    const curentTime = new Date().getTime();
    console.log("update");
    data.forEach((x) => {
        if (x.reservedTime + 600000 < curentTime) {
            const seat = new Seat(
                x.id,
                x.matchId,
                x.number,
                x.reserved,
                x.price,
                x.sessionId,
                x.bought,
                x.reservedTime
            );
            seat.reserved = false;
            seat.sessionId = null;
            UpdateSeat(seat.matchId, seat.id, seat);
            removeData(seat.id);
            console.log("seat released");
        }
    });
}, 600000);
export const reservedSeat = async (seat) => {
    try {
        const db = getFirestore(firebase);
        const col = collection(db, "seat-reserved");
        const setdoc = await setDoc(doc(col, seat.id), seat.toObject());
    } catch (error) {
        console.log(error);
    }
};
export const getSessionData = async (matchId, seat) => {
    const db = getFirestore(firebase);
    const doco = doc(db, matchId + "-seat", seat.id);
    const data = await getDoc(doco);
    return data.data().sessionId;
};

export const removeData = async (seatId) => {
    const db = getFirestore(firebase);
    const doco = doc(db, "seat-reserved", seatId);
    await deleteDoc(doco);
    console.log("seatRemoved");
};

export const createOrder = async (order, seat, time) => {
    const userData = await getUserData();
    order.id = userData.userId;
    order.createTime = time;

    order.seatsId.push(seat.id);

    // const totalPrice = price.reduce((total, current) => {
    //     return total + current;
    // });

    const db = getFirestore(firebase);
    const doco = doc(db, "orders", userData.userId);
    const saveDoc = await setDoc(doco, order.toObject());
};
export const deleteSeatFromOrder = async (order, seat, time) => {
    const userData = await getUserData();
    order.id = userData.userId;
    order.createTime = time;

    order.seatsId = order.seatsId.filter((x) => {
        console.log(x, seat.id);
        return x !== seat.id;
    });

    // const totalPrice = price.reduce((total, current) => {
    //     return total + current;
    // });

    const db = getFirestore(firebase);
    const doco = doc(db, "orders", userData.userId);
    const saveDoc = await setDoc(doco, order.toObject());
};

export const getOrder = async () => {
    const userData = await getUserData();
    const db = getFirestore(firebase);
    const doco = doc(db, "orders", userData.userId);
    const data = await getDoc(doco);

    return data.data();
};

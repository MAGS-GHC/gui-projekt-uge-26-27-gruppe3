"use client";

import Image from "next/image";
import { useState, useEffect, Fragment } from "react";
import NoClickSeat from "@/app/components/NoClickSeat";
import VælgSæde from "@/app/components/VælgSæde";
import Grid from "@/app/components/Grid";
import Link from "next/link";
import {
    getUserId,
    getMatch,
    Match,
    createOrder,
    getOrder,
    Order,
    deleteSeatFromOrder,
} from "@/app/Classes";
import SeatTable from "@/app/components/Table";
import Section from "@/app/components/Section";
//import { set } from "firebase/database";

import { v4 as uuidv4 } from "uuid";
import { set } from "firebase/database";

const checkoutId = uuidv4();
console.log("checkout ID:", checkoutId);

export default function Home({ params }) {
    let seatArray = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
        26, 27, 28, 29, 30,
    ];

    const [sektion, setSektion] = useState("A");
    const [kampData, setKampData] = useState({});
    const [loading, setLoading] = useState(true);
    const [numRows, setNumRows] = useState(0);
    const [numSeats, setNumSeats] = useState(0);
    const [section, setSection] = useState(null);
    const [cart, setCart] = useState([]);
    const [order, setOrder] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const response = await getMatch(params.id);
            const orderData = await getOrder();
            const match = new Match(
                response.id,
                response.date,
                response.time,
                response.outTeam,
                response.homeTeam,
                response.homeTeamLogo,
                response.outTeamLogo,
                response.openingTime,
                response.sections
            );
            match.sections.forEach((x) => {
                x.seats.sort((a, b) => a.number - b.number);
            });
            if (orderData == undefined) {
                let order = new Order(null, [], 0, null);
                console.log(order);
                setOrder(order);
            } else {
                let order = new Order(
                    orderData.id,
                    orderData.seatsId,
                    orderData.createTime,
                    orderData.totalPrice
                );
                setOrder(order);
                console.log(order);
            }
            setCart(order);
            console.log(cart);
            // await createOrder(cart, new Date().getTime());
            setKampData(match);
            setSection(match.sections[0]);
            setLoading(false);
        }
        fetchData();
    }, []);

    async function handleSeatClick() {
        const response = await getMatch(params.id);

        //const orderData = await getOrder();
        const match = new Match(
            response.id,
            response.date,
            response.time,
            response.outTeam,
            response.homeTeam,
            response.homeTeamLogo,
            response.outTeamLogo,
            response.openingTime,
            response.sections
        );
        // let order = new Order(
        //     orderData.id,
        //     orderData.seatsId,
        //     orderData.createTime,
        //     orderData.totalPrice
        // );
        // setOrder(order);

        match.sections.forEach((x) => {
            x.seats.sort((a, b) => a.number - b.number);
        });
        setKampData(match);

        setSection(match.sections[0]);
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    async function handleSeatCart(seat) {
        await createOrder(order, seat, new Date().getTime());
        console.log("Seat added to database cart");
    }

    async function handleRemoveSeatCart(seat) {
        await deleteSeatFromOrder(order, seat, new Date().getTime());
        console.log("Seat removed from database cart");
    }

    function handleSectionChange(section) {
        setSektion(`${section}`);
        console.log(section);
    }

    return (
        <main>
            <div className="container">
                <div className="container flex flex-col w-1/2 bg-grey border rounded-md p-2">
                    <h1 className="text-center">
                        <b>Valgte billetter</b>
                    </h1>

                    <h2 className="text-center">
                        {kampData.homeTeam} - {kampData.outTeam}
                    </h2>
                    <p>
                        {kampData.date} - {kampData.time}
                    </p>
                    {order.seatsId.map((seat) => (
                        <p key={seat}>{seat}</p>
                    ))}
                    <p>{order.totalPrice}</p>
                </div>
                <div className={"bg-dark-green w-100 border border-white m-2 p-4 rounded-lg"}>
                    <h1 className={"h1-display text-white text-center"}>Vælg Siddepladser</h1>
                </div>
                <div id={"MainGrid"} className={"grid grid-rows-5 mx-4 gap-2"}>
                    <div className={"grid grid-cols-5 gap-2"} id={"TopSectionRow"}>
                        <Section section={"A"} setSection={handleSectionChange} />
                        <Section section={"B"} setSection={handleSectionChange} />
                        <Section section={"C"} setSection={handleSectionChange} />
                        <Section section={"D"} setSection={handleSectionChange} />
                        <Section section={"E"} setSection={handleSectionChange} />
                    </div>
                    <div className={"grid grid-cols-5 row-span-3"} id={"MiddleSectionRow"}>
                        <div className={"grid-rows-3 col-start-1 inline-grid my-4 gap-2"}>
                            <Section section={"M"} setSection={handleSectionChange} />
                            <Section section={"MF"} setSection={handleSectionChange} />
                            <Section section={"L"} setSection={handleSectionChange} />
                        </div>
                        <div
                            className={"container col-start-2 col-span-3 w-1/2"}
                            id={"ImageContainer"}>
                            <Image
                                className={"rotate-90"}
                                height={320}
                                width={480}
                                src={"/stadium.jpg"}
                                alt={"Image of the Stadium"}
                            />
                        </div>
                        <div className={"grid-rows-4 col-start-5 inline-grid gap-2 my-2"}>
                            <Section section={"F1"} setSection={handleSectionChange} />
                            <Section section={"F2"} setSection={handleSectionChange} />
                            <Section section={"U1"} setSection={handleSectionChange} />
                            <Section section={"U2"} setSection={handleSectionChange} />
                        </div>
                    </div>
                    <div className={"grid grid-cols-5 gap-2"} id={"BottomSectionRow"}>
                        <Section section={"K"} setSection={handleSectionChange} />
                        <Section section={"J"} setSection={handleSectionChange} />
                        <Section section={"I"} setSection={handleSectionChange} />
                        <Section section={"H"} setSection={handleSectionChange} />
                        <Section section={"G"} setSection={handleSectionChange} />
                    </div>
                    <div className={"grid grid-cols-5"} id={"SelectionRow"}></div>
                </div>
                <div className="fixed bottom-10 right-10">
                    <Link href={`/payment`}>
                        <button
                            id={"NextButton"}
                            className={
                                "xl:text-xl xl:py-6 xl:px-8 " +
                                "lg:text-lg lg:py-4 lg:px-8 " +
                                "md:text-md md:py-4 md:px-8 " +
                                "sm:text-sm sm:py-4 sm:px-8 " +
                                "min-[500px]:text-sm min-[500px]:py-4 min-[500px]:px-8 " +
                                "min-[400px]:text-sm min-[400px]:py-4 min-[400px]:px-8 " +
                                "min-[320px]:text-sm min-[320px]:py-4 min-[320px]:px-8 " +
                                "rounded " +
                                "bg-[#caffee] hover:bg-[#caffaa] " +
                                "border-2 border-black " +
                                "hover:bg-light-blue"
                            }>
                            Til Betaling →
                        </button>
                    </Link>
                </div>
            </div>
            <section id="seatSection" className="mb-20 min-w-">
                <div className="container">
                    {sektion == "A" ? (
                        <>
                            <div>
                                {/* Render other information */}
                                <h1 className="text-center mb-5">Sektion A</h1>
                                <SeatTable
                                    kampid={kampData.id}
                                    seats={kampData.sections[0].seats}
                                    sæderPrRække={kampData.sections[0].seatCount}
                                    rækker={kampData.sections[0].rowsCount}
                                    seatClick={handleSeatClick}
                                    setCart={handleSeatCart}
                                    resetCart={handleRemoveSeatCart}
                                />
                            </div>
                            <div
                                className={"container col-start-2 col-span-3 w-1/2"}
                                id={"ImageContainer"}>
                                <Image
                                    className={"rotate-90 mx-auto"}
                                    height={320}
                                    width={480}
                                    src={"/stadium.jpg"}
                                    alt={"Image of the Stadium"}
                                />
                            </div>
                        </>
                    ) : null}
                    {sektion == "B" ? (
                        <>
                            <div>
                                {/* Render other information */}
                                <h1 className="text-center mb-5">Sektion B</h1>
                                <SeatTable
                                    kampid={kampData.id}
                                    seats={kampData.sections[1].seats}
                                    sæderPrRække={kampData.sections[1].seatCount}
                                    rækker={kampData.sections[1].rowsCount}
                                    seatClick={handleSeatClick}
                                    setCart={handleSeatCart}
                                    resetCart={handleRemoveSeatCart}
                                />
                            </div>
                            <div
                                className={"container col-start-2 col-span-3 w-1/2"}
                                id={"ImageContainer"}>
                                <Image
                                    className={"rotate-90 mx-auto"}
                                    height={320}
                                    width={480}
                                    src={"/stadium.jpg"}
                                    alt={"Image of the Stadium"}
                                />
                            </div>
                        </>
                    ) : null}
                    {sektion == "C" ? (
                        <div>
                            {/* Render other information */}
                            <SeatTable
                                kampid={kampData.id}
                                seats={kampData.sections[2].seats}
                                sæderPrRække={kampData.sections[2].seatCount}
                                rækker={kampData.sections[2].rowsCount}
                                seatClick={handleSeatClick}
                                setCart={handleSeatCart}
                                resetCart={handleRemoveSeatCart}
                            />
                        </div>
                    ) : null}
                    {sektion == "D" ? (
                        <div>
                            {/* Render other information */}
                            <SeatTable
                                kampid={kampData.id}
                                seats={section.seats}
                                sæderPrRække={section.seatCount}
                                rækker={section.rowsCount}
                                seatClick={handleSeatClick}
                            />
                        </div>
                    ) : null}
                    {sektion == "E" ? (
                        <div>
                            {/* Render other information */}

                            <SeatTable
                                kampid={kampData.id}
                                seats={section.seats}
                                sæderPrRække={section.seatCount}
                                rækker={section.rowsCount}
                                seatClick={handleSeatClick}
                            />
                        </div>
                    ) : null}
                    {sektion == "F" ? (
                        <div>
                            {/* Render other information */}
                            <SeatTable
                                kampid={kampData.id}
                                seats={section.seats}
                                sæderPrRække={section.seatCount}
                                rækker={section.rowsCount}
                                seatClick={handleSeatClick}
                            />
                        </div>
                    ) : null}
                    {sektion == "F1" ? (
                        <div>
                            {/* Render other information */}
                            <SeatTable
                                kampid={kampData.id}
                                seats={section.seats}
                                sæderPrRække={section.seatCount}
                                rækker={section.rowsCount}
                                seatClick={handleSeatClick}
                            />
                        </div>
                    ) : null}
                    {sektion == "F2" ? (
                        <div>
                            {/* Render other information */}
                            <SeatTable
                                kampid={kampData.id}
                                seats={section.seats}
                                sæderPrRække={section.seatCount}
                                rækker={section.rowsCount}
                                seatClick={handleSeatClick}
                            />
                        </div>
                    ) : null}
                    {sektion == "U1" ? (
                        <div>
                            {/* Render other information */}
                            <SeatTable
                                kampid={kampData.id}
                                seats={section.seats}
                                sæderPrRække={section.seatCount}
                                rækker={section.rowsCount}
                                seatClick={handleSeatClick}
                            />
                        </div>
                    ) : null}
                    {sektion == "U2" ? (
                        <div>
                            {/* Render other information */}
                            <SeatTable
                                kampid={kampData.id}
                                seats={section.seats}
                                sæderPrRække={section.seatCount}
                                rækker={section.rowsCount}
                                seatClick={handleSeatClick}
                            />
                        </div>
                    ) : null}
                    {sektion == "G" ? (
                        <div>
                            {/* Render other information */}
                            <SeatTable
                                kampid={kampData.id}
                                seats={section.seats}
                                sæderPrRække={section.seatCount}
                                rækker={section.rowsCount}
                                seatClick={handleSeatClick}
                            />
                        </div>
                    ) : null}
                    {sektion == "H" ? (
                        <div>
                            {/* Render other information */}
                            <SeatTable
                                kampid={kampData.id}
                                seats={section.seats}
                                sæderPrRække={section.seatCount}
                                rækker={section.rowsCount}
                                seatClick={handleSeatClick}
                            />
                        </div>
                    ) : null}
                    {sektion == "I" ? (
                        <div>
                            {/* Render other information */}
                            <SeatTable
                                kampid={kampData.id}
                                seats={section.seats}
                                sæderPrRække={section.seatCount}
                                rækker={section.rowsCount}
                                seatClick={handleSeatClick}
                            />
                        </div>
                    ) : null}
                    {sektion == "J" ? (
                        <div>
                            {/* Render other information */}
                            <SeatTable
                                kampid={kampData.id}
                                seats={section.seats}
                                sæderPrRække={section.seatCount}
                                rækker={section.rowsCount}
                                seatClick={handleSeatClick}
                            />
                        </div>
                    ) : null}
                    {sektion == "K" ? (
                        <div>
                            {/* Render other information */}
                            <SeatTable
                                kampid={kampData.id}
                                seats={section.seats}
                                sæderPrRække={section.seatCount}
                                rækker={section.rowsCount}
                                seatClick={handleSeatClick}
                            />
                        </div>
                    ) : null}
                    {sektion == "L" ? (
                        <div>
                            {/* Render other information */}
                            <SeatTable
                                kampid={kampData.id}
                                seats={section.seats}
                                sæderPrRække={section.seatCount}
                                rækker={section.rowsCount}
                                seatClick={handleSeatClick}
                            />
                        </div>
                    ) : null}
                    {sektion == "MF" ? (
                        <div>
                            {/* Render other information */}
                            <SeatTable
                                kampid={kampData.id}
                                seats={section.seats}
                                sæderPrRække={section.seatCount}
                                rækker={section.rowsCount}
                                seatClick={handleSeatClick}
                            />
                        </div>
                    ) : null}
                    {sektion == "M" ? (
                        <div>
                            {/* Render other information */}
                            <SeatTable
                                kampid={kampData.id}
                                seats={section.seats}
                                sæderPrRække={section.seatCount}
                                rækker={section.rowsCount}
                                seatClick={handleSeatClick}
                            />
                        </div>
                    ) : null}
                </div>
            </section>
            <div id="seatsBottom"></div>
        </main>
    );
}

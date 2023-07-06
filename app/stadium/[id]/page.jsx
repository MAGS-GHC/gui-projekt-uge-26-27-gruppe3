"use client";

import Image from "next/image";
import { useState, useEffect, Fragment } from "react";
import NoClickSeat from "@/app/components/NoClickSeat";
import VælgSæde from "@/app/components/VælgSæde";
import Grid from "@/app/components/Grid";
import Link from "next/link";
import { getMatch, Match } from "@/app/Classes";
import SeatTable from "@/app/components/Table";
import { useRef } from "react";
//import { set } from "firebase/database";

export default function Home({ params }) {
    let seatArray = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
        26, 27, 28, 29, 30,
    ];

    const [sektion, setSektion] = useState(0);
    const [kampData, setKampData] = useState({});
    const [loading, setLoading] = useState(true);
    const [numRows, setNumRows] = useState(0);
    const [numSeats, setNumSeats] = useState(0);
    const [section, setSection] = useState(null);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await getMatch(params.id);

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
            setKampData(match);
            setSection(match.sections[0]);
            setLoading(false);
        }
        fetchData();
    }, []);

    async function handleSeatClick() {
        const response = await getMatch(params.id);

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
        setKampData(match);
        setSection(match.sections[0]);
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    function handleSeatCart(seat) {
        setCart([...cart, seat]);
        console.log(cart);
    }

    function handleRemoveSeatCart(seat) {
        setCart([]);
    }

    return (
        <main>
            <div className={"container"}>
                {cart.map((seat, index) => {
                    return (
                        <div key={index}>
                            <p>{seat.id}</p>
                            <p>{seat.price}</p>
                        </div>
                    );
                })}

                <div className={"bg-dark-green w-100 border border-white m-2 p-4 rounded-lg"}>
                    <h1 className={"h1-display text-white text-center"}>Vælg Siddepladser</h1>
                </div>
                <div id={"MainGrid"} className={"grid grid-rows-5 mx-4 gap-2"}>
                    <div className={"grid grid-cols-5 gap-2"} id={"TopSectionRow"}>
                        <button
                            onClick={() => {
                                //Scroll to section "seatSection"
                                document && document.getElementById("seatSection").scrollIntoView();
                                setSektion("A");
                            }}
                            className={
                                " " +
                                "border border-green hover:bg-light-blue " +
                                "rounded " +
                                "xl:text-xl xl:my-2 " +
                                "lg:text-lg lg:my-3 " +
                                "md:text-md md:my-3 " +
                                "sm:text-sm sm:my-3 " +
                                "min-[500px]:max-sm:my-4 min-[500px]:max-sm:text-xs " +
                                "min-[400px]:max-[500px]:my-4 min-[400px]:max-[500px]:text-xs " +
                                "min-[320px]:max-[400px]:my-4 min-[320px]:max-[400px]:text-xs"
                            }>
                            Sektion A
                        </button>
                        <button
                            onClick={() => setSektion("B")}
                            className={
                                "border border-green hover:bg-light-blue " +
                                "rounded " +
                                "xl:text-xl xl:my-2 " +
                                "lg:text-lg lg:my-3 " +
                                "md:text-md md:my-3 " +
                                "sm:text-sm sm:my-3 " +
                                "min-[500px]:max-sm:my-4 min-[500px]:max-sm:text-xs " +
                                "min-[400px]:max-[500px]:my-4 min-[400px]:max-[500px]:text-xs " +
                                "min-[320px]:max-[400px]:my-4 min-[320px]:max-[400px]:text-xs"
                            }>
                            Sektion B
                        </button>
                        <button
                            onClick={() => setSektion("C")}
                            className={
                                "border border-green hover:bg-light-blue " +
                                "rounded " +
                                "xl:text-xl xl:my-2 " +
                                "lg:text-lg lg:my-3 " +
                                "md:text-md md:my-3 " +
                                "sm:text-sm sm:my-3 " +
                                "min-[500px]:max-sm:my-4 min-[500px]:max-sm:text-xs " +
                                "min-[400px]:max-[500px]:my-4 min-[400px]:max-[500px]:text-xs " +
                                "min-[320px]:max-[400px]:my-4 min-[320px]:max-[400px]:text-xs"
                            }>
                            Sektion C
                        </button>
                        <button
                            onClick={() => setSektion("D")}
                            className={
                                "border border-green hover:bg-light-blue " +
                                "rounded " +
                                "xl:text-xl xl:my-2 " +
                                "lg:text-lg lg:my-3 " +
                                "md:text-md md:my-3 " +
                                "sm:text-sm sm:my-3 " +
                                "min-[500px]:max-sm:my-4 min-[500px]:max-sm:text-xs " +
                                "min-[400px]:max-[500px]:my-4 min-[400px]:max-[500px]:text-xs " +
                                "min-[320px]:max-[400px]:my-4 min-[320px]:max-[400px]:text-xs"
                            }>
                            Sektion D
                        </button>
                        <button
                            onClick={() => setSektion("E")}
                            className={
                                "border border-green hover:bg-light-blue " +
                                "rounded " +
                                "xl:text-xl xl:my-2 " +
                                "lg:text-lg lg:my-3 " +
                                "md:text-md md:my-3 " +
                                "sm:text-sm sm:my-3 " +
                                "min-[500px]:max-sm:my-4 min-[500px]:max-sm:text-xs " +
                                "min-[400px]:max-[500px]:my-4 min-[400px]:max-[500px]:text-xs " +
                                "min-[320px]:max-[400px]:my-4 min-[320px]:max-[400px]:text-xs"
                            }>
                            Sektion E
                        </button>
                    </div>
                    <div className={"grid grid-cols-5 row-span-3"} id={"MiddleSectionRow"}>
                        <div className={"grid-rows-3 col-start-1 inline-grid my-4 gap-2"}>
                            <button
                                onClick={() => setSektion("M")}
                                className={
                                    "border border-green hover:bg-light-blue " +
                                    "rounded " +
                                    "xl:text-xl xl:my-0 " +
                                    "lg:text-lg lg:my-1 " +
                                    "md:text-md md:my-2 " +
                                    "sm:text-sm sm:my-2 " +
                                    "min-[500px]:max-sm:my-4 min-[500px]:max-sm:text-xs " +
                                    "min-[400px]:max-[500px]:my-4 min-[400px]:max-[500px]:text-xs " +
                                    "min-[320px]:max-[400px]:my-4 min-[320px]:max-[400px]:text-xs"
                                }>
                                Sektion M
                            </button>
                            <button
                                onClick={() => setSektion("MF")}
                                className={
                                    "border border-green hover:bg-light-blue " +
                                    "rounded " +
                                    "xl:text-xl xl:my-0 " +
                                    "lg:text-lg lg:my-1 " +
                                    "md:text-md md:my-2 " +
                                    "sm:text-sm sm:my-2 " +
                                    "min-[500px]:max-sm:my-4 min-[500px]:max-sm:text-xs " +
                                    "min-[400px]:max-[500px]:my-4 min-[400px]:max-[500px]:text-xs " +
                                    "min-[320px]:max-[400px]:my-4 min-[320px]:max-[400px]:text-xs"
                                }>
                                Sektion M Fans
                            </button>
                            <button
                                onClick={() => setSektion("L")}
                                className={
                                    "border border-green hover:bg-light-blue " +
                                    "rounded " +
                                    "xl:text-xl xl:my-0 " +
                                    "lg:text-lg lg:my-1 " +
                                    "md:text-md md:my-2 " +
                                    "sm:text-sm sm:my-2 " +
                                    "min-[500px]:max-sm:my-4 min-[500px]:max-sm:text-xs " +
                                    "min-[400px]:max-[500px]:my-4 min-[400px]:max-[500px]:text-xs " +
                                    "min-[320px]:max-[400px]:my-4 min-[320px]:max-[400px]:text-xs"
                                }>
                                Sektion L
                            </button>
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
                            <button
                                onClick={() => setSektion("F1")}
                                className={
                                    "border border-green hover:bg-light-blue " +
                                    "rounded " +
                                    "xl:text-xl xl:my-0 " +
                                    "lg:text-lg lg:my-1 " +
                                    "md:text-md md:my-1 " +
                                    "sm:text-sm sm:my-1 " +
                                    "min-[500px]:max-sm:my-2 min-[500px]:max-sm:text-xs " +
                                    "min-[400px]:max-[500px]:my-2 min-[400px]:max-[500px]:text-xs " +
                                    "min-[320px]:max-[400px]:my-2 min-[320px]:max-[400px]:text-xs"
                                }>
                                Sektion F1
                            </button>
                            <button
                                onClick={() => setSektion("F2")}
                                className={
                                    "border border-green hover:bg-light-blue " +
                                    "rounded " +
                                    "xl:text-xl xl:my-0 " +
                                    "lg:text-lg lg:my-1 " +
                                    "md:text-md md:my-1 " +
                                    "sm:text-sm sm:my-1 " +
                                    "min-[500px]:max-sm:my-2 min-[500px]:max-sm:text-xs " +
                                    "min-[400px]:max-[500px]:my-2 min-[400px]:max-[500px]:text-xs " +
                                    "min-[320px]:max-[400px]:my-2 min-[320px]:max-[400px]:text-xs"
                                }>
                                Sektion F2
                            </button>
                            <button
                                onClick={() => setSektion("U1")}
                                className={
                                    "border border-green hover:bg-light-blue " +
                                    "rounded " +
                                    "xl:text-xl xl:my-0 " +
                                    "lg:text-lg lg:my-1 " +
                                    "md:text-md md:my-1 " +
                                    "sm:text-sm sm:my-1 " +
                                    "min-[500px]:max-sm:my-2 min-[500px]:max-sm:text-xs " +
                                    "min-[400px]:max-[500px]:my-2 min-[400px]:max-[500px]:text-xs " +
                                    "min-[320px]:max-[400px]:my-2 min-[320px]:max-[400px]:text-xs"
                                }>
                                Sektion U1
                            </button>
                            <button
                                onClick={() => setSektion("U2")}
                                className={
                                    "border border-green hover:bg-light-blue " +
                                    "rounded " +
                                    "xl:text-xl xl:my-0 " +
                                    "lg:text-lg lg:my-1 " +
                                    "md:text-md md:my-1 " +
                                    "sm:text-sm sm:my-1 " +
                                    "min-[500px]:max-sm:my-2 min-[500px]:max-sm:text-xs " +
                                    "min-[400px]:max-[500px]:my-2 min-[400px]:max-[500px]:text-xs " +
                                    "min-[320px]:max-[400px]:my-2 min-[320px]:max-[400px]:text-xs"
                                }>
                                Sektion U2
                            </button>
                        </div>
                    </div>
                    <div className={"grid grid-cols-5 gap-2"} id={"BottomSectionRow"}>
                        <button
                            onClick={() => setSektion("K")}
                            className={
                                "border border-green hover:bg-light-blue " +
                                "rounded " +
                                "xl:text-xl xl:my-2 " +
                                "lg:text-lg lg:my-3 " +
                                "md:text-md md:my-3 " +
                                "sm:text-sm sm:my-3 " +
                                "min-[500px]:max-sm:my-4 min-[500px]:max-sm:text-xs " +
                                "min-[400px]:max-[500px]:my-4 min-[400px]:max-[500px]:text-xs " +
                                "min-[320px]:max-[400px]:my-4 min-[320px]:max-[400px]:text-xs"
                            }>
                            Sektion K
                        </button>
                        <button
                            onClick={() => setSektion("J")}
                            className={
                                "border border-green hover:bg-light-blue " +
                                "rounded " +
                                "xl:text-xl xl:my-2 " +
                                "lg:text-lg lg:my-3 " +
                                "md:text-md md:my-3 " +
                                "sm:text-sm sm:my-3 " +
                                "min-[500px]:max-sm:my-4 min-[500px]:max-sm:text-xs " +
                                "min-[400px]:max-[500px]:my-4 min-[400px]:max-[500px]:text-xs " +
                                "min-[320px]:max-[400px]:my-4 min-[320px]:max-[400px]:text-xs"
                            }>
                            Sektion J
                        </button>
                        <button
                            onClick={() => setSektion("I")}
                            className={
                                "border border-green hover:bg-light-blue " +
                                "rounded " +
                                "xl:text-xl xl:my-2 " +
                                "lg:text-lg lg:my-3 " +
                                "md:text-md md:my-3 " +
                                "sm:text-sm sm:my-3 " +
                                "min-[500px]:max-sm:my-4 min-[500px]:max-sm:text-xs " +
                                "min-[400px]:max-[500px]:my-4 min-[400px]:max-[500px]:text-xs " +
                                "min-[320px]:max-[400px]:my-4 min-[320px]:max-[400px]:text-xs"
                            }>
                            Sektion I
                        </button>
                        <button
                            onClick={() => setSektion("H")}
                            className={
                                "border border-green hover:bg-light-blue " +
                                "rounded " +
                                "xl:text-xl xl:my-2 " +
                                "lg:text-lg lg:my-3 " +
                                "md:text-md md:my-3 " +
                                "sm:text-sm sm:my-3 " +
                                "min-[500px]:max-sm:my-4 min-[500px]:max-sm:text-xs " +
                                "min-[400px]:max-[500px]:my-4 min-[400px]:max-[500px]:text-xs " +
                                "min-[320px]:max-[400px]:my-4 min-[320px]:max-[400px]:text-xs"
                            }>
                            Sektion H
                        </button>
                        <button
                            href={"#seatSection"}
                            onClick={() => setSektion("G")}
                            className={
                                "border border-green hover:bg-light-blue " +
                                "rounded " +
                                "xl:text-xl xl:my-2 " +
                                "lg:text-lg lg:my-3 " +
                                "md:text-md md:my-3 " +
                                "sm:text-sm sm:my-3 " +
                                "min-[500px]:max-sm:my-4 min-[500px]:max-sm:text-xs " +
                                "min-[400px]:max-[500px]:my-4 min-[400px]:max-[500px]:text-xs " +
                                "min-[320px]:max-[400px]:my-4 min-[320px]:max-[400px]:text-xs"
                            }>
                            Sektion G
                        </button>
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
            <section id="seatSection" className="mb-10">
                <div className="container">
                    {sektion == "A" ? (
                        <div>
                            {/* Render other information */}

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
                    ) : null}
                    {sektion == "B" ? (
                        <div>
                            {/* Render other information */}

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
        </main>
    );
}

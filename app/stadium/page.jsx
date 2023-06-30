"use client";

import { useState } from "react";
import NoClickSeat from "../components/NoClickSeat";
import VælgSæde from "../components/VælgSæde";
import Grid from "../components/Grid";

export default function Home() {
    let seatArray = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
        26, 27, 28, 29, 30,
    ];

    const [sektion, setSektion] = useState(0);

    return (
        <main>
            <section>
                <div className="container">
                    <div className="flex flex-col items-center content-center justify-center gap-3 p-5">
                        <div className="flex gap-3">
                            <div
                                onClick={() => setSektion(1)}
                                className="grid w-1/8 grid-cols-6 gap-x-300 gap-y-3">
                                {seatArray.map((item, index) => {
                                    return <NoClickSeat key={index} />;
                                })}
                            </div>
                            <div
                                onClick={() => setSektion(2)}
                                className="grid w-1/8 grid-cols-6 gap-x-300 gap-y-3">
                                {seatArray.map((item, index) => {
                                    return <NoClickSeat key={index} />;
                                })}
                            </div>
                            <div
                                onClick={() => setSektion(3)}
                                className="grid w-1/8 grid-cols-6 gap-x-300 gap-y-3">
                                {seatArray.map((item, index) => {
                                    return <NoClickSeat key={index} />;
                                })}
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-3">
                            <div className="flex flex-col gap-10">
                                <div
                                    onClick={() => setSektion(4)}
                                    className="rotate-90 grid w-1/8 grid-cols-6 gap-x-300 p-2 gap-y-3">
                                    {seatArray.map((item, index) => {
                                        return <NoClickSeat key={index} />;
                                    })}
                                </div>
                                <div
                                    onClick={() => setSektion(5)}
                                    className="rotate-90 grid w-1/8 grid-cols-6 gap-x-300 p-2 gap-y-3">
                                    {seatArray.map((item, index) => {
                                        return <NoClickSeat key={index} />;
                                    })}
                                </div>
                                <div
                                    onClick={() => setSektion(6)}
                                    className="rotate-90 grid w-1/8 grid-cols-6 gap-x-300 p-2 gap-y-3">
                                    {seatArray.map((item, index) => {
                                        return <NoClickSeat key={index} />;
                                    })}
                                </div>
                            </div>

                            <img
                                src="https://static.vecteezy.com/system/resources/previews/000/542/326/original/football-soccer-stadiun-field-vector.jpg"
                                className="w-1/3"
                            />
                            <div className="flex flex-col gap-10">
                                <div
                                    onClick={() => setSektion(7)}
                                    className="rotate-90 grid w-1/8 grid-cols-6 gap-x-300 p-2 gap-y-3">
                                    {seatArray.map((item, index) => {
                                        return <NoClickSeat key={index} />;
                                    })}
                                </div>
                                <div
                                    onClick={() => setSektion(8)}
                                    className="rotate-90 grid w-1/8 grid-cols-6 gap-x-300 p-2 gap-y-3">
                                    {seatArray.map((item, index) => {
                                        return <NoClickSeat key={index} />;
                                    })}
                                </div>
                                <div
                                    onClick={() => setSektion(9)}
                                    className="rotate-90 grid w-1/8 grid-cols-6 gap-x-300 p-2 gap-y-3">
                                    {seatArray.map((item, index) => {
                                        return <NoClickSeat key={index} />;
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <div
                                onClick={() => setSektion(10)}
                                className="grid w-1/8 grid-cols-6 gap-x-300 gap-y-3">
                                {seatArray.map((item, index) => {
                                    return <NoClickSeat key={index} />;
                                })}
                            </div>
                            <div
                                onClick={() => setSektion(11)}
                                className="grid w-1/8 grid-cols-6 gap-x-300 gap-y-3">
                                {seatArray.map((item, index) => {
                                    return <NoClickSeat key={index} />;
                                })}
                            </div>
                            <div
                                onClick={() => setSektion(12)}
                                className="grid w-1/8 grid-cols-6 gap-x-300 gap-y-3">
                                {seatArray.map((item, index) => {
                                    return <NoClickSeat key={index} />;
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    {sektion == 1 ? (
                        <VælgSæde sektion="Sektion 1" sædeAntal={50} rækker={10} />
                    ) : null}
                    {sektion == 2 ? (
                        <VælgSæde sektion="Sektion 2" sædeAntal={50} rækker={12} />
                    ) : null}
                    {sektion == 3 ? (
                        <VælgSæde sektion="Sektion 3" sædeAntal={70} rækker={13} />
                    ) : null}
                    {sektion == 4 ? (
                        <VælgSæde sektion="Sektion 4" sædeAntal={30} rækker={15} />
                    ) : null}
                    {sektion == 5 ? (
                        <VælgSæde sektion="Sektion 5" sædeAntal={150} rækker={20} />
                    ) : null}
                    {sektion == 6 ? (
                        <VælgSæde sektion="Sektion 6" sædeAntal={200} rækker={10} />
                    ) : null}
                </div>
            </section>
        </main>
    );
}

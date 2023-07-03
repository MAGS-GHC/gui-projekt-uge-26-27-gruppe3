import React from "react";

export default function Home() {
    return (
        <main>
            <div className="flex flex-col h-screen">
                <div className="flex justify-center bg-dark-green text-green m-2 py-5 rounded-lg">
                    <h1 className="h1-display">Vælg Sektion</h1>
                </div>
                <div className="flex-grow mx-1">
                    <div className={"flex-row"}>
                        <div className="grid grid-cols-5 px-2 gap-1">
                            <div className="flex justify-center">
                                <button
                                    className={
                                        "my-2 lg:py-20 md:py-16 sm:py-4 lg:px-24 md:px-12 sm:px-4 border border-green"
                                    }>
                                    Sektion A
                                </button>
                            </div>
                            <div className="flex justify-center">
                                <button
                                    className={
                                        "my-2 lg:py-20 md:py-16 sm:py-4 lg:px-24 md:px-12 sm:px-4 border border-green"
                                    }>
                                    Sektion B
                                </button>
                            </div>
                            <div className="flex justify-center">
                                <button
                                    className={
                                        "my-2 lg:py-20 md:py-16 sm:py-4 lg:px-24 md:px-12 sm:px-4 border border-green"
                                    }>
                                    Sektion C
                                </button>
                            </div>
                            <div className="flex justify-center">
                                <button
                                    className={
                                        "my-2 lg:py-20 md:py-16 sm:py-4 lg:px-24 md:px-12 sm:px-4 border border-green"
                                    }>
                                    Sektion D
                                </button>
                            </div>
                            <div className="flex justify-center">
                                <button
                                    className={
                                        "my-2 lg:py-20 md:py-16 sm:py-4 lg:px-24 md:px-12 sm:px-4 border border-green"
                                    }>
                                    Sektion E
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={"flex-row items-center col-start-1"}>
                        <div className={"grid grid-cols-5 px-3"}>
                            <div className="grid" id={"col-1"}>
                                <div className="flex justify-center">
                                    <button
                                        className={
                                            "my-2 lg:py-8 md:py-4 sm:py-2 lg:px-12 md:px-16 sm:px-4 border border-green"
                                        }>
                                        Sektion M
                                    </button>
                                </div>
                                <div className="flex justify-center">
                                    <button
                                        className={
                                            "my-2 lg:py-8 md:py-4 sm:py-2 lg:px-12 md:px-16 sm:px-4 border border-green"
                                        }>
                                        M (Fans)
                                    </button>
                                </div>
                                <div className="flex justify-center">
                                    <button
                                        className={
                                            "my-2 lg:py-8 md:py-4 sm:py-2 lg:px-12 md:px-16 sm:px-4 border border-green"
                                        }>
                                        Sektion L
                                    </button>
                                </div>
                            </div>
                            <div
                                className="grid items-center col-start-3 w-100 h-100"
                                id={"col-img"}>
                                <img
                                    src="https://static.vecteezy.com/system/resources/previews/000/542/326/original/football-soccer-stadiun-field-vector.jpg"
                                    className="rotate-90 object-cover"
                                    alt={""}
                                />
                            </div>
                            <div className="grid col-start-5" id={"col-2"}>
                                <div className="flex justify-center">
                                    <button
                                        className={
                                            "my-2 lg:py-20 md:py-16 sm:py-4 lg:px-24 md:px-16 sm:px-4 border border-green"
                                        }>
                                        Sektion F1
                                    </button>
                                </div>
                                <div className="flex justify-center">
                                    <button
                                        className={
                                            "my-2 lg:py-20 md:py-16 sm:py-4 lg:px-24 md:px-16 sm:px-4 border border-green"
                                        }>
                                        Sektion F2
                                    </button>
                                </div>
                                <div className="flex justify-center">
                                    <button
                                        className={
                                            "my-2 lg:py-20 md:py-16 sm:py-4 lg:px-24 md:px-16 sm:px-4 border border-green"
                                        }>
                                        Ude Fans
                                    </button>
                                </div>
                                <div className="flex justify-center">
                                    <button
                                        className={
                                            "my-2 lg:py-20 md:py-16 sm:py-4 lg:px-24 md:px-16 sm:px-4 border border-green"
                                        }>
                                        Ude Fans
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"flex-row text-center"}>
                        <div className="grid grid-cols-5 px-3 gap-1">
                            <div className="">
                                <button
                                    className={
                                        "my-2 lg:py-20 md:py-10 sm:py-5 lg:px-20 md:px-10 sm:px-5 border border-green"
                                    }>
                                    Sektion K
                                </button>
                            </div>
                            <div className="">
                                <button
                                    className={
                                        "my-2 lg:py-20 md:py-10 sm:py-5 lg:px-20 md:px-10 sm:px-5 border border-green"
                                    }>
                                    J (Nedre)
                                </button>
                            </div>
                            <div className="">
                                <button
                                    className={
                                        "my-2 lg:py-20 md:py-10 sm:py-5 lg:px-20 md:px-10 sm:px-5 border border-green"
                                    }>
                                    I (Nedre)
                                </button>
                            </div>
                            <div className="">
                                <button
                                    className={
                                        "my-2 lg:py-20 md:py-10 sm:py-5 lg:px-20 md:px-10 sm:px-5 border border-green"
                                    }>
                                    H (Nedre)
                                </button>
                            </div>
                            <div className="">
                                <button
                                    className={
                                        "my-2 lg:py-20 md:py-10 sm:py-5 lg:px-20 md:px-10 sm:px-5 border border-green"
                                    }>
                                    Sektion G
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-15 flex items-end justify-end">
                    <button className={"bg-dark-green text-white m-2 p-4 border rounded"}>
                        Vælg Siddepladser
                    </button>
                </div>
            </div>
        </main>
    );
}

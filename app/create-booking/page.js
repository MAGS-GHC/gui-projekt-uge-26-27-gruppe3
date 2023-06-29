import React from 'react';
import Field from 'public/football-field.svg';

export default function Home() {
    return <main>
        <div className="flex flex-col h-screen">
            <div className="flex items-center justify-center bg-dark-green text-green h-20 m-2 rounded-lg">
                <h1 className="h1-display">Vælg Sektion</h1>
            </div>
            <div className="flex-grow mx-1">
                <div className={"flex-row text-center"}>
                    <div className="grid grid-cols-5 px-2 gap-1">
                        <div className="">
                            <button className={"my-2 py-4 px-1 border border-green"}>
                                Sektion A
                            </button>
                        </div>
                        <div className="">
                            <button className={"my-2 py-4 px-1 border border-green"}>
                                Sektion B
                            </button>
                        </div>
                        <div className="">
                            <button className={"my-2 py-4 px-1 border border-green"}>
                                Sektion C
                            </button>
                        </div>
                        <div className="">
                            <button className={"my-2 py-4 px-1 border border-green"}>
                                Sektion D
                            </button>
                        </div>
                        <div className="">
                            <button className={"my-2 py-4 px-1 border border-green"}>
                                Sektion E
                            </button>
                        </div>
                    </div>
                </div>
                <div className={"flex-row"}>
                    <div className={"grid grid-cols-3 px-3"}>
                        <div className="">
                            <div className="">
                                <button className={"my-2 py-4 px-1 border border-green"}>
                                    Sektion M
                                </button>
                            </div>
                            <div className="">
                                <button className={"my-2 py-4 px-1 border border-green"}>
                                    M (Fans)
                                </button>
                            </div>
                            <div className="">
                                <button className={"my-2 py-4 px-1 border border-green"}>
                                    Sektion L
                                </button>
                            </div>
                        </div>
                        <div className="grid place-items-center">
                            <img src="https://static.vecteezy.com/system/resources/previews/000/542/326/original/football-soccer-stadiun-field-vector.jpg" className="rotate-90" alt={""}/>
                        </div>
                        <div className="text-right">
                            <div className="">
                                <button className={"my-2 py-4 px-1 border border-green"}>
                                    Sektion F1
                                </button>
                            </div>
                            <div className="">
                                <button className={"my-2 py-4 px-1 border border-green"}>
                                    Sektion F2
                                </button>
                            </div>
                            <div className="">
                                <button className={"my-2 py-4 px-1 border border-green"}>
                                    Ude Fans
                                </button>
                            </div>
                            <div className="">
                                <button className={"my-2 py-4 px-1 border border-green"}>
                                    Ude Fans
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"flex-row text-center"}>
                    <div className="grid grid-cols-5 px-3 gap-1">
                        <div className="">
                            <button className={"my-2 py-4 px-1 border border-green"}>
                                Sektion K
                            </button>
                        </div>
                        <div className="">
                            <button className={"my-2 py-4 px-1 border border-green"}>
                                J (Nedre)
                            </button>
                        </div>
                        <div className="">
                            <button className={"my-2 py-4 px-1 border border-green"}>
                                I (Nedre)
                            </button>
                        </div>
                        <div className="">
                            <button className={"my-2 py-4 px-1 border border-green"}>
                                H (Nedre)
                            </button>
                        </div>
                        <div className="">
                            <button className={"my-2 py-4 px-1 border border-green"}>
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
    </main>;
}
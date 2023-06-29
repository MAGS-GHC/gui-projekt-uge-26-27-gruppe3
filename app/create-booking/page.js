import React from 'react';

export default function Home() {
    return <main>
        <div className="flex flex-col h-screen">
            <div className="flex items-center justify-center bg-dark-green text-green h-20 m-2 rounded-lg">
                <h1 className="h1-display">Title Heading</h1>
            </div>
            <div className="flex-grow m-2">
                <div className={"flex-row border text-center"}>
                    <div className="grid grid-cols-5 px-3">
                        <div className="">1</div>
                        <div className="">2</div>
                        <div className="">3</div>
                        <div className="">4</div>
                        <div className="">5</div>
                    </div>
                </div>
                <div className={"flex-row"}>
                    <div className={"grid grid-cols-3 px-3 py-20"}>
                        <div className="text-left">Left</div>
                        <div className="text-center">Stadion Image</div>
                        <div className="text-right">Right</div>
                    </div>
                </div>
                <div className={"flex-row text-center"}>
                    <div className="grid grid-cols-5 px-3">
                        <div className="">1</div>
                        <div className="">2</div>
                        <div className="">3</div>
                        <div className="">4</div>
                        <div className="">5</div>
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
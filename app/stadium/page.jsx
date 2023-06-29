import React from "react";
import NoClickSeat from "../components/NoClickSeat";



export default function Home() {
    let seatArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
    return (<main>
            <div className="flex flex-col items-center content-center justify-center gap-3 p-5">
                    <div className="flex gap-3">
                        <div className="grid w-1/8 grid-cols-6 gap-x-300 gap-y-3">
                            {seatArray.map((item,index) => {
                                return <NoClickSeat key={index} />;
                            })}
                        </div>
                        <div className="grid w-1/8 grid-cols-6 gap-x-300 gap-y-3">
                            {seatArray.map((item,index) => {
                                return <NoClickSeat key={index} />;
                            })}
                        </div>
                        <div className="grid w-1/8 grid-cols-6 gap-x-300 gap-y-3">
                            {seatArray.map((item,index) => {
                                return <NoClickSeat key={index} />;
                            })}
                        </div>

                    </div>
                    <div className="flex justify-center items-center gap-3">
                        <div className="flex flex-col gap-10">
                            <div className="rotate-90 grid w-1/8 grid-cols-6 gap-x-300 p-2 gap-y-3">
                                {seatArray.map((item,index) => {
                                    return <NoClickSeat key={index} />;
                                })}
                            </div>
                            <div className="rotate-90 grid w-1/8 grid-cols-6 gap-x-300 p-2 gap-y-3">
                                {seatArray.map((item,index) => {
                                    return <NoClickSeat key={index} />;
                                })}
                            </div>
                            <div className="rotate-90 grid w-1/8 grid-cols-6 gap-x-300 p-2 gap-y-3">
                                {seatArray.map((item,index) => {
                                    return <NoClickSeat key={index} />;
                                })}
                            </div>

                        </div>
                        
                        <img src="https://static.vecteezy.com/system/resources/previews/000/542/326/original/football-soccer-stadiun-field-vector.jpg"className="w-1/3"/>
                        <div className="flex flex-col gap-10">
                            <div className="rotate-90 grid w-1/8 grid-cols-6 gap-x-300 p-2 gap-y-3">
                                {seatArray.map((item,index) => {
                                    return <NoClickSeat key={index} />;
                                })}
                            </div>
                            <div className="rotate-90 grid w-1/8 grid-cols-6 gap-x-300 p-2 gap-y-3">
                                {seatArray.map((item,index) => {
                                    return <NoClickSeat key={index} />;
                                })}
                            </div>
                            <div className="rotate-90 grid w-1/8 grid-cols-6 gap-x-300 p-2 gap-y-3">
                                {seatArray.map((item,index) => {
                                    return <NoClickSeat key={index} />;
                                })}
                            </div>

                        </div>
                        
                    </div>
                    
                    <div className="flex gap-3">
                        <div className="grid w-1/8 grid-cols-6 gap-x-300 gap-y-3">
                            {seatArray.map((item,index) => {
                                return <NoClickSeat key={index} />;
                            })}
                        </div>
                        <div className="grid w-1/8 grid-cols-6 gap-x-300 gap-y-3">
                            {seatArray.map((item,index) => {
                                return <NoClickSeat key={index} />;
                            })}
                        </div>
                        <div className="grid w-1/8 grid-cols-6 gap-x-300 gap-y-3">
                            {seatArray.map((item,index) => {
                                return <NoClickSeat key={index} />;
                            })}
                        </div>

                    </div>
                    
                    
            </div>
        </main>
    )
}
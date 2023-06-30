"use client";

import React, { useState } from "react";

export default function Seat(props) {
    const [clicked, setClicked] = useState(false);
    const [clickedCount, setClickedCount ] = useState(0);

    function changeColor() {
        setClicked(!clicked);
        if (clicked) {
            setClickedCount(clickedCount + 1)
        }

        else if (!clicked) {
            setClickedCount(clickedCount - 1)
        }
        

    }

    return (
        <button
            className={`Seat border border-1 p-1 h-4 w-4 g-1 ${
                clicked == true ? "bg-red" : "bg-white"
            }`}
            onClick={() =>
            changeColor()}>
            {props.sæde}{clickedCount}
        </button>
    );
}

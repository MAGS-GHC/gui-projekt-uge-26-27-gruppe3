"use client";

import { useState } from "react";

export default function Seat(props) {
    const [clicked, setClicked] = useState(false);

    function changeColor() {
        setClicked(!clicked);
    }

    return (
        <button
            className={`Seat border border-1 p-1 h-4 w-4 g-1 ${
                clicked == true ? "bg-red" : "bg-white"
            }`}
            onClick={() => changeColor()}>
            {props.sæde}{" "}
        </button>
    );
}

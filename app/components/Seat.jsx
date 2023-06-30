"use client";

import React, { useState } from "react";

export default function Seat() {
    const [clicked, setClicked] = useState(false);
    const [clickedCount, setClickedCount] = useState(0);

    function changeColor() {
        setClicked(!clicked);
        setClickedCount(prevCount => clicked ? prevCount -1 : prevCount + 1);
    }

    return (
        <button className={`Seat border border-1 p-1 h-4 w-4 g-1 ${clicked == true ? "bg-red" : "bg-white" }`} onClick={() => changeColor()}>        
        </button>
    );


}

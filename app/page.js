"use client";
import H1 from "app/components/h1";
import { useState } from "react";

export default function Home() {
    const [test, setTest] = useState(0);

    return (
        <main>
            <h1 className="font-semibold text-5xl">Hello World v2 {test}</h1>
            <button onClick={() => setTest(test + 1)}>+</button>
            <H1 tekst="new component text" />
            <H1 tekst="new component text2" />
            <H1 tekst="new component text3" />
            <H1 tekst="new component text4" />
            <H1 tekst="new component text5" />
        </main>
    );
}

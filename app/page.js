"use client";
import { useState } from "react";
import KampPreview from "./components/KampPreview";

//test

export default function Home() {
  let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <main>
      <section className="titleSection">
        <div className="container">
          <div className="text-center">
            <h1 className="font-semibold text-5xl">Stadion Booking</h1>
            <p className="mt-5 font-medium text-xl">
              Her finder du dine billetter til alle kampe på Viborg stadion
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testArray.map((item, index) => {
              return <KampPreview key={index} />;
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

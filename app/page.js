"use client";
import { useState } from "react";
import KampPreview from "./components/KampPreview";
import CreateMatch from "./Classes";
import { GetAllGameData } from "./GetAllGameData.js";



export default async function  Home() {
  const allGameData = await GetAllGameData();

  return (
    <main>
      <section className="titleSection p-5">
        <div className="p-10">
          <img
            className="w-1/4 mx-auto headerlogo"
            src="https://www.vff.dk/images/Logo/VFF_primaerlogo_cmyk_compr_med.png"
            alt="logo"
          />
          <div className="text-center py-20 lg:py-52">
            <h1 className="font-semibold text-8xl text-white">
              Billet Booking
            </h1>
            <p className="mt-5 font-medium text-xl text-white">
              Her finder du billetter til alle kampe på Viborg stadion
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="grid grid-cols-1 gap-14">
            {allGameData.map((item, index) => {
              return (
                <KampPreview
                  key={index}
                  id={item.id}
                  dato={item.date}
                  tid={item.time}
                  udehold={item.outTeam}
                  hjemmehold={item.homeTeam}
                  hjemmeholdlogo={item.homeTeamLogo}
                  udeholdlogo={item.outTeamLogo}
                  åbningstid={item.openingTime}
                />
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

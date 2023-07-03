"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function KampPreview(props) {
    const [tidTilKampStart, setTidTilKampStart] = useState("");

    useEffect(() => {
        // Funktion til at beregne tid til kampstart
        function beregnTidTilKampStart() {
            var kampDato = parseDatoString(props.dato);
            var kampTid = new Date(`1970-01-01T${props.tid}`);
            var nu = new Date();
            kampDato.setFullYear(nu.getFullYear()); // Sæt årstallet til det aktuelle år
            var tidForskel = kampDato.getTime() + kampTid.getTime() - nu.getTime();

            var dage = Math.floor(tidForskel / (1000 * 60 * 60 * 24));
            var timer = Math.floor((tidForskel % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutter = Math.floor((tidForskel % (1000 * 60 * 60)) / (1000 * 60));
            var sekunder = Math.floor((tidForskel % (1000 * 60)) / 1000);

            // Opdater tidTilKampStart med den beregnede tid
            setTidTilKampStart({
                dage: dage,
                timer: timer,
                minutter: minutter,
                sekunder: sekunder,
            });
        }

        // Hjælpefunktion til at konvertere datoformatet til et Date-objekt
        function parseDatoString(dato) {
            var splittedeDato = dato.split(" ");
            var dag = parseInt(splittedeDato[1], 10);
            var maaned = parseMaaned(splittedeDato[2]);
            return new Date(new Date().getFullYear(), maaned - 1, dag); // Måneder i JavaScript er nulbaserede
        }

        // Hjælpefunktion til at konvertere månedsnavnet til en numerisk værdi
        function parseMaaned(maaned) {
            var maaneder = {
                JANUAR: 1,
                FEBRUAR: 2,
                MARTS: 3,
                APRIL: 4,
                MAJ: 5,
                JUNI: 6,
                JULI: 7,
                AUGUST: 8,
                SEPTEMBER: 9,
                OKTOBER: 10,
                NOVEMBER: 11,
                DECEMBER: 12,
            };
            return maaneder[maaned.toUpperCase()];
        }

        // Opdater tid til kampstart hvert sekund
        const timer = setInterval(beregnTidTilKampStart, 1000);

        // Rens op efter komponenten, når den unmounts
        return () => clearInterval(timer);
    }, [props.dato, props.tid]);

    return (
        <div className="kampPreview shadow-xl rounded-lg flex p-5 justify-between">
            <div className="flex flex-col md:flex-row gap-5 md:gap-20 my-auto">
                <div className="flex gap-5">
                    <div className="flex gap-3">
                        <img
                            src={`https://www.vff.dk/images/Klublogoer_billetsalg/${props.udeholdlogo}.png`}
                            alt="fcnlogo"
                            className="klublogo"
                        />
                        <img
                            src={`https://www.vff.dk/images/Klublogoer_billetsalg/${props.hjemmeholdlogo}.png`}
                            alt="vfflogo"
                            className="klublogo"
                        />
                    </div>
                    <div className="flex justify-between flex-col my-auto">
                        <h2 className="font-medium">{props.udehold}</h2>
                        <h2 className="font-semibold">{props.hjemmehold}</h2>
                    </div>
                </div>
                <div className="flex my-auto gap-2">
                    <h2 className="text-xl md:text-3xl font-semibold">{tidTilKampStart.dage}</h2>
                    <p className="font-light my-auto">D</p>
                    <h2 className="text-xl md:text-3xl font-semibold">{tidTilKampStart.timer}</h2>
                    <p className="font-light my-auto">T</p>
                    <h2 className="text-xl md:text-3xl font-semibold">
                        {tidTilKampStart.minutter}
                    </h2>
                    <p className="font-light my-auto">M</p>
                    <h2 className="text-xl md:text-3xl font-semibold">
                        {tidTilKampStart.sekunder}
                    </h2>
                    <p className="font-light my-auto">S</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5 md:gap-20 my-auto">
                <div className="flex justify-between flex-col my-auto md:ml-12 text-sm md:text-lg">
                    <h2 className="font-medium">
                        {props.dato} KL. {props.tid}
                    </h2>
                    <h2 className="font-semibold">ÅBNING: {props.åbningstid}</h2>
                </div>
                <Link href={`/stadium/${props.id}`} passHref={true} className="w-full lg:w-fit">
                    <button className="bg-dark-green px-5 md:px-10 py-2 md:py-4 text-white w-full font-semibold">
                        Køb billetter
                    </button>
                </Link>
            </div>
        </div>
    );
}

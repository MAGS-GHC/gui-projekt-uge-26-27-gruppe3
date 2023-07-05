import React from "react";
import Image from "next/image";

//page functionality:


export default function Home() {
    return (
        <main>
            <div className={"container"}>
                <div className={"bg-dark-green w-100 border border-white m-2 p-4 rounded-lg"}>
                    <h1 className={"h1-display text-white text-center"}>
                        Vælg Siddepladser
                    </h1>
                </div>
                <div id={"MainGrid"} className={"grid grid-rows-6 mx-4 gap-2"}>
                    <div className={"grid grid-cols-5 gap-2"} id={"TopSectionRow"}>
                            <button className={
                                " " +
                                "border border-green hover:bg-light-blue " +
                                "rounded " +
                                "xl:text-xl xl:my-2 " +
                                "lg:text-lg lg:my-3 " +
                                "md:text-md md:my-3 " +
                                "sm:text-sm sm:my-3 " +
                                "min-[500px]:max-sm:my-4 min-[500px]:max-sm:text-xs " +
                                "min-[400px]:max-[500px]:my-4 min-[400px]:max-[500px]:text-xs " +
                                "min-[320px]:max-[400px]:my-4 min-[320px]:max-[400px]:text-xs"
                            }>Sektion A</button>
                            <button className={
                                "border border-green hover:bg-light-blue " +
                                "rounded " +
                                "xl:text-xl xl:my-2 " +
                                "lg:text-lg lg:my-3 " +
                                "md:text-md md:my-3 " +
                                "sm:text-sm sm:my-3 " +
                                "min-[500px]:max-sm:my-4 min-[500px]:max-sm:text-xs " +
                                "min-[400px]:max-[500px]:my-4 min-[400px]:max-[500px]:text-xs " +
                                "min-[320px]:max-[400px]:my-4 min-[320px]:max-[400px]:text-xs"
                            }>Sektion B</button>
                            <button className={
                                "border border-green hover:bg-light-blue " +
                                "rounded " +
                                "xl:text-xl xl:my-2 " +
                                "lg:text-lg lg:my-3 " +
                                "md:text-md md:my-3 " +
                                "sm:text-sm sm:my-3 " +
                                "min-[500px]:max-sm:my-4 min-[500px]:max-sm:text-xs " +
                                "min-[400px]:max-[500px]:my-4 min-[400px]:max-[500px]:text-xs " +
                                "min-[320px]:max-[400px]:my-4 min-[320px]:max-[400px]:text-xs"
                            }>Sektion C</button>
                            <button className={
                                "border border-green hover:bg-light-blue " +
                                "rounded " +
                                "xl:text-xl xl:my-2 " +
                                "lg:text-lg lg:my-3 " +
                                "md:text-md md:my-3 " +
                                "sm:text-sm sm:my-3 " +
                                "min-[500px]:max-sm:my-4 min-[500px]:max-sm:text-xs " +
                                "min-[400px]:max-[500px]:my-4 min-[400px]:max-[500px]:text-xs " +
                                "min-[320px]:max-[400px]:my-4 min-[320px]:max-[400px]:text-xs"
                            }>Sektion D</button>
                            <button className={
                                "border border-green hover:bg-light-blue " +
                                "rounded " +
                                "xl:text-xl xl:my-2 " +
                                "lg:text-lg lg:my-3 " +
                                "md:text-md md:my-3 " +
                                "sm:text-sm sm:my-3 " +
                                "min-[500px]:max-sm:my-4 min-[500px]:max-sm:text-xs " +
                                "min-[400px]:max-[500px]:my-4 min-[400px]:max-[500px]:text-xs " +
                                "min-[320px]:max-[400px]:my-4 min-[320px]:max-[400px]:text-xs"
                            }>Sektion E</button>
                    </div>
                    <div className={"grid grid-cols-5 row-span-3"} id={"MiddleSectionRow"}>
                        <div className={"grid-rows-3 col-start-1 inline-grid my-4 gap-2"}>
                            <button className={
                                "border border-green hover:bg-light-blue " +
                                "rounded " +
                                "xl:text-xl xl:my-0 " +
                                "lg:text-lg lg:my-1 " +
                                "md:text-md md:my-2 " +
                                "sm:text-sm sm:my-2 " +
                                "min-[500px]:max-sm:my-4 min-[500px]:max-sm:text-xs " +
                                "min-[400px]:max-[500px]:my-4 min-[400px]:max-[500px]:text-xs " +
                                "min-[320px]:max-[400px]:my-4 min-[320px]:max-[400px]:text-xs"
                            }>Sektion M</button>
                            <button className={
                                "border border-green hover:bg-light-blue " +
                                "rounded " +
                                "xl:text-xl xl:my-0 " +
                                "lg:text-lg lg:my-1 " +
                                "md:text-md md:my-2 " +
                                "sm:text-sm sm:my-2 " +
                                "min-[500px]:max-sm:my-4 min-[500px]:max-sm:text-xs " +
                                "min-[400px]:max-[500px]:my-4 min-[400px]:max-[500px]:text-xs " +
                                "min-[320px]:max-[400px]:my-4 min-[320px]:max-[400px]:text-xs"
                            }>Sektion M Fans</button>
                            <button className={
                                "border border-green hover:bg-light-blue " +
                                "rounded " +
                                "xl:text-xl xl:my-0 " +
                                "lg:text-lg lg:my-1 " +
                                "md:text-md md:my-2 " +
                                "sm:text-sm sm:my-2 " +
                                "min-[500px]:max-sm:my-4 min-[500px]:max-sm:text-xs " +
                                "min-[400px]:max-[500px]:my-4 min-[400px]:max-[500px]:text-xs " +
                                "min-[320px]:max-[400px]:my-4 min-[320px]:max-[400px]:text-xs"
                            }>Sektion L</button>
                        </div>
                        <div className={"container col-start-2 col-span-3 w-1/2"} id={"ImageContainer"}>
                            <Image className={"rotate-90"} height={320} width={480} src={"/stadium.jpg"} alt={"Image of the Stadium"}/>
                        </div>
                        <div className={"grid-rows-4 col-start-5 inline-grid gap-2 my-2"}>
                            <button className={
                                "border border-green hover:bg-light-blue " +
                                "rounded " +
                                "xl:text-xl xl:my-0 " +
                                "lg:text-lg lg:my-1 " +
                                "md:text-md md:my-1 " +
                                "sm:text-sm sm:my-1 " +
                                "min-[500px]:max-sm:my-2 min-[500px]:max-sm:text-xs " +
                                "min-[400px]:max-[500px]:my-2 min-[400px]:max-[500px]:text-xs " +
                                "min-[320px]:max-[400px]:my-2 min-[320px]:max-[400px]:text-xs"
                            }>Sektion F1</button>
                            <button className={
                                "border border-green hover:bg-light-blue " +
                                "rounded " +
                                "xl:text-xl xl:my-0 " +
                                "lg:text-lg lg:my-1 " +
                                "md:text-md md:my-1 " +
                                "sm:text-sm sm:my-1 " +
                                "min-[500px]:max-sm:my-2 min-[500px]:max-sm:text-xs " +
                                "min-[400px]:max-[500px]:my-2 min-[400px]:max-[500px]:text-xs " +
                                "min-[320px]:max-[400px]:my-2 min-[320px]:max-[400px]:text-xs"
                            }>Sektion F2</button>
                            <button className={
                                "border border-green hover:bg-light-blue " +
                                "rounded " +
                                "xl:text-xl xl:my-0 " +
                                "lg:text-lg lg:my-1 " +
                                "md:text-md md:my-1 " +
                                "sm:text-sm sm:my-1 " +
                                "min-[500px]:max-sm:my-2 min-[500px]:max-sm:text-xs " +
                                "min-[400px]:max-[500px]:my-2 min-[400px]:max-[500px]:text-xs " +
                                "min-[320px]:max-[400px]:my-2 min-[320px]:max-[400px]:text-xs"
                            }>Sektion U1</button>
                            <button className={
                                "border border-green hover:bg-light-blue " +
                                "rounded " +
                                "xl:text-xl xl:my-0 " +
                                "lg:text-lg lg:my-1 " +
                                "md:text-md md:my-1 " +
                                "sm:text-sm sm:my-1 " +
                                "min-[500px]:max-sm:my-2 min-[500px]:max-sm:text-xs " +
                                "min-[400px]:max-[500px]:my-2 min-[400px]:max-[500px]:text-xs " +
                                "min-[320px]:max-[400px]:my-2 min-[320px]:max-[400px]:text-xs"
                            }>Sektion U2</button>
                        </div>
                    </div>
                    <div className={"grid grid-cols-5 gap-2"} id={"BottomSectionRow"}>
                        <button className={
                            "border border-green hover:bg-light-blue " +
                            "rounded " +
                            "xl:text-xl xl:my-2 " +
                            "lg:text-lg lg:my-3 " +
                            "md:text-md md:my-3 " +
                            "sm:text-sm sm:my-3 " +
                            "min-[500px]:max-sm:my-4 min-[500px]:max-sm:text-xs " +
                            "min-[400px]:max-[500px]:my-4 min-[400px]:max-[500px]:text-xs " +
                            "min-[320px]:max-[400px]:my-4 min-[320px]:max-[400px]:text-xs"
                        }>Sektion K</button>
                        <button className={
                            "border border-green hover:bg-light-blue " +
                            "rounded " +
                            "xl:text-xl xl:my-2 " +
                            "lg:text-lg lg:my-3 " +
                            "md:text-md md:my-3 " +
                            "sm:text-sm sm:my-3 " +
                            "min-[500px]:max-sm:my-4 min-[500px]:max-sm:text-xs " +
                            "min-[400px]:max-[500px]:my-4 min-[400px]:max-[500px]:text-xs " +
                            "min-[320px]:max-[400px]:my-4 min-[320px]:max-[400px]:text-xs"
                        }>Sektion J</button>
                        <button className={
                            "border border-green hover:bg-light-blue " +
                            "rounded " +
                            "xl:text-xl xl:my-2 " +
                            "lg:text-lg lg:my-3 " +
                            "md:text-md md:my-3 " +
                            "sm:text-sm sm:my-3 " +
                            "min-[500px]:max-sm:my-4 min-[500px]:max-sm:text-xs " +
                            "min-[400px]:max-[500px]:my-4 min-[400px]:max-[500px]:text-xs " +
                            "min-[320px]:max-[400px]:my-4 min-[320px]:max-[400px]:text-xs"
                        }>Sektion I</button>
                        <button className={
                            "border border-green hover:bg-light-blue " +
                            "rounded " +
                            "xl:text-xl xl:my-2 " +
                            "lg:text-lg lg:my-3 " +
                            "md:text-md md:my-3 " +
                            "sm:text-sm sm:my-3 " +
                            "min-[500px]:max-sm:my-4 min-[500px]:max-sm:text-xs " +
                            "min-[400px]:max-[500px]:my-4 min-[400px]:max-[500px]:text-xs " +
                            "min-[320px]:max-[400px]:my-4 min-[320px]:max-[400px]:text-xs"
                        }>Sektion H</button>
                        <button className={
                            "border border-green hover:bg-light-blue " +
                            "rounded " +
                            "xl:text-xl xl:my-2 " +
                            "lg:text-lg lg:my-3 " +
                            "md:text-md md:my-3 " +
                            "sm:text-sm sm:my-3 " +
                            "min-[500px]:max-sm:my-4 min-[500px]:max-sm:text-xs " +
                            "min-[400px]:max-[500px]:my-4 min-[400px]:max-[500px]:text-xs " +
                            "min-[320px]:max-[400px]:my-4 min-[320px]:max-[400px]:text-xs"
                        }>Sektion G</button>
                    </div>
                    <div className={"grid grid-cols-5"} id={"SelectionRow"}>

                    </div>
                </div>
                <div className="fixed bottom-10 right-10">
                    <button id={"NextButton"} className={
                        "xl:text-xl xl:py-6 xl:px-8 " +
                        "lg:text-lg lg:py-4 lg:px-8 " +
                        "md:text-md md:py-4 md:px-8 " +
                        "sm:text-sm sm:py-4 sm:px-8 " +
                        "min-[500px]:text-sm min-[500px]:py-4 min-[500px]:px-8 " +
                        "min-[400px]:text-sm min-[400px]:py-4 min-[400px]:px-8 " +
                        "min-[320px]:text-sm min-[320px]:py-4 min-[320px]:px-8 " +
                        "rounded " +
                        "bg-[#caffee] hover:bg-[#caffaa] " +
                        "border-2 border-black " +
                        "hover:bg-light-blue"
                    }>
                        Til Betaling →
                    </button>
                </div>
            </div>
        </main>
    );
}

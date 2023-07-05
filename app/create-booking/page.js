import React from "react";

export default function Home() {
    return (
        <main>
            <div className={"container"}>
                <div className={"bg-dark-green w-100 border border-white m-2 p-4 rounded-lg"}>
                    <h1 className={"h1-display text-white text-center"}>Vælg Siddepladser</h1>
                </div>
                <div id={"MainGrid"} className={"grid grid-rows-6 mx-4 gap-4"}>
                    <div className={"grid grid-cols-5 gap-2"} id={"TopSectionRow"}>
                            <button className={
                                "border border-green hover:bg-light-blue " +
                                "xl:text-xl xl:my-2 " +
                                "lg:text-lg lg:my-3 " +
                                "md:text-md md:my-3 " +
                                "sm:text-sm sm:my-3 " +
                                "min-[500px]:max-sm:my-4 min-[500px]:max-sm:text-xs " +
                                "min-[400px]:max-[500px]:my-4 min-[400px]:max-[500px]:text-xs " +
                                "min-[320px]:max-[400px]:my-4 min-[320px]:max-[400px]:text-xs"
                            }>Sektion A
                            </button>
                            <button className={
                                "border border-green hover:bg-light-blue " +
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
                            <img className={"rotate-90"} src={"https://static.vecteezy.com/system/resources/previews/000/542/326/original/football-soccer-stadiun-field-vector.jpg"} alt={"Image of the Stadium"}/>
                        </div>
                        <div className={"grid-rows-4 col-start-5 inline-grid gap-2 my-2"}>
                            <button className={
                                "border border-green hover:bg-light-blue " +
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
                            "xl:text-xl xl:my-2 " +
                            "lg:text-lg lg:my-3 " +
                            "md:text-md md:my-3 " +
                            "sm:text-sm sm:my-3 " +
                            "min-[500px]:max-sm:my-4 min-[500px]:max-sm:text-xs " +
                            "min-[400px]:max-[500px]:my-4 min-[400px]:max-[500px]:text-xs " +
                            "min-[320px]:max-[400px]:my-4 min-[320px]:max-[400px]:text-xs"
                        }>Sektion G</button>
                    </div>
                    <div className={"grid grid-cols-5"} id={"SubmitButtonRow"}>
                        <button id={"NextButton"} className={
                            "xl:col-start-5 xl:my-10 " +
                            "lg:max-xl:col-start-5 lg:my-8 " +
                            "md:max-lg:col-start-5 md:my-5 " +
                            "sm:max-md:col-start-5 sm:my-4 " +
                            "min-[500px]:max-sm:col-start-4 min-[500px]:max-sm:col-span-2 min-[500px]:max-sm:py-2 " +
                            "min-[400px]:max-[500px]:col-start-4 min-[400px]:max-[500px]:col-span-2 min-[400px]:max-[500px]:my-3 " +
                            "min-[320px]:max-[400px]:col-start-4 " +
                            "rounded " +
                            "bg-green " +
                            "border-2 border-black " +
                            "hover:bg-light-blue"
                        }>
                            Til Betaling →
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}

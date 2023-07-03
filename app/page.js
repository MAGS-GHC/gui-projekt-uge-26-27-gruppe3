import KampPreview from "./components/KampPreview";
import CreateMatch from "./Classes";
export default function Home() {
    let kampData = [
        {
            id: 1,
            dato: "FREDAG 23. JULI",
            tid: "12:00",
            udehold: "FCN",
            hjemmehold: "VIBORG FF",
            hjemmeholdlogo: "fcn",
            udeholdlogo: "vff",
            åbningstid: "10:00",
        },
        {
            id: 1,
            dato: "FREDAG 23. JULI",
            tid: "12:00",
            udehold: "FCN",
            hjemmehold: "VIBORG FF",
            hjemmeholdlogo: "fcn",
            udeholdlogo: "vff",
            åbningstid: "10:00",
        },
        {
            id: 2,
            dato: "LØRDAG 24. JULI",
            tid: "15:30",
            udehold: "AGF",
            hjemmehold: "FC MIDTJYLLAND",
            hjemmeholdlogo: "fcm",
            udeholdlogo: "agf",
            åbningstid: "14:00",
        },
        {
            id: 3,
            dato: "SØNDAG 25. JULI",
            tid: "14:00",
            udehold: "BIF",
            hjemmehold: "OB",
            hjemmeholdlogo: "ob",
            udeholdlogo: "bif",
            åbningstid: "12:30",
        },
        {
            id: 4,
            dato: "MANDAG 26. JULI",
            tid: "19:00",
            udehold: "RANDERS FC",
            hjemmehold: "AAB",
            hjemmeholdlogo: "aab",
            udeholdlogo: "rfc",
            åbningstid: "17:30",
        },
        {
            id: 5,
            dato: "TIRSDAG 27. JULI",
            tid: "20:00",
            udehold: "ESBJERG FB",
            hjemmehold: "FCN",
            hjemmeholdlogo: "fcn",
            udeholdlogo: "efb",
            åbningstid: "18:30",
        },
        {
            id: 6,
            dato: "ONSDAG 28. JULI",
            tid: "18:00",
            udehold: "VIBORG FF",
            hjemmehold: "AGF",
            hjemmeholdlogo: "agf",
            udeholdlogo: "vff",
            åbningstid: "16:30",
        },
        {
            id: 7,
            dato: "TORSDAG 29. JULI",
            tid: "17:30",
            udehold: "FC MIDTJYLLAND",
            hjemmehold: "BIF",
            hjemmeholdlogo: "bif",
            udeholdlogo: "fcm",
            åbningstid: "16:00",
        },
        {
            id: 8,
            dato: "FREDAG 30. JULI",
            tid: "19:00",
            udehold: "AAB",
            hjemmehold: "ESBJERG FB",
            hjemmeholdlogo: "efb",
            udeholdlogo: "aab",
            åbningstid: "17:30",
        },
        {
            id: 9,
            dato: "LØRDAG 31. JULI",
            tid: "15:30",
            udehold: "OB",
            hjemmehold: "RANDERS FC",
            hjemmeholdlogo: "rfc",
            udeholdlogo: "ob",
            åbningstid: "14:00",
        },
        {
            id: 10,
            dato: "SØNDAG 1. AUGUST",
            tid: "14:00",
            udehold: "VIBORG FF",
            hjemmehold: "FC MIDTJYLLAND",
            hjemmeholdlogo: "fcm",
            udeholdlogo: "vff",
            åbningstid: "12:30",
        },
        {
            id: 11,
            dato: "MANDAG 2. AUGUST",
            tid: "19:00",
            udehold: "FCN",
            hjemmehold: "BIF",
            hjemmeholdlogo: "bif",
            udeholdlogo: "fcn",
            åbningstid: "17:30",
        },
        {
            id: 12,
            dato: "TIRSDAG 3. AUGUST",
            tid: "20:00",
            udehold: "ESBJERG FB",
            hjemmehold: "AAB",
            hjemmeholdlogo: "aab",
            udeholdlogo: "efb",
            åbningstid: "18:30",
        },
        {
            id: 13,
            dato: "ONSDAG 4. AUGUST",
            tid: "18:00",
            udehold: "RANDERS FC",
            hjemmehold: "VIBORG FF",
            hjemmeholdlogo: "vff",
            udeholdlogo: "rfc",
            åbningstid: "16:30",
        },
        {
            id: 14,
            dato: "TORSDAG 5. AUGUST",
            tid: "17:30",
            udehold: "BIF",
            hjemmehold: "FC MIDTJYLLAND",
            hjemmeholdlogo: "fcm",
            udeholdlogo: "bif",
            åbningstid: "16:00",
        },
        {
            id: 15,
            dato: "FREDAG 6. AUGUST",
            tid: "19:00",
            udehold: "AAB",
            hjemmehold: "FCN",
            hjemmeholdlogo: "fcn",
            udeholdlogo: "aab",
            åbningstid: "17:30",
        },
        {
            id: 16,
            dato: "LØRDAG 7. AUGUST",
            tid: "15:30",
            udehold: "OB",
            hjemmehold: "ESBJERG FB",
            hjemmeholdlogo: "efb",
            udeholdlogo: "ob",
            åbningstid: "14:00",
        },
        {
            id: 17,
            dato: "SØNDAG 8. AUGUST",
            tid: "14:00",
            udehold: "VIBORG FF",
            hjemmehold: "BIF",
            hjemmeholdlogo: "bif",
            udeholdlogo: "vff",
            åbningstid: "12:30",
        },
        {
            id: 18,
            dato: "MANDAG 9. AUGUST",
            tid: "19:00",
            udehold: "FC MIDTJYLLAND",
            hjemmehold: "ESBJERG FB",
            hjemmeholdlogo: "efb",
            udeholdlogo: "fcm",
            åbningstid: "17:30",
        },
        {
            id: 19,
            dato: "TIRSDAG 10. AUGUST",
            tid: "20:00",
            udehold: "AAB",
            hjemmehold: "OB",
            hjemmeholdlogo: "ob",
            udeholdlogo: "aab",
            åbningstid: "18:30",
        },
        {
            id: 20,
            dato: "ONSDAG 11. AUGUST",
            tid: "18:00",
            udehold: "RANDERS FC",
            hjemmehold: "FCN",
            hjemmeholdlogo: "fcn",
            udeholdlogo: "rfc",
            åbningstid: "16:30",
        },
    ];

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
                        <h1 className="font-semibold text-8xl text-white">Billet Booking</h1>
                        <p className="mt-5 font-medium text-xl text-white">
                            Her finder du billetter til alle kampe på Viborg stadion
                        </p>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="grid grid-cols-1 gap-14">
                        {kampData.map((item, index) => {
                            return (
                                <KampPreview
                                    key={index}
                                    id={item.id}
                                    dato={item.dato}
                                    tid={item.tid}
                                    udehold={item.udehold}
                                    hjemmehold={item.hjemmehold}
                                    hjemmeholdlogo={item.hjemmeholdlogo}
                                    udeholdlogo={item.udeholdlogo}
                                    åbningstid={item.åbningstid}
                                />
                            );
                        })}
                    </div>
                </div>
            </section>
        </main>
    );
}

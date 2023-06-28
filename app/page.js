import KampPreview from "./components/KampPreview";

export default function Home() {
    let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    return (
        <main>
            <section className="titleSection p-5">
                <img
                    className="w-1/4 mx-auto headerlogo"
                    src="https://www.vff.dk/images/Logo/VFF_primaerlogo_cmyk_compr_med.png"
                    alt="logo"
                />
                <div className="text-center p-52">
                    <h1 className="font-semibold text-8xl text-white">Billet Booking</h1>
                    <p className="mt-5 font-medium text-xl text-white">
                        Her finder du billetter til alle kampe på Viborg stadion
                    </p>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="grid grid-cols-1 gap-14">
                        {testArray.map((item, index) => {
                            return <KampPreview key={index} />;
                        })}
                    </div>
                </div>
            </section>
        </main>
    );
}

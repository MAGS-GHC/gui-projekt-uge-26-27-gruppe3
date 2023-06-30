import Seat from "../components/Seat";

export default function Main() {
    let seatArray = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
        26, 27, 28, 29, 30,
    ];

    return (
        <main>
            <div className="container flex flex-col items-center gap-3 w-1/5 p-5">
                <h1>Section x</h1>
                <div className="grid grid-cols-6 gap-x-300 gap-y-3">
                    {seatArray.map((item, index) => {
                        return <Seat key={index} />;
                    })}
                </div>
                <button className="rounded-full w-3/4 p-2 bg-blue">Purchase tickets</button>
            </div>
        </main>
    );
}

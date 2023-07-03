
import Seat from "./Seat";
import Link from "next/link";

export default function VælgSæde(props) {
    let seatArray = [];

    seatArray.length = props.sædeAntal;

    seatArray = seatArray.fill(props.sædeAntal);

    return (
        <div className="flex justify-center flex-col items-center">
            <p>{props.sektion}</p>
            <div className={`grid grid-cols-6 gap-10 w-fit`}>
                {seatArray.map((item, index) => {
                    return <Seat key={index} sæde={index + 1} />;
                })}
            </div>


        </div>
    );
}


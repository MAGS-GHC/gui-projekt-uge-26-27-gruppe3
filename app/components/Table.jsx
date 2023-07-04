import React from "react";
import Sæde from "./Sæde";

const SeatTable = (props) => {
    const { seats } = props;

    const generateSeats = () => {
        const totalSeats = seats.length;
        const seatsPerRow = props.sæderPrRække;
        const rows = Math.ceil(totalSeats / seatsPerRow);
        const seatData = [];

        for (let i = 0; i < rows; i++) {
            const seatsInRow = seats.slice(i * seatsPerRow, (i + 1) * seatsPerRow);
            const seatsElements = seatsInRow.map((seat) => (
                <td key={seat.id}>
                    <Sæde optaget={seat.reserved} id={seat.id} kampid={props.kampid} />
                </td>
            ));

            seatData.push(<tr key={i}>{seatsElements}</tr>);
        }

        return seatData;
    };

    return (
        <table>
            <tbody>{generateSeats()}</tbody>
        </table>
    );
};

export default SeatTable;

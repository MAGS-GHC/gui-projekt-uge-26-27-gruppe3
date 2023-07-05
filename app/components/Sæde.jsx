import { UpdateSeat, getSessionData, reservedSeat, removeData } from "../Classes";
import { v4 as uuidv4 } from "uuid";

const sessionId = uuidv4();
console.log("Session ID:", sessionId);

//Current time in millisecond

export default function Sæde(props) {
    const handleSeatClick = async () => {
        console.log("Session ID:", sessionId);

        // Fetch the latest session ID from props
        const currentSessionId = await getSessionData(props.kampid, props.seatdata);

        if (currentSessionId == null) {
            props.seatdata.reserved = true;
            props.seatdata.sessionId = sessionId;
            props.seatdata.reservedTime = new Date().getTime();
            await UpdateSeat(props.kampid, props.id, props.seatdata);
            await reservedSeat(props.seatdata);
        } else if (currentSessionId == sessionId) {
            props.seatdata.reserved = false;
            props.seatdata.sessionId = null;
            await UpdateSeat(props.kampid, props.id, props.seatdata);
            await removeData(props.seatdata.id);
        }
        await props.seatClick();
    };

    return (
        <p
            onClick={handleSeatClick}
            className={`Sæde border rounded-full gap-5 border-1 p-5 h-4 w-4 ${
                props.optaget ? "bg-red" : "bg-green"
            }`}></p>
    );
}

import { UpdateSeat } from "../Classes";
import { v4 as uuidv4 } from "uuid";

const sessionId = uuidv4();
console.log("Session ID:", sessionId);

export default function Sæde(props) {
    return (
        <p
            onClick={() => {
                if (props.sessionId == undefined) {
                    props.seatClick();
                    UpdateSeat(props.kampid, props.id, props.optaget, sessionId);
                } else if (props.sessionId == sessionId) {
                    props.seatClick();
                    UpdateSeat(props.kampid, props.id, props.optaget, sessionId);
                } else {
                    return;
                }
            }}
            className={`Sæde border rounded-full gap-5 border-1 p-1 h-4 w-4 ${
                props.optaget ? "bg-red" : "bg-green"
            }`}></p>
    );
}

//Skal lave købt bool i seat
//Skal lave en funktion der kan opdatere reserved i seat vha timer

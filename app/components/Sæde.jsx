import { UpdateSeat, getSessionData, reservedSeat, removeData } from "../Classes";
import { v4 as uuidv4 } from "uuid";
import { useAuth } from "@clerk/clerk-react";

//Current time in millisecond

export default function Sæde(props) {
    const { userId, sessionId, getToken, isLoaded, isSignedIn, signOut, orgId, orgRole, orgSlug } =
        useAuth();

    const handleSeatClick = async () => {
        // Fetch the latest session ID from props
        const currentSessionId = await getSessionData(props.kampid, props.seatdata);

        if (currentSessionId == null) {
            props.setCart(props.seatdata);
            props.seatdata.reserved = true;
            props.seatdata.sessionId = userId;
            props.seatdata.reservedTime = new Date().getTime();
            await UpdateSeat(props.kampid, props.id, props.seatdata);
            await reservedSeat(props.seatdata);
        } else if (currentSessionId == userId) {
            props.resetCart(props.seatdata);
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
            className={`Sæde border rounded-full gap-5 border-1 p-3 h-4 w-4 ${
                props.optaget ? "bg-red" : "bg-green"
            }`}></p>
    );
}

import { UpdateSeat } from "../Classes";

export default function Sæde(props) {
    return (
        <p
            onClick={() => UpdateSeat(props.kampid, props.id, props.optaget)}
            className={`Sæde border border-1 p-1 h-4 w-4 g-1 ${
                props.optaget ? "bg-red" : "bg-green"
            }`}></p>
    );
}

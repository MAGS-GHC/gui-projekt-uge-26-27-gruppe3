import { Ticket } from "../Classes";
const ticket = new Ticket(14, 12, 4, 2, 1);

export default function home() {
  return (
    <main>
      <h1>test1235 {ticket.section}</h1>
    </main>
  );
}

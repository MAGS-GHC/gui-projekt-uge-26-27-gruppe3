'use server';
import { sendEmail } from "../emailConfirmation.js";
import { currentUser } from "@clerk/nextjs";

export default async function SendEmailBookedSeats() {
async function getUserInfo() {
    // Gets info on the currentuser that is loggedin to know what email to 
    // send it too the if statement below that is if you by some miracle is not signed in
    const user = await currentUser();
    if (!user) {
        throw new Error("You must be signed in to use this feature");
    }
    // Gets the userdata that we need and saves it in a object
    const serverData = {
        userId: user.id,
        emailAddres: user.emailAddresses[0].emailAddress,
    };
    return serverData;
}

// The first thing we do is get the userinfo from the function above and after that sends 
// the info to the send email function the numbers '23456' represents the seat info to test
const user = await getUserInfo();
const mail = await sendEmail(user.emailAddres, '23456');

console.log(mail);
}
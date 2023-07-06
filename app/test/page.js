// 'use server';
import { sendEmail } from "../emailConfirmation.js";
import { currentUser } from "@clerk/nextjs";


export default async function AddHobby() {
async function getUserInfo() {
    const user = await currentUser();
    if (!user) {
        throw new Error("You must be signed in to use this feature");
    }
    const serverData = {
        userId: user.id,
        userName: user.username,
        emailAddres: user.emailAddresses[0].emailAddress,
    };
    console.log(serverData);
    return serverData;
}

const user = await getUserInfo();
const mail = await sendEmail(user.emailAddres, '23456', user.userName);

console.log(mail);
}
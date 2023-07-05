// 'use server';
import { currentUser } from "@clerk/nextjs";
 
export async function getUserInfo() {
    const user = await currentUser();
    if (!user) {
        throw new Error("You must be signed in to use this feature");
    }
    const serverData = {
        userId: user.id,
        userName: user.username,
        emailAddres: user.primaryEmailAddressId[0],
    };
    console.log(serverData);
    return serverData;
}
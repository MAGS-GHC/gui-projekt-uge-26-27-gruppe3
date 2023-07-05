import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Header() {
    return (
        <div>
            <div className="text-center p-10 header bg-dark-green">
                <SignedIn>
                    <UserButton />
                </SignedIn>
                <SignedOut>
                    <button></button>
                </SignedOut>
            </div>
        </div>
    );
}

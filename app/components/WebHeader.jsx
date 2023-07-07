import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";

export default function Header() {
    return (
        <div>
            <div className="p-10 header bg-dark-green">
                <SignedIn>
                    <UserButton />
                </SignedIn>
                <SignedOut>
                    <div>
                        <SignInButton>
                            <button className=" px-10 rounded-xl py-3 bg-white text-green">
                                Login
                            </button>
                        </SignInButton>
                    </div>
                </SignedOut>
            </div>
        </div>
    );
}

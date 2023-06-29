import "./globals.css";
import { Inter } from "next/font/google";
import WebHeader from "./components/WebHeader";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Stadion Booking",
    description: "Lavet af Gruppe 3",
};
export default function RootLayout({ children }) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={`${inter.className}`}>
                    <WebHeader />
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}

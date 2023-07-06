"use client";

import { useEffect, useState } from "react";
import { getOrder, Order } from "@/app/Classes";
import { set } from "firebase/database";
import Link from "next/link";

export default function Home() {
    const [loading, setLoading] = useState(true);

    const [order, setOrder] = useState(null);

    useEffect(() => {
        async function getOrder2() {
            const data = await getOrder();
            console.log(data);
            setOrder(data);
            setLoading(false);
        }
        getOrder2();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <main>
            <section>
                <div className="container w-full text-center gap-5">
                    <h3 className="font-semibold text-xl mb-10">Du har valgt sæderne:</h3>
                    {order.seatsId.map((item, index) => {
                        return <p key={index}>{item}</p>;
                    })}
                    <p className="mt-5">
                        Vælg <span className="font-semibold text-lg">{order.seatsId.length}</span>{" "}
                        billetter på betalingsiden.
                    </p>
                    <Link href={"https://book.stripe.com/aEU2bP7XE3lK9wIdQQ"}>
                        <button className="px-10 py-5 mt-5 text-white font-medium bg-green rounded-lg">
                            Betal
                        </button>
                    </Link>
                </div>
            </section>
        </main>
    );
}

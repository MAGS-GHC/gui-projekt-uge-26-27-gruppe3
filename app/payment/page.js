"use client";
import { useState } from "react";
import Message from '../components/Message';

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main>
      <h1 className="flex col-span-12 justify-center text-3xl mb-0 sm:mb-10 mt-4">
        Chose payment:
      </h1>
      <div className="flex justify-center h-screen sm:h-auto">
        <div className="flex flex-col sm:flex-row basis-1/3 sm:basis-2/3 justify-evenly text-4xl mt-0 sm:m-10">
          <button className="bg-blue-500 hover:bg-blue-700 hover:text-white font-bold py-2 px-10 border border-blue-700 rounded bg-grey hover:bg-black" onClick={() => setIsModalOpen(true)}>
            MobilePay
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 hover:text-white font-bold py-2 px-10 border border-blue-700 rounded bg-grey hover:bg-black" onClick={() => setIsModalOpen(true)}>
            Paypal
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 hover:text-white font-bold py-2 px-10 border border-blue-700 rounded bg-grey hover:bg-black" onClick={() => setIsModalOpen(true)}>
            Card
          </button>
        </div>
      </div>
    {isModalOpen && (
        <Message
            isOpen={isModalOpen}
            message="Payment Successful"
            onAccept={() => setIsModalOpen(false)}
        />
    )}

    </main>
  );
}

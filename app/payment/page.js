"use client";
import { useState } from "react";
import Message from '../components/Message';

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [sektion, setSektion] = useState(0);

  return (
    <main>
      <div id="order-summary" className="flex flex-col m-5 gap-5 justify-center items-center">
        <h1 className="text-3xl"><b>ORDER SUMMARY</b></h1>
        <div className="bg-white border-solid border-2 border-black rounded-md p-2">
          <ul>
            <li> <b>x2</b> Billet (Viborg mod Herning) <button className="border-solid border-black border-2 rounded-md p-1 bg-grey hover:text-white hover:bg-black"> <b>Edit order</b></button>
                <ul className="pl-5 mt-2 space-y-1 list-inside">
                  <li> Pl. 2 Sek N</li>
                  <li> Pl. 3 Sek N</li>
                </ul>
            </li>
          </ul>
        </div>
      </div>
      <h1 className="flex col-span-12 justify-center text-3xl mb-0 sm:mb-10 mt-4">
        <b>CHOOSE PAYMENT</b>
      </h1>
      <div className="flex justify-center items-center h-screen sm:h-auto">
        <div className="flex flex-col sm:flex-row basis-1/3 sm:basis-2/3 justify-evenly text-4xl mt-0 sm:m-10">
          <button className="bg-blue-500 hover:bg-blue-700 hover:text-white font-bold py-2 px-10 border-2 rounded-md bg-grey hover:bg-black" onClick={() => setSektion(1)}>
            MobilePay
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 hover:text-white font-bold py-2 px-10 border-2 rounded-md bg-grey hover:bg-black" onClick={() => setIsModalOpen(true)}>
            Paypal
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 hover:text-white font-bold py-2 px-10 border-2 rounded-md bg-grey hover:bg-black" onClick={() => setSektion(3)}>
            Card
          </button>
        </div>
      </div>
      <section>
        <div className="container w-full">
        {sektion == 1 ? (
          <div className="flex flex-col justify-center items-center gap-3">
            <input className="peer h-1/2 rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-t-transparent focus:outline-0"
            placeholder="Mobil nr: +45 "></input>
            <button className="bg-grey border-solid  border-2 rounded-md p-1 hover:bg-black hover:text-white"> Sende anmodning</button>
          </div>

        ) :null}

        {sektion == 3 ? ( 
          <div className="flex flex-col justify-center items-center gap-3 w-full">
            <div className="flex flex-col justify-center items-center gap-3"> 
              <div>
                <label className=""> Card number  </label>
                <input id="card-num" className="peer h-1/2 rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-t-transparent focus:outline-0"
                  placeholder="2042 2429 74574 5324 ">

                </input>
              </div>
              <div className="flex justify-center align-cente gap-2">
                <div className="flex justify-end gap-1">
                  <label> Exp date </label>
                  <input className="peer h-3/4 w-3/12 rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-t-transparent focus:outline-0" 
                    placeholder="3/25"></input>
                </div>
                <div className="flex justify-start gap-1">
                  <label> CVV   </label>
                  <input className="peer h-3/4 w-3/12 rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-t-transparent focus:outline-0"
                  placeholder="254"></input>
                </div>
                
              </div>
            </div>
            <button className="bg-grey border-solid border-2 rounded-md p-1 w-1/12 hover:bg-black hover:text-white" onClick={() => setIsModalOpen(true)}>Pay</button>

          </div>
        ) : null}

        </div>
        
      </section>
    {isModalOpen && (
        <Message
            isOpen={isModalOpen}
            message="Betaling Gennemført!"
            onAccept={() => setIsModalOpen(false)}
        />
    )}

    </main>
  );
}

export default function Home() {
  return (
    <main>
      <h1 className="flex col-span-12 justify-center text-3xl mb-0 sm:mb-10 mt-4">
        Chose payment:
      </h1>
      <div className="flex justify-center h-screen sm:h-auto">
        <div className="flex flex-col sm:flex-row basis-1/3 sm:basis-2/3 justify-evenly text-4xl mt-0 sm:m-10">
          <button className="bg-blue-500 hover:bg-blue-700 hover:text-white font-bold py-2 px-10 border border-blue-700 rounded bg-grey hover:bg-black">
            Mobilpay
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 hover:text-white font-bold py-2 px-10 border border-blue-700 rounded bg-grey hover:bg-black">
            Paypal
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 hover:text-white font-bold py-2 px-10 border border-blue-700 rounded bg-grey hover:bg-black">
            Card
          </button>
        </div>
      </div>
    </main>
  );
}

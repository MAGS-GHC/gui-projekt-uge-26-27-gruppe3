export default function KampPreview() {
    return (
        <div className="kampPreview shadow-xl rounded-lg flex p-5 justify-between">
            <div className="flex gap-5">
                <div className="flex gap-3">
                    <img
                        src="https://www.vff.dk/images/Klublogoer_billetsalg/fcn.png"
                        alt="fcnlogo"
                        className="klublogo"
                    />
                    <img
                        src="https://www.vff.dk/images/Klublogoer_billetsalg/vff.png"
                        alt="vfflogo"
                        className="klublogo"
                    />
                </div>
                <div className="flex justify-between flex-col my-auto">
                    <h2 className="font-medium">FCN</h2>
                    <h2 className="font-semibold">VIBORG FF</h2>
                </div>
            </div>
            <div className="flex my-auto gap-2">
                <h2 className="text-3xl font-semibold">26</h2>
                <p className="font-light my-auto">D</p>
                <h2 className="text-3xl font-semibold">12</h2>
                <p className="font-light my-auto">T</p>
                <h2 className="text-3xl font-semibold">59</h2>
                <p className="font-light my-auto">S</p>
                <h2 className="text-3xl font-semibold">59</h2>
                <p className="font-light my-auto">S</p>
            </div>
            <div className="flex justify-between flex-col my-auto ml-12">
                <h2 className="font-medium">FREDAG 29. JUNI KL. 19:00</h2>
                <h2 className="font-semibold">ÅBNING: 18.00</h2>
            </div>
            <button className="bg-dark-green px-10 py-4 rounded-xl text-white font-semibold">
                Køb billetter
            </button>
        </div>
    );
}

/* eslint-disable no-undef */
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import imgHero from "../assets/car-list.svg";
import { useState } from "react";

const Kendaraan = () => {
  const tabsData = [
    {
      label: "Mobil",
    },
    {
      label: "Motor",
    },
  ];

  const dataMobil = [
    {
      nama: "Agya",
      image: "../assets/mobil/agya.webp",
      kursi: 3,
      transmisi: "Manual/Automatic",
      bahanBakar: "Bensin",
    },
    {
      nama: "Alphard",
      image: "../assets/mobil/alphard.webp",
      kursi: 5,
      transmisi: "Automatic",
      bahanBakar: "Bensin",
    },
    {
      nama: "APV",
      image: "../assets/mobil/apv.webp",
      kursi: 5,
      transmisi: "Manual/Automatic",
      bahanBakar: "Bensin",
    },
    {
      nama: "Avanza",
      image: "../assets/mobil/avanza.webp",
      kursi: 5,
      transmisi: "Manual/Automatic",
      bahanBakar: "Bensin",
    },
    {
      nama: "Ayla",
      image: "../assets/mobil/ayla.webp",
      kursi: 3,
      transmisi: "Manual/Automatic",
      bahanBakar: "Bensin",
    },
    {
      nama: "Fortuner",
      image: "../assets/mobil/fortuner.webp",
      kursi: 5,
      transmisi: "Automatic",
      bahanBakar: "Bensin",
    },
    {
      nama: "Gran Max Mini Bus",
      image: "../assets/mobil/granmax mini bus.webp",
      kursi: 5,
      transmisi: "Manual/Automatic",
      bahanBakar: "Bensin",
    },
    {
      nama: "Innova",
      image: "../assets/mobil/innova.webp",
      kursi: 5,
      transmisi: "Manual/Automatic",
      bahanBakar: "Bensin",
    },
    {
      nama: "Luxio",
      image: "../assets/mobil/luxio.webp",
      kursi: 5,
      transmisi: "Manual/Automatic",
      bahanBakar: "Bensin",
    },
    {
      nama: "Xenia",
      image: "../assets/mobil/xenia.webp",
      kursi: 5,
      transmisi: "Manual/Automatic",
      bahanBakar: "Bensin",
    },
  ];

  const dataMotor = [
    {
      nama: "Beat FI",
      image: "../assets/motor/beat fi.webp",
      kursi: 2,
      transmisi: "Automatic",
      bahanBakar: "Bensin",
    },
    {
      nama: "Beat Pop",
      image: "../assets/motor/beat pop.webp",
      kursi: 2,
      transmisi: "Automatic",
      bahanBakar: "Bensin",
    },
    {
      nama: "Genio",
      image: "../assets/motor/genio.webp",
      kursi: 2,
      transmisi: "Automatic",
      bahanBakar: "Bensin",
    },
    {
      nama: "PCX",
      image: "../assets/motor/pcx.webp",
      kursi: 2,
      transmisi: "Automatic",
      bahanBakar: "Bensin",
    },
    {
      nama: "Revo",
      image: "../assets/motor/revo.webp",
      kursi: 2,
      transmisi: "Manual",
      bahanBakar: "Bensin",
    },
    {
      nama: "Scoopy Stylish",
      image: "../assets/motor/scoopy stylish.webp",
      kursi: 2,
      transmisi: "Automatic",
      bahanBakar: "Bensin",
    },
    {
      nama: "Supra X",
      image: "../assets/motor/supra x.webp",
      kursi: 2,
      transmisi: "Manual",
      bahanBakar: "Bensin",
    },
    {
      nama: "Vario CBS 150",
      image: "../assets/motor/vario cbs 150.webp",
      kursi: 2,
      transmisi: "Automatic",
      bahanBakar: "Bensin",
    },
    {
      nama: "Vario FI",
      image: "../assets/motor/vario fi.webp",
      kursi: 2,
      transmisi: "Automatic",
      bahanBakar: "Bensin",
    },
    {
      nama: "Verza 150 CB",
      image: "../assets/motor/verza 150 cb.webp",
      kursi: 2,
      transmisi: "Manual",
      bahanBakar: "Bensin",
    },
  ];

  const [activeTabIndex, setActiveTabIndex] = useState(0);
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="h-full bg-dark text-white">
        <div className="container mx-auto">
          <div className="flex flex-wrap px-4">
            <div className="w-full lg:w-1/2 lg:my-auto">
              <h1 className="text-2xl lg:text-5xl font-bold  mb-3 lg:mb-5">
                Lihatlah List Kendaraan yang Kami Punya!
              </h1>
            </div>
            <div className="w-full lg:w-1/2">
              <img src={imgHero} alt="imgHero" />
            </div>
          </div>
        </div>
      </section>
      {/* End of Hero Section */}
      {/* List Kendaraan Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="flex space-x-3 border-b">
            {/* Looping tabs */}
            {tabsData.map((tab, index) => {
              return (
                <button
                  key={index}
                  className={`py-2 px-2 border-b-4 transition-colors duration-300 ${
                    index === activeTabIndex
                      ? "border-primary"
                      : "border-transparent hover:border-gray-200"
                  }`}
                  onClick={() => setActiveTabIndex(index)}>
                  {tab.label}
                </button>
              );
            })}
          </div>
          {/* tab content. */}
          <div className="py-4 flex flex-wrap gap-3">
            {activeTabIndex == 0
              ? dataMobil.map((mobil, index) => {
                  return (
                    <div
                      key={index}
                      className="max-w-sm rounded overflow-hidden shadow-lg">
                      <img
                        className="w-full"
                        src={require(mobil.image)}
                        alt={mobil.nama}
                      />
                      <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">
                          {mobil.nama}
                        </div>
                        <p className="text-gray-700 text-base">
                          Tempat Duduk :{" "}
                          <span className="font-bold">{mobil.kursi}</span>
                        </p>
                        <p className="text-gray-700 text-base">
                          Transmisi :{" "}
                          <span className="font-bold">{mobil.transmisi}</span>
                        </p>
                        <p className="text-gray-700 text-base">
                          Bahan Bakar :{" "}
                          <span className="font-bold">{mobil.bahanBakar}</span>
                        </p>
                        <button className="bg-primary px-2 py-1 rounded-md text-white mt-3">
                          Sewa!
                        </button>
                      </div>
                    </div>
                  );
                })
              : dataMotor.map((motor, index) => {
                  return (
                    <div
                      key={index}
                      className="max-w-sm rounded overflow-hidden shadow-lg">
                      <img
                        className="w-full"
                        src={require(motor.image)}
                        alt={motor.nama}
                      />
                      <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">
                          {motor.nama}
                        </div>
                        <p className="text-gray-700 text-base">
                          Tempat Duduk :{" "}
                          <span className="font-bold">{motor.kursi}</span>
                        </p>
                        <p className="text-gray-700 text-base">
                          Transmisi :{" "}
                          <span className="font-bold">{motor.transmisi}</span>
                        </p>
                        <p className="text-gray-700 text-base">
                          Bahan Bakar :{" "}
                          <span className="font-bold">{motor.bahanBakar}</span>
                        </p>
                        <button className="bg-primary px-2 py-1 rounded-md text-white mt-3">
                          Sewa!
                        </button>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
      </section>
      {/* End of List Kendaraan Section */}
      <Footer />
    </>
  );
};

export default Kendaraan;

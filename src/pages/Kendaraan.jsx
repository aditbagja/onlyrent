import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import imgHero from "../assets/car-list.svg";
import { useState } from "react";

const Kendaraan = () => {
  const tabsData = [
    {
      label: "Mobil",
      content:
        "Ut irure mollit nulla eiusmod excepteur laboris elit sit anim magna tempor excepteur labore nulla.",
    },
    {
      label: "Motor",
      content:
        "Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.",
    },
  ];

  const dataMobil = [
    {
      nama: "Agya",
      image: "../assets/mobil/agya.webp",
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
          <div>
            <div className="flex space-x-3 border-b">
              {/* Loop through tab data and render button for each. */}
              {tabsData.map((tab, index) => {
                return (
                  <button
                    key={index}
                    className={`py-2 border-b-4 transition-colors duration-300 ${
                      index === activeTabIndex
                        ? "border-primary"
                        : "border-transparent hover:border-gray-200"
                    }`}
                    // Change the active tab on click.
                    onClick={() => setActiveTabIndex(index)}>
                    {tab.label}
                  </button>
                );
              })}
            </div>
            {/* Show active tab content. */}
            <div className="py-4">
              <p>{dataMobil[activeTabIndex].nama}</p>
            </div>
          </div>
        </div>
      </section>
      {/* End of List Kendaraan Section */}
      <Footer />
    </>
  );
};

export default Kendaraan;

import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useState } from "react";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-dark">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link to={"/"}>
            <img src={logo} alt="logo" className="w-14" />
          </Link>
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}>
            <div className="space-y-2">
              <div className="w-8 h-0.5 bg-primary"></div>
              <div className="w-8 h-0.5 bg-primary"></div>
              <div className="w-8 h-0.5 bg-primary"></div>
            </div>
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger">
          <ul className="flex flex-col gap-5 lg:gap-3 mt-3 lg:mt-0 lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
              <a
                href="#"
                className="bg-transparent border border-solid border-primary px-4 py-2 h-10 w-32 rounded-full text-white text-center font-semibold">
                Pemesanan
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="bg-primary px-4 py-2 h-10 w-44 rounded-full text-white text-center font-semibold">
                Hubungi Kami
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

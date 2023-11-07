import { useState } from "react";

import Logo from "../assets/gunnylogo.png";

import Navbar from "../components/Navbar";

import BackgroundHome from "../assets/background_01.jpg";
export default function Home() {
  return (
    <div
    // style={{
    //   backgroundImage: `url(${BackgroundHome})`,
    //   backgroundSize: "contain",
    //   height: "100vh",
    //   width: "100%",
    //   backgroundRepeat: "no-repeat",
    // }}
    >
      <header className="absolute inset-x-0 top-0 z-50">
        <Navbar />
      </header>

      <div className="">
        <img
          src={BackgroundHome}
          alt="bg"
          className="absolute z-[-1] mx-[-8]"
        />
        <div className="h-full mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 px-6 pt-14 lg:px-8">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
          <div className="text-center">
            <h1 className="flex justify-center items-center">
              <img src={Logo} alt="logo" className="sm:w-72 w-48" />
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Play Gunny
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

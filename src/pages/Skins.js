import React from "react";
import Skin from "../assets/skin.png";
const Skins = () => {
  return (
    <div className="mt-20 h-[50vh] flex">
      <div className="flex-1 flex justify-end items-center max-w-6xl mx-auto space-y-4">
        <div className="flex flex-col items-end">
          <h2 className="text-indigo-600 text-3xl font-bold uppercase">
            Skins
          </h2>
          <div className="flex items-end w-[80%]">
            <p className="container text-white text-xl text-end">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
          </div>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              See More
            </a>
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-start flex-col max-w-6xl mx-auto space-y-4 ml-20">
        <img src={Skin} className="w-96" alt="img skin" />
      </div>
    </div>
  );
};

export default Skins;

import React, { useState } from "react";

import CharAir from "../assets/char-icon-air.png";
import CharPeth from "../assets/char-icon-peth.png";
import CharRatio from "../assets/char-icon-ratio.png";
import CharThurizas from "../assets/char-icon-thurizas.png";
import CharOthila from "../assets/char-icon-othila.png";

import AirIcon from "../assets/icon-air.png";
import OthilaIcon from "../assets/icon-othila.png";
import PethIcon from "../assets/icon-peth.png";
import RatioIcon from "../assets/icon-ratio.png";
import ThurizasIcon from "../assets/icon-thurizas.png";

const imageOptions = [
  {
    id: "air",
    image: CharAir,
    icon: AirIcon,
    name: "Air",
    lore: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
  },
  {
    id: "othila",
    image: CharOthila,
    icon: OthilaIcon,
    name: "Othila",
    lore: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
  },
  {
    id: "peth",
    image: CharPeth,
    icon: PethIcon,
    name: "Peth",
    lore: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
  },
  {
    id: "thurizas",
    image: CharThurizas,
    icon: ThurizasIcon,
    name: "Thurizas",
    lore: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
  },
  {
    id: "ratio",
    image: CharRatio,
    icon: RatioIcon,
    name: "Ratio",
    lore: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
  },
];

const Inugis = () => {
  const [selectedImage, setSelectedImage] = useState("air"); // Establece "air" como la imagen por defecto

  const handleImageClick = (imageId) => {
    setSelectedImage(imageId);
  };

  return (
    <div className="mt-20 h-[100vh] ">
      <div className="container flex flex-col max-w-6xl mx-auto space-y-4">
        <h2 className="text-yellow-500 text-5xl uppercase font-bold">Inugis</h2>
        <div className="p-4">
          <p className="text-white text-2xl text-center">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
        </div>

        <div className="flex items-center justify-center gap-4">
          {imageOptions.map((option) => (
            <div className="flex justify-center items-center flex-col">
              <img
                key={option.id}
                src={option.icon}
                alt={`${option.id}Icon`}
                className={`w-14 sm:w-28 cursor-pointer transition-opacity duration-500 ease-in-out ${
                  selectedImage === option.id
                    ? "border-yellow-500 opacity-100"
                    : "opacity-75"
                }`}
                onClick={() => handleImageClick(option.id)}
              />
              <p className="text-white uppercase text-sm sm:text-xl">
                {option.name}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center">
          {imageOptions.map(
            (option) =>
              selectedImage === option.id && (
                <div className="flex">
                  <div className="flex flex-col justify-end w-1/2">
                    <p className="text-white text-sm">{option.lore}</p>
                  </div>
                  <div className="flex justify-start items-center">
                    <img
                      key={option.id}
                      src={option.image}
                      alt={option.id}
                      className="sm:w-1/2 w-72"
                    />
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Inugis;

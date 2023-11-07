import React from "react";
import GameMode1 from "../assets/gamemode1.png";
import GameMode2 from "../assets/gamemode2.png";
const GameModes = () => {
  return (
    <div className="mt-20 h-[100vh] flex">
      <div className="container flex flex-col max-w-6xl mx-auto space-y-4">
        <h2 className="text-yellow-500 text-5xl uppercase font-bold">
          Game Modes
        </h2>
        <div className="p-4">
          <p className="text-white text-2xl text-center">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
        </div>

        <div className="flex justify-center gap-10">
          <div className="card ">
            <div
              className="rounded-lg sm:h-[390px] py-6 w-[250px] h-[370px] p-3"
              style={{
                backgroundImage: `url(${GameMode1})`,
                backgroundSize: "cover",
              }}
            >
              <div className="p-4">
                <h3 className="text-yellow-500 text-xl text-start font-bold uppercase"></h3>
              </div>
            </div>
          </div>

          <div className="card">
            <div
              className="rounded-lg sm:h-[390px] py-6 w-[250px] h-[370px] p-3"
              style={{
                backgroundImage: `url(${GameMode2})`,
                backgroundSize: "cover",
              }}
            >
              <div className="p-4">
                <h3 className="text-yellow-500 text-xl text-start font-bold uppercase"></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameModes;

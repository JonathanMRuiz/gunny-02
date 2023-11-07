import React, { useEffect, useRef } from "react";
import Card1 from "../assets/card1.png";
import Card2 from "../assets/card2.png";
import Card3 from "../assets/card3.png";
import Card4 from "../assets/card4.png";
import BackgroundWhatis from "../assets/background_02.jpg";
export const Whatis = () => {
  const cardsRef = useRef(null);

  useEffect(() => {
    const cards = cardsRef.current.querySelectorAll(".card");

    const fadeInOnScroll = () => {
      cards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        const cardBottom = card.getBoundingClientRect().bottom;

        if (cardTop < window.innerHeight && cardBottom > 0) {
          card.style.opacity = "1";
          card.style.transition = "opacity 0.5s ease-in";
        } else {
          card.style.opacity = "0";
          card.style.transition = "none"; // Elimina la transición al salir de la sección.
        }
      });
    };

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // Llamamos a la función una vez para manejar las tarjetas visibles al cargar la página.

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", fadeInOnScroll);
    };
  }, []);

  return (
    <div
    // style={{
    //   backgroundImage: `url(${BackgroundWhatis})`,
    //   backgroundSize: "cover",
    //   height: "100vh",
    //   width: "100%",
    // }}
    >
      <div className="flex flex-col mx-auto space-y-4 mb-4" ref={cardsRef}>
        <img src={BackgroundWhatis} className="absolute z-[-1]" />
        <div>
          <div>
            <h2 className="text-yellow-500 text-5xl uppercase font-bold">
              Que es Gunny?
            </h2>
          </div>
          <div className="p-4">
            <p className="text-white text-2xl text-center">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
          </div>
        </div>
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          <div className="card" style={{ opacity: 0 }}>
            <div
              className="bg-yellow-500 rounded-lg sm:h-[372px] py-6 w-[250px] h-[370px] p-3"
              style={{
                backgroundImage: `url(${Card1})`,
                backgroundSize: "cover",
              }}
            >
              <div className="p-4">
                <h3 className="text-yellow-500 text-xl font-bold uppercase">
                  Title
                </h3>
                <p className="text-white">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
                </p>
              </div>
            </div>
          </div>
          <div className="card" style={{ opacity: 0 }}>
            <div
              className="bg-yellow-500 rounded-lg sm:h-[372px] py-6 w-[250px] h-[370px] p-3"
              style={{
                backgroundImage: `url(${Card1})`,
                backgroundSize: "cover",
              }}
            >
              <div className="p-4">
                <h3 className="text-yellow-500 text-xl font-bold uppercase">
                  Title
                </h3>
                <p className="text-white">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
                </p>
              </div>
            </div>
          </div>
          <div className="card" style={{ opacity: 0 }}>
            <div
              className="bg-yellow-500 rounded-lg sm:h-[372px] py-6 w-[250px] h-[370px] p-3"
              style={{
                backgroundImage: `url(${Card1})`,
                backgroundSize: "cover",
              }}
            >
              <div className="p-4">
                <h3 className="text-yellow-500 text-xl font-bold uppercase">
                  Title
                </h3>
                <p className="text-white">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
                </p>
              </div>
            </div>
          </div>
          <div className="card" style={{ opacity: 0 }}>
            <div
              className="bg-yellow-500 rounded-lg sm:h-[372px] py-6 w-[250px] h-[370px] p-3"
              style={{
                backgroundImage: `url(${Card1})`,
                backgroundSize: "cover",
              }}
            >
              <div className="p-4">
                <h3 className="text-yellow-500 text-xl font-bold uppercase">
                  Title
                </h3>
                <p className="text-white">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
                </p>
              </div>
            </div>
          </div>

          {/* Repite las tarjetas restantes de la misma manera */}
        </div>
      </div>
    </div>
  );
};

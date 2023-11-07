import Carts from "../assets/carts.png";

const Tokens = () => {
  return (
    <div className="mt-20 h-[70vh] flex flex-col sm:flex-row">
      {/* Contenido de la izquierda (Texto) */}
      <div className="flex-1 flex justify-center items-center max-w-6xl mx-auto space-y-4">
        <div className="flex flex-col items-center">
          <h2 className="text-yellow-500 text-3xl font-bold text-start uppercase">
            Tokens
          </h2>
          <div className="flex items-end w-[80%] p-4">
            <p className="container text-white text-xl text-center">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[100%] sm:w-[90vh] pr-20 flex justify-center items-start flex-col max-w-6xl mx-auto space-y-4">
        <img src={Carts} className="w-[100%] sm:w-[90vh]" alt="img skin" />
      </div>
    </div>
  );
};

export default Tokens;

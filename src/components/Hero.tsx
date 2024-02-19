import Banner from "@/assets/img/banner.jpg";

export const Hero = () => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 items-center justify-between py-6 flex-wrap box-width "
      id="home"
    >
      <div
        className="grid-cols-4 px-4 md:pl-10 max-w-screen-lg text-center md:text-left
"
      >
        <h2 className="text-5xl font-bold ">
          Seja Mais Forte do que Suas Desculpas!
        </h2>
        <p className="text-sm my-4 ">
          Supere limites e transforme desculpas em motivação no Ginásio GYM. Com
          apoio personalizado e equipamentos de ponta, você alcançará seus
          objetivos. Junte-se a <br></br>nós para uma jornada de superação e
          conquistas pessoais. Venha ser a sua melhor versão!
        </p>
      </div>
      <div className="grid-cols-5 mr-0">
        <img className="object-cover" src={Banner} alt="Banner" />
      </div>
    </div>
  );
};

export const CTA = () => {
  return (
    <section
      id="contact"
      className={`flex justify-center items-center px-4 md:px-10 my-16 rounded-md py-10 box-width sm:flex-row flex-col bg-black-gradient-2  box-shadow`}
    >
      <div className="flex-1 flex flex-col">
        <h2 className="text-4xl font-bold pb-4 leading-tight ">
          Entre em contacto!
        </h2>
        <p className={`text-sm tracking-tight mb-2 max-w-[420px] temt-3`}>
          Tem alguma dúvida ou gostaria de obter mais informações? Estamos aqui
          para ajudar!"
        </p>
      </div>

      <div
        className={`flex justify-center items-center sm:ml-10 ml-0 sm:mt-0 mt-10`}
      >
        <button className="border rounded-md px-3 py-2 duration-75 hover:bg-slate-100 hover:text-background">
          Entrar em contacto
        </button>
      </div>
    </section>
  );
};

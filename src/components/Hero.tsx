export function Hero() {
  const logo = `${import.meta.env.BASE_URL}figma/logo.svg`;
  return (
    <>
      <section className="section ">
        <div className="w-full md:w-[60%] flex justify-center  items-center mx-auto">
          <img src={logo} alt="Логотип" className=" h-auto object-contain" />
        </div>
      </section>
      <section className="section text-white">
        <h1 className="font-display text-[18px] md:text-3xl font-bold leading-tight uppercase">
          <span className="text-danger">+</span>{" "}
          <span className="text-white">приложение</span>
        </h1>
        <p className="mt-5 text-[12px] md:text-2xl font-display font-light uppercase">
          Оказание первой доврачебной помощи в&nbsp;условиях
          боевых&nbsp;действий или&nbsp;террористических&nbsp;актов
        </p>
      </section>
    </>
  );
}

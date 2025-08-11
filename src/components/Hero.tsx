export function Hero() {
  const logo = `${import.meta.env.BASE_URL}figma/logo.svg`;
  return (
    <>
      <section className="section text-white">
        <div className="w-full flex justify-center h-screen items-center">
          <img
            src={logo}
            alt="Логотип"
            className="w-[70vw] h-auto object-contain"
          />
        </div>
      </section>
      <section className="section text-white">
        <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight uppercase text-brand">
          <span className="text-danger">+</span>{" "}
          <span className="text-white">приложение</span>
        </h1>
        <p className="mt-5 max-w-4xl text-lg md:text-4xl font-display font-light uppercase text-white">
          Оказание первой доврачебной помощи в&nbsp;условиях
          боевых&nbsp;действий или&nbsp;террористических&nbsp;актов
        </p>
      </section>
    </>
  );
}

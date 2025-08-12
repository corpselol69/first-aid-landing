export function BlocksInfo() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="font-display text-brand text-3xl md:text-5xl uppercase">
          три основных блока
        </h2>
        <div className="mt-12 space-y-12 text-white">
          <p className="font-display text-3xl md:text-4xl w-full ">
            <span className="text-danger font-bold">+ </span>
            <span className=" font-bold ">АЛГОРИТМЫ. </span>
            <span className="font-light leading-[200%]">
              Несколько вопросов о месте ранения и других параметрах. Алгоритм
              представляет собой последовательность действий, иллюстрированную
              видеоматериалами.
            </span>
          </p>

          <p className="font-display leading-[200%] w-full text-3xl md:text-4xl">
            <span className="text-danger font-bold">+ </span>
            <span className=" font-bold text-3xl md:text-4xl">НАВЫКИ. </span>

            <span className="font-light leading-[200%]">
              Основные видео для оказания первой доврачебной помощи.
            </span>
          </p>

          <p className="font-display leading-[200%] w-full text-3xl md:text-4xl">
            <span className="text-danger font-bold">+ </span>
            <span className=" font-bold text-3xl md:text-4xl">АПТЕЧКА. </span>
            <span className="font-light leading-[200%]">
              Содержит информацию о средствах, необходимых для оказания первой
              доврачебной помощи.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

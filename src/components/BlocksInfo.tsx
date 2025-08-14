export function BlocksInfo() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="font-display text-brand text-xl md:text-3xl uppercase">
          три основных блока
        </h2>
        <div className="mt-8 space-y-8 md:space-y-12 text-white">
          <p className="font-display text-l  w-full ">
            <span className="text-danger font-bold">+ </span>
            <span className=" font-bold md:text-2xl">АЛГОРИТМЫ. </span>
            <span className="font-light leading-[200%] md:text-2xl">
              Несколько вопросов о месте ранения и других параметрах. Алгоритм
              представляет собой последовательность действий, иллюстрированную
              видеоматериалами.
            </span>
          </p>

          <p className="font-display w-full">
            <span className="text-danger font-bold">+ </span>
            <span className=" font-bold md:text-2xl">НАВЫКИ. </span>

            <span className="font-light leading-[200%]  md:text-2xl">
              Основные видео для оказания первой доврачебной помощи.
            </span>
          </p>

          <p className="font-display w-full ">
            <span className="text-danger font-bold">+ </span>
            <span className=" font-bold md:text-2xl">АПТЕЧКА. </span>
            <span className="font-light leading-[200%]  md:text-2xl">
              Содержит информацию о средствах, необходимых для оказания первой
              доврачебной помощи.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

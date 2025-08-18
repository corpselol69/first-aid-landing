export function BlocksInfo() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="font-display text-brand text-l md:text-2xl uppercase">
          три основных блока
        </h2>
        <div className="mt-6 space-y-4 md:space-y-8 text-white">
          <p className="font-display text-l  w-full ">
            <span className="text-danger font-bold">+ </span>
            <span className=" font-bold md:text-xl">АЛГОРИТМЫ. </span>
            <span className="font-light leading-[200%] md:text-xl">
              Несколько вопросов о месте ранения и других параметрах. Алгоритм
              представляет собой последовательность действий, иллюстрированную
              видеоматериалами.
            </span>
          </p>

          <p className="font-display w-full">
            <span className="text-danger font-bold">+ </span>
            <span className=" font-bold md:text-xl">НАВЫКИ. </span>

            <span className="font-light leading-[200%]  md:text-xl">
              Основные видео для оказания первой доврачебной помощи.
            </span>
          </p>

          <p className="font-display w-full ">
            <span className="text-danger font-bold">+ </span>
            <span className=" font-bold md:text-xl">АПТЕЧКА. </span>
            <span className="font-light leading-[200%]  md:text-xl">
              Содержит информацию о средствах, необходимых для оказания первой
              доврачебной помощи.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

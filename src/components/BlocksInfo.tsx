export function BlocksInfo() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="font-display text-brand text-3xl md:text-4xl text-center uppercase">
          три основных блока
        </h2>
        <div className="mt-6 space-y-6 text-white text-2xl leading-relaxed">
          <p>
            <span className="text-danger">+ </span>
            Аптечка.{" "}
            <span className="font-display font-light">
              содержит информацию о средствах, необходимых для оказания первой
              доврачебной помощи.
            </span>
          </p>
          <p>
            <span className="text-danger">+ </span>
            НАВЫКИ.{" "}
            <span className="font-display font-light">
              основные видео для оказания первой доврачебной помощи.
            </span>
          </p>
          <p>
            <span className="text-danger">+ </span>
            АЛГОРИТМЫ.{" "}
            <span className="font-display font-light">
              Несколько вопросов о месте ранения и других параметрах. Алгоритм
              представляет собой последовательность действий, иллюстрированную
              видеоматериалами.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

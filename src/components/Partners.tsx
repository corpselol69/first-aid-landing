export function Partners() {
  const base = import.meta.env.BASE_URL;
  const takmed = `${base}figma/56c0b596cc689523443a6de5ef68892c66eba3cf.png`;
  const onf = `${base}figma/00fba7ede04edb0465355456e90a8835023b4793.png`;
  const cifra = `${base}figma/b6fc4572df28cbb0f26755dbb52b2c05d704d5f7.png`;

  return (
    <section className="section !px-0 md:px-8">
      <div className="container md:max-w-[80%]">
        <h2 className="text-white text-[18px] md:text-3xl font-display font-bold uppercase text-center">
          Партнеры
        </h2>
        <div className="container mt-2 md:">
          <div
            className="
    grid grid-cols-3 gap-2 px-2
    md:grid-cols-3 md:gap-4 md:px-0
  "
          >
            {/* 1 */}
            <div
              className="
      w-full aspect-square rounded-2xl bg-white
      flex items-center justify-center
    "
            >
              <img
                src={takmed}
                alt="Такмед"
                className="max-w-[100%] max-h-[100%] object-contain rounded-2xl"
              />
            </div>

            {/* 2 */}
            <div
              className="
      w-full aspect-square rounded-2xl bg-white
      flex items-center justify-center
    "
            >
              <img
                src={onf}
                alt="ОНФ"
                className="max-w-[85%] max-h-[85%] object-contain"
              />
            </div>

            {/* 3 */}
            <div
              className="
      w-full aspect-square rounded-2xl bg-gray-200
      flex items-center justify-center
    "
            >
              <img
                src={cifra}
                alt="Цифра"
                className="max-w-[85%] max-h-[85%] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

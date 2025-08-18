export function Partners() {
  const base = import.meta.env.BASE_URL;
  const takmed = `${base}figma/56c0b596cc689523443a6de5ef68892c66eba3cf.png`;
  const onf = `${base}figma/00fba7ede04edb0465355456e90a8835023b4793.png`;
  const cifra = `${base}figma/b6fc4572df28cbb0f26755dbb52b2c05d704d5f7.png`;

  return (
    <section className="section !px-0 md:px-8">
      <div className="container md:max-w-[80%]">
        <h2 className="text-white text-xl md:text-3xl font-display font-bold uppercase text-center">
          Партнеры
        </h2>
        <div className="container mt-12">
          <div
            className="
    flex gap-4 -mx-4 px-4 py-2
    overflow-x-auto overflow-y-hidden scroll-smooth overscroll-x-contain touch-pan-x
    snap-x snap-mandatory
    md:grid md:grid-cols-3 md:gap-4 md:overflow-visible md:snap-none md:py-0 md:mx-0 md:px-0
  "
          >
            {/* 1 */}
            <div
              className="
      shrink-0 w-64 aspect-square rounded-2xl bg-white
      flex items-center justify-center snap-center
      first:ml-[calc(50vw-8rem)]
      md:w-full md:shrink md:snap-none md:ml-0 md:first:ml-0
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
      shrink-0 w-64 aspect-square rounded-2xl bg-white
      flex items-center justify-center snap-center
      md:w-full md:shrink md:snap-none
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
      shrink-0 w-64 aspect-square rounded-2xl bg-gray-200
      flex items-center justify-center snap-center
      last:mr-[calc(50vw-8rem)]
      md:w-full md:shrink md:snap-none md:mr-0
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

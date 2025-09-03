export function Screenshots() {
  const base = import.meta.env.BASE_URL;
  const shot1 = `${base}figma/c75a5e586ec54a1c2f35307eb9391933a7e0b72a.png`;
  const shot2 = `${base}figma/64f3fcaabb8ed89d22d736f25afddb2341611789.png`;
  const shot3 = `${base}figma/0413563786587b8923dd6e7f9dc2ae9d7d8f55fd.png`;

  return (
    <section className="section !px-0 md:px-8">
      <div className="flex flex-col items-center gap-4 md:gap-[4rem] w-full">
        <div className="container">
          <div
            className="
      flex gap-5 py-4
      overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory
      md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:snap-none md:py-0
    "
          >
            {/* Карточка 1 */}
            <div
              className="
        relative shrink-0 w-44 snap-center
        first:ml-[calc(50vw-4rem)] last:mr-[calc(50vw-4rem)]
        md:w-full md:shrink md:snap-none md:ml-0 md:first:ml-0 md:mr-0
      "
            >
              <div className="pointer-events-none absolute -inset-1 bg-brand/50 blur-[2px] rounded-2xl opacity-60" />
              <img
                src={shot2}
                alt="скрин 2"
                className="relative rounded-2xl w-full h-auto block"
              />
            </div>

            {/* Карточка 2 */}
            <div className="relative shrink-0 w-44 snap-center md:w-full md:shrink md:snap-none">
              <div className="pointer-events-none absolute -inset-1 bg-brand/50 blur-[2px] rounded-2xl opacity-60" />
              <img
                src={shot1}
                alt="скрин 1"
                className="relative rounded-2xl w-full h-auto block"
              />
            </div>

            {/* Карточка 3 */}
            <div
              className="
        relative shrink-0 w-44 snap-center
        last:mr-[calc(50vw-4rem)]
        md:w-full md:shrink md:snap-none md:mr-0
      "
            >
              <div className="pointer-events-none absolute -inset-1 bg-brand/50 blur-[2px] rounded-2xl opacity-60" />
              <img
                src={shot3}
                alt="скрин 3"
                className="relative rounded-2xl w-full h-auto block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

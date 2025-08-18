export function Screenshots() {
  const base = import.meta.env.BASE_URL;
  const shot1 = `${base}figma/c75a5e586ec54a1c2f35307eb9391933a7e0b72a.png`;
  const shot2 = `${base}figma/64f3fcaabb8ed89d22d736f25afddb2341611789.png`;
  const shot3 = `${base}figma/0413563786587b8923dd6e7f9dc2ae9d7d8f55fd.png`;

  return (
    <section className="section !px-0 md:px-8">
      <div className="flex flex-col items-center gap-4 md:gap-[4rem] w-full">
        <div className="flex flex-col items-center gap-3 w-full">
          <a
            href={"https://testflight.apple.com/join/yHqqzNek"}
            target="_blank"
            className="group relative rounded-[50px] px-6 py-3 md:px-20 md:py-4 bg-black/100 overflow-visible shadow-[4px_4px_3px_0_rgba(0,0,0,0.25)]"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -inset-1 -z-10 rounded-[50px] bg-brand/60 blur-[10px]"
            />
            <h2 className="font-sans leading-none text-base md:text-lg text-center">
              Офлайн приложение для iOS
            </h2>
          </a>
          <div className="flex items-center justify-center text-sm md:text-base font-light">
            <span>Необходимо установить TestFlight</span>
          </div>
        </div>
        <div className="container">
          <div
            className="
      flex gap-4 py-4
      overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory
      md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:snap-none md:py-0
    "
          >
            {/* Карточка 1 */}
            <div
              className="
        relative shrink-0 w-64 snap-center
        first:ml-[calc(50vw-8rem)] last:mr-[calc(50vw-8rem)]
        md:w-full md:shrink md:snap-none md:ml-0 md:first:ml-0 md:mr-0
      "
            >
              <div className="pointer-events-none absolute -inset-1 bg-brand/50 blur-sm rounded-2xl opacity-60" />
              <img
                src={shot2}
                alt="скрин 2"
                className="relative rounded-2xl w-full h-auto block"
              />
            </div>

            {/* Карточка 2 */}
            <div className="relative shrink-0 w-64 snap-center md:w-full md:shrink md:snap-none">
              <div className="pointer-events-none absolute -inset-1 bg-brand/50 blur-sm rounded-2xl opacity-60" />
              <img
                src={shot1}
                alt="скрин 1"
                className="relative rounded-2xl w-full h-auto block"
              />
            </div>

            {/* Карточка 3 */}
            <div
              className="
        relative shrink-0 w-64 snap-center
        last:mr-[calc(50vw-8rem)]
        md:w-full md:shrink md:snap-none md:mr-0
      "
            >
              <div className="pointer-events-none absolute -inset-1 bg-brand/50 blur-sm rounded-2xl opacity-60" />
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

export function Screenshots() {
  const base = import.meta.env.BASE_URL;
  const shot1 = `${base}figma/c75a5e586ec54a1c2f35307eb9391933a7e0b72a.png`;
  const shot2 = `${base}figma/64f3fcaabb8ed89d22d736f25afddb2341611789.png`;
  const shot3 = `${base}figma/0413563786587b8923dd6e7f9dc2ae9d7d8f55fd.png`;

  return (
    <section className="section">
      <div className="flex flex-col items-center gap-[4rem] w-full">
        <div className="flex flex-col items-center gap-3 w-full">
          <a
            href={"https://testflight.apple.com/join/yHqqzNek"}
            target="_blank"
            className="group relative rounded-[50px] px-6 py-6 md:px-20 md:py-6 bg-black/100 overflow-visible shadow-[10px_10px_4px_0_rgba(0,0,0,0.25)]"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -inset-1 -z-10 rounded-[50px] bg-brand/60 blur-[15px]"
            />
            <h2 className="font-sans text-lg leading-none md:text-[40px] text-center">
              Офлайн приложение для iOS
            </h2>
          </a>
          <div className="flex items-center justify-center text-l md:text-3xl font-light">
            <span>Необходимо установить TestFlight</span>
          </div>
        </div>
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative">
              <div className="absolute -inset-1 bg-brand/50 blur-sm rounded-2xl opacity-60" />
              <img
                src={shot2}
                alt="скрин 2"
                className="relative rounded-2xl w-full"
              />
            </div>
            <div className="relative">
              <div className="absolute -inset-1 bg-brand/50 blur-sm rounded-2xl opacity-60" />
              <img
                src={shot1}
                alt="скрин 1"
                className="relative rounded-2xl w-full"
              />
            </div>
            <div className="relative">
              <div className="absolute -inset-1 bg-brand/50 blur-sm rounded-2xl opacity-60" />
              <img
                src={shot3}
                alt="скрин 3"
                className="relative rounded-2xl w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

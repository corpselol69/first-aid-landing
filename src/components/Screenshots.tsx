export function Screenshots() {
  const base = import.meta.env.BASE_URL;
  const shot1 = `${base}figma/c75a5e586ec54a1c2f35307eb9391933a7e0b72a.png`;
  const shot2 = `${base}figma/64f3fcaabb8ed89d22d736f25afddb2341611789.png`;
  const shot3 = `${base}figma/0413563786587b8923dd6e7f9dc2ae9d7d8f55fd.png`;

  return (
    <section className="section">
      <div className="flex flex-col items-center  w-full">
        <div className="group relative mb-[6rem] rounded-[50px] px-10 py-10 md:px-20 md:py-6 bg-black/100 overflow-visible shadow-[10px_10px_4px_0_rgba(0,0,0,0.25)]">
          <h2 className="font-sans text-lg leading-none md:text-[40px] text-brand text-center">
            Оффлайн приложение для iOS
          </h2>
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

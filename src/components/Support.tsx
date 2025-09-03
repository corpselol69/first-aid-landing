export function Support() {
  return (
    <section className="section">
      <div className="container uppercase font-display flex flex-col items-center gap-1 md:gap-6 mt-4 md:mt-0">
        <div className="flex  items-center gap-1">
          <p className="text-[12px]  md:text-xl font-light">наш Канал |</p>
          <a
            className=" text-brand text-[12px]  md:text-2xl font-bold "
            href="https://t.me/podoroZnikRF"
            target="_blank"
            rel="noreferrer"
          >
            @<span className="underline">podoroZnikRF</span>
          </a>
        </div>

        <div className="flex  items-center gap-1 ">
          <p className="text-[12px]  md:text-xl font-light">Поддержка |</p>
          <a
            className="text-brand text-[12px]  md:text-2xl font-bold "
            href="https://t.me/pplus_support"
            target="_blank"
            rel="noreferrer"
          >
            @<span className="underline">pplus_support</span>
          </a>
        </div>
      </div>
    </section>
  );
}

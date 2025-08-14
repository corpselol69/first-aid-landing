import { APK_URL, RUSTORE_URL, WEB_URL } from "../config/links";

export function Downloads() {
  const base = import.meta.env.BASE_URL;
  const mark = `${base}figma/ExclamationMark.svg`;
  const android = `${base}figma/Android.svg`;
  const laptop = `${base}figma/9be7c55864cd307433e8cd0e71448ba80ccf2fe7.png`;

  return (
    <section className="section relative overflow-visible">
      <div className="container relative">
        <p className="font-display text-2xl md:text-4xl text-white text-center font-extralight leading-relaxed">
          Скачать:
        </p>

        <div className="mt-8 grid gap-[2rem] md:gap-[3rem] md:w-[60%] mx-auto">
          <a
            href={"https://www.rustore.ru/catalog/app/ru.bnice.a300"}
            target="_blank"
            className="group relative rounded-[20px] px-3 py-5 md:px-8 md:py-6 bg-black/100 overflow-visible shadow-[3px_3px_4px_0_rgba(0,0,0,0.25)] md:shadow-[6px_6px_4px_0_rgba(0,0,0,0.25)]"
          >
            {/* outer green glow */}
            <span
              aria-hidden
              className="pointer-events-none absolute -inset-1 -z-10 rounded-[20px] bg-brand/60 blur-[5px] md:blur-[12px]"
            />
            {/* inner edge glow
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10 rounded-[50px] ring-1 ring-brand/20 "
            /> */}
            <div className="text-center">
              <div className="font-bold font-sans text-[56px] leading-none text-xl md:text-[2rem] text-white">
                RuStore
              </div>
            </div>
          </a>

          <div className="flex flex-col items-center gap-3 w-full">
            <a
              href={"https://podmed.ru/apk/"}
              target="_blank"
              className="group relative rounded-[20px]  w-full px-3 py-4 md:px-8 md:py-4 bg-black/100 overflow-visible shadow-[3px_3px_4px_0_rgba(0,0,0,0.25)] md:shadow-[6px_6px_4px_0_rgba(0,0,0,0.25)]"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -inset-1 -z-10 rounded-[20px]  bg-brand/60 blur-[5px] md:blur-[12px]"
              />
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="font-sans font-bold uppercase text-white text-xl md:text-[2rem] leading-none">
                    apk
                  </div>
                  <div className="flex items-center justify-center gap-2 text-white/90 text-l md:text-xl font-display font-extralight mt-2">
                    <img
                      src={android}
                      alt="Android"
                      className="h-6 w-6 md:h-8 md:w-8"
                    />
                    оффлайн версия
                  </div>
                </div>
              </div>
            </a>
            <div className="flex items-center justify-center text-l md:text-xl font-light">
              <img src={mark} alt="Android" className="h-5 w-5 md:h-8 md:w-8" />
              <span>Требуется Android 6 и выше</span>
            </div>
          </div>

          <a
            href={"https://300.podmed.ru"}
            target="_blank"
            className="group relative rounded-[20px] px-3 py-4 md:px-8 md:py-4 bg-black/100 overflow-visible shadow-[3px_3px_4px_0_rgba(0,0,0,0.25)] md:shadow-[6px_6px_4px_0_rgba(0,0,0,0.25)]"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -inset-1 -z-10 rounded-[20px] bg-brand/60 blur-[5px] md:blur-[12px]"
            />
            <div className="flex items-center justify-center gap-4">
              <div className="text-center">
                <div className="font-sans font-bold text-white text-xl md:text-[2rem] leading-none">
                  ВЕБ версия
                </div>
                <div className="flex items-center justify-center gap-2 text-white/90 text-l font-extralight md:text-xl font-display lowercase mt-2">
                  <img
                    src={laptop}
                    alt="Web"
                    className="h-6 w-6 md:h-8 md:w-8"
                  />
                  экспериментальная
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="mt-3 md:mt-6 md:w-[60%] mx-auto">
          <div className="text-white text-l md:text-xl text-center leading-snug md:leading-tight font-light">
            В вашем браузере может работать некорректно — используйте последнюю
            версию: Яндекс, Chrome, Safari, Edge
          </div>
        </div>
      </div>
    </section>
  );
}

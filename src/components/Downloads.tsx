import { APK_URL, RUSTORE_URL, WEB_URL } from "../config/links";

export function Downloads() {
  const base = import.meta.env.BASE_URL;
  const mark = `${base}figma/ExclamationMark.svg`;
  const android = `${base}figma/Android.svg`;
  const laptop = `${base}figma/9be7c55864cd307433e8cd0e71448ba80ccf2fe7.png`;

  return (
    <section className="section relative overflow-visible">
      <div className="container relative">
        <p className="font-display text-4xl md:text-4xl text-white text-center font-extralight leading-relaxed">
          Скачать:
        </p>

        <div className="mt-8 grid gap-[4rem]">
          <a
            href={RUSTORE_URL}
            target={RUSTORE_URL.startsWith("http") ? "_blank" : undefined}
            rel={RUSTORE_URL.startsWith("http") ? "noreferrer" : undefined}
            className="group relative rounded-[50px] px-6 py-10 md:px-10 md:py-12 bg-black/100 overflow-visible shadow-[10px_10px_4px_0_rgba(0,0,0,0.25)]"
          >
            {/* outer green glow */}
            <span
              aria-hidden
              className="pointer-events-none absolute -inset-1 -z-10 rounded-[50px] bg-brand/60 blur-[15px]"
            />
            {/* inner edge glow
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10 rounded-[50px] ring-1 ring-brand/20 "
            /> */}
            <div className="text-center">
              <div className="font-bold font-sans text-[56px] leading-none md:text-[128px] text-white ">
                RuStore
              </div>
            </div>
          </a>

          <div className="flex flex-col items-center gap-3 w-full">
            <a
              href={APK_URL}
              target={APK_URL.startsWith("http") ? "_blank" : undefined}
              rel={APK_URL.startsWith("http") ? "noreferrer" : undefined}
              className="group relative rounded-[50px] w-full px-6 py-10 md:px-10 md:py-12 bg-black/100 overflow-visible shadow-[10px_10px_4px_0_rgba(0,0,0,0.25)]"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -inset-1 -z-10 rounded-[50px] bg-brand/60 blur-[15px]"
              />
              <div className="flex items-center justify-center gap-4">
                <div className="text-center">
                  <div className="font-sans font-bold uppercase text-white text-5xl md:text-[96px] leading-none">
                    apk
                  </div>
                  <div className="flex items-center justify-center gap-3 text-white/90 text-3xl md:text-3xl font-display font-extralight mt-2">
                    <img src={android} alt="Android" className="h-10 w-10" />
                    оффлайн версия
                  </div>
                </div>
              </div>
            </a>
            <div className="flex items-center justify-center text-lg md:text-3xl font-light">
              <img src={mark} alt="Android" className="h-10 w-10" />
              <span>Требуется Android 6 и выше</span>
            </div>
          </div>

          <a
            href={WEB_URL}
            target={WEB_URL.startsWith("http") ? "_blank" : undefined}
            rel={WEB_URL.startsWith("http") ? "noreferrer" : undefined}
            className="group relative rounded-[50px] px-6 py-10 md:px-10 md:py-12 bg-black/100 overflow-visible shadow-[10px_10px_4px_0_rgba(0,0,0,0.25)]"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -inset-1 -z-10 rounded-[50px] bg-brand/60 blur-[15px]"
            />
            <div className="flex items-center justify-center gap-4">
              <div className="text-center">
                <div className="font-sans font-bold text-white text-5xl md:text-[96px] leading-none">
                  ВЕБ версия
                </div>
                <div className="flex items-center justify-center gap-3 text-white/90 text-xl font-extralight md:text-2xl font-display lowercase mt-2">
                  <img src={laptop} alt="Web" className="h-10 w-10" />
                  экспериментальная
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="mt-6 flex flex-col items-center gap-2 text-white">
          <div className="text-white text-lg md:text-3xl text-center leading-snug md:leading-tight font-light">
            В вашем браузере может работать некорректно — используйте последнюю
            версию: Яндекс, Chrome, Safari, Edge
          </div>
        </div>
      </div>
    </section>
  );
}

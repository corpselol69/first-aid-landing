import { APK_URL, RUSTORE_URL, WEB_URL } from "../config/links";
import { useState } from "react";

export function Downloads() {
  const base = import.meta.env.BASE_URL;
  const mark = `${base}figma/ExclamationMark.svg`;
  const android = `${base}figma/Android.svg`;
  const online = `${base}figma/online.svg`;
  const offline = `${base}figma/offline.svg`;
  const [mode, setMode] = useState<"online" | "offline">("offline");

  return (
    <section className="section relative overflow-visible">
      <div className="container relative">
        <p className="font-display text-l md:text-3xl text-white text-center font-extralight leading-relaxed">
          Скачать приложение
        </p>

        <div className="mt-2 md:mt-5 flex justify-center">
          <div
            role="tablist"
            aria-label="Выбор режима"
            className="inline-flex rounded-[14px] bg-black/60 p-1 backdrop-blur-sm border border-white/10"
          >
            <button
              role="tab"
              aria-selected={mode === "online"}
              className={`w-[7.5rem] md:w-[10rem] px-4 py-2 rounded-[12px] text-sm md:text-base font-semibold flex items-center justify-center gap-2 outline-none transition-all duration-200 ${
                mode === "online"
                  ? "bg-brand text-black shadow"
                  : "text-white/85 hover:text-white"
              }`}
              onClick={() => setMode("online")}
            >
              <img
                src={online}
                alt="Онлайн"
                className={`h-4 w-4 md:h-5 md:w-5 opacity-90 ${
                  mode === "online" ? "" : "invert"
                }`}
              />
              <span>Онлайн</span>
            </button>
            <button
              role="tab"
              aria-selected={mode === "offline"}
              className={`w-[7.5rem] md:w-[10rem] px-4 py-2 rounded-[12px] text-sm md:text-base font-semibold flex items-center justify-center gap-2 outline-none transition-all duration-200 ${
                mode === "offline"
                  ? "bg-brand text-black shadow"
                  : "text-white/85 hover:text-white"
              }`}
              onClick={() => setMode("offline")}
            >
              <img
                src={offline}
                alt="wifi off"
                className={`h-4 w-4 md:h-5 md:w-5 opacity-90 ${
                  mode === "offline" ? "" : "invert"
                }`}
              />
              <span>Офлайн</span>
            </button>
          </div>
        </div>

        {/* Content */}
        {mode === "offline" ? (
          <>
            <div className="mt-3 md:mt-6 grid gap-[1rem] md:gap-[2rem] md:w-[60%] mx-auto">
              <div className="flex flex-col items-center gap-1 w-full relative">
                <a
                  href={APK_URL}
                  target="_blank"
                  className="group relative rounded-[14px] w-full px-3 py-[10px] md:px-8 md:py-6 md:h-[100px] bg-black/100 overflow-visible shadow-[3px_3px_4px_0_rgba(0,0,0,0.25)] md:shadow-[6px_6px_4px_0_rgba(0,0,0,0.25)] flex items-center justify-center"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -inset-1 -z-10 rounded-[14px]  bg-brand/40 blur-[2px] md:blur-[2px]"
                  />
                  <div className="flex flex-col items-center text-center gap-1">
                    <div className="flex items-center gap-3">
                      <img
                        src={android}
                        alt="Android"
                        className="h-6 w-6 md:h-7 md:w-7"
                      />
                      <div className="font-sans font-bold uppercase text-white text-xl md:text-2xl leading-none">
                        APK
                      </div>
                    </div>
                    <div className="text-white/85 text-xs md:text-sm font-light leading-none">
                      Для Android 6 и выше
                    </div>
                  </div>
                </a>
              </div>
              {/* iOS TestFlight, styled like other cards */}
              <div className="flex flex-col items-center gap-2 w-full">
                <a
                  href={"https://testflight.apple.com/join/yHqqzNek"}
                  target="_blank"
                  className="group relative rounded-[14px] w-full px-3 py-[10px] md:px-8 md:py-6 md:h-[100px] bg-black/100 overflow-visible shadow-[3px_3px_4px_0_rgba(0,0,0,0.25)] md:shadow-[6px_6px_4px_0_rgba(0,0,0,0.25)] flex items-center justify-center"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -inset-1 -z-10 rounded-[14px] bg-brand/40 blur-[2px] md:blur-[2px]"
                  />
                  <div className="flex flex-col items-center text-center gap-1">
                    <div className="flex items-center gap-3">
                      <span
                        aria-hidden
                        className="text-white text-2xl md:text-3xl leading-none"
                      >
                        
                      </span>
                      <div className="font-sans font-bold text-white text-xl md:text-2xl leading-none">
                        iOS
                      </div>
                    </div>
                    <div className="text-white/85 text-xs md:text-sm font-light leading-none">
                      Необходимо установить TestFlight
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="mt-3 md:mt-6 grid gap-[1rem] md:gap-[2rem] md:w-[60%] mx-auto">
              <a
                href={RUSTORE_URL}
                target="_blank"
                className="group relative rounded-[14px] px-3 py-5 md:px-8 md:py-6 md:h-[100px] bg-black/100 overflow-visible shadow-[3px_3px_4px_0_rgba(0,0,0,0.25)] md:shadow-[6px_6px_4px_0_rgba(0,0,0,0.25)] flex items-center justify-center"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -inset-1 -z-10 rounded-[14px] bg-brand/40 blur-[2px] md:blur-[2px]"
                />

                <div className="text-center">
                  <div className="font-bold font-sans leading-none text-xl md:text-2xl text-white">
                    RuStore
                  </div>
                </div>
              </a>

              <a
                href={WEB_URL}
                target="_blank"
                className="group relative rounded-[14px] px-3 py-5 md:px-8 md:py-6 md:h-[100px] bg-black/100 overflow-visible shadow-[3px_3px_4px_0_rgba(0,0,0,0.25)] md:shadow-[6px_6px_4px_0_rgba(0,0,0,0.25)] flex items-center justify-center"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -inset-1 -z-10 rounded-[14px] bg-brand/40 blur-[2px] md:blur-[2px]"
                />
                <div className="flex items-center justify-center gap-4">
                  <div className="text-center">
                    <div className="font-sans font-bold text-white text-xl md:text-2xl leading-none">
                      ВЕБ версия
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="mt-3 md:mt-6 md:w-[60%] mx-auto">
              <div className="text-white text-xs md:text-base text-center leading-snug md:leading-tight font-light">
                Для корректной работы используйте последнюю версию: Яндекс,
                Chrome, Safari, Edge
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

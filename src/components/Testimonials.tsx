import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import "./Testimonials.css";
import { Review } from "../api/reviews";
const URL = "/api/reviews";

const fallback = [
  {
    id: 1,
    author: "Азат",
    text: "Нахожусь в зоне СВО, программа научила многому, оказал помощь более 20 300ым. Огромное спасибо!",
  },
  {
    id: 2,
    author: "Игнат",
    text: "Спасибо разработчикам, одно из самых полезных приложений на Rustore. Спасибо!",
  },
  {
    id: 3,
    author: "Grehmas",
    text: "Очень полезное приложение по первой помощи и в бою и на гражданке. Благодарность всем причастным и Юричу!",
  },
  {
    id: 4,
    author: "Алекс",
    text: "Это самое лучшее из приложений по мед-инструкции, что я видел. Спасибо Вам!",
  },
];

export function Testimonials() {
  const [reviews, setReviews] = useState<Review[]>([]);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.reInit();
  }, [emblaApi, reviews]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(URL, { cache: "no-cache" });
        const text = await res.text();
        const fixedText = `[${text}]`;

        const data = JSON.parse(fixedText);

        if (!cancelled) setReviews(data);
      } catch (err) {
        console.error("Ошибка загрузки отзывов:", err);
        if (!cancelled) setReviews(fallback);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="section w-[100vw] overflow-visible relative ">
      <div className="container ">
        <h2 className="text-[18px] md:text-3xl font-bold text-white uppercase text-center">
          Отзывы
        </h2>
        <div className="mt-12" ref={emblaRef}>
          <div className="embla__container">
            {reviews.map(({ id, author, text }) => (
              <figure
                key={id}
                className="relative overflow-visible min-w-[100%] md:min-w-[350px] mr-4"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -inset-[8px] -z-10 rounded-[30px] bg-[#95AB7D] blur-[8px] w-[100%] h-[100%] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
                />
                {/* сама карточка */}
                <div className="h-full rounded-[30px] bg-[#D9D9D9] p-5 pb-[10px] md:p-6 md:pb-[14px] ">
                  <blockquote className="text-black text-sm md:text-base leading-[1.35]">
                    {text}
                  </blockquote>
                  <figcaption className="mt-6 text-right font-extrabold text-xl md:text-2xl text-black">
                    {author}
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

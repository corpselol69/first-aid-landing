import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect } from "react";
import { useTestimonialsQuery } from "../services/api";
import "./Testimonials.css";

export function Testimonials() {
  const { data } = useTestimonialsQuery();
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 3000 })]
  );

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.reInit();
  }, [emblaApi, data]);

  const items = data ?? [
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

  return (
    <section className="section">
      <div className="container">
        <h2 className="text-2xl font-semibold text-white">Отзывы</h2>
        <div className="mt-4 embla" ref={emblaRef}>
          <div className="embla__container">
            {items.map(({ id, author, text }) => (
              <figure key={id} className="relative overflow-visible">
                {/* наружное «неоновое» свечение по контуру */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -inset-[8px] -z-10 rounded-[36px] bg-brand/45 blur-[15px]"
                />
                {/* сама карточка */}
                <div className="h-full rounded-[30px] bg-neutral-300/90 p-5 md:p-6 ">
                  <blockquote className="text-black/80 text-base md:text-lg leading-[1.35]">
                    {text}
                  </blockquote>
                  <figcaption className="mt-6 text-right font-extrabold text-2xl md:text-3xl text-black">
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

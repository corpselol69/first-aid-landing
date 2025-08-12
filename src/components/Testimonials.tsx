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

  const items = [
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
    <section className="section w-[100vw] overflow-hidden">
      <div className="container ">
        <h2 className="text-5xl font-bold text-white uppercase text-center">
          Отзывы
        </h2>
        <div className="mt-16" ref={emblaRef}>
          <div className="embla__container gap-6 md:gap-8">
            {items.map(({ id, author, text }) => (
              <figure
                key={id}
                className="relative overflow-visible min-w-[350px]"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -inset-[8px] -z-10 rounded-[30px] bg-[#95AB7D] blur-[8px] w-[100%] h-[100%] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
                />
                {/* сама карточка */}
                <div className="h-full rounded-[30px] bg-[#D9D9D9] p-5 md:p-6 ">
                  <blockquote className="text-black text-base md:text-lg leading-[1.35]">
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

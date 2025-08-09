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
      author: "Иван",
      text: "Отличное приложение — всё понятно и оффлайн!",
    },
    { id: 2, author: "Мария", text: "Помогло в дороге, спасибо за алгоритмы." },
    {
      id: 3,
      author: "Алексей",
      text: "Минималистично и быстро, нашёл всё нужное.",
    },
    { id: 4, author: "Анна", text: "Крутая идея, советую сохранить заранее." },
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        <h2 className="text-2xl font-semibold">Отзывы</h2>
        <div className="mt-4 embla" ref={emblaRef}>
          <div className="embla__container">
            {items.map((t) => (
              <div
                key={t.id}
                className="embla__slide pr-4 sm:basis-1/2 lg:basis-1/3"
              >
                <div className="h-full rounded-xl border bg-paper p-4">
                  <div className="text-sm text-muted">{t.author}</div>
                  <div className="mt-2">{t.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

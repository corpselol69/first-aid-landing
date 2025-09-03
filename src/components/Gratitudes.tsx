import { useEffect, useState } from "react";
import handler from "../api/gratitudes";
import { data } from "framer-motion/client";

const URL = "/api/gratitudes";

const fallback = [
  "tvtacticalmed",
  "militarymaps",
  "olga_budina",
  "russkiysoldatYurich",
  "kaspiyskyberet",
  "nosilki",
  "yozhandcider",
  "divannyi_special",
  "kapotta",
  "bayunmed",
  "buryatiaVZ",
  "Simba_tac",
  "tacmed_stg",
  "mihalichandall",
  "in100gram4",
  "zapiski_rezidenta",
  "upgrade_a_la_rus",
  "tacmed_spb",
  "Radoneg",
  "Our_people_29",
  "elina_sedina",
];

export function Gratitudes() {
  const [names, setNames] = useState<string[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(URL, { cache: "no-cache" });
        const text = await res.text();
        const fixedText = `[${text}]`; // обернули в массив
        const data = JSON.parse(fixedText);
        if (!cancelled && Array.isArray(data)) {
          const parsed = data.map((item) => item.nickname).filter(Boolean); // убираем пустые значения

          setNames(parsed.length > 0 ? parsed : fallback);
        }
      } catch (err) {
        console.error("Ошибка загрузки JSON:", err);
        if (!cancelled) setNames(fallback);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="section">
      <div className="container mt-4 md:mt-0">
        <h2 className="text-[12px] md:text-xl font-display font-light uppercase text-center !leading-[140%]">
          Благодарим за помощь в&nbsp;распространении
        </h2>
        <div className="mt-2 md: flex flex-wrap gap-x-2 gap-y-2 text-[12px]  md:text-xl font-display font-extralight text-center items-center justify-center">
          {names?.map((name) => (
            <a
              key={name}
              href={`https://t.me/${name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-brand"
            >
              @<span className="underline">{name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

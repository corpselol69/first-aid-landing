export function Gratitudes() {
  return (
    <section className="section">
      <div className="container">
        <h2 className=" text-3xl font-display font-bold uppercase text-center">
          Благодарим за помощь в распространении
        </h2>
        <div className="mt-16 flex flex-wrap gap-x-2 gap-y-2 text-3xl font-display font-extralight text-center items-center justify-center">
          {[
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
          ].map((name) => (
            <a
              key={name}
              href={`https://t.me/${name}`}
              className=" transition-colors duration-300 hover:text-brand"
            >
              @<span className="underline">{name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

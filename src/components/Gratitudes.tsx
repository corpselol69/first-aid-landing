export function Gratitudes() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="text-white text-3xl font-display font-bold uppercase text-center">
          Благодарим за помощь в распространении
        </h2>
        <div className="mt-4 grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-white/90 text-xl font-display">
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
            <div key={name} className="text-center">
              @{name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

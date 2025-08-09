const items = [
  { title: 'Аптечка', desc: 'Что должно быть под рукой и как использовать', icon: '🧰' },
  { title: 'Навыки', desc: 'Базовые навыки первой помощи с иллюстрациями', icon: '🫀' },
  { title: 'Алгоритмы', desc: 'Пошаговые действия в критических ситуациях', icon: '🧭' },
]

export function Features() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="text-2xl font-semibold">Возможности</h2>
        <div className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="rounded-xl border bg-white p-5 shadow-sm">
              <div className="text-3xl">{it.icon}</div>
              <div className="mt-3 font-semibold">{it.title}</div>
              <div className="text-muted mt-1 text-sm">{it.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

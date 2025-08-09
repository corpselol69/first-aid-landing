import { useThanksQuery } from '../services/api'

export function ThanksWall() {
  const { data } = useThanksQuery()
  const items = data ?? [
    { id: 1, name: 'Сергей', link: 'https://example.com/1' },
    { id: 2, name: 'Екатерина', link: 'https://example.com/2' },
    { id: 3, name: 'Андрей' },
    { id: 4, name: 'Ольга' },
  ]

  return (
    <section className="section">
      <div className="container">
        <h2 className="text-2xl font-semibold">Стена благодарностей</h2>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {items.map((p) => (
            <a key={p.id} href={p.link ?? '#'} target={p.link ? '_blank' : undefined} rel={p.link ? 'noreferrer' : undefined} className="rounded-lg border bg-white px-3 py-2 hover:bg-paper text-center text-sm">
              {p.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

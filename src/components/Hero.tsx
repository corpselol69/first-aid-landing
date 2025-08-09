import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink">
              Первая помощь
            </h1>
            <p className="mt-4 text-lg text-muted max-w-prose">
              Оффлайн справочник, навыки и алгоритмы оказания первой помощи — всегда под рукой.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="px-4 py-2 rounded-md bg-primary text-white hover:bg-primary-dark transition" href="#" target="_blank" rel="noreferrer">RuStore</a>
              <a className="px-4 py-2 rounded-md bg-primary/10 text-primary hover:bg-primary/20 transition" href="#" target="_blank" rel="noreferrer">APK</a>
              <a className="px-4 py-2 rounded-md bg-primary/10 text-primary hover:bg-primary/20 transition" href="#" target="_blank" rel="noreferrer">Оффлайн iOS</a>
              <a className="px-4 py-2 rounded-md bg-ink text-white hover:bg-ink/90 transition" href="#" target="_blank" rel="noreferrer">Веб-версия</a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="md:justify-self-end">
            <div className="aspect-[4/3] w-full max-w-md bg-paper border border-slate-200 rounded-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

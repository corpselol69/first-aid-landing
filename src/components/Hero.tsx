import { motion } from "framer-motion";

export function Hero() {
  return (
  <section className="section bg-black text-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white drop-shadow" style={{ textShadow: '0 0 2px rgba(0,0,0,0.15)' }}>
              Приложение «Первая помощь»
            </h1>
      <p className="mt-4 text-lg text-white/90 max-w-prose">
              Оказание первой доврачебной помощи в сложных условиях. Алгоритмы, навыки и аптечка — оффлайн.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                className="px-5 py-3 rounded-[14px] bg-brand text-white hover:bg-brand/90 transition shadow"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                RuStore
              </a>
              <a
                className="px-5 py-3 rounded-[14px] bg-black text-brand hover:opacity-90 transition shadow"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                APK — оффлайн версия
              </a>
              <a
                className="px-5 py-3 rounded-[14px] bg-black text-brand hover:opacity-90 transition shadow"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                Оффлайн iOS
              </a>
              <a
                className="px-5 py-3 rounded-[14px] bg-black text-white hover:opacity-90 transition shadow"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                Веб-версия
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="md:justify-self-end"
          >
            <div
              className="aspect-[4/3] w-full max-w-md rounded-3xl shadow-[10px_10px_20px_rgba(0,0,0,0.25)] border border-white/10"
              style={{
                backgroundColor: 'rgba(0,0,0,0.6)',
                backgroundImage: "url('/figma/dbc6d056138b7b1dacc0b82f005a8111d473bcc1.svg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

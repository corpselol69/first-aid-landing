export function UpdateBanner() {
  const base = import.meta.env.BASE_URL;
  const img = `${base}figma/cf3389e40e818afc2078a75217f0963bbc5f089b.png`;
  return (
    <section className="section">
      <div className="container relative">
        <span
          aria-hidden
          className="pointer-events-none absolute -inset-1 -z-10 rounded-[12px] bg-brand/40 blur-[4px]"
        />
        <img src={img} alt="Обновление" className="rounded-xl w-full" />
      </div>
    </section>
  );
}

export function UpdateBanner() {
  const base = import.meta.env.BASE_URL;
  const img = `${base}figma/cf3389e40e818afc2078a75217f0963bbc5f089b.png`;
  return (
    <section className="section">
      <div className="container">
        <img src={img} alt="Обновление" className="rounded-2xl w-full" />
      </div>
    </section>
  );
}

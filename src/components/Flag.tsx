export function Flag() {
  const base = import.meta.env.BASE_URL;
  const flag = `${base}figma/flag.png`;

  return (
    <section className="section">
      <div className="flex items-center justify-center">
        <img src={flag} alt="Flag" className="w-82 h-auto max-w-[82px]" />
      </div>
    </section>
  );
}

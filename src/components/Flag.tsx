export function Flag() {
  const base = import.meta.env.BASE_URL;
  const flag = `${base}figma/flag.png`;

  return (
    <section className="section ">
      <div className="flex items-center justify-center mb-3">
        <img src={flag} alt="Flag" className="w-42 h-auto max-w-[42px]" />
      </div>
    </section>
  );
}

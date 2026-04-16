function SectionTitle({ eyebrow, title, description, light = false, align = "left" }) {
  const alignClass = align === "center" ? "mx-auto text-center" : "";

  return (
    <header className={`max-w-3xl ${alignClass} reveal`}>
      <p
        className={`text-[10px] uppercase tracking-[0.22em] sm:text-[11px] sm:tracking-[0.26em] ${
          light ? "text-gold-400" : "text-wood-600"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`text-balance mt-4 text-[2.25rem] leading-[1.03] sm:text-[2.6rem] md:text-[3.2rem] ${
          light ? "text-cream-50" : "text-wood-900"
        } brand-serif`}
      >
        {title}
      </h2>
      <p className={`mt-5 text-[15px] leading-relaxed sm:mt-6 sm:text-base ${light ? "text-cream-100/82" : "text-wood-700/90"}`}>
        {description}
      </p>
    </header>
  );
}

export default SectionTitle;

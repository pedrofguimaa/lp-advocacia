function PositioningSection() {
  return (
    <section className="section-shell section-flow flow-dark bg-gradient-to-br from-[#1b130d] via-[#24180f] to-[#120d09] py-24">
      <div className="section-bg-layer section-bg-dark">
        <img
          src="https://images.unsplash.com/photo-1495669151401-41e22ca63853?auto=format&fit=crop&w=2000&q=80"
          alt=""
          aria-hidden="true"
          loading="lazy"
        />
      </div>

      <div className="section-container relative z-10">
        <div className="section-anchor-line mx-auto" />
        <article className="reveal premium-panel rounded-sm border border-cream-100/14 px-8 py-12 text-center shadow-premium md:px-12">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-400">Posicionamento institucional</p>
          <h2 className="brand-serif mx-auto mt-5 max-w-4xl text-4xl leading-[1.02] text-cream-50 md:text-[3.4rem]">
            Advocacia de confianca para quem busca estrategia, discricao e alta performance juridica.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-cream-100/82">
            Assumimos cada caso com responsabilidade integral, leitura tecnica aprofundada e foco em
            resultado sustentavel para pessoas, familias e empresas.
          </p>
        </article>
      </div>
    </section>
  );
}

export default PositioningSection;

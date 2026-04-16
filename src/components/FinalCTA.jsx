import { ArrowUpRight } from "lucide-react";

function FinalCTA() {
  return (
    <section className="section-shell section-flow flow-dark bg-[#17120e] py-20 sm:py-24 md:py-28">
      <div className="section-container relative z-10">
        <div className="section-anchor-line mx-auto" />
        <div className="reveal premium-panel rounded-sm border border-cream-100/15 px-5 py-9 text-center shadow-premium sm:px-8 sm:py-12 md:px-12 md:py-14">
          <p className="text-[10px] uppercase tracking-[0.24em] text-gold-400 sm:text-xs sm:tracking-[0.28em]">
            Atendimento jurídico
          </p>
          <h2 className="brand-serif mx-auto mt-4 max-w-3xl text-[2.2rem] leading-[1.02] text-cream-50 sm:text-4xl md:text-6xl">
            Agende um atendimento e tenha orientação jurídica com segurança.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] text-cream-100/84 sm:text-base">
            Suporte ágil para pessoas físicas e empresas em decisões relevantes.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-9 sm:gap-4">
            <a
              href="#contato"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary group inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold-400/55 bg-gold-500 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-wood-950 transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto sm:px-8 sm:text-sm"
            >
              Agendar um atendimento
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;

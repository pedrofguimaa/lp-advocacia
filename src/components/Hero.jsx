import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import bgmain from "../../assets/bgs/bgmain.mp4";

const quickPoints = [
  "Atendimento para empresas e pessoas físicas",
  "Defesa técnica em processos e orientação preventiva",
  "Retorno ágil com comunicação clara e objetiva",
];

function Hero() {
  return (
    <section
      id="hero"
      className="hero-cinematic relative isolate flex min-h-[100svh] items-center overflow-hidden py-24 sm:py-20 md:min-h-[102svh] md:py-14 lg:min-h-[108svh]"
    >
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-image h-full w-full object-cover opacity-28"
        >
          <source src={bgmain} type="video/mp4" />
        </video>
        <div className="hero-grain absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0806]/96 via-[#1B130D]/80 to-[#2E1F14]/42" />
      </div>

      <div className="section-container relative z-10 w-full">
        <div className="hero-edge-line mb-6 sm:mb-7" />
        <div className="grid items-center gap-7 md:gap-8 xl:grid-cols-[1.1fr,0.9fr]">
          <div className="reveal is-visible max-w-[660px]">
            <p className="text-[10px] uppercase tracking-[0.28em] text-gold-400 sm:text-xs sm:tracking-[0.32em]">
              Assessoria jurídica estratégica
            </p>
            <h1 className="text-balance mt-4 text-[2.55rem] leading-[0.95] text-cream-50 sm:text-5xl md:text-6xl">
              Segurança jurídica com estratégia e atuação de excelência
            </h1>
            <p className="mt-5 max-w-xl text-[15px] leading-[1.75] text-cream-100/84 sm:text-base md:text-lg">
              Atuação em demandas cíveis, trabalhistas, empresariais e familiares, com condução técnica,
              clareza no atendimento e foco no resultado.
            </p>

            <div className="mt-7 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
              <a
                href="#contato"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-primary group inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold-400/55 bg-gold-500 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-wood-950 transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto sm:px-7 sm:text-sm"
              >
                Agendar atendimento
                <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          <aside className="reveal is-visible premium-panel rounded-sm border border-cream-100/14 p-5 shadow-premium sm:p-6 md:p-7">
            <p className="text-[10px] uppercase tracking-[0.22em] text-gold-400 sm:text-xs sm:tracking-[0.24em]">
              Como atuamos
            </p>
            <div className="gold-line mt-4" />
            <div className="mt-5 space-y-2.5 sm:mt-6 sm:space-y-3">
              {quickPoints.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2.5 rounded-sm border border-cream-100/12 bg-wood-950/36 px-3 py-2.5 sm:gap-3 sm:px-4 sm:py-3"
                >
                  <CheckCircle2 size={16} className="mt-0.5 text-gold-400" />
                  <p className="text-[13px] leading-relaxed text-cream-100/88 sm:text-sm">{item}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Hero;

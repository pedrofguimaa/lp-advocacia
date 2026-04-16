import { ArrowRight, ClipboardList, Compass, Route, ShieldCheck } from "lucide-react";
import SectionTitle from "./SectionTitle";
import bg4 from "../../assets/bgs/bg4.jpg";

const steps = [
  {
    number: "01",
    title: "Diagnóstico do caso",
    text: "Compreendemos o contexto da demanda e alinhamos os objetivos jurídicos com clareza.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "Análise técnica e de riscos",
    text: "Avaliamos fundamentos, cenários e impactos para orientar a melhor tomada de decisão.",
    icon: Compass,
  },
  {
    number: "03",
    title: "Estratégia de atuação",
    text: "Estruturamos um plano jurídico personalizado, com prioridades, prazos e direcionamento.",
    icon: Route,
  },
  {
    number: "04",
    title: "Condução e acompanhamento",
    text: "Executamos cada etapa com comunicação transparente, atualizações contínuas e foco em resultado.",
    icon: ShieldCheck,
  },
];

function ProcessSection() {
  return (
    <section id="processo" className="section-shell section-flow flow-light no-top-fade bg-cream-50 py-20 sm:py-24 md:py-28 text-wood-900">
      <div className="section-bg-layer section-bg-light">
        <img src={bg4} alt="" aria-hidden="true" loading="lazy" />
      </div>

      <div className="section-container relative z-10">
        <div className="section-anchor-line" />
        <SectionTitle
          eyebrow="Processo de atendimento"
          title="Como conduzimos seu atendimento"
          description="Um processo organizado, transparente e estratégico para cada decisão jurídica."
        />

        <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <article
                key={step.number}
                className="process-card premium-card reveal group flex h-full flex-col rounded-sm border border-wood-700/15 bg-[#FBF6ED] px-4 py-5 shadow-soft sm:px-5 sm:py-6"
              >
                <div className="flex items-center justify-between">
                  <p className="text-xs tracking-[0.2em] text-wood-600">ETAPA {step.number}</p>
                  <Icon size={16} className="process-icon text-wood-700" />
                </div>
                <h3 className="brand-serif mt-4 text-[2rem] leading-tight sm:text-[2.2rem] md:text-[2.35rem] lg:text-3xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-[13px] leading-relaxed text-wood-700/90 sm:text-sm">{step.text}</p>
                {idx < steps.length - 1 && (
                  <div className="mt-auto pt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-wood-500/85">
                    Próxima etapa
                    <ArrowRight size={13} />
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;

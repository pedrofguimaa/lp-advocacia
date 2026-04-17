import { BookUser, Clock3, Eye, MessageSquareText, ScanSearch } from "lucide-react";
import SectionTitle from "./SectionTitle";
import bg3 from "../../assets/bgs/bg3.jpg";

const features = [
  {
    title: "Atendimento direto",
    text: "Você fala com advogado e recebe orientação objetiva.",
    icon: BookUser,
  },
  {
    title: "Comunicação clara",
    text: "Explicamos cada etapa com linguagem simples e precisa.",
    icon: Eye,
  },
  {
    title: "Agilidade no retorno",
    text: "Respostas rápidas para decisões com mais segurança.",
    icon: Clock3,
  },
  { title: "Atuação estratégica", text: "Planejamento jurídico orientado a resultado.", icon: ScanSearch },
  { title: "Consultoria personalizada", text: "Apoio jurídico sob medida para cada realidade.", icon: MessageSquareText },
  {
    title: "Segurança jurídica",
    text: "Condução técnica com prevenção de riscos e previsibilidade.",
    icon: Eye,
  },
];

function Differentials() {
  return (
    <section id="diferenciais" className="section-shell section-flow flow-dark bg-[#15100c] py-24 sm:py-24 md:py-28">
      <div className="section-bg-layer section-bg-dark">
        <img src={bg3} alt="" aria-hidden="true" loading="lazy" />
      </div>

      <div className="section-container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="section-anchor-line mx-auto" />
          <SectionTitle
            eyebrow="Diferenciais"
            title="Por que escolher nosso escritório"
            description="Atendimento próximo, atuação técnica e compromisso com o seu resultado."
            light
            align="center"
          />
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="differential-card premium-card reveal group rounded-sm border border-cream-100/14 bg-gradient-to-br from-[#20160f]/92 to-[#130e0a]/92 px-5 py-5 sm:px-6 sm:py-6"
              >
                <div className="mb-4 sm:mb-5">
                  <div className="differential-icon-wrap">
                    <div className="differential-icon-core">
                      <Icon size={18} strokeWidth={1.75} />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-[1.2rem] font-semibold leading-tight tracking-[0.01em] text-cream-50 sm:text-[1.3rem] lg:text-[1.35rem]">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-[1.72] text-cream-100/76 sm:text-sm sm:leading-[1.75]">
                    {feature.text}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Differentials;

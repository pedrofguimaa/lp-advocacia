import SectionTitle from "./SectionTitle";
import advogada1 from "../../assets/profissionais/advogada1.jpg";
import advogado2 from "../../assets/profissionais/advogado2.jpg";
import advogada3 from "../../assets/profissionais/advogada3.jpg";
import bg1 from "../../assets/bgs/bg1.jpg";

const professionals = [
  {
    name: "Dra. Mariana Almeida",
    practice: "Sócia | Direito Civil e de Família",
    description: "Atuação em conflitos patrimoniais e familiares, com condução técnica e foco em segurança jurídica.",
    image: advogada1,
    position: "50% 24%",
  },
  {
    name: "Dr. Rafael Ferraz",
    practice: "Sócio | Direito Trabalhista e Empresarial",
    description: "Estratégia contenciosa e consultiva para empresas e profissionais em demandas de alta relevância.",
    image: advogado2,
    position: "50% 20%",
  },
  {
    name: "Dra. Camila Nogueira",
    practice: "Advogada | Consultoria Jurídica",
    description: "Consultoria preventiva para decisões jurídicas com clareza, previsibilidade e consistência técnica.",
    image: advogada3,
    position: "50% 24%",
  },
];

function ProfessionalsSection() {
  return (
    <section className="section-shell section-flow flow-light no-bottom-fade bg-cream-50 py-24 sm:py-24 md:py-28 text-wood-900">
      <div className="section-bg-layer section-bg-light professionals-bg">
        <img src={bg1} alt="" aria-hidden="true" loading="lazy" />
      </div>

      <div className="section-container relative z-10">
        <div className="section-anchor-line" />
        <SectionTitle
          eyebrow="Profissionais do escritório"
          title="Profissionais à frente do atendimento"
          description="Corpo jurídico com atuação técnica, comunicação objetiva e acompanhamento estratégico em cada etapa."
        />

        <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {professionals.map((person) => (
            <article
              key={person.name}
              className="reveal professional-card premium-card overflow-hidden rounded-sm border border-wood-700/14 bg-[#f8f2e8] shadow-soft"
            >
              <div className="h-44 overflow-hidden sm:h-52 md:h-60">
                <img
                  src={person.image}
                  alt={person.name}
                  className="professional-photo h-full w-full object-cover"
                  style={{ objectPosition: person.position }}
                />
              </div>

              <div className="professional-card-body px-6 py-6">
                <p className="professional-role text-[11px] uppercase tracking-[0.18em] text-wood-600">{person.practice}</p>
                <h3 className="professional-name brand-serif mt-2.5 text-[1.9rem] leading-[0.98] text-wood-900 sm:mt-3 sm:text-[2.1rem] lg:text-[2.2rem]">
                  {person.name}
                </h3>
                <div className="professional-divider mt-4" />
                <p className="professional-description mt-3 text-sm leading-[1.72] text-wood-700/90 sm:mt-4 sm:text-[15px] sm:leading-[1.8]">
                  {person.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProfessionalsSection;

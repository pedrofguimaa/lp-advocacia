import {
  ArrowUpRight,
  BriefcaseBusiness,
  FileText,
  HeartHandshake,
  Landmark,
  Shield,
  Users,
} from "lucide-react";
import SectionTitle from "./SectionTitle";
import bg2 from "../../assets/bgs/bg2.jpg";
import direitoPrevidenciarioImg from "../../assets/direitoprevidenciario.jpg";
import direitoTrabalhistaImg from "../../assets/direitotrabalhista.jpg";

const areas = [
  {
    title: "Direito Civil",
    description: "Contratos, indenizações e defesa de direitos patrimoniais.",
    icon: FileText,
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Direito Trabalhista",
    description: "Defesa em reclamações trabalhistas e acordos estratégicos.",
    icon: BriefcaseBusiness,
    image: direitoTrabalhistaImg,
  },
  {
    title: "Direito Previdenciário",
    description: "Apoio em benefícios, revisões e aposentadoria.",
    icon: Shield,
    image: direitoPrevidenciarioImg,
  },
  {
    title: "Direito Empresarial",
    description: "Suporte jurídico para empresas, gestores e sócios.",
    icon: Landmark,
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Direito de Família",
    description: "Divórcio, guarda, pensão e organização sucessória.",
    icon: HeartHandshake,
    image:
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Consultoria Jurídica",
    description: "Orientação para decisões com segurança jurídica.",
    icon: Users,
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80",
  },
];

function PracticeAreas() {
  return (
    <section id="servicos" className="section-shell section-flow flow-light bg-[#efe4d4] py-20 sm:py-24 md:py-28 text-wood-900">
      <div className="section-bg-layer section-bg-light services-bg">
        <img src={bg2} alt="" aria-hidden="true" loading="lazy" />
      </div>

      <div className="section-container relative z-10">
        <div className="section-anchor-line" />
        <SectionTitle
          eyebrow="Serviços"
          title="Atuação jurídica em áreas essenciais"
          description="Entenda, de forma objetiva, como podemos apoiar o seu caso."
        />

        <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {areas.map((area) => {
            const Icon = area.icon;
            return (
              <a
                key={area.title}
                href="https://wa.me/5548984400102?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20atendimento.%20Poderia%20me%20informar%20como%20funciona%20e%20os%20hor%C3%A1rios%20dispon%C3%ADveis%3F"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Agendar atendimento para ${area.title}`}
                className="service-card premium-card reveal group flex h-full flex-col rounded-sm border border-wood-700/15 bg-[#f8f2e8] p-3.5 shadow-soft sm:p-4"
              >
                <div className="service-media-wrap relative overflow-hidden rounded-sm">
                  <img src={area.image} alt="" aria-hidden="true" className="service-media h-36 w-full object-cover sm:h-40" />
                  <div className="service-media-overlay absolute inset-0" />
                  <div className="absolute right-3 top-3">
                    <span className="service-icon-badge">
                      <span className="service-icon-core">
                        <Icon
                          size={18}
                          strokeWidth={1.8}
                          className="text-wood-700 transition-colors duration-300 group-hover:text-gold-500"
                        />
                      </span>
                    </span>
                  </div>
                </div>

                <div className="mt-5 flex h-full flex-col sm:mt-6">
                  <p className="service-kicker text-[11px] uppercase tracking-[0.18em] text-wood-600/80">
                    Área de atuação
                  </p>
                  <h3 className="brand-serif text-[1.68rem] leading-tight text-wood-900 sm:text-[1.85rem] lg:text-[1.95rem]">
                    {area.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[13px] leading-relaxed text-wood-700/90 sm:text-sm">{area.description}</p>

                  <div className="service-card-cta mt-4 inline-flex w-fit items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-wood-700/90 transition-colors duration-300 group-hover:text-gold-600 sm:mt-5 sm:text-xs sm:tracking-[0.14em]">
                    Agendar atendimento
                    <ArrowUpRight size={14} className="service-card-cta-icon transition-transform duration-300" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PracticeAreas;

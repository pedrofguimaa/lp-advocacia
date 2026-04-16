import { Building2, Landmark, Medal, UserRoundCheck } from "lucide-react";
import SectionTitle from "./SectionTitle";

const pillars = [
  {
    icon: Landmark,
    title: "Rigor tecnico",
    text: "Analise juridica aprofundada e estrategia sustentada por experiencia pratica.",
  },
  {
    icon: UserRoundCheck,
    title: "Atendimento executivo",
    text: "Contato proximo, linguagem clara e acompanhamento continuo da demanda.",
  },
  {
    icon: Building2,
    title: "Visao de negocio",
    text: "Suporte consultivo para prevenir passivos e fortalecer decisoes empresariais.",
  },
  {
    icon: Medal,
    title: "Compromisso com resultado",
    text: "Plano de acao objetivo para proteger patrimonio, reputacao e direitos.",
  },
];

function AboutSection() {
  return (
    <section id="sobre" className="section-shell section-flow flow-light bg-cream-50 py-28 text-wood-900">
      <div className="section-bg-layer section-bg-light">
        <img
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2000&q=80"
          alt=""
          aria-hidden="true"
          loading="lazy"
        />
      </div>

      <div className="section-container relative z-10 grid gap-12 xl:grid-cols-[1.1fr,0.9fr]">
        <div>
          <div className="section-anchor-line" />
          <SectionTitle
            eyebrow="Sobre o escritorio"
            title="Tradicao juridica com leitura estrategica contemporanea"
            description="Atuamos com postura institucional, tecnica apurada e relacionamento profissional proximo. Nossa estrutura combina experiencia contenciosa e consultiva para oferecer seguranca juridica com conducoes claras e previsiveis."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article
                  key={pillar.title}
                  className="reveal rounded-sm border border-wood-700/12 bg-[#FCF7EE] px-5 py-5 shadow-soft transition-transform duration-300 hover:-translate-y-1"
                >
                  <Icon size={18} className="text-wood-700" />
                  <h3 className="mt-4 text-2xl brand-serif">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-wood-700/90">{pillar.text}</p>
                </article>
              );
            })}
          </div>
        </div>

        <aside className="reveal premium-panel rounded-sm border border-wood-700/15 p-8 text-cream-50 shadow-premium">
          <p className="text-xs uppercase tracking-[0.25em] text-gold-400">Posicionamento do escritorio</p>
          <h3 className="brand-serif mt-4 text-4xl leading-tight">
            Defesa juridica de alto nivel para clientes que exigem excelencia.
          </h3>
          <p className="mt-5 text-sm leading-relaxed text-cream-100/84">
            Nossa atuacao e orientada por metodo, discricao e estrategia. Cada caso recebe conducao
            tecnica personalizada, com foco em prevencao de riscos e resolucao qualificada de conflitos.
          </p>
          <div className="soft-divider mt-7" />
          <div className="mt-6 space-y-3 text-sm text-cream-100/88">
            <p>Atendimento em Sao Paulo e demais capitais</p>
            <p>Suporte consultivo para pessoas fisicas e juridicas</p>
            <p>Equipe preparada para demandas complexas e sensiveis</p>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default AboutSection;

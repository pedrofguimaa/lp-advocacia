import { BadgeCheck, Building2, Globe2, Scale, ShieldCheck } from "lucide-react";
import SectionTitle from "./SectionTitle";

const indicators = [
  { value: "+10", label: "Anos de experiencia" },
  { value: "+1.200", label: "Clientes atendidos" },
  { value: "97%", label: "Indice de satisfacao" },
  { value: "Nacional", label: "Atendimento consultivo" },
];

const seals = [
  { label: "OAB regular", icon: Scale },
  { label: "Atendimento premium", icon: BadgeCheck },
  { label: "Confianca e sigilo", icon: ShieldCheck },
  { label: "Suporte empresarial", icon: Building2 },
  { label: "Atendimento nacional", icon: Globe2 },
];

const testimonials = [
  {
    quote:
      "Atendimento muito tecnico e altamente organizado. Tivemos visibilidade de cada etapa e conducao exemplar.",
    author: "Cliente empresarial",
  },
  {
    quote:
      "Equipe clara, objetiva e acolhedora. Sentimos confianca desde o primeiro contato.",
    author: "Cliente pessoa fisica",
  },
];

function CredibilitySection() {
  return (
    <section id="credibilidade" className="section-shell section-flow flow-light bg-[#efe4d4] py-28 text-wood-900">
      <div className="section-container relative z-10">
        <div className="section-anchor-line" />
        <SectionTitle
          eyebrow="Credibilidade"
          title="Autoridade juridica sustentada por experiencia, metodo e consistencia"
          description="Sinais institucionais de confianca para reforcar a seguranca de quem escolhe nosso escritorio."
        />

        <div className="reveal mt-10 grid gap-3 rounded-sm border border-wood-700/15 bg-[#f8f2e8] p-5 md:grid-cols-5">
          {seals.map((seal) => {
            const Icon = seal.icon;
            return (
              <div key={seal.label} className="flex items-center gap-3 border-b border-wood-700/10 pb-3 md:border-b-0 md:pb-0">
                <Icon size={16} className="text-wood-700" />
                <p className="text-sm text-wood-800/90">{seal.label}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[0.9fr,1.1fr]">
          <div className="reveal rounded-sm border border-wood-700/15 bg-[#f8f2e8] p-7 shadow-soft">
            <p className="text-xs uppercase tracking-[0.2em] text-wood-600">Indicadores institucionais</p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {indicators.map((item) => (
                <div key={item.label}>
                  <p className="brand-serif text-5xl leading-none text-wood-900">{item.value}</p>
                  <p className="mt-1 text-sm text-wood-700/90">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {testimonials.map((entry) => (
              <blockquote
                key={entry.author}
                className="reveal rounded-sm border border-wood-700/15 bg-[#fbf6ed] p-7 shadow-soft"
              >
                <p className="text-lg leading-relaxed text-wood-800">"{entry.quote}"</p>
                <footer className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-wood-600">
                  {entry.author}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CredibilitySection;

import { Mail, MapPin, Phone } from "lucide-react";

function Footer() {
  return (
    <footer id="contato" className="bg-graphite-900 py-14 sm:py-16 md:py-20 text-cream-100/82">
      <div className="section-container grid gap-10 border-t border-cream-100/10 pt-10 sm:pt-12 md:gap-12 lg:grid-cols-[1.1fr,0.9fr,0.8fr] lg:gap-14">
        <div>
          <p className="brand-serif text-[2.2rem] text-cream-50 sm:text-4xl">Almeida & Ferraz</p>
          <p className="mt-1 text-xs uppercase tracking-[0.25em] text-gold-400">Advocacia</p>
          <p className="mt-4 max-w-sm text-[13px] leading-relaxed sm:text-sm">
            Atendimento jurídico direto, claro e orientado ao melhor resultado para o cliente.
          </p>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.24em] text-gold-400">Contato</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Phone size={15} className="mt-0.5 text-gold-400" />
              <span>(48) 98440-0102</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail size={15} className="mt-0.5 text-gold-400" />
              <span>contato@almeidaferraz.adv.br</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={15} className="mt-0.5 text-gold-400" />
              <span>Av. Paulista, 1200 - São Paulo/SP</span>
            </li>
            <li>OAB: 0000/SP</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.24em] text-gold-400">Navegação</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="#servicos" className="transition-colors duration-300 hover:text-gold-400">
                Serviços
              </a>
            </li>
            <li>
              <a href="#diferenciais" className="transition-colors duration-300 hover:text-gold-400">
                Diferenciais
              </a>
            </li>
            <li>
              <a href="#processo" className="transition-colors duration-300 hover:text-gold-400">
                Processo de atendimento
              </a>
            </li>
            <li>
              <a href="#contato" className="transition-colors duration-300 hover:text-gold-400">
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

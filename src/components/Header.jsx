import { Menu, PhoneCall, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Serviços", href: "#servicos", id: "servicos" },
  { label: "Diferenciais", href: "#diferenciais", id: "diferenciais" },
  { label: "Processo", href: "#processo", id: "processo" },
  { label: "Contato", href: "#contato", id: "contato" },
];

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("servicos");

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (!sections.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-46% 0px -46% 0px",
        threshold: [0.2, 0.4, 0.6, 0.8],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className={`section-container header-wrap ${isScrolled ? "is-scrolled" : ""}`}>
        <div className={`glass-nav ${isScrolled ? "is-scrolled" : ""} flex items-center justify-between rounded-sm px-4 py-3 sm:px-5 sm:py-4 backdrop-blur-xl`}>
          <a
            href="#"
            className="brand-serif whitespace-nowrap text-[1.45rem] leading-none text-cream-50 sm:text-[1.75rem] md:text-[2rem]"
            onClick={() => setMobileOpen(false)}
          >
            Almeida & Ferraz
            <span className="ml-2 hidden text-[10px] tracking-[0.32em] text-gold-400 sm:inline">ADVOCACIA</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium tracking-[0.06em] text-cream-100/88 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link transition-colors duration-300 hover:text-gold-400 ${activeSection === link.id ? "is-active" : ""}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/5548984400102?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20atendimento.%20Poderia%20me%20informar%20como%20funciona%20e%20os%20hor%C3%A1rios%20dispon%C3%ADveis%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-nav hidden items-center gap-2 rounded-full border border-gold-400/45 bg-gold-500 px-5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-wood-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-400 lg:inline-flex"
            >
              <PhoneCall size={14} />
              Consultar
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={mobileOpen}
              className="mobile-menu-btn inline-flex items-center justify-center rounded-full border border-cream-100/20 p-2 text-cream-100 transition-colors duration-300 hover:border-gold-400/55 hover:text-gold-300 lg:hidden"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        <div className={`mobile-nav ${mobileOpen ? "is-open" : ""} lg:hidden`}>
          <nav className="mobile-nav-panel mt-2 rounded-sm border border-cream-100/14 bg-[#1A130D]/92 p-4 backdrop-blur-xl">
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`mobile-nav-link block rounded-sm px-3 py-2 text-sm font-medium tracking-[0.05em] transition-colors duration-300 ${
                      activeSection === link.id ? "is-active" : ""
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/5548984400102?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20atendimento.%20Poderia%20me%20informar%20como%20funciona%20e%20os%20hor%C3%A1rios%20dispon%C3%ADveis%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-nav mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold-400/45 bg-gold-500 px-5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-wood-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-400"
            >
              <PhoneCall size={14} />
              Consultar
            </a>
          </nav>
        </div>
        <button
          type="button"
          aria-label="Fechar menu"
          onClick={() => setMobileOpen(false)}
          className={`mobile-backdrop ${mobileOpen ? "is-open" : ""} lg:hidden`}
        />
      </div>
    </header>
  );
}

export default Header;

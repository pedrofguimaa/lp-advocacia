import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PracticeAreas from "./components/PracticeAreas";
import ProfessionalsSection from "./components/ProfessionalsSection";
import Differentials from "./components/Differentials";
import ProcessSection from "./components/ProcessSection";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    document.documentElement.classList.add("has-reveal-init");
    const elements = document.querySelectorAll(".reveal");

    if (!elements.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -6% 0px" }
    );

    elements.forEach((element, index) => {
      const delay = Math.min((index % 6) * 70, 350);
      element.style.setProperty("--reveal-delay", `${delay}ms`);
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("has-reveal-init");
    };
  }, []);

  return (
    <div>
      <Header />
      <main>
        <Hero />
        <PracticeAreas />
        <Differentials />
        <ProfessionalsSection />
        <ProcessSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import About from "./components/about";
import Opinion from "./components/opinion";
import Specialty from "./components/specialty";
import Contact from "./components/contact";
import Header from "./components/header";
import Biography from "./components/biography";
import FloatingWhatsapp from "./components/FloatingWhatsapp";
import ScrollToTop from "./components/ScrollToTop";
import WhyTherapy from "./components/WhyTherapy";
import Faq from "./components/Faq";

export default function Home() {
  return (
    <main>
      <header id="home">
        <Header />
      </header>

      <section id="about">
        <About />
      </section>
      
      <section id="why-therapy">
        <WhyTherapy />
      </section>
      
      <section id="biografy">
        <Biography />
      </section>

      <section id="opinion">
        <Opinion />
      </section>

      <section id="specialty">
        <Specialty />
      </section>

      <section id="faq">
        <Faq />
      </section>

      <section id="contact">
        <Contact />
      </section>
      
      <ScrollToTop />
      <FloatingWhatsapp />

      <footer>
        <p>&copy; 2025 - Lenir Mendes Rodrigues</p>
      </footer>
    </main>
  );
}

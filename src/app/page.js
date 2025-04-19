import About from "./components/about";
import Opinion from "./components/opinion";
import Specialty from "./components/specialty";
import Contact from "./components/contact";
import Header from "./components/header";

export default function Home() {
  return (
    <main>
      <header id="home">
        <Header />
      </header>

      <section id="about">
        <About />
      </section>

      <section id="opinion">
        <Opinion />
      </section>

      <section id="specialty">
        <Specialty />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <footer>
        <p>&copy; 2025 -Psicóloga</p>
      </footer>
    </main>
  );
}

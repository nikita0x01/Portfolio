import { useEffect } from "react"
import Navbar from "./components/Navbar"
import CodeBackground from "./components/CodeBackground"
import Footer from "./components/Footer"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Projects from "./sections/Projects"
import Skills from "./sections/Skills"

import Contact from "./sections/Connect"
import Experience from "./sections/Experience";
import Certifications from "./sections/Certifications";


export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="relative min-h-screen">
      <CodeBackground />
      <Navbar />
      <main>
  <section id="home" className="section section-padding">
    <Hero />
  </section>

  <section id="about" className="section section-padding">
    <About />
  </section>

  <section id="skills" className="section section-padding">
    <Skills />
  </section>

  <section id="experience" className="section section-padding">
    <Experience />
  </section>

  <section id="projects" className="section section-padding">
    <Projects />
  </section>

  <section id="certifications" className="section section-padding">
    <Certifications />
  </section>

  <section id="contact" className="section section-padding">
    <Contact />
  </section>
</main>

      <Footer />
    </div>
  )
}
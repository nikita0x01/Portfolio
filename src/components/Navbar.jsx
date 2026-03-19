import { useEffect, useState } from "react"
import { FiGithub, FiLinkedin } from "react-icons/fi"
import { SITE_CONFIG } from "../config"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? "backdrop-blur-md bg-bg/80 border-b border-white/10" : "bg-gradient-to-b from-bg/80 via-bg/40 to-transparent"
      }`}
    >
      <nav className="section py-4 flex items-center justify-between">
        <a href="#home" className="text-white font-semibold">
          {SITE_CONFIG.name || "Portfolio"}
        </a>
        <div className="hidden sm:flex items-center gap-6">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#certifications" className="nav-link">Certifications</a>
          <a href="#experience" className="nav-link">Education</a>
          <a href="#contact" className="nav-link">Contact</a>
          {SITE_CONFIG.githubUsername && (
            <a
              href={`https://github.com/${SITE_CONFIG.githubUsername}`}
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <FiGithub size={20} />
            </a>
          )}
          {SITE_CONFIG.linkedinUrl && (
            <a
              href={SITE_CONFIG.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <FiLinkedin size={20} />
            </a>
          )}
        </div>
      </nav>
    </header>
  )
}
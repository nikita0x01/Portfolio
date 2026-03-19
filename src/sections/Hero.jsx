import { motion } from "framer-motion"
import { FiGithub, FiArrowRight } from "react-icons/fi"
import { SITE_CONFIG } from "../config"
import mypic from "../assets/mypic.jpg";


const HIGHLIGHT_STATEMENTS = [
  "Always learning and exploring new technologies",
  "Enjoys turning ideas into real, usable products",
  "Extrovert who loves collaborating and building with people",
  "Focused on writing clean, maintainable code",
]

export default function Hero() {
  return (
    <div className="grid md:grid-cols-2 gap-10 items-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <p className="text-accent">Hey, I&apos;m</p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          {SITE_CONFIG.name},  Full-Stack Developer
        </h1>
        <p className="text-gray-300 max-w-xl">
          I develop complete, end-to-end web applications by working across both the frontend and backend. I build dynamic interfaces using React and Tailwind CSS, integrate modern JavaScript and APIs, and design backend services that transform ideas into fast, scalable, and reliable digital products.
        </p>
        <p className="text-gray-300 max-w-xl">
          I&apos;m an extrovert who loves connecting with people, sharing ideas, and building more by
          collaborating with others.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a href="#projects" className="btn btn-primary">
            View Projects <FiArrowRight />
          </a>
          <a
            href={`https://github.com/${SITE_CONFIG.githubUsername}`}
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            <FiGithub /> GitHub
          </a>
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          {HIGHLIGHT_STATEMENTS.map(item => (
            <div
              key={item}
              className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1 text-xs text-gray-200"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-accent" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
        className="relative"
      >
        <div className="absolute -inset-4 rounded-3xl bg-accent/10 blur-2xl" />
        {/* Uses the existing image at project root */}
        <img src={mypic} alt="Profile" className="relative card w-full aspect-square object-cover rounded-3xl" />
      </motion.div>
    </div>
  )
}
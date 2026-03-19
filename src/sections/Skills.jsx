import { motion } from "framer-motion"

const SKILL_CATEGORIES = [
  {
    title: "Frontend",
    color: "from-pink-500/20 to-pink-500/5",
    pills: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "JavaScript",
      "HTML5",
      "WebRTC",
    ],
  },
  {
    title: "Backend",
    color: "from-emerald-500/20 to-emerald-500/5",
    pills: [
      "Node.js",
      "Express",
      "REST APIs",
      "Kafka",
      "WebSockets",
      "Python"
    ],
  },
  {
    title: "Databases",
    color: "from-amber-500/20 to-amber-500/5",
    pills: [
      "MongoDB",
      "MongoDB Atlas",
      "PostgreSQL",
      "Firebase",
      "Redis"
    ],
  },
  {
    title: "DevOps & Tools",
    color: "from-sky-500/20 to-sky-500/5",
    pills: [
      "Git",
      "GitHub",
      "CI/CD",
      "Linux",
      "AWS",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    title: "AI & Emerging Tech",
    color: "from-violet-500/20 to-violet-500/5",
    pills: [
      "ChatGPT",
      "Prompt Engineering",
      "AI Integration",
      "OpenAI API",
    ],
  },
  {
    title: "Architecture & Patterns",
    color: "from-indigo-500/20 to-indigo-500/5",
    pills: [
      "Reusable Components",
      "Clean Code",
      "Responsive Design",
      "State Management",
      "Code Optimization",
    ],
  },
]

export default function Skills() {
  return (
    <div>
      <motion.h2
        className="text-3xl md:text-4xl font-semibold mb-4"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>

      <p className="text-gray-300 mb-10 max-w-2xl">
        A snapshot of the skills I use as a Full-Stack Developer , from frontend engineering and
        backend services to databases, DevOps, AI, and architecture.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {SKILL_CATEGORIES.map((group, idx) => (
          <motion.div
            key={group.title}
            className="card p-5 relative overflow-hidden"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.06 }}
          >
            <div
              className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${group.color} opacity-80`}
            />
            <div className="relative">
              <h3 className="text-lg font-semibold mb-3 text-white">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.pills.map((pill) => (
                  <span
                    key={pill}
                    className="text-xs md:text-[0.8rem] rounded-full border border-white/10 bg-black/20 px-3 py-1 text-gray-100 shadow-soft/40"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

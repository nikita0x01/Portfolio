import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { FiExternalLink, FiStar } from "react-icons/fi"
import { SITE_CONFIG } from "../config"

export default function Projects() {
  const [repos, setRepos] = useState([])

  // 👉 Only show your chosen projects
  useEffect(() => {
    const fixedRepos = [
      {
        id: 1,
        name: "MicroGit",
        description: "Git-like version control system for managing code repositories",
        stargazers_count: 57,
        language: "MERN Stack",
        updated_at: "2025-12-25",
        html_url: "https://github.com/nikita0x01/MicroGit",
        image_url: "https://images.unsplash.com/photo-1591608516485-a1a53df39498?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Unsplash image related to Git
      },
      {
        id: 2,
        name: "Stayzia",
        description: "Airbnb-inspired full-stack platform for managing property listings.",
        stargazers_count: 47,
        language: "MERN Stack",
        updated_at: "2025-07-20",
        html_url: "https://github.com/nikita0x01/Stayzia",
        image_url: "https://images.unsplash.com/photo-1657256031855-68029292ff34?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Unsplash image related to properties
      },
      {
        id: 3,
        name: "NexaGPT",
        description: "Express.js REST API with JWT authentication.",
        stargazers_count: 45,
        language: "Node.js",
        updated_at: "2026-02-16",
        html_url: "https://github.com/YOUR_USERNAME/api-server",
        image_url: "https://plus.unsplash.com/premium_photo-1677094310919-d0361465d3be?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Unsplash image related to server or API
      }
    ]

    setRepos(fixedRepos)
  }, [])

  return (
    <div>
      <motion.h2
        className="text-3xl md:text-4xl font-semibold mb-4"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>

      <p className="text-gray-300 mb-10 max-w-2xl">
        Below is a snapshot of the work I’ve built across different areas of development.
        Each one reflects my focus on clean, modern, and functional code.
      </p>

      {/* ---------- PROJECT CARDS ---------- */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((repo, i) => (
          <motion.article
            key={repo.id}
            className="card overflow-hidden flex flex-col justify-between"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <div className="relative">
              {/* Image at the top of the card */}
              <img
                src={repo.image_url}
                alt={repo.name}
                className="w-full h-32 object-cover"
              />
            </div>

            <div className="p-5">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-semibold truncate">{repo.name}</h3>

                {typeof repo.stargazers_count === "number" && (
                  <div className="inline-flex items-center gap-1 rounded-full bg-yellow-500/10 px-2 py-0.5 text-xs text-yellow-300">
                    <FiStar className="" />
                    {repo.stargazers_count}
                  </div>
                )}
              </div>

              <p className="text-gray-300 mt-2 text-sm line-clamp-3 min-h-[3.5rem]">
                {repo.description}
              </p>

              {repo.language && (
                <div className="mt-3 text-xs text-gray-400">
                  Primary: {repo.language}
                </div>
              )}
            </div>

            <div className="px-5 pb-4 flex items-center justify-between text-xs text-gray-400">
              <span className="truncate">
                Updated: {new Date(repo.updated_at).toLocaleDateString()}
              </span>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-accent hover:underline"
              >
                View repo
                <FiExternalLink className="text-xs" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>

      {/* ---------- VIEW MORE BUTTON (UNCHANGED) ---------- */}
      <div className="mt-8">
        <a
          href={`https://github.com/${SITE_CONFIG.githubUsername}?tab=repositories`}
          target="_blank"
          rel="noreferrer"
          className="btn btn-secondary"
        >
          View more projects on GitHub
        </a>
      </div>
    </div>
  )
}
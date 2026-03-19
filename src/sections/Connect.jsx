import { useState } from "react"
import { motion } from "framer-motion"
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiSend,
} from "react-icons/fi"
import { AiOutlineInstagram } from "react-icons/ai"
import { FaDev } from "react-icons/fa"
import { SiHashnode } from "react-icons/si"
import emailjs from "@emailjs/browser"
import { SITE_CONFIG } from "../config"

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState({ type: "idle", message: "" })

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  function validate() {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      return "Please fill in all fields."
    }
    const emailRegex = /[^@\s]+@[^@\s]+\.[^@\s]+/
    if (!emailRegex.test(form.email)) {
      return "Please enter a valid email address."
    }
    return null
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const error = validate()
    if (error) {
      setStatus({ type: "error", message: error })
      return
    }
    setStatus({ type: "loading", message: "Sending..." })

    try {
      const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      const TO_EMAIL = import.meta.env.VITE_EMAILJS_TO_EMAIL

      if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        throw new Error("Email service is not configured yet.")
      }

      const templateParams = {
        name: form.name,
        email: form.email,
        message: form.message,
        to_email: TO_EMAIL || "satputenikita204@gmail.com",
      }

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, {
        publicKey: PUBLIC_KEY,
      })

      setStatus({
        type: "success",
        message: "Message sent! I’ll get back to you soon.",
      })
      setForm({ name: "", email: "", message: "" })
    } catch (err) {
      console.error(err)
      setStatus({
        type: "error",
        message:
          "Something went wrong while sending your message. Please try again or reach out via LinkedIn.",
      })
    }
  }

  return (
    <div>
      <motion.h2
        className="text-3xl md:text-4xl font-semibold mb-4"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
      >
        Let&apos;s Connect
      </motion.h2>
      <p className="text-gray-300 mb-10 max-w-2xl">
        Have an idea, an opportunity, or a problem to solve? Drop a message and I’ll
        respond as soon as I can.
      </p>

      <div className="grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-8 items-start">
        <motion.form
          onSubmit={handleSubmit}
          className="card p-6 space-y-4"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <label className="block text-sm text-gray-300 mb-1" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent/70"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent/70"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent/70 resize-none"
              placeholder="Tell me a bit about what you’re looking to build..."
            />
          </div>

          {status.type !== "idle" && (
            <div
              className={`text-xs rounded-lg px-3 py-2 border ${
                status.type === "error"
                  ? "text-red-300 bg-red-500/10 border-red-500/40"
                  : status.type === "success"
                  ? "text-emerald-300 bg-emerald-500/10 border-emerald-500/40"
                  : "text-gray-300 bg-white/5 border-white/20"
              }`}
            >
              {status.message}
            </div>
          )}

          <button
            type="submit"
            disabled={status.type === "loading"}
            className="btn btn-primary mt-2 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center"
          >
            <FiSend className="mr-2" />
            {status.type === "loading" ? "Sending..." : "Send message"}
          </button>
        </motion.form>

        <div className="space-y-4">
          <InfoCard icon={<FiMapPin />} title="Location" value="Kalyan, Thane" delay={0} />
          <InfoCard icon={<FiPhone />} title="Phone" value="8591550614" delay={0.05} />
          <InfoCard icon={<FiMail />} title="Email" value="satputenikita204@gmail.com" delay={0.1} />

          <motion.div
            className="card p-5 flex items-center justify-between mt-2"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.12 }}
          >
            <div>
              <div className="text-sm text-gray-400">Find me online</div>
              <div className="text-lg font-medium">Social links</div>
            </div>
            <div className="flex items-center gap-3">
              {SITE_CONFIG.githubUsername && (
                <a
                  href={`https://github.com/${SITE_CONFIG.githubUsername}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-200"
                >
                  <FiGithub />
                </a>
              )}
              {SITE_CONFIG.linkedinUrl && (
                <a
                  href={SITE_CONFIG.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-200"
                >
                  <FiLinkedin />
                </a>
              )}
              <a
                href="https://www.instagram.com/prweettiess/"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-200"
              >
                <AiOutlineInstagram />
              </a>
              
              <a
                href="https://hashnode.com/@NikitaSatpute"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-200"
              >
                <SiHashnode />
              </a>
            </div>
          </motion.div>

          <p className="text-gray-400 text-sm mt-6 italic">
            I try to respond within 24 hours - if you don’t hear back, feel free to reach out via LinkedIn.
          </p>
        </div>
      </div>
    </div>
  )
}

function InfoCard({ icon, title, value, delay }) {
  if (!value) return null
  return (
    <motion.div
      className="card p-4 flex items-start gap-4"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
    >
      <div className="text-accent text-2xl">{icon}</div>
      <div>
        <div className="text-gray-400 text-xs uppercase tracking-wide mb-1">{title}</div>
        <div className="text-sm">{value}</div>
      </div>
    </motion.div>
  )
}

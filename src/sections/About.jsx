import { motion } from "framer-motion"

export default function About() {
  return (
    <div className="relative">
      <motion.h2
        className="text-3xl md:text-4xl font-semibold mb-4"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
      >
        About Me!
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6 items-start">
        {/* Text Content */}
        <motion.div
          className="md:col-span-2 space-y-4"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-300">
            Hello! I’m Nikita Satpute, a full-stack developer passionate about building modern,
            responsive, and user-focused web experiences. I love turning ideas into clean, intuitive
            interfaces while also engineering the backend systems that power fast, efficient, and
            seamless functionality.
          </p>
          <p className="text-gray-300">
            I work across the full stack using React, TypeScript, Node.js, Express.js, MongoDB,
            Tailwind CSS, RESTful APIs, and modern development tools to build products that are
            intuitive, efficient, and impactful. I’m also highly people-focused-being an extrovert,
            I genuinely enjoy collaborating, sharing ideas, and learning from the people I work
            with.
          </p>
        </motion.div>

        {/* Side Card */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="card p-4 text-center"
        >
          <div className="text-accent mb-2">Currently</div>
          <div className="text-gray-200">
            I am currently focused on developing advanced solutions using artificial intelligence and machine learning technologies to drive innovation and create intelligent systems.
          </div>
        </motion.div>

        {/* Divider / Quote */}
        <motion.div
          className="relative flex items-center w-full mt-10 mb-2 md:col-span-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-700 to-gray-700" />

          <div className="mx-6 flex items-center gap-3 px-6 py-2 rounded-full bg-black/50 border border-gray-700 backdrop-blur whitespace-nowrap">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm text-gray-300">
              When I’m not coding, you’ll probably find me reading, thinking, or discovering something new...
            </span>
          </div>

          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gray-700 to-gray-700" />
        </motion.div>
      </div>
    </div>
  )
}

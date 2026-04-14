import { motion } from "framer-motion";
import { useTypingText, ANIMATION_VARIANTS } from "../utils/animations";

export default function About() {
  const typedHeading = useTypingText("About Me!", 80);
  
  return (
    <div className="relative px-4 sm:px-6 md:px-12">
      {/* Heading */}
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-center"
        {...ANIMATION_VARIANTS.textContainer}
      >
        {typedHeading}
      </motion.h2>

      {/* Grid Layout for Text and Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {/* Text Content */}
        <motion.div
          className="md:col-span-2 space-y-6"
          {...ANIMATION_VARIANTS.slideInLeft}
        >
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            Hello! I'm Nikita Satpute, a full-stack developer passionate about building modern,
            responsive, and user-focused web experiences. I love turning ideas into clean, intuitive
            interfaces while also engineering the backend systems that power fast, efficient, and
            seamless functionality.
          </p>
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            I work across the full stack using React, TypeScript, Node.js, Express.js, MongoDB,
            Tailwind CSS, RESTful APIs, and modern development tools to build products that are
            intuitive, efficient, and impactful. I'm also highly people-focused-being an extrovert,
            I genuinely enjoy collaborating, sharing ideas, and learning from the people I work
            with.
          </p>
        </motion.div>

        {/* Side Card */}
        <motion.div
          {...ANIMATION_VARIANTS.slideInRight}
          className="card p-4 text-center bg-gray-800 rounded-lg shadow-lg"
        >
          <div className="text-accent mb-2">Currently</div>
          <div className="text-gray-200 text-sm sm:text-base">
            I am currently focused on developing advanced solutions using artificial intelligence and machine learning technologies to drive innovation and create intelligent systems.
          </div>
        </motion.div>

        {/* Divider / Quote */}
        <motion.div
          className="relative flex items-center w-full mt-10 mb-4 md:col-span-3"
          {...ANIMATION_VARIANTS.fadeInUp}
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-700 to-gray-700" />

          <div className="mx-4 sm:mx-6 flex items-center justify-center gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-black/50 border border-gray-700 backdrop-blur whitespace-nowrap">
            <span className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-accent animate-pulse" />
            <span className="text-xs sm:text-sm md:text-base text-gray-300">
              When I'm not coding, you'll probably find me reading, thinking, or discovering something new...
            </span>
          </div>

          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gray-700 to-gray-700" />
        </motion.div>
      </div>
    </div>
  );
}

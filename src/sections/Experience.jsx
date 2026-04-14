import { motion } from "framer-motion";
import { useTypingText, ANIMATION_VARIANTS } from "../utils/animations";

const EXPERIENCES = [
  {
    role: "Matriculation",
    company: "SSC",
    period: "2021",
    percentage: "92.20%",
    summary:
      "Completed Matriculation with a strong foundation in introduction to computers, science and mathematics.",
    stack: ["Mathematics", "Science", "Social Studies", "Languages","Computer Fundamentals"],
  },
  {
    role: "Diploma in IT",
    company: "MSBTE",
    period: "2021 - 2024",
    percentage: "87%",
    summary:
      "Earned a Diploma in Information Technology, focusing on software fundamentals and practical development skills.",
    stack: ["Computer Architecture", "Comparison of Learning Algorithms", "Computer Network", "Operating Systems"],
  },
  {
    role: "BE in IT",
    company: "Mumbai University",
    period: "2024 - 2027",
    percentage: "8.6 CGPA",
    summary:
      "Pursuing BE in IT, applying classroom concepts to real projects in web development, algorithms, and software engineering.",
    stack: ["DSA", "DBMS", "Cloud Computing", "Software Engineering"],
  },
];

export default function Experience() {
  const typedHeading = useTypingText("Education", 80);
  
  return (
    <div>
      <motion.h2
        className="text-3xl md:text-4xl font-semibold mb-4"
        {...ANIMATION_VARIANTS.textContainer}
      >
        {typedHeading}
      </motion.h2>

      <motion.p 
        className="text-gray-300 mb-10 max-w-2xl"
        {...ANIMATION_VARIANTS.fadeInUp}
      >
        My educational journey and technical background, from foundational learning to advanced engineering concepts.
      </motion.p>

      <motion.div 
        className="space-y-6"
        {...ANIMATION_VARIANTS.staggerContainer}
      >
        {EXPERIENCES.map((exp, idx) => (
          <motion.div
            key={exp.role}
            className="card p-6 relative"
            {...ANIMATION_VARIANTS.slideInRight}
            transition={{ ...ANIMATION_VARIANTS.slideInRight.transition, delay: idx * 0.15 }}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-1">{exp.role}</h3>
                <p className="text-accent font-medium mb-2">{exp.company}</p>
                <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{exp.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.stack.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1 text-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="md:text-right">
                <div className="text-2xl font-bold text-accent mb-1">{exp.percentage}</div>
                <div className="text-xs text-gray-400">Score</div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

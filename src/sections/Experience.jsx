import { motion } from "framer-motion";

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
  return (
    <div>
      <motion.h2
        className="text-3xl md:text-4xl font-semibold mb-4"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
      >
        Education
      </motion.h2>
      <p className="text-gray-300 mb-10 max-w-2xl">
        A quick snapshot of my Educational journey so far.
      </p>

      <div className="space-y-4">
        {EXPERIENCES.map((exp, i) => (
          <motion.article
            key={`${exp.company}-${exp.role}-${i}`}
            className="card p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <div>
              <h3 className="text-lg font-semibold">{exp.role}</h3>
              <div className="text-sm text-gray-400">
                {exp.company} • {exp.period} • {exp.percentage}
              </div>
              <p className="text-sm text-gray-300 mt-2">{exp.summary}</p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              {exp.stack.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-gray-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

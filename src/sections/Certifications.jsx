import { motion } from "framer-motion"
import { useTypingText, ANIMATION_VARIANTS } from "../utils/animations"

const Certifications = () => {
  const certifications = [
    {
      title: "Software Engineering Job Simulation", 
      issuer: "J.P. Morgan",
      year: "Apr 2025",
    },
    {
      title: "Software Engineering Job Simulation", 
      issuer: "Accenture",
      year: "jan 2025",
    },
    {
      title: "Data Visualisation",
      issuer: "Tata",
      year: "2024",
    },
    {
      title: "Data analytics and Visualization job simulation", 
      issuer: "Accenture",
      year: "2024",
    },
    {
      title: "MERN Stack",
      issuer: "Apna College",
      year: "2025",
    },
    {
      title: "DSA in Java",
      issuer: "Apna College",
      year: "2026",
    },
  ];

  const typedHeading = useTypingText("Certifications", 80);

  return (
    <section className="section" id="certifications">
      <motion.h2 className="section-title" {...ANIMATION_VARIANTS.textContainer}>
        {typedHeading}
      </motion.h2>
      
      <motion.p 
        className="section-subtitle"
        {...ANIMATION_VARIANTS.fadeInUp}
      >
        These certifications highlight my continuous learning journey and 
        hands-on experience with modern web technologies. They demonstrate my 
        commitment to improving my technical and problem-solving skills.
      </motion.p>
      
      <br />
      
      <motion.div 
        className="card-container"
        {...ANIMATION_VARIANTS.staggerContainer}
      >
        {certifications.map((cert, index) => (
          <motion.div 
            className="card" 
            key={index}
            {...ANIMATION_VARIANTS.cardSlideIn}
            transition={{ ...ANIMATION_VARIANTS.cardSlideIn.transition, delay: index * 0.1 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <h3><b>{cert.title}</b></h3>
            <p className="inline-flex items-center gap-1 text-accent hover:underline">{cert.issuer}</p>
            <br />
            <span className="year">{cert.year}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Certifications;

import React from "react";

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

  return (
    <section className="section" id="certifications">
      <h2 className="section-title">Certifications</h2>
      <p className="section-subtitle">
        These certifications highlight my continuous learning journey and
        hands-on experience with modern web technologies. They demonstrate my
        commitment to improving my technical and problem-solving skills.
      </p><br />
      <div className="card-container">
        {certifications.map((cert, index) => (
          <div className="card" key={index}>
            <h3 ><b>{cert.title}</b></h3>
            <p className="inline-flex items-center gap-1 text-accent hover:underline">{cert.issuer}</p>
            <br />
            <span className="year">{cert.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;

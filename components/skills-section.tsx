export default function SkillsSection() {
  const skills = [
    "Python",
    "C++",
    "Java",
    "HTML",
    "CSS",
    "JavaScript",
    "Data Structures",
    "MERN Stack",
    "MongoDB",
    "Machine Learning (Basics)",
    "Artificial Intelligence",
    "Generative AI",
    "REST API Integration",
  ];

  return (
    <section
      id="skills"
      style={{
        padding: "60px",
        textAlign: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <h2 style={{ fontSize: "30px", marginBottom: "20px" }}>
        Technical Skills
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          flexWrap: "wrap",
        }}
      >
        {skills.map((skill) => (
          <span
            key={skill}
            style={{
              padding: "10px 15px",
              backgroundColor: "#0f172a",
              color: "white",
              borderRadius: "20px",
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
export default function ExperienceSection() {
  return (
    <section
      id="experience"
      style={{
        padding: "60px",
        textAlign: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <h2 style={{ fontSize: "30px", marginBottom: "30px" }}>
        Internship Experience
      </h2>

      <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "left" }}>
        <h3>Full Stack Development Intern</h3>
        <p>
          Completed an internship program on Full Stack Development at
          <strong> StaxTech</strong>, gaining experience in web application
          development and modern development tools.
        </p>

        <h3 style={{ marginTop: "20px" }}>Research Paper Writing Internship</h3>
        <p>
          Completed an internship program on Research Paper Writing organized
          by <strong>NoobTron</strong>, focusing on academic research methods
          and technical documentation.
        </p>
      </div>
    </section>
  );
}
export default function HeroSection() {
  return (
    <section
      id="home"
      style={{
        textAlign: "center",
        background: "linear-gradient(to right, #0f172a, #1e293b)",
        color: "white",
        padding: "100px 20px",
      }}
    >
      <h1 style={{ fontSize: "48px", fontWeight: "bold" }}>
        Hi, I'm Safiyya Muhsina M 👋
      </h1>

      <p style={{ fontSize: "20px", marginTop: "10px" }}>
        Computer Science & Technology Student | Aspiring Full Stack Developer | AI Enthusiast
      </p>

      <div style={{ marginTop: "25px" }}>
        <a
          href="https://github.com/safiyyapsrr-sketch"
          target="_blank"
          style={{ marginRight: "15px", color: "white" }}
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/safiyyamuhsina"
          target="_blank"
          style={{ color: "white" }}
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
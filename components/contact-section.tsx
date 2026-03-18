export default function ContactSection() {
  return (
    <section
      id="contact"
      style={{
        padding: "60px",
        textAlign: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <h2 style={{ fontSize: "30px", marginBottom: "20px" }}>
        Contact Me
      </h2>

      <p>Email: safiyyapsrr@gmail.com</p>

      <p>
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/safiyyamuhsina"
          target="_blank"
        >
          linkedin.com/in/safiyyamuhsina
        </a>
      </p>

      <p>
        GitHub:{" "}
        <a
          href="https://github.com/safiyyapsrr-sketch"
          target="_blank"
        >
          github.com/safiyyapsrr-sketch
        </a>
      </p>
    </section>
  );
}
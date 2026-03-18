export default function CertificationsSection() {
  const items = [
    "NPTEL Course on Cyber Security",
    "GUVI Course on MERN Stack Development",
    "Introduction to Artificial Intelligence – Udemy",
    "Python for Beginners – Udemy",
    "IIT PALS Workshop",
    "Participated in AIOWS till 4th Phase",
    "Participation at Infosys TECHZOOKA & PALS Hackathon at MCITY",
    "National Level Workshop on Python and Generative AI",
    "Workshop at Codebind Technologies",
    "Workshop on UI/UX Design",
    "Implant Training on Web Development at Codebind Technologies",
  ];

  return (
    <section
      id="certifications"
      style={{
        padding: "60px",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "30px", marginBottom: "30px" }}>
        Certifications & Workshops
      </h2>

      <ul
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          textAlign: "left",
          lineHeight: "1.8",
        }}
      >
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
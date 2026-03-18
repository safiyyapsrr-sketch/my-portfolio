export default function EducationSection() {
  return (
    <section
      id="education"
      style={{
        padding: "60px",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "30px", marginBottom: "30px" }}>
        Education
      </h2>

      <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "left" }}>
        <h3>B.E. Computer Science & Technology</h3>
        <p>
          Vivekanandha College of Engineering for Women (Autonomous) <br />
          2023 – 2027 <br />
          CGPA: 7.9
        </p>

        <h3 style={{ marginTop: "20px" }}>Higher Secondary (HSC)</h3>
        <p>
          GRM Girls Higher Secondary School, Thiruvarur <br />
          Percentage: 75%
        </p>

        <h3 style={{ marginTop: "20px" }}>SSLC</h3>
        <p>
          India International Matriculation School, Koothanallur <br />
          Percentage: 85%
        </p>
      </div>
    </section>
  );
}
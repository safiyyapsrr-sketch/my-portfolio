export default function ActivitiesSection() {
  return (
    <section
      id="activities"
      style={{
        padding: "60px",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "30px", marginBottom: "20px" }}>
        Languages & Activities
      </h2>

      <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "left" }}>
        <h3>Languages</h3>
        <p>
          English, Tamil, Basic (Arabic, French, Hindi, Malayalam)
        </p>

        <h3 style={{ marginTop: "20px" }}>Social Activities</h3>
        <p>
          Member of NSS Club <br />
          Member of QCFI
        </p>
      </div>
    </section>
  );
}
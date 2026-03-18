export default function ProjectsSection() {

  const projects = [
    {
      title: "Animal Intrusion Detection & Prevention System",
      description:
        "AI and IoT system that detects wild animals entering farms using CNN and YOLO algorithms and alerts farmers with a siren mechanism.",
    },
    {
      title: "Leave Letter Management System",
      description:
        "Web application that allows students to submit leave requests online and authorities to approve them digitally.",
    },
    {
      title: "Smart AI Chatbot for College",
      description:
        "AI chatbot that answers queries about college facilities, placements, admissions, and fees.",
    },
    {
      title: "Weather App",
      description:
        "Python-based weather application that fetches real-time weather data using an API and stores it in a database.",
    },
  ];

  return (
    <section id="projects" style={{ padding: "60px", textAlign: "center" }}>
      <h2 style={{ fontSize: "30px", marginBottom: "30px" }}>Projects</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              width: "260px",
              padding: "20px",
              borderRadius: "10px",
              backgroundColor: "#ffffff",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
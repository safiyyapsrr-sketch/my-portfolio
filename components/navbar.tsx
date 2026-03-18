export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 40px",
        backgroundColor: "#0f172a",
        color: "white",
        position: "sticky",
        top: 0,
      }}
    >
      <h2 style={{ fontWeight: "bold" }}>Safiyya</h2>

      <div style={{ display: "flex", gap: "25px" }}>
        <a href="#about" style={{ color: "white" }}>About</a>
        <a href="#skills" style={{ color: "white" }}>Skills</a>
        <a href="#projects" style={{ color: "white" }}>Projects</a>
        <a href="#contact" style={{ color: "white" }}>Contact</a>
      </div>
    </nav>
  );
}
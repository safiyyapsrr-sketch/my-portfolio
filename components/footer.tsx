import { navItems, profile } from "@/data/portfolio";
import { ArrowUp, GitHub, LinkedIn } from "./icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="site-footer__top">
          <p className="site-footer__name">
            Safiyya <em>Muhsina</em> M
          </p>

          <nav aria-label="Footer">
            <ul className="footer-nav">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="site-footer__bottom">
          <p>
            © {year} {profile.name}. Designed and built with care.
          </p>

          <div className="socials">
            <a
              className="icon-btn"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile (opens in a new tab)"
            >
              <LinkedIn />
            </a>
            <a
              className="icon-btn"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile (opens in a new tab)"
            >
              <GitHub />
            </a>
          </div>

          <a href="#home" className="to-top mono">
            Back to top
            <ArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}

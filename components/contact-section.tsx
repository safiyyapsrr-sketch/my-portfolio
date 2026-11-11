import { profile } from "@/data/portfolio";
import { delay } from "@/lib/motion";
import { ArrowUpRight, GitHub, LinkedIn, Pin } from "./icons";

export default function ContactSection() {
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="wrap">
        <p className="eyebrow mono" data-reveal>
          <span className="eyebrow__num">08</span>
          <span>Contact</span>
        </p>

        <h2 id="contact-title" className="contact__title" data-reveal style={delay(80)}>
          Open to opportunities and <em>collaborations.</em>
        </h2>

        <p className="contact__text" data-reveal style={delay(160)}>
          I&apos;m open to internships and full-time fresher opportunities
          across technology, product, business and project roles. If you have
          an idea, a role or just a question, I&apos;d love to hear from you.
        </p>

        <a
          className="contact__email"
          href={`mailto:${profile.email}`}
          data-reveal
          style={delay(240)}
        >
          {profile.email}
          <ArrowUpRight />
        </a>

        <div className="contact__row" data-reveal style={delay(320)}>
          <a
            className="btn"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn />
            LinkedIn
            <ArrowUpRight />
          </a>
          <a
            className="btn"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub />
            GitHub
            <ArrowUpRight />
          </a>
          <span className="contact__where">
            <Pin />
            {profile.location}
          </span>
        </div>
      </div>
    </section>
  );
}

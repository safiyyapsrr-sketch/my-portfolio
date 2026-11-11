import { experience } from "@/data/portfolio";
import { delay } from "@/lib/motion";
import { ArrowRight } from "./icons";
import SectionHeading from "./section-heading";

export default function ExperienceSection() {
  return (
    <section id="experience" className="section tone-invert" aria-labelledby="experience-title">
      <div className="wrap">
        <SectionHeading num="04" label="Experience" id="experience-title">
          Learning on the <em>job</em>, in the real world.
        </SectionHeading>

        <div className="timeline">
          <article className="tl-item" data-reveal>
            <div className="tl-when mono">
              <strong>{experience.period}</strong>
              {experience.location}
            </div>

            <div>
              <h3 className="tl-role">{experience.role}</h3>
              <p className="tl-org">
                {experience.company} · {experience.project}
              </p>

              <ol className="tl-list">
                {experience.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ol>

              <ul className="tags">
                {experience.tags.map((tag) => (
                  <li key={tag} className="tag">
                    {tag}
                  </li>
                ))}
              </ul>

              <a href="#project-whbs" className="tl-link">
                See the redesign
                <ArrowRight />
              </a>
            </div>
          </article>

          <article className="tl-item tl-item--next" data-reveal style={delay(120)}>
            <div className="tl-when mono">
              <strong>Next</strong>
              Open to opportunities
            </div>
            <div>
              <h3 className="tl-role">The next chapter.</h3>
              <p className="tl-next-text">
                Looking for internships and full-time fresher roles where I can
                keep learning, take ownership and contribute.
              </p>
              <a href="#contact" className="tl-link">
                Let&apos;s talk
                <ArrowRight />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

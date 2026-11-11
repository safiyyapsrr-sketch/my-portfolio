import { aboutParagraphs, education, interests } from "@/data/portfolio";
import { delay } from "@/lib/motion";
import SectionHeading from "./section-heading";

export default function AboutSection() {
  return (
    <section id="about" className="section tone-invert" aria-labelledby="about-title">
      <div className="wrap about__grid">
        <div className="about__side">
          <SectionHeading num="01" label="About" id="about-title">
            Curious by nature, <em>technical</em> by training.
          </SectionHeading>

          <div className="about__status" data-reveal style={delay(80)}>
            <p className="mono">Currently</p>
            <p className="about__status-title">
              Final-year B.E. Computer Science &amp; Technology
            </p>
            <p>
              {education.school}, {education.place}
            </p>
          </div>

          <div data-reveal style={delay(160)}>
            <p className="interest-label mono">Where my interests meet</p>
            <ul className="tags">
              {interests.map((interest) => (
                <li key={interest} className="tag">
                  {interest}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <p className="about__lead" data-reveal>
            {aboutParagraphs.lead}
          </p>

          <div className="about__cols">
            <p data-reveal style={delay(80)}>
              {aboutParagraphs.communication}
            </p>
            <p data-reveal style={delay(160)}>
              {aboutParagraphs.adaptable}
            </p>
          </div>

          <blockquote className="about__quote" data-reveal>
            {aboutParagraphs.quote}
          </blockquote>

          <p className="about__closing" data-reveal>
            {aboutParagraphs.closing}
          </p>
        </div>
      </div>
    </section>
  );
}

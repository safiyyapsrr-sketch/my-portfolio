import { education } from "@/data/portfolio";
import { delay } from "@/lib/motion";
import SectionHeading from "./section-heading";

export default function EducationSection() {
  return (
    <section id="education" className="section" aria-labelledby="education-title">
      <div className="wrap">
        <SectionHeading num="05" label="Education" id="education-title">
          Where I&apos;m <em>building</em> my foundation.
        </SectionHeading>

        <div className="edu-grid">
          <div className="cgpa" data-reveal>
            <span className="cgpa__num" aria-label={`CGPA ${education.cgpa}`}>
              {education.cgpa}
            </span>
            <span className="cgpa__label mono">CGPA · B.E.</span>
          </div>

          <ul className="edu-list">
            <li className="edu-row" data-reveal>
              <p className="edu-row__when mono">{education.period}</p>
              <div>
                <h3 className="edu-row__title">{education.degree}</h3>
                <p className="edu-row__meta">
                  {education.school}, {education.place}
                </p>
                <p className="edu-row__score">CGPA {education.cgpa}</p>
              </div>
            </li>

            <li className="edu-row" data-reveal style={delay(100)}>
              <p className="edu-row__when mono">{education.hsc.period}</p>
              <div>
                <h3 className="edu-row__title">{education.hsc.title}</h3>
                <p className="edu-row__meta">
                  {education.hsc.school}, {education.hsc.place}
                </p>
                <p className="edu-row__score">{education.hsc.score}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

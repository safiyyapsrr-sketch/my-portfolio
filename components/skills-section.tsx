import { skillGroups, strengths } from "@/data/portfolio";
import { delay } from "@/lib/motion";
import SectionHeading from "./section-heading";

export default function SkillsSection() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="wrap">
        <SectionHeading num="02" label="Skills" id="skills-title">
          Tools I use, <em>strengths</em> I bring.
        </SectionHeading>

        <div className="skill-grid">
          {skillGroups.map((group, index) => (
            <article
              key={group.title}
              className="skill-card"
              data-reveal
              style={delay(index * 90)}
            >
              <div className="skill-card__head">
                <h3 className="skill-card__title">{group.title}</h3>
                <span className="skill-card__num mono">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <ul className="tags">
                {group.items.map((item) => (
                  <li key={item} className="tag">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="strengths-wrap">
          <p className="strengths-label mono" data-reveal>
            Professional strengths
          </p>
          <ul className="strengths" data-reveal style={delay(100)}>
            {strengths.map((strength) => (
              <li key={strength}>{strength}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

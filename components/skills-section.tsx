import { aiTools, interestAreas, skillGroups, strengths } from "@/data/portfolio";
import { delay } from "@/lib/motion";
import SectionHeading from "./section-heading";

export default function SkillsSection() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="wrap">
        <SectionHeading num="02" label="Skills & interests" id="skills-title">
          Skills across <em>tech</em>, product and people.
        </SectionHeading>

        {/* Technical */}
        <div className="block">
          <div className="block__head" data-reveal>
            <h3 className="sub-title">Technical skills</h3>
            <span className="mono">Languages, tools &amp; foundations</span>
          </div>
          <div className="skill-grid">
            {skillGroups.map((group, index) => (
              <article
                key={group.title}
                className="skill-card"
                data-reveal
                style={delay(index * 90)}
              >
                <div className="skill-card__head">
                  <h4 className="skill-card__title">{group.title}</h4>
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
        </div>

        {/* Wider interests */}
        <div className="block">
          <div className="block__head" data-reveal>
            <h3 className="sub-title">Interests &amp; exposure</h3>
            <span className="mono">Beyond conventional development</span>
          </div>
          <ul className="interest-grid">
            {interestAreas.map((area, index) => (
              <li
                key={area.title}
                className="interest-card"
                data-reveal
                style={delay((index % 2) * 90)}
              >
                <div className="interest-card__top">
                  <h4 className="interest-card__title">{area.title}</h4>
                  <span
                    className={
                      area.status === "In practice" ? "pill pill--accent" : "pill"
                    }
                  >
                    {area.status}
                  </span>
                </div>
                <p>{area.text}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* AI tools */}
        <div className="block">
          <div className="ai-panel" data-reveal>
            <div>
              <p className="mono ai-panel__label">AI tools &amp; prompting</p>
              <h3 className="sub-title">How I work with AI tools</h3>
              <p className="ai-panel__intro">{aiTools.intro}</p>
              <ul className="tags ai-panel__tools">
                {aiTools.tools.map((tool) => (
                  <li key={tool} className="tag">
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mono ai-panel__label">Where I use them</p>
              <ol className="ai-uses">
                {aiTools.uses.map((use) => (
                  <li key={use}>{use}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* Strengths */}
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

import { activities, languages } from "@/data/portfolio";
import { delay } from "@/lib/motion";
import SectionHeading from "./section-heading";

export default function ActivitiesSection() {
  return (
    <section id="activities" className="section" aria-labelledby="activities-title">
      <div className="wrap">
        <SectionHeading num="07" label="Activities" id="activities-title">
          Beyond the classroom: <em>leading</em>, serving, playing.
        </SectionHeading>

        <ul className="activity-grid">
          {activities.map((item, index) => (
            <li
              key={item.title}
              className="activity-card"
              data-wide={item.wide ? "true" : undefined}
              data-reveal
              style={delay((index % 3) * 80)}
            >
              <span className="activity-card__theme mono">{item.theme}</span>
              <h3 className="activity-card__title">{item.title}</h3>
              {item.detail ? (
                <p className="activity-card__detail">{item.detail}</p>
              ) : null}
            </li>
          ))}
        </ul>

        <div className="lang" data-reveal>
          <h3 className="sub-title">Languages</h3>
          <ul className="lang__list">
            {languages.map((language) => (
              <li key={language.name} className="lang__item">
                <span className="lang__name">{language.name}</span>
                <span className="lang__level mono">{language.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

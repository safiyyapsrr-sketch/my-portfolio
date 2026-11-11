import { certificates, hackathons } from "@/data/portfolio";
import { delay } from "@/lib/motion";
import SectionHeading from "./section-heading";

export default function AchievementsSection() {
  return (
    <section id="achievements" className="section tone-soft" aria-labelledby="achievements-title">
      <div className="wrap">
        <SectionHeading num="06" label="Achievements" id="achievements-title">
          Hackathons, <em>workshops</em> and certificates.
        </SectionHeading>

        <div className="block">
          <div className="block__head" data-reveal>
            <h3 className="sub-title">Hackathons &amp; participation</h3>
            <span className="mono">{hackathons.length} entries</span>
          </div>

          <ul className="hack-grid">
            {hackathons.map((item, index) => {
              const highlight = item.result !== "Participant";
              return (
                <li
                  key={`${item.name}-${item.year}`}
                  className="hack-card"
                  data-highlight={highlight}
                  data-reveal
                  style={delay((index % 2) * 90)}
                >
                  <div className="hack-card__top">
                    <span className="hack-card__year mono">{item.year}</span>
                    <span className={highlight ? "pill pill--accent" : "pill"}>
                      {item.result}
                    </span>
                  </div>
                  <h4 className="hack-card__name">{item.name}</h4>
                  <p className="hack-card__detail">{item.detail}</p>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="block">
          <div className="block__head" data-reveal>
            <h3 className="sub-title">Certificates &amp; workshops</h3>
            <span className="mono">{certificates.length} entries</span>
          </div>

          <ul className="cert-list">
            {certificates.map((cert, index) => (
              <li
                key={cert.title}
                className="cert-row"
                data-reveal
                style={delay((index % 2) * 70)}
              >
                <span className="cert-row__n mono">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="cert-row__t">
                  {cert.title}
                  <span className="cert-row__i">{cert.issuer}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

import { tickerWords } from "@/data/portfolio";

export default function Ticker() {
  return (
    <div className="ticker" role="region" aria-label="Areas I'm interested in">
      <div className="ticker__track">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            className="ticker__group"
            aria-hidden={copy === 1 ? "true" : undefined}
          >
            {tickerWords.map((word) => (
              <li key={word} className="ticker__item">
                {word}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

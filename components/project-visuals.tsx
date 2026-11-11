import Image from "next/image";
import { images, type ProjectVisual } from "@/data/portfolio";
import { ArrowRight, Search } from "./icons";

/* Decorative illustrations built from the resume's own descriptions of each project. */

function Pipeline() {
  const steps = [
    { t: "Camera & sensors", s: "Arduino · Raspberry Pi" },
    { t: "Detect & classify", s: "YOLO · CNN" },
    { t: "Trigger alert", s: "GSM · cloud APIs" },
    { t: "Farmer notified", s: "Real-time SMS" },
  ];
  return (
    <div className="viz" aria-hidden="true">
      <ol className="viz-steps">
        {steps.map((step, index) => (
          <li key={step.t} className="viz-step">
            <span className="viz-step__n">{index + 1}</span>
            <span>
              <span className="viz-step__t">{step.t}</span>
              <span className="viz-step__s">{step.s}</span>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function SearchViz() {
  return (
    <div className="viz" aria-hidden="true">
      <div className="viz-search">
        <Search />
        <span>
          batmn<span className="viz-caret" />
        </span>
      </div>
      <p className="viz-note">
        Showing results for <strong>Batman</strong> · <s>batmn</s>
      </p>
      <ul className="tags">
        <li className="tag">Genre</li>
        <li className="tag">Rating</li>
        <li className="tag">Keyword</li>
        <li className="tag">Autocomplete</li>
      </ul>
      <div className="viz-bars">
        <div className="viz-bar" />
        <div className="viz-bar" />
        <div className="viz-bar" />
      </div>
    </div>
  );
}

function Chat() {
  return (
    <div className="viz viz-chat" aria-hidden="true">
      <div className="bubble bubble--user">Admissions?</div>
      <div className="bubble bubble--bot">
        <div className="viz-bar" />
        <div className="viz-bar" />
      </div>
      <div className="bubble bubble--user">Placements?</div>
    </div>
  );
}

function Workflow() {
  return (
    <div className="viz viz-flow" aria-hidden="true">
      <div className="flow-node">
        Submit
        <small>Student / staff</small>
      </div>
      <ArrowRight className="flow-arrow" />
      <div className="flow-node">
        Review
        <small>Higher authority</small>
      </div>
      <ArrowRight className="flow-arrow" />
      <div className="flow-node flow-node--done">
        Approved
        <small>Digitally</small>
      </div>
    </div>
  );
}

export default function ProjectMedia({ visual }: { visual: ProjectVisual }) {
  switch (visual) {
    case "safepath":
      return (
        <div className="project-media project-media--wide">
          <Image
            className="cover"
            src={images.safepath.src}
            alt={images.safepath.alt}
            fill
            sizes="(min-width: 760px) 700px, 100vw"
          />
        </div>
      );
    case "whbs":
      return (
        <div className="project-media project-media--shots">
          <div className="shot shot--main">
            <Image
              src={images.whbsHome.src}
              alt={images.whbsHome.alt}
              width={images.whbsHome.width}
              height={images.whbsHome.height}
              sizes="(min-width: 760px) 400px, 80vw"
            />
          </div>
          <div className="shot shot--back">
            <Image
              src={images.whbsHero.src}
              alt={images.whbsHero.alt}
              width={images.whbsHero.width}
              height={images.whbsHero.height}
              sizes="(min-width: 760px) 290px, 55vw"
            />
          </div>
        </div>
      );
    case "pipeline":
      return (
        <div className="project-media project-media--accent">
          <Pipeline />
        </div>
      );
    case "search":
      return (
        <div className="project-media project-media--soft">
          <SearchViz />
        </div>
      );
    case "chat":
      return (
        <div className="project-media project-media--soft">
          <Chat />
        </div>
      );
    case "workflow":
      return (
        <div className="project-media project-media--soft">
          <Workflow />
        </div>
      );
  }
}

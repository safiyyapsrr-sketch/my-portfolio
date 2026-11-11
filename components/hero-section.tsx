import Image from "next/image";
import type { CSSProperties } from "react";
import { headlineWords, images, profile } from "@/data/portfolio";
import { delay } from "@/lib/motion";
import { ArrowDown, GitHub, LinkedIn } from "./icons";

export default function HeroSection() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="wrap hero__grid">
        <div>
          <div className="hero__id" data-anim style={delay(60)}>
            <p className="hero__name">{profile.name}</p>
            <p className="hero__role mono">{profile.role}</p>
          </div>

          <h1 id="hero-title" className="hero__title">
            {headlineWords.map((word, index) => (
              <span key={word.text + index}>
                <span className="word" style={{ "--i": index } as CSSProperties}>
                  <span>{word.em ? <em>{word.text}</em> : word.text}</span>
                </span>
                {index < headlineWords.length - 1 ? " " : null}
              </span>
            ))}
          </h1>

          <p className="hero__intro" data-anim style={delay(900)}>
            {profile.intro}
          </p>

          <div className="hero__cta" data-anim style={delay(1050)}>
            <a href="#projects" className="btn btn--primary">
              View projects
              <ArrowDown />
            </a>
            <a href="#contact" className="btn btn--ghost">
              Get in touch
            </a>
          </div>
        </div>

        <div className="hero-visual" data-anim style={delay(350)}>
          <div className="hero-visual__sun" aria-hidden="true" />

          <div className="hero-visual__portrait">
            <Image
              src={images.portrait.src}
              alt={images.portrait.alt}
              width={images.portrait.width}
              height={images.portrait.height}
              sizes="(min-width: 960px) 400px, 85vw"
              loading="eager"
              fetchPriority="high"
            />
          </div>

          <figure className="hero-card hero-card--b">
            <Image
              src={images.whbsHero.src}
              alt={images.whbsHero.alt}
              width={images.whbsHero.width}
              height={images.whbsHero.height}
              sizes="(min-width: 960px) 170px, 36vw"
            />
          </figure>

          <figure className="hero-card hero-card--a">
            <Image
              src={images.safepath.src}
              alt={images.safepath.alt}
              width={images.safepath.width}
              height={images.safepath.height}
              sizes="(min-width: 960px) 210px, 46vw"
            />
          </figure>
        </div>
      </div>

      <div className="wrap">
        <div className="hero__foot" data-anim style={delay(1250)}>
          <div className="socials">
            <span className="socials__label mono">Find me</span>
            <a
              className="icon-btn"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile (opens in a new tab)"
            >
              <LinkedIn />
            </a>
            <a
              className="icon-btn"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile (opens in a new tab)"
            >
              <GitHub />
            </a>
          </div>

          <a href="#about" className="scroll-cue mono" aria-label="Scroll to the About section">
            Scroll
            <span className="scroll-cue__rail" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

import type { ReactNode } from "react";

interface SectionHeadingProps {
  num: string;
  label: string;
  id: string;
  children: ReactNode;
}

export default function SectionHeading({
  num,
  label,
  id,
  children,
}: SectionHeadingProps) {
  return (
    <header className="sec-head" data-reveal>
      <p className="eyebrow mono">
        <span className="eyebrow__num">{num}</span>
        <span>{label}</span>
      </p>
      <h2 id={id} className="sec-title">
        {children}
      </h2>
    </header>
  );
}

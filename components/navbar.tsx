"use client";

import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { navItems, profile } from "@/data/portfolio";
import { Close, Menu } from "./icons";
import ThemeToggle from "./theme-toggle";

export default function Navbar() {
  const [activeId, setActiveId] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const sentinelRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const openBtnRef = useRef<HTMLButtonElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // Header gets its blurred background once the page leaves the top.
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(([entry]) => {
      setScrolled(!entry.isIntersecting);
    });
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  // Highlight the nav item for the section currently in view.
  useEffect(() => {
    const sections = navItems
      .flatMap((item) => item.ids)
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Mobile menu: lock page scroll, move focus in, close on Escape.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    const onKey = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        openBtnRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Keep Tab inside the open menu.
  function trapFocus(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "Tab" || !menuRef.current) return;
    const focusable = menuRef.current.querySelectorAll<HTMLElement>(
      "a[href], button:not([disabled])",
    );
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  const activeHref = navItems.find((item) =>
    (item.ids as readonly string[]).includes(activeId),
  )?.href;

  return (
    <>
      <div ref={sentinelRef} className="scroll-sentinel" aria-hidden="true" />
      <header className="site-header" data-scrolled={scrolled}>
        <div className="wrap site-header__bar">
          <a href="#home" className="brand" aria-label={`${profile.name}, back to top`}>
            <span className="brand__mark" aria-hidden="true">
              {profile.initials}
            </span>
          </a>

          <nav aria-label="Primary" className="nav-links">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link"
                aria-current={activeHref === item.href ? "true" : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <ThemeToggle />
            <button
              ref={openBtnRef}
              type="button"
              className="icon-btn menu-btn"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(true)}
            >
              <Menu />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        ref={menuRef}
        className="mobile-menu"
        data-open={open}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        onKeyDown={trapFocus}
      >
        <div className="mobile-menu__top">
          <span className="brand">
            <span className="brand__mark" aria-hidden="true">
              {profile.initials}
            </span>
          </span>
          <button
            ref={closeBtnRef}
            type="button"
            className="icon-btn"
            aria-label="Close menu"
            onClick={() => {
              setOpen(false);
              openBtnRef.current?.focus();
            }}
          >
            <Close />
          </button>
        </div>

        <nav aria-label="Mobile" className="mobile-menu__list">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className="mobile-menu__link"
              aria-current={activeHref === item.href ? "true" : undefined}
              onClick={() => setOpen(false)}
            >
              <span className="mono">{String(index + 1).padStart(2, "0")}</span>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mobile-menu__foot">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </>
  );
}

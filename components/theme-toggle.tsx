"use client";

import { Moon, Sun } from "./icons";

/**
 * Both icons are always rendered and CSS shows the right one from
 * <html data-theme>, so server and client markup match (no hydration flash).
 */
export default function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage can be blocked; the theme still switches for this visit */
    }
  }

  return (
    <button
      type="button"
      className="icon-btn"
      onClick={toggle}
      aria-label="Switch between light and dark theme"
      title="Switch theme"
    >
      <Sun className="theme-toggle__sun" />
      <Moon className="theme-toggle__moon" />
    </button>
  );
}

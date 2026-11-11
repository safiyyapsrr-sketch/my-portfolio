import AboutSection from "@/components/about-section";
import AchievementsSection from "@/components/achievements-section";
import ActivitiesSection from "@/components/activities-section";
import ContactSection from "@/components/contact-section";
import EducationSection from "@/components/education-section";
import ExperienceSection from "@/components/experience-section";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";
import ProjectsSection from "@/components/projects-section";
import RevealObserver from "@/components/reveal-observer";
import SkillsSection from "@/components/skills-section";
import Ticker from "@/components/ticker";

export default function Page() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <HeroSection />
        <Ticker />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <AchievementsSection />
        <ActivitiesSection />
        <ContactSection />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}

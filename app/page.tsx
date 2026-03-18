import Navbar from "../components/navbar";
import HeroSection from "../components/hero-section";
import AboutSection from "../components/about-section";
import SkillsSection from "../components/skills-section";
import ProjectsSection from "../components/projects-section";
import ExperienceSection from "../components/experience-section";
import EducationSection from "../components/education-section";
import CertificationsSection from "../components/certifications-section";
import ActivitiesSection from "../components/activities-section";
import ContactSection from "../components/contact-section";
import Footer from "../components/footer";

export default function Page() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <CertificationsSection />
      <ActivitiesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
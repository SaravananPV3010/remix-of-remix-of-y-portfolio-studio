import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TimelineSection from "@/components/TimelineSection";
import CredentialsSection from "@/components/CredentialsSection";
import ResumeSection from "@/components/ResumeSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import CustomCursor from "@/components/CustomCursor";
import ParallaxBackground from "@/components/ParallaxBackground";
import ParallaxDivider from "@/components/ParallaxDivider";

const Index = () => {
  return (
    <div className="min-h-screen bg-background scroll-smooth relative">
      <ParallaxBackground />
      <CustomCursor />
      <NavBar />
      <HeroSection />
      <ParallaxDivider text="ABOUT" direction="left" />
      <AboutSection />
      <ParallaxDivider variant="shapes" />
      <TimelineSection />
      <ParallaxDivider variant="line" />
      <ExperienceSection />
      <ParallaxDivider text="WORK" direction="right" />
      <ProjectsSection />
      <ParallaxDivider variant="shapes" />
      <SkillsSection />
      <ParallaxDivider variant="line" />
      <CredentialsSection />
      <ParallaxDivider text="TESTIMONIALS" direction="left" />
      <TestimonialsSection />
      <ParallaxDivider variant="shapes" />
      <ResumeSection />
      <ParallaxDivider variant="line" />
      <BlogSection />
      <ParallaxDivider text="CONTACT" direction="right" />
      <ContactSection />
    </div>
  );
};

export default Index;

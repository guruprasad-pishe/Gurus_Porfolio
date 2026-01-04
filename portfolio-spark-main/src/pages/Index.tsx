import { Suspense } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import EducationSection from '../components/EducationSection';
import ExperienceSection from '../components/ExperienceSection';
import ResumeSection from '../components/ResumeSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import AIAssistant from '../components/AIAssistant';
import ThreeBackground from '../components/ThreeBackground';
import AnimatedBackground from '../components/AnimatedBackground';

const Index = () => {
  return (
    <>
      {/* 3D Background */}
      <Suspense fallback={null}>
        <ThreeBackground />
      </Suspense>
      
      {/* 2D Animated Background */}
      <AnimatedBackground />
      
      {/* Navigation - Fixed at top with high z-index */}
      <Navigation />
      
      <main style={{ position: 'relative', zIndex: 1 }}>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ExperienceSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <Footer />
      <AIAssistant />
    </>
  );
};

export default Index;

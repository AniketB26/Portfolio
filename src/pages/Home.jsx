import React from 'react';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Project from '../components/Project';
import Skills from '../components/Skills';
import Header from '../components/Header';
import { portfolioData } from '../data/portfolioData';

const SectionDivider = () => (
  <div className="w-full px-4 relative">
    <div className="absolute left-[calc(-50vw+50%)] w-screen border-t border-dashed border-border" />
  </div>
);

import Contact from '../components/Contact';
import ScreenDisplay from '../components/ScreenDisplay';
import AboutMe from '../components/AboutMe';
import Certifications from '../components/Certifications';
import CompetitiveProgramming from '../components/CompetitiveProgramming';
import OpenSource from '../components/OpenSource';
import ResearchPublication from '../components/ResearchPublication';

export default function Home() {
  return (
    <>
      {/* Introduction & Summary (Hero Section) */}
      <div id="hero" className="relative">
        <Hero data={portfolioData.hero} />
      </div>

      <SectionDivider />

      {/* About Me Section */}
      <div id="about" className="relative">
        <AboutMe data={portfolioData.aboutMe} />
      </div>

      <SectionDivider />

      {/* Gallery Section */}
      <div id="screen-display" className="relative">
        <ScreenDisplay />
      </div>

      <SectionDivider />

      {/* Skills & Technologies Section */}
      <div id="skills" className="relative">
        <Skills data={portfolioData.skills} />
      </div>

      <SectionDivider />

      {/* Projects Section */}
      <div id="projects" className="relative">
        <Project data={portfolioData.projects} />
      </div>

      <SectionDivider />

      {/* Certifications & Courses Section */}
      <div id="certifications" className="relative">
        <Certifications data={portfolioData.certifications} />
      </div>

      <SectionDivider />

      {/* Experience (Internships & Work) Section */}
      <div id="experience" className="relative">
        <Experience data={portfolioData.experience} />
      </div>

      <SectionDivider />

      {/* Competitive Programming & Hackathons Section */}
      <div id="competitive-programming" className="relative">
        <CompetitiveProgramming data={portfolioData.competitiveProgramming} />
      </div>

      <SectionDivider />

      {/* Open Source Contributions */}
      <div id="open-source" className="relative">
        <OpenSource />
      </div>

      <SectionDivider />

      {/* Research Publication / Patent */}
      <div id="research" className="relative">
        <ResearchPublication data={portfolioData.researchPublication} />
      </div>

      <SectionDivider />

      {/* Contact Section */}
      <div id="contact" className="relative">
        <Contact />
      </div>
    </>
  );
}

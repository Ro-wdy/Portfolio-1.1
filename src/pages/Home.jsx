import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ExperienceSection from '../components/ExperienceSection';
import WritingSection from '../components/WritingSection';

const Home = () => {
  return (
    <main>
      <Hero />
      <AboutSection />
      <ExperienceSection />
      <WritingSection />
    </main>
  );
};

export default Home;

import React from 'react';
import SkillsList from './SkillsList';

const AboutSection = () => {
  return (
    <section className="section" id="about" style={{ borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        <div className="section-title-wrapper">
          <h2 className="section-title">About Me</h2>
        </div>
        
        <div className="about-wrapper">
          <div className="about-bio">
            <p>
              I am a Full-Stack Developer with a strong analytical foundation in Mathematics and Computer Science from Jomo Kenyatta University of Agriculture and Technology (JKUAT). My background helps me approach coding tasks with structural logic and creative problem-solving.
            </p>
            <p>
              I focus on building clean, performant, and secure web applications. I enjoy converting complex technical requirements into user-friendly digital products and constantly expanding my software engineering capabilities.
            </p>
            <p>
              I am currently seeking professional growth opportunities—including internships, volunteer engineering roles, and full-time development positions—where I can write high-quality code and deliver meaningful software solutions.
            </p>

            <h3 style={{ fontSize: '1.25rem', marginTop: '2.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>
              Education & Certifications
            </h3>

            <div className="education-line" style={{ borderTop: 'none', paddingTop: 0, marginTop: 0 }}>
              <h4 className="education-title">B.S. Mathematics & Computer Science</h4>
              <div className="education-school">Jomo Kenyatta University of Agriculture and Technology (JKUAT)</div>
              <div className="education-date">2023 &mdash; 2027</div>
            </div>

            <div className="education-line">
              <h4 className="education-title">AWS Certified Cloud Practitioner</h4>
              <div className="education-school">Amazon Web Services (AWS)</div>
              <div className="education-date">Credential</div>
            </div>

            <div className="education-line">
              <h4 className="education-title">Graphics Design Program</h4>
              <div className="education-school">ALX Africa</div>
              <div className="education-date">Credential</div>
            </div>
          </div>

          <SkillsList />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

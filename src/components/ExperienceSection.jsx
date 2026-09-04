import React from 'react';
import { Briefcase, MapPin, Calendar, Users } from 'lucide-react';
import { workExperience, communityExperience } from '../data/experienceData';

const ExperienceTimeline = ({ items }) => (
  <div className="experience-timeline">
    {items.map((job) => (
      <article key={job.id} className="experience-item">
        <div className="experience-marker">
          <span className={`experience-dot ${job.current ? 'experience-dot-current' : ''}`}></span>
        </div>

        <div className="experience-card">
          <div className="experience-header">
            <div>
              <h3 className="experience-role">{job.role}</h3>
              <div className="experience-company">
                <Briefcase size={15} className="text-accent" />
                <span>{job.company}</span>
              </div>
            </div>
            <div className="experience-meta">
              <span className="experience-period">
                <Calendar size={14} /> {job.period}
              </span>
              <span className="experience-location">
                <MapPin size={14} /> {job.location}
              </span>
            </div>
          </div>

          <ul className="experience-highlights">
            {job.highlights.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>

          <div className="project-tags">
            {job.tags.map((tag) => (
              <span key={tag} className="tag-pill">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    ))}
  </div>
);

const ExperienceSection = () => {
  return (
    <section className="section" id="experience" style={{ borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        <div className="section-title-wrapper">
          <h2 className="section-title">Work Experience</h2>
        </div>

        <ExperienceTimeline items={workExperience} />

        <div className="projects-tier" style={{ marginTop: '5rem' }}>
          <h3 className="projects-tier-title">
            <Users size={20} className="text-accent" /> Community
          </h3>
          <ExperienceTimeline items={communityExperience} />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

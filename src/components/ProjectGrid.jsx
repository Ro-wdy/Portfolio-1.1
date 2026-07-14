import React from 'react';
import ProjectCard from './ProjectCard';
import { selectedProjects, practiceProjects } from '../data/projectsData';
import { Code2, Award } from 'lucide-react';

const ProjectGrid = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="section-title-wrapper">
          <h2 className="section-title">My Projects</h2>
        </div>

        {/* Selected Work Tier */}
        <div className="projects-tier">
          <h3 className="projects-tier-title">
            <Award size={20} className="text-accent" /> Selected Work
          </h3>
          <div className="project-grid">
            {selectedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} isPractice={false} />
            ))}
          </div>
        </div>

        {/* Practice & Experiments Tier */}
        <div className="projects-tier" style={{ marginTop: '5rem' }}>
          <h3 className="projects-tier-title">
            <Code2 size={20} className="text-accent" /> Practice & Experiments
          </h3>
          <div className="practice-grid">
            {practiceProjects.map((project) => (
              <ProjectCard key={project.id} project={project} isPractice={true} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;

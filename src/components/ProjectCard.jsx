import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project, isPractice = false }) => {
  const { title, description, tech, codeLink, demoLink, image, wip } = project;

  if (isPractice) {
    return (
      <div className="practice-card">
        <h3 className="practice-title">{title}</h3>
        <p className="practice-desc">{description}</p>
        <div className="project-actions" style={{ marginTop: 'auto' }}>
          {demoLink && (
            <a 
              href={demoLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-btn project-btn-primary"
            >
              Demo <ExternalLink size={14} />
            </a>
          )}
          <a 
            href={codeLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="project-btn project-btn-secondary"
          >
            Code <Github size={14} />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="project-card">
      <div className="project-img-wrapper">
        {wip && <span className="wip-badge">WIP</span>}
        <img src={image} alt={title} className="project-img" loading="lazy" />
      </div>
      <div className="project-body">
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-tags">
          {tech.map((t) => (
            <span key={t} className="tag-pill">
              {t}
            </span>
          ))}
        </div>
        <div className="project-actions">
          {demoLink && (
            <a 
              href={demoLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-btn project-btn-primary"
            >
              Live Demo <ExternalLink size={14} />
            </a>
          )}
          <a 
            href={codeLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="project-btn project-btn-secondary"
            style={!demoLink ? { width: '100%', flex: 'none' } : {}}
          >
            View Code <Github size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

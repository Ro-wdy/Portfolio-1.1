import React from 'react';
import { skillsList } from '../data/skillsData';

const SkillsList = () => {
  return (
    <div className="skills-wrapper">
      <h3>Skills & Technologies</h3>
      <div className="skills-grid">
        {skillsList.map((skill) => (
          <span key={skill} className="tag-pill">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsList;

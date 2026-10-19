import React from 'react';
import { Mic, ExternalLink } from 'lucide-react';
import { sessionize } from '../data/talksData';

const SpeakingSection = () => {
  return (
    <section className="section" id="speaking" style={{ borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        <div className="section-title-wrapper" style={{ marginBottom: '2rem' }}>
          <h2 className="section-title" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            <Mic size={24} className="text-accent" /> Speaking
          </h2>
          <p className="speaking-intro">
            Talks and sessions I deliver at developer communities, meetups, and conferences.
          </p>
        </div>

        <a
          href={sessionize.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-btn project-btn-secondary"
          style={{ flex: 'none', textDecoration: 'none', display: 'inline-flex' }}
        >
          View speaker profile on Sessionize <ExternalLink size={14} />
        </a>
      </div>
    </section>
  );
};

export default SpeakingSection;

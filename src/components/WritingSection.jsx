import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';

const WritingSection = () => {
  return (
    <section className="section" id="writing" style={{ borderTop: '1px solid var(--border-light)', backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-title-wrapper" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2 className="section-title" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            <BookOpen size={24} className="text-accent" /> Articles & Technical Writing
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.75rem', maxWidth: '600px', fontSize: '1.05rem', lineHeight: '1.6' }}>
            I regularly publish technical articles, tutorials, and development insights on modern software engineering platforms.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', 
          gap: '2rem', 
          maxWidth: '800px', 
          margin: '0 auto' 
        }}>
          {/* Medium Card */}
          <div 
            className="project-card" 
            style={{ 
              backgroundColor: 'var(--bg-primary)',
              padding: '2.25rem',
              borderRadius: 'var(--radius-md)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '260px'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <span 
                  style={{ 
                    fontSize: '0.75rem', 
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    color: '#10131F',
                    backgroundColor: 'rgba(16, 19, 31, 0.06)',
                    padding: '0.35rem 0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    fontFamily: 'var(--font-mono)'
                  }}
                >
                  Medium
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  @mulerarhodah
                </span>
              </div>

              <h3 className="project-title" style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>
                Medium Publication
              </h3>
              <p className="project-desc" style={{ fontSize: '0.925rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                Read articles covering full-stack architectures, software design patterns, and engineering insights from my academic and practical work.
              </p>
            </div>

            <a 
              href="https://medium.com/@mulerarhodah" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-btn project-btn-primary"
              style={{ width: '100%', textDecoration: 'none', padding: '0.75rem' }}
            >
              Read on Medium <ExternalLink size={14} />
            </a>
          </div>

          {/* DEV.to Card */}
          <div 
            className="project-card" 
            style={{ 
              backgroundColor: 'var(--bg-primary)',
              padding: '2.25rem',
              borderRadius: 'var(--radius-md)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '260px'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <span 
                  style={{ 
                    fontSize: '0.75rem', 
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    color: '#2563EB',
                    backgroundColor: 'rgba(37, 99, 235, 0.06)',
                    padding: '0.35rem 0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    fontFamily: 'var(--font-mono)'
                  }}
                >
                  DEV.to
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  @mulera
                </span>
              </div>

              <h3 className="project-title" style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>
                DEV Community
              </h3>
              <p className="project-desc" style={{ fontSize: '0.925rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                Explore hands-on coding tutorials, quick development tips, and structural walkthroughs focusing on React, Django, and cloud computing.
              </p>
            </div>

            <a 
              href="https://dev.to/mulera" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-btn project-btn-secondary"
              style={{ width: '100%', textDecoration: 'none', padding: '0.75rem' }}
            >
              Read on DEV.to <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WritingSection;

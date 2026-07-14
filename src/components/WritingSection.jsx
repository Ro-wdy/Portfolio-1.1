import React from 'react';
import { BookOpen, ArrowUpRight, ExternalLink } from 'lucide-react';
import { articlesList } from '../data/writingData';

const WritingSection = () => {
  return (
    <section className="section" id="writing" style={{ borderTop: '1px solid var(--border-light)', backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-title-wrapper" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '3rem' }}>
          <h2 className="section-title" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            <BookOpen size={24} className="text-accent" /> Articles & Technical Writing
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.75rem', maxWidth: '600px', fontSize: '1.05rem' }}>
            I share insights on full-stack development, software engineering patterns, and design architecture on Medium and DEV.to.
          </p>
        </div>

        <div className="project-grid" style={{ marginBottom: '3rem' }}>
          {articlesList.map((article) => (
            <article 
              key={article.id} 
              className="project-card" 
              style={{ 
                backgroundColor: 'var(--bg-primary)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '1.75rem',
                height: '100%',
                position: 'relative'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span 
                    className="tag-pill" 
                    style={{ 
                      fontSize: '0.75rem', 
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      color: article.platform.toLowerCase() === 'medium' ? '#10131F' : '#2563EB',
                      backgroundColor: article.platform.toLowerCase() === 'medium' ? 'rgba(16, 19, 31, 0.05)' : 'rgba(37, 99, 235, 0.05)',
                      border: 'none',
                      padding: '0.25rem 0.6rem'
                    }}
                  >
                    {article.platform}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                    {article.readTime}
                  </span>
                </div>

                <h3 className="project-title" style={{ fontSize: '1.2rem', marginBottom: '0.75rem', lineHeight: '1.4' }}>
                  {article.title}
                </h3>
                <p className="project-desc" style={{ fontSize: '0.9rem', marginBottom: '1.5rem', flexGrow: 0 }}>
                  {article.description}
                </p>
              </div>

              <div>
                <div className="project-tags" style={{ marginBottom: '1.5rem' }}>
                  {article.tags.map((tag, idx) => (
                    <span key={idx} className="tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={article.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-btn project-btn-secondary"
                  style={{ width: '100%', textDecoration: 'none' }}
                >
                  Read Article <ArrowUpRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Profile CTAs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <a 
            href="https://medium.com/@mulerarhodah" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="project-btn project-btn-primary"
            style={{ padding: '0.75rem 1.75rem', textDecoration: 'none' }}
          >
            Follow on Medium <ExternalLink size={14} />
          </a>
          <a 
            href="https://dev.to/mulera" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="project-btn project-btn-secondary"
            style={{ padding: '0.75rem 1.75rem', textDecoration: 'none' }}
          >
            Read on DEV.to <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WritingSection;

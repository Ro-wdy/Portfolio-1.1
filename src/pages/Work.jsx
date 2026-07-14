import React, { useState } from 'react';
import { graphicsWork } from '../data/graphicsData';
import { ExternalLink, Figma, Compass, PenTool } from 'lucide-react';

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredWork = activeFilter === 'all' 
    ? graphicsWork 
    : graphicsWork.filter(item => item.category === activeFilter);

  const getThumbnailIcon = (category) => {
    switch (category) {
      case 'figma':
        return <Figma size={54} />;
      case 'miro':
        return <Compass size={54} />; // compass/sitemap metaphor
      case 'canva':
        return <PenTool size={54} />;
      default:
        return <ExternalLink size={54} />;
    }
  };

  return (
    <main className="section" style={{ minHeight: 'calc(100vh - 240px)' }}>
      <div className="container">
        <div className="work-intro">
          <div className="section-title-wrapper" style={{ textAlign: 'center' }}>
            <h1 className="section-title">UI/UX & Design Work</h1>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7' }}>
            A collection of user interfaces, prototypes, user journey mappings, and collaborative boards created using Figma, Miro, and Canva.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="work-tabs">
          <button 
            className={`work-tab-btn ${activeFilter === 'all' ? 'work-tab-btn-active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Work
          </button>
          <button 
            className={`work-tab-btn ${activeFilter === 'figma' ? 'work-tab-btn-active' : ''}`}
            onClick={() => setActiveFilter('figma')}
          >
            Figma
          </button>
          <button 
            className={`work-tab-btn ${activeFilter === 'miro' ? 'work-tab-btn-active' : ''}`}
            onClick={() => setActiveFilter('miro')}
          >
            Miro
          </button>
          <button 
            className={`work-tab-btn ${activeFilter === 'canva' ? 'work-tab-btn-active' : ''}`}
            onClick={() => setActiveFilter('canva')}
          >
            Canva
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="work-grid">
          {filteredWork.map((item) => (
            <div key={item.id} className="work-card">
              <div className={`work-thumbnail thumbnail-${item.category}`}>
                {getThumbnailIcon(item.category)}
              </div>
              <div className="work-card-body">
                <span className="tag-pill" style={{ width: 'fit-content', marginBottom: '0.75rem' }}>
                  {item.tagName}
                </span>
                <h3 className="work-card-title">{item.title}</h3>
                <p className="work-card-desc">{item.description}</p>
                <div className="work-card-actions">
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="work-card-link"
                  >
                    View Project <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Work;

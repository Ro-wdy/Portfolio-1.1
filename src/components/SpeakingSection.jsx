import React, { useEffect, useState } from 'react';
import { Mic, ExternalLink } from 'lucide-react';
import { sessionize, fallbackTalks } from '../data/talksData';

// Sessionize only offers a `document.write(...)` embed script, which cannot run
// inside a React app after the page has loaded. The endpoint allows cross-origin
// requests, so we fetch the script text, pull the HTML out of the
// document.write calls, and parse the session list ourselves.
const parseSessionizeScript = (scriptText) => {
  const chunks = [];
  const writeCall = /document\.write\('((?:\\.|[^'\\])*)'\);/g;
  let match;
  while ((match = writeCall.exec(scriptText)) !== null) {
    chunks.push(match[1]);
  }
  if (chunks.length === 0) return [];

  const html = chunks
    .join('')
    .replace(/\\u([0-9a-fA-F]{4})/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)))
    .replace(/\\"/g, '"')
    .replace(/\\'/g, "'")
    .replace(/\\\\/g, '\\');

  const doc = new DOMParser().parseFromString(html, 'text/html');
  return Array.from(doc.querySelectorAll('a.sz-item__title'))
    .map((anchor) => ({
      id: anchor.href.split('/').pop(),
      title: anchor.textContent.trim(),
      url: anchor.href
    }))
    .filter((talk) => talk.title && talk.url);
};

const SpeakingSection = () => {
  const [talks, setTalks] = useState(fallbackTalks);

  useEffect(() => {
    let cancelled = false;

    fetch(sessionize.embedUrl)
      .then((response) => (response.ok ? response.text() : Promise.reject(response.status)))
      .then((text) => {
        const liveTalks = parseSessionizeScript(text);
        if (!cancelled && liveTalks.length > 0) setTalks(liveTalks);
      })
      .catch(() => {
        // Keep the static fallback list.
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="section" id="speaking" style={{ borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        <div className="section-title-wrapper">
          <h2 className="section-title" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            <Mic size={24} className="text-accent" /> Speaking
          </h2>
          <p className="speaking-intro">
            Talks and sessions I deliver at developer communities, meetups, and conferences.
          </p>
        </div>

        <div className="talks-grid">
          {talks.map((talk) => (
            <a
              key={talk.id}
              href={talk.url}
              target="_blank"
              rel="noopener noreferrer"
              className="talk-card"
            >
              <span className="talk-card-label">Session</span>
              <h3 className="talk-card-title">{talk.title}</h3>
              <span className="talk-card-link">
                View session <ExternalLink size={14} />
              </span>
            </a>
          ))}
        </div>

        <div className="speaking-footer">
          <a
            href={sessionize.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn project-btn-secondary"
            style={{ flex: 'none', textDecoration: 'none' }}
          >
            View speaker profile on Sessionize <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SpeakingSection;

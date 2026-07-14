import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText } from 'lucide-react';

const Hero = () => {
  return (
    <section className="container">
      <div className="hero-wrapper">
        <div className="hero-info">
          <span className="hero-eyebrow">Full-Stack Developer · Nairobi, Kenya</span>
          <h1 className="hero-headline">
            Building functional, secure <span className="highlight-word">digital products</span> that make a difference.
          </h1>
          <p className="hero-subhead">
            Blending mathematical analysis with computer science engineering to construct high-performance web applications, interactive interfaces, and micro-services.
          </p>
          <div className="hero-ctas">
            <Link to="/projects" className="btn btn-primary">
              View My Work <ArrowRight size={16} />
            </Link>
            <a href="/Rhodah_Mulera.pdf" download className="btn btn-secondary">
              <FileText size={16} /> Download Resume
            </a>
          </div>
        </div>

        <div className="code-card">
          <div className="code-card-header">
            <div className="code-card-dots">
              <span className="code-card-dot dot-red"></span>
              <span className="code-card-dot dot-yellow"></span>
              <span className="code-card-dot dot-green"></span>
            </div>
            <span className="code-card-title">developer.js</span>
          </div>
          <div className="code-card-body">
            <div className="code-line">
              <span className="code-num">1</span>
              <span className="code-content"><span className="syntax-keyword">const</span> <span className="syntax-name">developer</span> = &#123;</span>
            </div>
            <div className="code-line">
              <span className="code-num">2</span>
              <span className="code-content">  name: <span className="syntax-string">"Rhodah Mulera"</span>,</span>
            </div>
            <div className="code-line">
              <span className="code-num">3</span>
              <span className="code-content">  role: <span className="syntax-string">"Full-Stack Developer"</span>,</span>
            </div>
            <div className="code-line">
              <span className="code-num">4</span>
              <span className="code-content">  education: <span className="syntax-string">"B.S. Math & CS (JKUAT)"</span>,</span>
            </div>
            <div className="code-line">
              <span className="code-num">5</span>
              <span className="code-content">  stack: [<span className="syntax-string">"React"</span>, <span className="syntax-string">"Node.js"</span>, <span className="syntax-string">"Django"</span>, <span className="syntax-string">"Python"</span>],</span>
            </div>
            <div className="code-line">
              <span className="code-num">6</span>
              <span className="code-content">  status: <span className="syntax-string">"Open to opportunities"</span></span>
            </div>
            <div className="code-line">
              <span className="code-num">7</span>
              <span className="code-content">&#125;;</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

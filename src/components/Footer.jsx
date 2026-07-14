import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="rm-logo">
            <span className="rm-logo-box">RM</span>
            <span>Rhodah Mulera</span>
          </div>
          <p className="footer-tagline">
            Mathematics & Computer Science student and Full-Stack Developer specializing in building high-quality, functional web applications.
          </p>
        </div>

        <div className="footer-nav">
          <h4>Navigate</h4>
          <ul className="footer-menu">
            <li><Link to="/" className="footer-menu-link">Home</Link></li>
            <li><Link to="/projects" className="footer-menu-link">Projects</Link></li>
            <li><Link to="/work" className="footer-menu-link">UI/UX Work</Link></li>
            <li><Link to="/contact" className="footer-menu-link">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-socials">
          <h4>Contact & Connect</h4>
          <div className="footer-info">
            <div className="footer-info-item">
              <Mail size={16} />
              <a href="mailto:mulerarhodah@gmail.com">mulerarhodah@gmail.com</a>
            </div>
            <div className="footer-info-item">
              <Phone size={16} />
              <a href="tel:+25474377132">+254 743 771 32</a>
            </div>
            <div className="footer-info-item">
              <MapPin size={16} />
              <span>Nairobi, Kenya</span>
            </div>
          </div>
          
          <div className="footer-social-row">
            <a href="https://github.com/Ro-wdy" target="_blank" rel="noopener noreferrer" className="social-circle-btn" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/rhodah-mulera-83972a1bb/" target="_blank" rel="noopener noreferrer" className="social-circle-btn" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="https://x.com/mulera_123" target="_blank" rel="noopener noreferrer" className="social-circle-btn" aria-label="X (Twitter)">
              <Twitter size={18} />
            </a>
            <a href="https://www.instagram.com/Mulera_rh" target="_blank" rel="noopener noreferrer" className="social-circle-btn" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61565051707341" target="_blank" rel="noopener noreferrer" className="social-circle-btn" aria-label="Facebook">
              <Facebook size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>&copy; {new Date().getFullYear()} Rhodah Mulera. All rights reserved.</p>
        <p>Built with React & Vite</p>
      </div>
    </footer>
  );
};

export default Footer;

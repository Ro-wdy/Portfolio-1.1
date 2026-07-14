import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="rm-logo" onClick={closeMenu}>
          <span className="rm-logo-box">RM</span>
          <span>Rhodah Mulera</span>
        </Link>

        {/* Desktop nav links */}
        <ul className={`nav-menu ${isOpen ? 'nav-menu-open' : ''}`}>
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
              onClick={closeMenu}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
              onClick={closeMenu}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/work" 
              className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
              onClick={closeMenu}
            >
              UI/UX Work
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Mobile menu toggle */}
        <button 
          className="menu-toggle" 
          onClick={toggleMenu} 
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

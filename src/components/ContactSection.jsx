import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram, Facebook, Send, Loader2 } from 'lucide-react';

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [mailtoFallback, setMailtoFallback] = useState(null);
  
  // Toast notification state
  const [toast, setToast] = useState({ show: false, message: '' });

  const showToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => {
      setToast({ show: false, message: '' });
    }, 3000);
  };

  const handleCopy = (text, type) => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text);
      showToast(`${type} copied to clipboard!`);
    } else {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
        showToast(`${type} copied to clipboard!`);
      } catch (err) {
        console.error('Fallback copy failed', err);
      }
      document.body.removeChild(textArea);
    }
  };

  const validateField = (name, value) => {
    let error = '';
    if (!value.trim()) {
      error = 'This field is required';
    } else if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      error = 'Please enter a valid email address';
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    
    // Clear errors on input change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {};
    Object.keys(formState).forEach((key) => {
      const error = validateField(key, formState[key]);
      if (error) {
        newErrors[key] = error;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    setSubmitStatus(null);
    setMailtoFallback(null);

    const templateParams = {
      from_name: formState.name,
      from_email: formState.email,
      subject: formState.subject,
      message: formState.message,
      to_email: 'mulerarhodah@gmail.com',
    };

    emailjs.send(
      'service_3wb0jbj', 
      'template_majr3oi', 
      templateParams, 
      'xj0gTe5gYm39W8c2J'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setSubmitStatus({
        type: 'success',
        message: "Thank you for your message! I'll get back to you soon."
      });
      setFormState({ name: '', email: '', subject: '', message: '' });
    })
    .catch((error) => {
      console.error('FAILED...', error);
      
      // Construct fallback mailto link
      const subjectStr = encodeURIComponent(formState.subject);
      const bodyStr = encodeURIComponent(
        `Name: ${formState.name}\n` +
        `Email: ${formState.email}\n\n` +
        `Message:\n${formState.message}`
      );
      const link = `mailto:mulerarhodah@gmail.com?subject=${subjectStr}&body=${bodyStr}`;
      
      setSubmitStatus({
        type: 'error',
        message: "There was an issue sending your message directly."
      });
      setMailtoFallback(link);
    })
    .finally(() => {
      setIsLoading(false);
    });
  };

  return (
    <section className="section">
      <div className="container">
        <div className="section-title-wrapper">
          <h2 className="section-title">Get In Touch</h2>
        </div>

        <div className="contact-grid">
          {/* Left Details */}
          <div className="contact-details-side">
            <h3 className="contact-info-title">Let's talk about your project</h3>
            <p className="contact-info-text">
              I am open to internships, volunteer roles, full-time positions, and collaborative freelance projects. Tap any contact method below to copy details or send an email.
            </p>

            <div className="contact-channels">
              <div 
                className="contact-channel-card" 
                onClick={() => handleCopy('mulerarhodah@gmail.com', 'Email')}
                title="Click to copy email"
              >
                <div className="contact-channel-icon">
                  <Mail size={20} />
                </div>
                <div className="contact-channel-details">
                  <h4>Email</h4>
                  <p>mulerarhodah@gmail.com</p>
                </div>
              </div>

              <div 
                className="contact-channel-card" 
                onClick={() => handleCopy('+254 743 771 32', 'Phone number')}
                title="Click to copy phone"
              >
                <div className="contact-channel-icon">
                  <Phone size={20} />
                </div>
                <div className="contact-channel-details">
                  <h4>Phone</h4>
                  <p>+254 743 771 32</p>
                </div>
              </div>

              <div className="contact-channel-card" style={{ cursor: 'default' }}>
                <div className="contact-channel-icon">
                  <MapPin size={20} />
                </div>
                <div className="contact-channel-details">
                  <h4>Location</h4>
                  <p>Nairobi, Kenya</p>
                </div>
              </div>
            </div>

            <div className="social-links-side">
              <h4 className="social-header">Follow & Connect</h4>
              <div className="social-row">
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

          {/* Right Contact Form */}
          <div className="contact-form-box">
            <h3 className="form-title">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <div className="form-row">
                <div className="form-group-input">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Your Name"
                    className={`form-input ${errors.name ? 'error' : ''}`}
                    required
                  />
                  {errors.name && <span className="field-error-msg">{errors.name}</span>}
                </div>

                <div className="form-group-input">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Your Email"
                    className={`form-input ${errors.email ? 'error' : ''}`}
                    required
                  />
                  {errors.email && <span className="field-error-msg">{errors.email}</span>}
                </div>
              </div>

              <div className="form-group-input">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Subject"
                  className={`form-input ${errors.subject ? 'error' : ''}`}
                  required
                />
                {errors.subject && <span className="field-error-msg">{errors.subject}</span>}
              </div>

              <div className="form-group-input">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Your Message"
                  rows={5}
                  className={`form-input ${errors.message ? 'error' : ''}`}
                  required
                ></textarea>
                {errors.message && <span className="field-error-msg">{errors.message}</span>}
              </div>

              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={isLoading}
                style={{ width: '100%', marginTop: '0.5rem' }}
              >
                {isLoading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" style={{ animation: 'spin 1s linear infinite' }} /> Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </button>
            </form>

            {submitStatus && (
              <div className={`form-message-alert ${submitStatus.type}`}>
                {submitStatus.message}
                {mailtoFallback && (
                  <div style={{ marginTop: '0.5rem' }}>
                    Please{' '}
                    <a 
                      href={mailtoFallback} 
                      style={{ color: 'var(--accent-blue)', textDecoration: 'underline', fontWeight: 'bold' }}
                    >
                      click here to send via your email client
                    </a>.
                  </div>
                )}
              </div>
            )}

            <div className="form-status-badge">
              <span className="status-dot-blink"></span>
              Available for new projects
            </div>
          </div>
        </div>
      </div>

      {/* Floating Clipboard Copy Toast Notification */}
      <div className={`toast-notification ${toast.show ? 'toast-notification-show' : ''}`}>
        {toast.message}
      </div>
    </section>
  );
};

export default ContactSection;

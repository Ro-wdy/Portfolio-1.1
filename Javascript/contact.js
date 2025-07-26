// Contact form functionality with EmailJS
document.addEventListener('DOMContentLoaded', function() {
   
    emailjs.init('xj0gTe5gYm39W8c2J');

    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    const submitBtn = contactForm.querySelector('.submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show loading state
        setLoadingState(true);
        
        // Get form data
        const formData = new FormData(contactForm);
        const templateParams = {
            from_name: formData.get('name'),
            from_email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message'),
            to_email: 'mulerarhodah@gmail.com'
        };

        emailjs.send('service_3wb0jbj', 'template_majr3oi', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                showMessage('Thank you for your message! I\'ll get back to you soon.', 'success');
                contactForm.reset();
            })
            .catch(function(error) {
                console.log('FAILED...', error);
                
                const subject = encodeURIComponent(templateParams.subject);
                const body = encodeURIComponent(
                    `Name: ${templateParams.from_name}\n` +
                    `Email: ${templateParams.from_email}\n\n` +
                    `Message:\n${templateParams.message}`
                );
                const mailtoLink = `mailto:mulerarhodah@gmail.com?subject=${subject}&body=${body}`;
                
                // Show fallback message
                showMessage(
                    'There was an issue sending your message directly. Please try again or ' +
                    '<a href="' + mailtoLink + '" style="color: #3b82f6; text-decoration: underline;">click here to send via your email client</a>.',
                    'error'
                );
            })
            .finally(function() {
                setLoadingState(false);
            });
    });

    function setLoadingState(loading) {
        if (loading) {
            submitBtn.disabled = true;
            btnText.style.display = 'none';
            btnLoading.style.display = 'inline-block';
        } else {
            submitBtn.disabled = false;
            btnText.style.display = 'inline-block';
            btnLoading.style.display = 'none';
        }
    }

    function showMessage(message, type) {
        formMessage.innerHTML = message;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';
        
        // Scroll to message
        formMessage.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'nearest' 
        });
        
        // Hide message after 10 seconds for success, keep error messages visible
        if (type === 'success') {
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 10000);
        }
    }

    // Alternative contact methods for better user experience
    function initAlternativeContact() {
        // Add click-to-copy functionality for email
        const emailElements = document.querySelectorAll('[href*="mailto"], .contact-info p:first-child');
        emailElements.forEach(element => {
            element.style.cursor = 'pointer';
            element.addEventListener('click', function(e) {
                if (!e.target.closest('a')) {
                    e.preventDefault();
                    copyToClipboard('mulerarhodah@gmail.com');
                    showToast('Email address copied to clipboard!');
                }
            });
        });

        // Add click-to-copy functionality for phone
        const phoneElements = document.querySelectorAll('.contact-info p:nth-child(2)');
        phoneElements.forEach(element => {
            element.style.cursor = 'pointer';
            element.addEventListener('click', function(e) {
                copyToClipboard('+254 743 771 32');
                showToast('Phone number copied to clipboard!');
            });
        });
    }

    function copyToClipboard(text) {
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(text);
        } else {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = text;
            textArea.style.position = 'fixed';
            textArea.style.left = '-999999px';
            textArea.style.top = '-999999px';
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            document.execCommand('copy');
            textArea.remove();
        }
    }

    function showToast(message) {
        // Create toast element
        const toast = document.createElement('div');
        toast.textContent = message;
        toast.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: #10b981;
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            z-index: 10000;
            font-weight: 500;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        
        document.body.appendChild(toast);
        
        // Animate in
        setTimeout(() => {
            toast.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            toast.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300);
        }, 3000);
    }

    // Initialize alternative contact methods
    initAlternativeContact();

    // Form validation
    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearFieldError);
    });

    function validateField(e) {
        const field = e.target;
        const value = field.value.trim();
        
        // Remove previous error styling
        field.classList.remove('error');
        
        if (!value) {
            showFieldError(field, 'This field is required');
            return false;
        }
        
        if (field.type === 'email' && !isValidEmail(value)) {
            showFieldError(field, 'Please enter a valid email address');
            return false;
        }
        
        return true;
    }

    function clearFieldError(e) {
        const field = e.target;
        field.classList.remove('error');
        const errorMsg = field.parentNode.querySelector('.field-error');
        if (errorMsg) {
            errorMsg.remove();
        }
    }

    function showFieldError(field, message) {
        field.classList.add('error');
        
        // Remove existing error message
        const existingError = field.parentNode.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }
        
        // Add new error message
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.textContent = message;
        errorDiv.style.cssText = `
            color: #dc2626;
            font-size: 0.875rem;
            margin-top: 0.25rem;
        `;
        
        field.parentNode.appendChild(errorDiv);
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Add error styling to CSS
    const errorStyle = document.createElement('style');
    errorStyle.textContent = `
        .contact-form input.error,
        .contact-form textarea.error {
            border-color: #dc2626 !important;
            box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1) !important;
        }
    `;
    document.head.appendChild(errorStyle);
});

// Instructions for setting up EmailJS
console.log(`
📧 EMAIL SETUP INSTRUCTIONS:

To enable email functionality, you need to set up EmailJS:

1. Go to https://www.emailjs.com/ and create a free account
2. Create a new email service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - {{from_name}}
   - {{from_email}}
   - {{subject}}
   - {{message}}
   - {{to_email}}
4. Replace the following in contact.js:
   - YOUR_PUBLIC_KEY with your EmailJS public key
   - YOUR_SERVICE_ID with your service ID
   - YOUR_TEMPLATE_ID with your template ID

Example template:
Subject: New message from {{from_name}} - {{subject}}
Body: 
Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

This message was sent from your portfolio contact form.
`);
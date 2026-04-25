import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { Mail, Link, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const { personal } = portfolioData;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);
    setSubmitSuccess(false);

    const accessKey = "1af1c82d-bbe6-4872-93cb-f729017dd145";

    const object = {
      ...formData,
      access_key: accessKey,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(object),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        setSubmitError(true);
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ padding: '10px' }} className="animate-fade-up">
      <h2 className="gradient-text-primary brand-font" style={styles.heading}>Get In Touch</h2>
      
      <div style={styles.content}>
        <div style={styles.leftPanel}>
          <h3 className="brand-font" style={styles.subHeading}>Let's talk about everything!</h3>
          <p style={styles.text}>
            Have an exciting project? Drop me an email or find me around the web. 👋
          </p>
          
          <div style={styles.infoBox}>
            <div className="interactive-icon-box" style={styles.infoItemContainer}>
              <div style={styles.iconCircle}><Mail size={20} color="var(--primary-blue)" /></div>
              <a href={`mailto:${personal.email}`} style={styles.link}>{personal.email}</a>
            </div>
            <div className="interactive-icon-box" style={styles.infoItemContainer}>
              <div style={styles.iconCircle}><Link size={20} color="var(--accent-purple)" /></div>
              <a href="https://github.com/RambihariPatel" target="_blank" rel="noreferrer" style={styles.link}>Github.com</a>
            </div>
            <div className="interactive-icon-box" style={styles.infoItemContainer}>
              <div style={styles.iconCircle}><MapPin size={20} color="#e53935" /></div>
              <span style={styles.textLight}>Remote / Available Worldwide</span>
            </div>
          </div>
        </div>

        <div className="premium-glass-card" style={styles.rightPanel}>
          <form style={styles.form} onSubmit={handleSubmit}>
            <div style={styles.inputGroup}>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your Name" style={styles.input} />
            </div>
            <div style={styles.inputGroup}>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Email Address" style={styles.input} />
            </div>
            <div style={styles.inputGroup}>
              <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" style={styles.input} />
            </div>
            <div style={styles.inputGroup}>
              <textarea name="message" value={formData.message} onChange={handleChange} required placeholder="Message" style={{...styles.input, ...styles.textarea}}></textarea>
            </div>
            <button type="submit" disabled={isSubmitting} className="modern-btn" style={{...styles.submitBtn, opacity: isSubmitting ? 0.7 : 1 }}>
              <Send size={18} /> {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitSuccess && (
              <div style={styles.successMessage} className="animate-fade-up">
                ✅ Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {submitError && (
              <div style={styles.errorMessage} className="animate-fade-up">
                ❌ Oops! Something went wrong. Please try again or email me directly.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

const styles = {
  heading: {
    fontSize: '38px',
    marginBottom: '40px',
    fontWeight: '700',
  },
  content: {
    display: 'flex',
    gap: '50px',
    flexWrap: 'wrap',
  },
  leftPanel: {
    flex: '1 1 300px',
  },
  rightPanel: {
    flex: '2 1 400px',
    padding: '40px',
  },
  subHeading: {
    fontSize: '28px',
    color: 'var(--text-dark)',
    marginBottom: '15px',
    fontWeight: '600'
  },
  text: {
    color: 'var(--text-light)',
    fontSize: '17px',
    marginBottom: '40px',
    lineHeight: '1.6'
  },
  textLight: {
    color: 'var(--text-dark)',
    fontSize: '16px',
    fontWeight: '500'
  },
  infoBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  infoItemContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  iconCircle: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: 'rgba(0,0,0,0.04)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  link: {
    color: 'var(--text-dark)',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '500'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  inputGroup: {
    width: '100%',
  },
  input: {
    width: '100%',
    padding: '16px 20px',
    border: '1px solid rgba(0,0,0,0.1)',
    borderRadius: '12px',
    fontSize: '15px',
    fontFamily: 'inherit',
    outline: 'none',
    backgroundColor: 'rgba(255,255,255,0.8)',
    transition: 'all 0.3s ease',
  },
  textarea: {
    height: '160px',
    resize: 'vertical',
  },
  submitBtn: {
    marginTop: '10px',
    alignSelf: 'flex-start',
  },
  successMessage: {
    marginTop: '15px',
    padding: '12px 15px',
    backgroundColor: 'rgba(76, 175, 80, 0.1)',
    color: '#388e3c',
    borderRadius: '8px',
    border: '1px solid rgba(76, 175, 80, 0.3)',
    fontSize: '14px',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
  },
  errorMessage: {
    marginTop: '15px',
    padding: '12px 15px',
    backgroundColor: 'rgba(244, 67, 54, 0.1)',
    color: '#d32f2f',
    borderRadius: '8px',
    border: '1px solid rgba(244, 67, 54, 0.3)',
    fontSize: '14px',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
  }
};

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiCheckCircle } from 'react-icons/fi';
import { FaFacebookF } from 'react-icons/fa';
import FadeIn from './FadeIn';

const ContactSection = () => {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    // Simulate async submit
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <FadeIn direction="up">
          <h2 className="section-title">GET IN TOUCH</h2>
          <p className="section-subtitle">Contact us for an order today</p>
        </FadeIn>

        <div className="contact-grid">
          {/* Info panel */}
          <FadeIn direction="right" delay={0.1}>
            <div className="contact-info">
              {[
                {
                  icon: <FiMapPin />,
                  label: 'Address',
                  content: <>Shop 3 Bourne Road, Saint Andrews Building,<br />Old Bradfield, Bulawayo, Zimbabwe</>,
                },
                {
                  icon: <FiPhone />,
                  label: 'Phone',
                  content: <a href="tel:0776043013">077 604 3013</a>,
                },
                {
                  icon: <FiMail />,
                  label: 'Email',
                  content: <a href="mailto:byronsmeats@prfe.co.zw">byronsmeats@prfe.co.zw</a>,
                },
                {
                  icon: <FaFacebookF />,
                  label: 'Facebook',
                  content: (
                    <a href="https://www.facebook.com/Byronsmeats/" target="_blank" rel="noreferrer">
                      /Byronsmeats
                    </a>
                  ),
                },
              ].map((item, i) => (
                <motion.div
                  className="contact-item"
                  key={item.label}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <div className="contact-icon-wrap">{item.icon}</div>
                  <div>
                    <strong>{item.label}</strong>
                    <p>{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn direction="left" delay={0.2}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <input
                  type="text" name="firstName" placeholder="First Name *"
                  value={form.firstName} onChange={handleChange} required
                />
                <input
                  type="text" name="lastName" placeholder="Last Name *"
                  value={form.lastName} onChange={handleChange} required
                />
              </div>
              <input
                type="email" name="email" placeholder="Email Address *"
                value={form.email} onChange={handleChange} required
              />
              <input
                type="tel" name="phone" placeholder="Phone Number *"
                value={form.phone} onChange={handleChange} required
              />
              <textarea
                rows="5" name="message" placeholder="Comments / Questions *"
                value={form.message} onChange={handleChange} required
              />
              <motion.button
                type="submit"
                className="btn-submit"
                disabled={loading}
                whileTap={{ scale: 0.97 }}
                whileHover={{ scale: 1.01 }}
              >
                {loading ? 'SENDING...' : 'SEND MESSAGE'}
              </motion.button>
            </form>
          </FadeIn>
        </div>
      </div>

      {/* Success toast */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            className="toast"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
          >
            <FiCheckCircle size={20} />
            <span>Message sent! We'll be in touch soon.</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ContactSection;

'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Send, CheckCircle } from 'lucide-react';
import styles from './InquirySection.module.scss';

const initialForm = {
  name: '', phone: '', email: '', dates: '', guests: '', message: '',
};

export default function InquirySection() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = 'Please enter your name.';
    if (!form.phone.trim())   e.phone   = 'Please enter your phone number.';
    if (!form.email.trim())   e.email   = 'Please enter your email address.';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Please enter a valid email.';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Focus first error field
      const firstError = Object.keys(newErrors)[0];
      document.getElementById(firstError)?.focus();
      return;
    }
    setLoading(true);
    // Simulate submission (replace with actual API call)
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="inquiry" className={styles.section}>
      {/* Section BG image */}
      <div className={styles.bgOverlay} aria-hidden="true" />

      <div className={styles.inner}>
        {/* Left: Info */}
        <motion.div
          className={styles.info}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-label" style={{ color: 'var(--color-gold-300)' }}>Send An Inquiry</p>
          <h2 className={styles.title}>Plan Your Perfect Escape</h2>
          <div className="gold-divider" />
          <p className={styles.subtitle}>
            We don&apos;t do online bookings — we do personalised experiences. Fill out the form and our team will respond within 24 hours with a tailor-made proposal just for you.
          </p>

          <div className={styles.contactOptions}>
            <a
              href="https://wa.me/919999999999?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20Artha%20Baliness%20Villa"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactBtn}
            >
              <MessageCircle size={18} strokeWidth={2} />
              <div>
                <span className={styles.contactLabel}>WhatsApp</span>
                <span className={styles.contactValue}>+91 9999 999 999</span>
              </div>
            </a>
            <a href="tel:+919999999999" className={styles.contactBtn}>
              <Phone size={18} strokeWidth={2} />
              <div>
                <span className={styles.contactLabel}>Call Directly</span>
                <span className={styles.contactValue}>+91 9999 999 999</span>
              </div>
            </a>
          </div>

          <div className={styles.infoNote}>
            <p>Open daily: 9 AM – 8 PM IST</p>
            <p>Response within 24 hours, typically much sooner</p>
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          className={styles.formWrapper}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          {submitted ? (
            <div className={styles.successState}>
              <CheckCircle size={48} className={styles.successIcon} />
              <h3 className={styles.successTitle}>Thank You, {form.name.split(' ')[0]}!</h3>
              <p className={styles.successText}>
                Your inquiry has been received. Our team will reach out to you within 24 hours to craft your perfect escape.
              </p>
              <button onClick={() => { setSubmitted(false); setForm(initialForm); }} className={styles.resetBtn}>
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className={styles.form}
              aria-label="Resort inquiry form"
              noValidate
            >
              <h3 className={styles.formTitle}>Inquiry Form</h3>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="name" className={styles.label}>
                    Full Name <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                    placeholder="Your full name"
                    autoComplete="name"
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && <span id="name-error" className={styles.error} role="alert">{errors.name}</span>}
                </div>
                <div className={styles.field}>
                  <label htmlFor="phone" className={styles.label}>
                    Phone Number <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                    placeholder="+91 9999 999 999"
                    autoComplete="tel"
                    aria-required="true"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                  />
                  {errors.phone && <span id="phone-error" className={styles.error} role="alert">{errors.phone}</span>}
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="email" className={styles.label}>
                  Email Address <span aria-hidden="true">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                  placeholder="your@email.com"
                  autoComplete="email"
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && <span id="email-error" className={styles.error} role="alert">{errors.email}</span>}
              </div>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="dates" className={styles.label}>Preferred Dates</label>
                  <input
                    id="dates"
                    name="dates"
                    type="text"
                    value={form.dates}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="e.g. 15 Aug – 18 Aug 2025"
                    autoComplete="off"
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="guests" className={styles.label}>Number of Guests</label>
                  <select
                    id="guests"
                    name="guests"
                    value={form.guests}
                    onChange={handleChange}
                    className={styles.input}
                  >
                    <option value="">Select</option>
                    {['1–2', '3–4', '5–6', '7–10', '10+'].map((g) => (
                      <option key={g} value={g}>{g} guests</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="message" className={styles.label}>Message or Special Requests</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className={styles.textarea}
                  rows={4}
                  placeholder="Tell us about the occasion, any special requests, or questions you have..."
                />
              </div>

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={loading}
                aria-live="polite"
              >
                {loading ? (
                  <>Sending…</>
                ) : (
                  <>
                    <Send size={15} strokeWidth={2} />
                    Send Inquiry
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

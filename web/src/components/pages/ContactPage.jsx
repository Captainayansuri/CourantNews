import React, { useState } from 'react';

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' };

export const ContactPage = () => {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = form.name.trim();
    const email = form.email.trim();
    const subject = form.subject.trim();
    const message = form.message.trim();

    if (!name || !email || !subject || !message) {
      setStatus({ type: 'error', message: 'Please complete all fields before sending your message.' });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }

    setStatus({ type: 'success', message: 'Thanks for reaching out. Your message is ready to be reviewed by our team.' });
    setForm(INITIAL_FORM);
  };

  const updateField = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
    if (status.message) setStatus({ type: '', message: '' });
  };

  return (
    <article className="gn-info-page animate-fade-in">
      <div className="gn-info-page-header">
        <p className="gn-info-eyebrow">The CourantNews newsroom</p>
        <h1>Contact CourantNews</h1>
        <p className="gn-info-intro">Have a question, story tip, correction, or feedback? We'd love to hear from you.</p>
      </div>

      <div className="gn-contact-layout">
        <div className="gn-contact-details">
          <section className="gn-contact-item">
            <h2>News Tips</h2>
            <p>Have information about a story or an important development? Send us a tip.</p>
          </section>
          <section className="gn-contact-item">
            <h2>Corrections</h2>
            <p>Found an error or something that needs clarification in one of our stories? Let us know.</p>
          </section>
          <section className="gn-contact-item">
            <h2>General Feedback</h2>
            <p>Have suggestions or feedback about CourantNews? We welcome your thoughts.</p>
          </section>
          <a className="gn-contact-email" href="mailto:courantnews.in@gmail.com">courantnews.in@gmail.com</a>
        </div>

        <form className="gn-contact-form" onSubmit={handleSubmit} noValidate>
          <div className="gn-form-field">
            <label htmlFor="contact-name">Full Name</label>
            <input id="contact-name" name="name" type="text" value={form.name} onChange={updateField('name')} required />
          </div>
          <div className="gn-form-field">
            <label htmlFor="contact-email">Email Address</label>
            <input id="contact-email" name="email" type="email" value={form.email} onChange={updateField('email')} required />
          </div>
          <div className="gn-form-field">
            <label htmlFor="contact-subject">Subject</label>
            <input id="contact-subject" name="subject" type="text" value={form.subject} onChange={updateField('subject')} required />
          </div>
          <div className="gn-form-field">
            <label htmlFor="contact-message">Message</label>
            <textarea id="contact-message" name="message" rows="6" value={form.message} onChange={updateField('message')} required />
          </div>
          <button className="gn-contact-submit" type="submit">Send Message</button>
          {status.message && <p className={`gn-form-status ${status.type}`} role="status">{status.message}</p>}
        </form>
      </div>
    </article>
  );
};
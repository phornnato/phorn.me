import { useState } from "react";
import "./Contact.css";

const TG_TOKEN   = "8590531116:AAEG7fuLjVlNWi_Qlv8JOV7FIuvqG9UKWl4";
const TG_CHAT_ID = "5891944573";

const socials = [
  { label: "Telegram",  handle: "@PH_ahpoji",       href: "https://t.me/+855974303668",             icon: "✈️", color: "var(--blue2)"  },
  { label: "Email",     handle: "natophorn@gmail.com", href: "mailto:natophorn@gmail.com",        icon: "📬", color: "var(--cyan)"   },
  { label: "Phone",     handle: "097 4303 668",      href: "tel:0974303668",                      icon: "📞", color: "var(--indigo)" },
  { label: "Location",  handle: "Phnom Penh, Cambodia", href: "#",                                icon: "📍", color: "var(--violet)" },
];

export default function Contact() {
  const [form, setForm]     = useState({ name: "", email: "", subject: "", msg: "" });
  const [status, setStatus] = useState(null); // null | "sending" | "sent" | "error"

  const handleChange = e =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.name || !form.msg) return;
    setStatus("sending");

    const text =
      `📩 *New Portfolio Message*\n\n` +
      `👤 *Name:* ${form.name}\n` +
      `📧 *Email:* ${form.email || "—"}\n` +
      `📌 *Subject:* ${form.subject || "—"}\n\n` +
      `💬 *Message:*\n${form.msg}`;

    try {
      const res = await fetch(
        `https://api.telegram.org/bot${TG_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id:    TG_CHAT_ID,
            text,
            parse_mode: "Markdown",
          }),
        }
      );
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", subject: "", msg: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="contact-page">
      <div className="orb orb-1" />
      <div className="orb orb-2" />

      <section className="contact-hero">
        <span className="tag tag-cyan">contact</span>
        <h1 className="contact-title">
          Let's <span className="gradient-text">Work Together</span> 🤝
        </h1>
        <p className="contact-sub">
          Have a project in mind, want to collaborate, or just say hello?
          Drop a message — it goes straight to my Telegram. I reply fast! 🚀
        </p>
      </section>

      <section className="contact-layout">
        {/* Form */}
        <div className="form-wrap">
          {status === "sent" ? (
            <div className="success-msg glass">
              <span className="success-emoji">🎉</span>
              <h3>Message Sent!</h3>
              <p>Your message was delivered directly to Sophorn's Telegram. Expect a reply soon!</p>
              <button className="btn btn-outline" onClick={() => setStatus(null)}>
                Send Another
              </button>
            </div>
          ) : (
            <form className="contact-form glass" onSubmit={handleSubmit} noValidate>
              <h2 className="form-title">Send a Message</h2>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    id="name" name="name" type="text"
                    placeholder="John Smith"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    id="email" name="email" type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject" name="subject" type="text"
                  placeholder="Project inquiry, collaboration, hiring..."
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="msg">Message *</label>
                <textarea
                  id="msg" name="msg"
                  rows={6}
                  placeholder="Tell me what you have in mind..."
                  value={form.msg}
                  onChange={handleChange}
                  required
                />
              </div>

              {status === "error" && (
                <p className="form-error">Something went wrong. Please try again or contact directly via Telegram.</p>
              )}

              <button
                type="submit"
                className="btn btn-primary submit-btn"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending... 📡" : "Send Message 🚀"}
              </button>
            </form>
          )}
        </div>

        {/* Sidebar */}
        <aside className="contact-aside">
          <div className="aside-card glass">
            <h3 className="aside-title">Get in Touch</h3>
            <div className="socials-list">
              {socials.map(({ label, handle, href, icon, color }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="social-item glass"
                  style={{ "--sc": color }}
                >
                  <span className="social-icon">{icon}</span>
                  <div>
                    <div className="social-label">{label}</div>
                    <div className="social-handle">{handle}</div>
                  </div>
                  <span className="social-arrow">→</span>
                </a>
              ))}
            </div>
          </div>

          <div className="aside-card glass">
            <h3 className="aside-title">Availability</h3>
            <div className="avail-row">
              <span className="badge-dot" />
              <span className="avail-text">Open to Full-Time &amp; Freelance</span>
            </div>
            <p className="avail-note">
              Best for: Web Apps, Full-Stack Dev, API Integration, Mobile Apps, Enterprise Systems 🎯
            </p>
          </div>

          <div className="aside-card glass">
            <h3 className="aside-title">Location</h3>
            <p className="avail-note" style={{ marginTop: 0 }}>
              📍 Sangkat Tonle Bassac, Khan Chamkarmon,<br />
              Phnom Penh, Cambodia
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}


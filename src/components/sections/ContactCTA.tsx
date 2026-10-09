import { useState } from 'react';
import {
  Send,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  GraduationCap,
  ArrowUpRight,
} from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const CAMPUS_AMBASSADOR_URL =
  'https://forms.gle/Teq1RQv26vB2brEU9';

export default function ContactCTA() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/submit_contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          organization: form.organization,
          message: form.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch {
      alert('A network error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="section-padding bg-brand-black relative overflow-hidden noise-overlay"
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-brand-primary" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(230,57,70,0.08)_0%,transparent_60%)]" />

      <div className="container-max relative">
        {/* Section heading */}
        <div
          ref={ref}
          className={`reveal ${visible ? 'visible' : ''} text-center mb-14`}
        >
          <p className="font-display font-medium text-sm uppercase tracking-widest text-brand-primary mb-3">
            Let's Talk
          </p>

          <h2 className="heading-display text-white text-4xl md:text-6xl lg:text-7xl mb-4">
            Let's Build{' '}
            <span className="text-brand-primary">What's Next</span>
          </h2>

          <p className="font-body text-white/60 text-lg max-w-2xl mx-auto">
            Have an idea for an event, program, or partnership? We'd love to
            hear from you. Let's create something great together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Contact information + Campus Ambassador CTA */}
          <div className="lg:col-span-2 space-y-6">
            {[
              {
                icon: Mail,
                label: 'Email Us',
                value: 'whybangladesh.info@gmail.com',
              },
              {
                icon: Phone,
                label: 'Call Us',
                value: '+880 1754-080399',
              },
              {
                icon: MapPin,
                label: 'Visit Us',
                value: 'Dhaka, Bangladesh',
              },
            ].map((info) => {
              const Icon = info.icon;

              return (
                <div key={info.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand-primary/10 border border-brand-primary/20 flex-shrink-0">
                    <Icon size={20} className="text-brand-primary" />
                  </div>

                  <div>
                    <p className="font-display font-bold text-sm uppercase tracking-wide text-white mb-1">
                      {info.label}
                    </p>

                    <p className="font-body text-white/50 text-sm">
                      {info.value}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Campus Ambassador application card */}
            <div className="relative overflow-hidden rounded-2xl border border-brand-primary/25 bg-white/[0.03] p-5 mt-8 group transition-all duration-300 hover:border-brand-primary/50 hover:bg-white/[0.05]">
              <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-brand-primary/10 blur-2xl pointer-events-none" />

              <div className="relative">
                <div className="w-11 h-11 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center mb-4">
                  <GraduationCap
                    size={23}
                    className="text-brand-primary"
                    strokeWidth={1.8}
                  />
                </div>

                <h3 className="font-display font-bold text-xl text-white mb-2">
                  Become a Campus Ambassador
                </h3>

                <p className="font-body text-white/55 text-sm leading-relaxed mb-5">
                  Represent Why Bangladesh on your campus, connect with
                  ambitious students, and help bring meaningful initiatives
                  to your university.
                </p>

                <a
                  href={CAMPUS_AMBASSADOR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/button inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-primary px-5 py-3.5 font-display font-bold text-sm text-white transition-all duration-300 hover:shadow-[0_8px_30px_rgba(230,57,70,0.25)] hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black"
                >
                  Apply for Campus Ambassador

                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
                  />
                </a>

                <p className="font-body text-white/30 text-xs text-center mt-3">
                  Application form opens in a new tab.
                </p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="rounded-2xl border border-brand-primary/30 bg-brand-primary/5 p-10 text-center flex flex-col items-center justify-center min-h-[300px]">
                <CheckCircle2
                  size={48}
                  className="text-brand-primary mb-4"
                />

                <h3 className="font-display font-bold text-2xl text-white mb-2">
                  Message Sent
                </h3>

                <p className="font-body text-white/60 text-base mb-6">
                  Thank you for reaching out. We'll get back to you within
                  48 hours.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      name: '',
                      email: '',
                      organization: '',
                      message: '',
                    });
                  }}
                  className="btn-outline-dark text-xs"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="font-display font-medium text-xs uppercase tracking-wide text-white/60 mb-2 block"
                    >
                      Name
                    </label>

                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="input-dark"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="font-display font-medium text-xs uppercase tracking-wide text-white/60 mb-2 block"
                    >
                      Email
                    </label>

                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="input-dark"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-organization"
                    className="font-display font-medium text-xs uppercase tracking-wide text-white/60 mb-2 block"
                  >
                    Organization
                  </label>

                  <input
                    id="contact-organization"
                    type="text"
                    value={form.organization}
                    onChange={(e) =>
                      setForm({ ...form, organization: e.target.value })
                    }
                    className="input-dark"
                    placeholder="University, NGO, or company"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="font-display font-medium text-xs uppercase tracking-wide text-white/60 mb-2 block"
                  >
                    Message
                  </label>

                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="input-dark resize-none"
                    placeholder="Tell us about your idea or partnership..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full justify-center group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}

                  {!isSubmitting && (
                    <Send
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
import { useState } from 'react';
import { Send, Mail, Phone, MapPin, CheckCircle2, Clock } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

export default function ContactPage() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', organization: '', message: '' });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send data to our custom PHP backend
      const response = await fetch('/api/submit_contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
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
        alert('Something went wrong. Please check your Access Key and try again.');
      }
    } catch (error) {
      alert('A network error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, label: 'Email Us', value: 'whybangladesh.info@gmail.com' },
    { icon: Phone, label: 'Call Us', value: '+880 1754-080399' },
    { icon: MapPin, label: 'Visit Us', value: 'Dhaka, Bangladesh' },
    { icon: Clock, label: 'Response Time', value: 'Within 48 hours' },
  ];

  return (
    <div className="pt-24">
      {/* Hero */}
      <section
        className="section-padding relative overflow-hidden grad-flow"
        style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #f4f4f5 100%)',
          backgroundSize: '300% 300%',
        }}
      >
        <div className="container-max">
          <div ref={ref} className={`reveal ${visible ? 'visible' : ''} text-center`}>
            <p className="font-heading font-medium text-xs uppercase tracking-[0.25em] text-brand-primary mb-4">Get in Touch</p>
            <h1 className="font-heading font-bold text-brand-black text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              Let's Create <span className="text-brand-primary">Something Great</span>
            </h1>
            <p className="font-body text-ink-600 text-xl leading-relaxed max-w-2xl mx-auto">
              Whether you have a fully-formed idea or just a spark of one, we'd love to hear from you. Every great event
              starts with a conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="section-padding bg-ink-50">
        <div className="container-max grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact info cards */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <div key={info.label} className="flex items-start gap-4 card-base p-6 hover:border-brand-primary/30 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand-primary/10 border border-brand-primary/20 flex-shrink-0 group-hover:bg-brand-primary/20 group-hover:scale-110 transition-all duration-300">
                    <Icon size={20} className="text-brand-primary" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-sm uppercase tracking-wide text-brand-black mb-1">{info.label}</p>
                    <p className="font-body text-ink-500 text-sm">{info.value}</p>
                  </div>
                </div>
              );
            })}
            {/* Social */}
            <div className="card-base p-6">
              <p className="font-display font-bold text-sm uppercase tracking-wide text-brand-black mb-4">Follow Us</p>
              <div className="flex items-center gap-3">
                {['Facebook', 'Instagram', 'LinkedIn', 'YouTube'].map((social) => (
                  <a key={social} href="#" className="w-10 h-10 rounded-full border border-ink-200 flex items-center justify-center text-ink-500 text-xs font-display font-semibold transition-all duration-300 hover:border-brand-primary hover:text-brand-primary hover:bg-brand-primary/10" aria-label={social}>
                    {social[0]}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="rounded-2xl border border-brand-primary/30 bg-brand-primary/5 p-10 text-center flex flex-col items-center justify-center min-h-[400px]">
                <CheckCircle2 size={56} className="text-brand-primary mb-4" />
                <h3 className="font-display font-bold text-2xl text-brand-black mb-2">Message Sent</h3>
                <p className="font-body text-ink-500 text-base mb-6 max-w-sm">
                  Thank you for reaching out. We'll get back to you within 48 hours. Let's build something great together.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', organization: '', message: '' }); }}
                  className="btn-outline text-xs"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 card-base p-8">
                <h3 className="font-display font-bold text-xl text-brand-black mb-2">Send us a message</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="font-display font-medium text-xs uppercase tracking-wide text-ink-500 mb-2 block">Name <span className="text-brand-primary">*</span></label>
                    <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="input-base" placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="font-display font-medium text-xs uppercase tracking-wide text-ink-500 mb-2 block">Email <span className="text-brand-primary">*</span></label>
                    <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="input-base" placeholder="you@example.com" />
                  </div>
                </div>
                <div>
                  <label className="font-display font-medium text-xs uppercase tracking-wide text-ink-500 mb-2 block">Organization</label>
                  <input type="text" value={form.organization} onChange={(e) => setForm({ ...form, organization: e.target.value })} className="input-base" placeholder="University, NGO, or company" />
                </div>
                <div>
                  <label className="font-display font-medium text-xs uppercase tracking-wide text-ink-500 mb-2 block">Message <span className="text-brand-primary">*</span></label>
                  <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="input-base resize-none" placeholder="Tell us about your idea, partnership, or event..." />
                </div>
                <button type="submit" disabled={isSubmitting} className="btn-primary w-full justify-center group disabled:opacity-70 disabled:cursor-not-allowed">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <Send size={16} className="group-hover:translate-x-1 transition-transform" />}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}






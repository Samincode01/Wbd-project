import { ArrowRight } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { useRouter } from '@/router/Router';

export default function AboutPreview() {
  const { navigate } = useRouter();
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="section-padding bg-white relative noise-overlay">
      <div className="container-max">
        <div
          ref={ref}
          className={`reveal ${visible ? 'visible' : ''} grid grid-cols-1 lg:grid-cols-2 gap-16 items-center`}
        >
          {/* Left: Content */}
          <div>
            <p className="font-display font-medium text-sm uppercase tracking-widest text-brand-primary mb-3">
              Who We Are
            </p>
            <h2 className="heading-display text-brand-black text-4xl md:text-5xl lg:text-6xl mb-6">
              We don't just host events.{' '}
              <span className="text-brand-primary">We build movements.</span>
            </h2>
            <p className="font-body text-ink-500 text-lg leading-relaxed mb-6">
              Why Bangladesh was founded on a simple belief: that the right event,
              in the right place, with the right partners, can change the
              trajectory of a community — and eventually, a country.
            </p>
            <p className="font-body text-ink-400 text-base leading-relaxed mb-8">
              We work alongside universities and NGOs to design and deliver
              large-scale initiatives in robotics, STEM, leadership, social
              impact, and more — creating platforms where students and
              communities can discover what they're capable of.
            </p>
            <button onClick={() => navigate('about')} className="btn-primary group">
              Read Our Full Story
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right: Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="card-base p-8 text-center hover:border-brand-primary/30 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 group">
              <div className="font-display font-extrabold text-5xl md:text-6xl text-brand-primary mb-2 group-hover:scale-105 transition-transform">
                7
              </div>
              <p className="font-body text-ink-500 text-sm uppercase tracking-wide">Focus Areas</p>
            </div>
            <div className="card-base p-8 text-center hover:border-brand-primary/30 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 group mt-8">
              <div className="font-display font-extrabold text-5xl md:text-6xl text-brand-primary mb-2 group-hover:scale-105 transition-transform">
                12+
              </div>
              <p className="font-body text-ink-500 text-sm uppercase tracking-wide">Partner Organizations</p>
            </div>
            <div className="card-base p-8 text-center hover:border-brand-primary/30 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 group">
              <div className="font-display font-extrabold text-5xl md:text-6xl text-brand-primary mb-2 group-hover:scale-105 transition-transform">
                1000+
              </div>
              <p className="font-body text-ink-500 text-sm uppercase tracking-wide">Students Engaged</p>
            </div>
            <div className="card-base p-8 text-center hover:border-brand-primary/30 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 group mt-8">
              <div className="font-display font-extrabold text-5xl md:text-6xl text-brand-primary mb-2 group-hover:scale-105 transition-transform">
                1
              </div>
              <p className="font-body text-ink-500 text-sm uppercase tracking-wide">Shared Vision</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}






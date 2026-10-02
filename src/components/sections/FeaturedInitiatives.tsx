import { ArrowUpRight, MapPin, Calendar } from 'lucide-react';
import { events } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';
import { useRouter } from '@/router/Router';

export default function FeaturedInitiatives() {
  const { navigate } = useRouter();
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="section-padding bg-white relative noise-overlay">
      <div className="container-max">
        <div
          ref={ref}
          className={`reveal ${visible ? 'visible' : ''} flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6`}
        >
          <div>
            <p className="font-display font-medium text-sm uppercase tracking-widest text-brand-primary mb-3">
              Featured Work
            </p>
            <h2 className="heading-display text-brand-black text-4xl md:text-5xl lg:text-6xl">
              Featured <span className="text-brand-primary">Initiatives</span>
            </h2>
          </div>
          <p className="font-body text-ink-500 text-lg max-w-md">
            Flagship programs that showcase what's possible when universities,
            NGOs, and communities come together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {events
            .filter((e) => e.featured)
            .map((event) => (
              <div
                key={event.id}
                className="lg:col-span-8 group relative rounded-2xl border border-ink-200 bg-white overflow-hidden hover:border-brand-primary/30 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-500"
              >
                {/* Event image */}
                <div className="relative h-72 md:h-96 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  {/* Featured badge */}
                  <div className="absolute top-5 left-5 badge-base bg-brand-primary text-white">
                    Featured
                  </div>
                  {/* Focus area badge */}
                  <div className="absolute top-5 right-5 badge-base border border-white/20 bg-black/40 backdrop-blur-sm text-white/80">
                    Innovation
                  </div>
                  {/* Title overlay on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex items-center gap-4 mb-3 text-white/70 font-body text-sm">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} /> {event.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} /> {event.location}
                      </span>
                    </div>
                    <h3 className="heading-display text-white text-2xl md:text-3xl">
                      {event.title}
                    </h3>
                  </div>
                </div>

                <div className="p-8">
                  <p className="font-body text-ink-500 text-base leading-relaxed mb-5">
                    {event.description}
                  </p>

                  {/* Outcome highlight */}
                  <div className="border-l-2 border-brand-primary pl-4 mb-6 rounded-l-sm">
                    <p className="font-display font-bold text-xs uppercase tracking-widest text-brand-primary mb-1">
                      Standout Outcome
                    </p>
                    <p className="font-body text-ink-700 text-base">
                      {event.outcome}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-display font-medium text-xs uppercase tracking-widest text-ink-400 mb-1">
                        In partnership with
                      </p>
                      <p className="font-display font-bold text-brand-black">
                        {event.partner}
                      </p>
                    </div>
                    <button
                      onClick={() => navigate('events')}
                      className="flex items-center gap-2 font-display font-semibold text-sm text-brand-primary hover:gap-3 transition-all"
                    >
                      View Details
                      <ArrowUpRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}

          {/* Coming soon card */}
          <div className="lg:col-span-4 group relative rounded-2xl border border-dashed border-ink-200 bg-ink-50 p-8 flex flex-col justify-center items-center text-center hover:border-brand-primary/30 transition-all duration-500 min-h-[400px]">
            <div className="w-16 h-16 rounded-full border-2 border-dashed border-ink-300 flex items-center justify-center mb-6 group-hover:border-brand-primary/50 transition-colors">
              <span className="font-display font-extrabold text-2xl text-ink-300 group-hover:text-brand-primary/60 transition-colors">
                +
              </span>
            </div>
            <h3 className="font-display font-bold text-xl text-ink-700 mb-2">
              More Events Coming Soon
            </h3>
            <p className="font-body text-ink-400 text-sm leading-relaxed mb-6 max-w-xs">
              We're constantly building new initiatives. Check back as our
              portfolio grows — or partner with us to create the next one.
            </p>
            <button onClick={() => navigate('events')} className="btn-outline text-xs">
              View All Events
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}






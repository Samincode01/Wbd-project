import { useState } from 'react';
import { Calendar, MapPin, ArrowUpRight, Users, Filter } from 'lucide-react';
import { events, focusAreas } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';
import { useRouter } from '@/router/Router';

export default function EventsPage() {
  const { navigate } = useRouter();
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [filter, setFilter] = useState<string>('all');
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

  const filteredEvents = filter === 'all' ? events : events.filter((e) => e.focusArea === filter);
  const selectedEventData = events.find((e) => e.id === selectedEvent);

  return (
    <div className="pt-24">
      {/* Hero */}
      <section
        className="section-padding relative overflow-hidden grad-flow"
        style={{
          background: 'linear-gradient(135deg, #09090b 0%, #18181b 50%, #27272a 100%)',
          backgroundSize: '300% 300%',
        }}
      >
        <div className="container-max">
          <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
            <p className="font-heading font-medium text-xs uppercase tracking-[0.25em] text-brand-primary/80 mb-4">Our Work</p>
            <h1 className="font-heading font-bold text-white text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              Events & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary-light to-white">Initiatives</span>
            </h1>
            <p className="font-body text-white/65 text-xl leading-relaxed max-w-2xl">
              A showcase of the events, programs, and partnerships we've built with universities and NGOs across Bangladesh.
            </p>
          </div>
        </div>
      </section>

      {/* Filter bar */}
      <section className="bg-ink-50 border-y border-ink-200 sticky top-16 z-30 backdrop-blur-md bg-ink-50/95">
        <div className="container-max px-6 md:px-12 lg:px-20 py-4">
          <div className="flex items-center gap-2 overflow-x-auto">
            <Filter size={16} className="text-ink-400 flex-shrink-0" />
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full font-display font-medium text-xs uppercase tracking-wide whitespace-nowrap transition-all ${
                filter === 'all' ? 'bg-brand-primary text-white' : 'border border-ink-200 text-ink-500 hover:border-ink-300 hover:text-brand-black'
              }`}
            >
              All
            </button>
            {focusAreas.map((area) => (
              <button
                key={area.id}
                onClick={() => setFilter(area.id)}
                className={`px-4 py-2 rounded-full font-display font-medium text-xs uppercase tracking-wide whitespace-nowrap transition-all ${
                  filter === area.id ? 'bg-brand-primary text-white' : 'border border-ink-200 text-ink-500 hover:border-ink-300 hover:text-brand-black'
                }`}
              >
                {area.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events grid */}
      <section className="section-padding bg-ink-50">
        <div className="container-max">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-body text-ink-400 text-lg">No events in this focus area yet — but we're working on it.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event) => (
                <div
                  key={event.id}
                  className="group card-base overflow-hidden hover:border-brand-primary/30 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-500 cursor-pointer"
                  onClick={() => setSelectedEvent(event.id)}
                >
                  {/* Event image */}
                  <div className="relative h-48 overflow-hidden rounded-t-2xl">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    {event.featured && (
                      <div className="absolute top-3 left-3 badge-base bg-brand-primary text-white">Featured</div>
                    )}
                    <div className="absolute top-3 right-3 badge-base border border-white/20 bg-black/40 backdrop-blur-sm text-white/80">
                      {focusAreas.find((f) => f.id === event.focusArea)?.title}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3 text-ink-400 font-body text-xs">
                      <span className="flex items-center gap-1"><Calendar size={12} /> {event.date}</span>
                      <span className="flex items-center gap-1"><MapPin size={12} /> {event.location}</span>
                    </div>
                    <h3 className="font-display font-bold text-lg text-brand-black mb-2 group-hover:text-brand-primary transition-colors line-clamp-2">{event.title}</h3>
                    <p className="font-body text-ink-500 text-sm leading-relaxed line-clamp-2 mb-4">{event.description}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-ink-200">
                      <span className="flex items-center gap-1.5 font-body text-xs text-ink-400"><Users size={14} /> {event.partner}</span>
                      <ArrowUpRight size={18} className="text-ink-300 group-hover:text-brand-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </div>
                  </div>
                </div>
              ))}
              {/* Coming soon placeholder */}
              <div className="rounded-2xl border border-dashed border-ink-200 bg-white p-6 flex flex-col items-center justify-center text-center min-h-[300px] hover:border-brand-primary/30 transition-colors">
                <div className="w-14 h-14 rounded-full border-2 border-dashed border-ink-300 flex items-center justify-center mb-4">
                  <span className="font-display font-extrabold text-xl text-ink-300">+</span>
                </div>
                <h3 className="font-display font-bold text-ink-700 mb-1">More Coming Soon</h3>
                <p className="font-body text-ink-400 text-xs">New events are being planned right now.</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Event detail modal */}
      {selectedEventData && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 md:p-8" onClick={() => setSelectedEvent(null)}>
          <div className="bg-white rounded-2xl border border-ink-200 max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
            {/* Header image */}
            <div className="relative h-64 overflow-hidden rounded-t-2xl">
              <img src={selectedEventData.image} alt={selectedEventData.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center border border-white/20 bg-black/40 backdrop-blur-sm text-white hover:border-brand-primary hover:text-brand-primary transition-all"
              >
                ✕
              </button>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4 text-ink-400 font-body text-sm">
                <span className="flex items-center gap-1.5"><Calendar size={14} /> {selectedEventData.date}</span>
                <span className="flex items-center gap-1.5"><MapPin size={14} /> {selectedEventData.location}</span>
              </div>
              <h2 className="heading-display text-brand-black text-3xl mb-4">{selectedEventData.title}</h2>
              <p className="font-body text-ink-500 text-base leading-relaxed mb-6">{selectedEventData.description}</p>
              <div className="border-l-2 border-brand-primary pl-4 mb-6 rounded-l-sm">
                <p className="font-display font-bold text-xs uppercase tracking-widest text-brand-primary mb-1">Standout Outcome</p>
                <p className="font-body text-ink-700 text-base">{selectedEventData.outcome}</p>
              </div>
              <div className="card-base p-5 mb-6 bg-ink-50">
                <p className="font-display font-medium text-xs uppercase tracking-widest text-ink-400 mb-2">In Partnership With</p>
                <p className="font-display font-bold text-brand-black text-lg">{selectedEventData.partner}</p>
              </div>
              <div className="flex items-center gap-3">
                <button onClick={() => { setSelectedEvent(null); navigate('contact'); }} className="btn-primary text-xs">Partner With Us</button>
                <button onClick={() => setSelectedEvent(null)} className="btn-outline text-xs">Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}






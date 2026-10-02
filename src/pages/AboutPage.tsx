import { ArrowRight } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { useRouter } from '@/router/Router';

const values = [
  {
    title: 'Purpose-Driven',
    description: 'Every event we build serves a real community need — not just attendance numbers.',
    image: 'https://images.pexels.com/photos/99820/pexels-photo-99820.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    title: 'Community-First',
    description: 'We design with and for the people we serve. Students, volunteers, and communities are co-creators, not audiences.',
    image: 'https://images.pexels.com/photos/16934312/pexels-photo-16934312.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    title: 'Bold Execution',
    description: 'We take on ambitious ideas and deliver them with rigor. No half-measures, no generic templates.',
    image: 'https://images.pexels.com/photos/6152103/pexels-photo-6152103.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    title: 'Long-Term Vision',
    description: 'We measure success in lasting impact — students who go further, communities that grow stronger.',
    image: 'https://images.pexels.com/photos/32840777/pexels-photo-32840777.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

const missionCards = [
  {
    title: 'Our Mission',
    text: "To create events and programs that don't just fill seats — they change trajectories. We partner with institutions to build experiences that equip students and communities with skills, networks, and confidence to move Bangladesh forward.",
    image: 'https://images.pexels.com/photos/17184739/pexels-photo-17184739.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    title: 'Our Vision',
    text: 'A Bangladesh where every student has access to world-class opportunities — in robotics, leadership, culture, and beyond. We envision an ecosystem where local initiatives scale to national impact, and where Bangladeshi talent competes on the global stage.',
    image: 'https://images.pexels.com/photos/1683345/pexels-photo-1683345.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

const timeline = [
  { year: 'The Beginning', title: 'A Simple Question', description: 'Why Bangladesh? Why not? The question became a name, and the name became a mission — to prove that Bangladesh is a place where world-class events can happen.' },
  { year: 'Early Partnerships', title: 'Building the Network', description: 'We started by connecting with universities and NGOs who shared our belief that events can be more than gatherings — they can be launchpads.' },
  { year: 'Fibonacci Bangladesh', title: 'Our First Flagship', description: 'In partnership with IUB, we hosted a robotics and STEM competition that proved what was possible — a student advanced to compete in Italy.' },
  { year: "What's Next", title: 'Scaling the Vision', description: "Today, we're expanding across seven focus areas, building an ecosystem that turns local success into national transformation." },
];

export default function AboutPage() {
  const { navigate } = useRouter();
  const { ref: heroRef, visible: heroVisible } = useReveal<HTMLDivElement>();
  const { ref: valuesRef, visible: valuesVisible } = useReveal<HTMLDivElement>();
  const { ref: timelineRef, visible: timelineVisible } = useReveal<HTMLDivElement>();

  return (
    <div className="pt-24">
      {/* Hero — animated gradient, dark */}
      <section
        className="section-padding relative overflow-hidden grad-flow"
        style={{
          background: 'linear-gradient(135deg, #09090b 0%, #18181b 50%, #27272a 100%)',
          backgroundSize: '300% 300%',
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,80,90,0.18)_0%,transparent_60%)]" />
        <div className="container-max relative z-10">
          <div ref={heroRef} className={`reveal ${heroVisible ? 'visible' : ''} max-w-4xl`}>
            <p className="font-heading font-medium text-xs uppercase tracking-[0.25em] text-brand-primary/80 mb-4">About Us</p>
            <h1 className="font-heading font-bold text-white text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              We believe Bangladesh <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary-light to-white">deserves world-class events.</span>
            </h1>
            <p className="font-body text-white/65 text-xl leading-relaxed">
              Why Bangladesh is an event-hosting agency that partners with universities and NGOs to design and deliver
              large-scale student and community initiatives. We're not event planners — we're impact architects,
              building platforms where the next generation can discover what they're capable of.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision — images with levitate hover */}
      <section className="section-padding bg-ink-50">
        <div className="container-max grid grid-cols-1 md:grid-cols-2 gap-8">
          {missionCards.map((item) => (
            <div
              key={item.title}
              className="card-base overflow-hidden hover-levitate cursor-default"
            >
              <div className="relative h-48 overflow-hidden rounded-t-2xl">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h2 className="absolute bottom-4 left-6 font-heading font-bold text-white text-2xl">{item.title}</h2>
              </div>
              <div className="p-8">
                <p className="font-body text-ink-500 text-lg leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values — images with levitate hover */}
      <section
        className="section-padding relative overflow-hidden grad-flow"
        style={{
          background: 'linear-gradient(225deg, #fff7f7 0%, #fff0f0 40%, #ffe0e0 70%, #ffd0d0 100%)',
          backgroundSize: '300% 300%',
        }}
      >
        <div className="container-max">
          <div ref={valuesRef} className={`reveal ${valuesVisible ? 'visible' : ''} text-center mb-14`}>
            <p className="font-heading font-medium text-xs uppercase tracking-[0.25em] text-brand-primary mb-3">What Drives Us</p>
            <h2 className="font-heading font-bold text-brand-black text-4xl md:text-5xl lg:text-6xl leading-tight">Our <span className="text-brand-primary">Values</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="card-base overflow-hidden hover-levitate cursor-default">
                <div className="relative h-44 overflow-hidden rounded-t-2xl">
                  <img
                    src={value.image}
                    alt={value.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
                  <h3 className="absolute bottom-3 left-4 right-4 font-heading font-bold text-white text-base leading-tight">{value.title}</h3>
                </div>
                <div className="p-5">
                  <p className="font-body text-ink-500 text-sm leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div ref={timelineRef} className={`reveal ${timelineVisible ? 'visible' : ''} text-center mb-14`}>
            <p className="font-heading font-medium text-xs uppercase tracking-[0.25em] text-brand-primary mb-3">Our Journey</p>
            <h2 className="font-heading font-bold text-brand-black text-4xl md:text-5xl lg:text-6xl leading-tight">The <span className="text-brand-primary">Story</span></h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, i) => (
              <div key={i} className="relative flex gap-6 pb-12 last:pb-0 group">
                {i < timeline.length - 1 && <div className="absolute left-[27px] top-14 bottom-0 w-0.5 bg-ink-200" />}
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-brand-primary/10 border-2 border-brand-primary/30 flex-shrink-0 z-10 group-hover:bg-brand-primary/20 group-hover:border-brand-primary transition-all duration-300">
                  <span className="font-heading font-bold text-sm text-brand-primary">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className="pt-2">
                  <p className="font-heading font-medium text-xs uppercase tracking-widest text-brand-primary mb-2">{item.year}</p>
                  <h3 className="font-heading font-bold text-2xl text-brand-black mb-3">{item.title}</h3>
                  <p className="font-body text-ink-500 text-base leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="section-padding relative overflow-hidden grad-flow"
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0508 40%, #c1121f 80%, #e63946 100%)',
          backgroundSize: '300% 300%',
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,80,90,0.12)_0%,transparent_70%)]" />
        <div className="container-max text-center relative z-10">
          <h2 className="font-heading font-bold text-white text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
            Want to be part of <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary-light to-white">what's next?</span>
          </h2>
          <p className="font-body text-white/60 text-lg max-w-2xl mx-auto mb-8">
            Whether you're a university, NGO, sponsor, or student — there's a place for you in our ecosystem.
          </p>
          <button onClick={() => navigate('contact')} className="btn-primary group">
            Get in Touch
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}






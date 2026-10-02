import { partners } from '@/data/content';

export default function LogoMarquee() {
  const marqueeItems = [...partners, ...partners];

  return (
    <section className="bg-ink-50 border-y border-ink-200 py-12 overflow-hidden">
      <div className="container-max px-6 md:px-12 lg:px-20 mb-8">
        <p className="font-display font-medium text-sm uppercase tracking-widest text-ink-400 text-center">
          Trusted by universities, NGOs & organizations across Bangladesh
        </p>
      </div>

      <div className="marquee-container">
        <div className="flex animate-marquee gap-12 w-max">
          {marqueeItems.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex flex-col items-center gap-1 min-w-[160px] group cursor-default"
            >
              <div className="font-display font-bold text-2xl text-ink-300 grayscale transition-all duration-300 group-hover:text-brand-primary group-hover:grayscale-0">
                {partner.name}
              </div>
              <div className="font-body text-[10px] uppercase tracking-widest text-ink-300 transition-colors duration-300 group-hover:text-ink-500">
                {partner.type}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}






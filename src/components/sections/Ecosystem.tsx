import { useState } from 'react';
import { ecosystemStages } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';
import { Sparkles, Network, DoorOpen, Layers } from 'lucide-react';

const icons = [Sparkles, Network, Layers, DoorOpen, Layers];

export default function Ecosystem() {
  const [activeStage, setActiveStage] = useState(0);
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="section-padding bg-brand-black relative overflow-hidden noise-overlay">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-primary/5 to-transparent" />

      <div className="container-max relative">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''} text-center mb-16`}>
          <p className="font-display font-medium text-sm uppercase tracking-widest text-brand-primary mb-3">
            Our Vision
          </p>
          <h2 className="heading-display text-white text-4xl md:text-5xl lg:text-6xl mb-4">
            Ecosystem for National{' '}
            <span className="text-brand-primary">Transformation</span>
          </h2>
          <p className="font-body text-white/60 text-lg max-w-2xl mx-auto">
            Beyond individual events — a framework for building lasting,
            scalable impact across the nation.
          </p>
        </div>

        {/* Desktop: Connected flow diagram */}
        <div className="hidden md:flex items-stretch justify-center gap-2 mb-12">
          {ecosystemStages.map((stage, i) => {
            const Icon = icons[i];
            const isActive = activeStage === i;
            return (
              <div key={i} className="flex items-stretch">
                <button
                  onMouseEnter={() => setActiveStage(i)}
                  onClick={() => setActiveStage(i)}
                  className="group relative flex flex-col items-center"
                >
                  <div
                    className={`relative w-28 h-28 rounded-full flex items-center justify-center border-2 transition-all duration-400 ${
                      isActive
                        ? 'bg-brand-primary border-brand-primary scale-110 shadow-[0_8px_40px_rgba(230,57,70,0.4)]'
                        : 'bg-white/[0.03] border-white/15 hover:border-white/30'
                    }`}
                  >
                    <Icon
                      size={28}
                      className={`transition-colors ${isActive ? 'text-white' : 'text-white/40 group-hover:text-white/70'}`}
                    />
                    <span
                      className={`absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center font-display font-extrabold text-xs transition-all ${
                        isActive ? 'bg-white text-brand-primary' : 'bg-white/10 text-white/50'
                      }`}
                    >
                      {stage.letter}
                    </span>
                  </div>
                  <span
                    className={`mt-4 font-display font-bold text-sm uppercase tracking-wide transition-colors ${
                      isActive ? 'text-brand-primary' : 'text-white/50'
                    }`}
                  >
                    {stage.title}
                  </span>
                </button>
                {i < ecosystemStages.length - 1 && (
                  <div className="flex items-center px-1">
                    <div className={`h-0.5 w-8 rounded-full transition-colors duration-300 ${activeStage > i ? 'bg-brand-primary' : 'bg-white/15'}`} />
                    <div
                      className={`w-0 h-0 transition-all duration-300 ${
                        activeStage > i ? 'border-l-[6px] border-l-brand-primary' : 'border-l-[6px] border-l-white/15'
                      } border-y-[4px] border-y-transparent`}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Active stage detail */}
        <div className="hidden md:block max-w-2xl mx-auto text-center min-h-[100px]">
          {ecosystemStages.map((stage, i) => (
            <div
              key={i}
              className={`transition-all duration-500 ${
                activeStage === i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 absolute pointer-events-none'
              }`}
            >
              <h3 className="font-display font-bold text-2xl text-white mb-2">{stage.title}</h3>
              <p className="font-body text-white/60 text-lg leading-relaxed">{stage.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile: Stacked cards */}
        <div className="md:hidden space-y-4">
          {ecosystemStages.map((stage, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="flex gap-4 items-start rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-brand-primary/10 border border-brand-primary/20 flex-shrink-0">
                  <Icon size={22} className="text-brand-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-display font-extrabold text-xs text-brand-primary/50">{stage.letter}</span>
                    <h3 className="font-display font-bold text-lg text-white">{stage.title}</h3>
                  </div>
                  <p className="font-body text-white/50 text-sm leading-relaxed">{stage.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}






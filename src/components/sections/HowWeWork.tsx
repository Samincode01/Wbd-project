import { useState } from 'react';
import { Search, Handshake, Hammer, Users, Rocket } from 'lucide-react';
import { processSteps } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

const icons = [Search, Handshake, Hammer, Users, Rocket];

export default function HowWeWork() {
  const [activeStep, setActiveStep] = useState(0);
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="section-padding bg-white relative noise-overlay">
      <div className="container-max">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''} text-center mb-16`}>
          <p className="font-display font-medium text-sm uppercase tracking-widest text-brand-primary mb-3">
            Our Process
          </p>
          <h2 className="heading-display text-brand-black text-4xl md:text-5xl lg:text-6xl mb-4">
            How We <span className="text-brand-primary">Work</span>
          </h2>
          <p className="font-body text-ink-500 text-lg max-w-2xl mx-auto">
            A proven five-step approach that turns ideas into real-world impact.
          </p>
        </div>

        {/* Desktop: Interactive stepper */}
        <div className="hidden md:block">
          <div className="flex items-center justify-between mb-12 relative">
            <div className="absolute top-7 left-0 right-0 h-0.5 bg-ink-200 rounded-full">
              <div
                className="h-full bg-brand-primary rounded-full transition-all duration-500"
                style={{ width: `${(activeStep / (processSteps.length - 1)) * 100}%` }}
              />
            </div>

            {processSteps.map((step, i) => {
              const Icon = icons[i];
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(i)}
                  className="relative z-10 flex flex-col items-center gap-3 group"
                >
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                      activeStep >= i
                        ? 'bg-brand-primary border-brand-primary text-white'
                        : 'bg-white border-ink-200 text-ink-400'
                    } ${
                      activeStep === i
                        ? 'scale-110 shadow-[0_8px_30px_rgba(230,57,70,0.35)]'
                        : 'group-hover:border-ink-300'
                    }`}
                  >
                    <Icon size={22} />
                  </div>
                  <span
                    className={`font-display font-bold text-sm uppercase tracking-wide transition-colors ${
                      activeStep === i ? 'text-brand-primary' : 'text-ink-400 group-hover:text-ink-600'
                    }`}
                  >
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="max-w-3xl mx-auto text-center min-h-[140px]">
            {processSteps.map((step, i) => (
              <div
                key={step.number}
                className={`transition-all duration-500 ${
                  activeStep === i
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4 absolute pointer-events-none'
                }`}
              >
                <div className="flex items-center justify-center gap-3 mb-3">
                  <span className="font-display font-extrabold text-6xl text-brand-primary/15">
                    {step.number}
                  </span>
                </div>
                <h3 className="heading-display text-brand-black text-3xl mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-ink-500 text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Accordion-style cards */}
        <div className="md:hidden space-y-4">
          {processSteps.map((step, i) => {
            const Icon = icons[i];
            return (
              <div
                key={step.number}
                className={`rounded-2xl border bg-ink-50 p-5 transition-all duration-300 ${
                  activeStep === i ? 'border-brand-primary/40' : 'border-ink-200'
                }`}
              >
                <button
                  onClick={() => setActiveStep(activeStep === i ? -1 : i)}
                  className="flex items-center gap-4 w-full text-left"
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center border-2 flex-shrink-0 transition-all ${
                      activeStep === i
                        ? 'bg-brand-primary border-brand-primary text-white'
                        : 'border-ink-200 text-ink-400'
                    }`}
                  >
                    <Icon size={20} />
                  </div>
                  <div>
                    <span className="font-display font-extrabold text-sm text-brand-primary/40">
                      {step.number}
                    </span>
                    <h3 className="font-display font-bold text-lg text-brand-black">
                      {step.title}
                    </h3>
                  </div>
                </button>
                {activeStep === i && (
                  <p className="font-body text-ink-500 text-sm mt-3 pl-16 leading-relaxed animate-fade-in">
                    {step.description}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}






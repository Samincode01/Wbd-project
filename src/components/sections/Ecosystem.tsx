import { useState } from 'react';
import {
  Sparkles,
  Network,
  DoorOpen,
  Layers,
  Users,
  Globe2,
} from 'lucide-react';

import { ecosystemStages } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

const icons = [
  Sparkles,
  Network,
  Layers,
  DoorOpen,
  Users,
  Globe2,
];

export default function Ecosystem() {
  const [activeStage, setActiveStage] = useState(0);
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="section-padding bg-brand-black relative overflow-hidden noise-overlay">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-primary/5 to-transparent pointer-events-none" />

      <div className="container-max relative">

        {/* =====================================================
            HEADER
        ===================================================== */}
        <div
          ref={ref}
          className={`reveal ${
            visible ? 'visible' : ''
          } text-center mb-16`}
        >
          <p className="font-display font-medium text-sm uppercase tracking-widest text-brand-primary mb-3">
            Our Vision
          </p>

          <h2 className="heading-display text-white text-4xl md:text-5xl lg:text-6xl mb-4">
            Ecosystem for National{' '}
            <span className="text-brand-primary">
              Transformation
            </span>
          </h2>

          <p className="font-body text-white/60 text-lg max-w-2xl mx-auto">
            Bringing People, Ideas and Institutions Together for a Better Bangladesh
          </p>

          <div className='mt-4'>
            <p className="font-body text-slate-300 text-xl max-w-2xl mx-auto">
            Why Bangladesh believes meaningful national transformation happens when the right people, institutions, ideas, and opportunities come together. We build collaborative platforms that connect young people with academia, industry, experts, communities, and strategic partners to turn potential into long-term impact.
          </p>
          </div>
        </div>

        {/* =====================================================
            DESKTOP: CONNECTED FLOW
        ===================================================== */}
        <div className="hidden md:flex items-stretch justify-center gap-2 mb-12">
          {ecosystemStages.map((stage, i) => {
            /*
             * Safety fallback:
             * If there are more stages than icons, use the last icon
             * instead of passing undefined to React.
             */
            const Icon = icons[i] ?? Layers;

            const isActive = activeStage === i;

            return (
              <div
                key={stage.id ?? i}
                className="flex items-stretch"
              >
                {/* Stage */}
                <button
                  type="button"
                  onMouseEnter={() => setActiveStage(i)}
                  onFocus={() => setActiveStage(i)}
                  onClick={() => setActiveStage(i)}
                  className="group relative flex flex-col items-center focus:outline-none"
                  aria-label={`View ${stage.title}`}
                  aria-pressed={isActive}
                >
                  {/* Circle */}
                  <div
                    className={`
                      relative
                      w-28
                      h-28
                      rounded-full
                      flex
                      items-center
                      justify-center
                      border-2
                      transition-all
                      duration-400

                      ${
                        isActive
                          ? `
                            bg-brand-primary
                            border-brand-primary
                            scale-110
                            shadow-[0_8px_40px_rgba(230,57,70,0.4)]
                          `
                          : `
                            bg-white/[0.03]
                            border-white/15
                            hover:border-white/30
                          `
                      }

                      group-focus-visible:ring-2
                      group-focus-visible:ring-brand-primary
                      group-focus-visible:ring-offset-4
                      group-focus-visible:ring-offset-brand-black
                    `}
                  >
                    <Icon
                      size={28}
                      strokeWidth={1.8}
                      className={`
                        transition-colors
                        duration-300

                        ${
                          isActive
                            ? 'text-white'
                            : 'text-white/40 group-hover:text-white/70'
                        }
                      `}
                    />

                    {/* Letter / stage number */}
                    <span
                      className={`
                        absolute
                        -top-2
                        -right-2
                        w-7
                        h-7
                        rounded-full
                        flex
                        items-center
                        justify-center
                        font-display
                        font-extrabold
                        text-xs
                        transition-all

                        ${
                          isActive
                            ? 'bg-white text-brand-primary'
                            : 'bg-white/10 text-white/50'
                        }
                      `}
                    >
                      {stage.letter}
                    </span>
                  </div>

                  {/* Title */}
                  <span
                    className={`
                      mt-4
                      font-display
                      font-bold
                      text-sm
                      uppercase
                      tracking-wide
                      text-center
                      max-w-[130px]
                      transition-colors

                      ${
                        isActive
                          ? 'text-brand-primary'
                          : 'text-white/50'
                      }
                    `}
                  >
                    {stage.title}
                  </span>
                </button>

                {/* Connector */}
                {i < ecosystemStages.length - 1 && (
                  <div className="flex items-center px-1">
                    <div
                      className={`
                        h-0.5
                        w-8
                        rounded-full
                        transition-colors
                        duration-300

                        ${
                          activeStage > i
                            ? 'bg-brand-primary'
                            : 'bg-white/15'
                        }
                      `}
                    />

                    <div
                      className={`
                        w-0
                        h-0
                        transition-all
                        duration-300

                        ${
                          activeStage > i
                            ? 'border-l-[6px] border-l-brand-primary'
                            : 'border-l-[6px] border-l-white/15'
                        }

                        border-y-[4px]
                        border-y-transparent
                      `}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* =====================================================
            DESKTOP: ACTIVE STAGE DETAIL
        ===================================================== */}
        <div className="hidden md:block relative max-w-2xl mx-auto text-center min-h-[125px]">
          {ecosystemStages.map((stage, i) => (
            <div
              key={stage.id ?? i}
              className={`
                transition-all
                duration-500

                ${
                  activeStage === i
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4 absolute inset-x-0 top-0 pointer-events-none'
                }
              `}
            >
              <h3 className="font-display font-bold text-2xl text-white mb-2">
                {stage.title}
              </h3>

              <p className="font-body text-white/60 text-lg leading-relaxed">
                {stage.description}
              </p>
            </div>
          ))}
        </div>

        {/* =====================================================
            MOBILE: STACKED CARDS
        ===================================================== */}
        <div className="md:hidden space-y-4">
          {ecosystemStages.map((stage, i) => {
            const Icon = icons[i] ?? Layers;

            return (
              <div
                key={stage.id ?? i}
                className="
                  group
                  flex
                  gap-4
                  items-start
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-5

                  transition-all
                  duration-300

                  hover:border-brand-primary/30
                  hover:bg-white/[0.05]
                "
              >
                {/* Icon */}
                <div
                  className="
                    w-12
                    h-12
                    rounded-full
                    flex
                    items-center
                    justify-center
                    bg-brand-primary/10
                    border
                    border-brand-primary/20
                    flex-shrink-0

                    transition-all
                    duration-300

                    group-hover:bg-brand-primary
                    group-hover:border-brand-primary
                  "
                >
                  <Icon
                    size={22}
                    strokeWidth={1.8}
                    className="
                      text-brand-primary
                      transition-colors
                      duration-300
                      group-hover:text-white
                    "
                  />
                </div>

                {/* Content */}
                <div className="min-w-0">
                  <div className="flex items-start gap-2 mb-1">
                    <span className="font-display font-extrabold text-xs text-brand-primary/50 mt-1 shrink-0">
                      {stage.letter}
                    </span>

                    <h3 className="font-display font-bold text-lg text-white leading-tight">
                      {stage.title}
                    </h3>
                  </div>

                  <p className="font-body text-white/50 text-sm leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
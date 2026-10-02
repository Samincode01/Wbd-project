import {
  ArrowUpRight,
  BookOpen,
  Cpu,
  FlaskConical,
  HeartHandshake,
  Lightbulb,
  Users,
  type LucideIcon,
} from 'lucide-react';

import focusAreasJson from '@/data/focus-areas.json';
import { useReveal } from '@/hooks/useReveal';
import { useRouter } from '@/router/Router';

type FocusArea = {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
};

const focusAreas = focusAreasJson.focusAreas as FocusArea[];

const iconMap: Record<string, LucideIcon> = {
  cpu: Cpu,
  flask: FlaskConical,
  users: Users,
  'heart-handshake': HeartHandshake,
  lightbulb: Lightbulb,
  'book-open': BookOpen,
};

export default function FocusAreasPreview() {
  const { navigate } = useRouter();
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="section-padding bg-ink-50 relative">
      <div className="container-max">

        {/* Section heading */}
        <div
          ref={ref}
          className={`reveal ${
            visible ? 'visible' : ''
          } text-center mb-12 md:mb-14`}
        >
          <p className="font-display font-medium text-xs md:text-sm uppercase tracking-[0.2em] text-brand-primary mb-3">
            03 · Six Focus Sectors
          </p>

          <h2 className="heading-display text-brand-black text-4xl md:text-5xl lg:text-6xl mb-4">
            Focus <span className="text-brand-primary">Areas</span>
          </h2>

          <p className="font-body text-ink-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Six interconnected areas where we create meaningful
            opportunities, develop talent, and build measurable impact
            across Bangladesh.
          </p>
        </div>

        {/* Six equal cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {focusAreas.map((area, index) => {
            const Icon = iconMap[area.icon] ?? Cpu;

            return (
              <button
                key={area.id}
                type="button"
                onClick={() => navigate('focus-areas')}
                className="
                  group
                  relative
                  min-h-[290px]
                  h-full
                  overflow-hidden
                  rounded-sm
                  border
                  border-ink-200
                  border-t-[3px]
                  border-t-brand-primary
                  bg-white
                  text-left

                  flex
                  flex-col

                  transition-all
                  duration-500
                  ease-out

                  hover:-translate-y-1
                  hover:border-brand-primary/40
                  hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]

                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-brand-primary
                  focus-visible:ring-offset-2
                "
                style={{
                  transitionDelay: `${index * 60}ms`,
                }}
              >
                {/* Soft background glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-16
                    -top-16
                    h-40
                    w-40
                    rounded-full
                    bg-brand-primary/10
                    blur-3xl
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                <div className="relative flex h-full flex-col p-6 md:p-7">

                  {/* Top row */}
                  <div className="flex items-start justify-between mb-8">
                    <span
                      className="
                        font-display
                        font-extrabold
                        text-xs
                        tracking-[0.18em]
                        text-brand-primary
                      "
                    >
                      {area.number}
                    </span>

                    <div
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        bg-brand-primary/[0.07]
                        text-brand-primary
                        transition-all
                        duration-500
                        group-hover:bg-brand-primary
                        group-hover:text-white
                        group-hover:scale-105
                      "
                    >
                      <Icon size={19} strokeWidth={1.8} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      font-display
                      font-bold
                      text-xl
                      md:text-[21px]
                      leading-[1.15]
                      text-brand-black
                      max-w-[18rem]
                      transition-colors
                      duration-300
                      group-hover:text-brand-primary
                    "
                  >
                    {area.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      font-body
                      text-ink-500
                      text-sm
                      md:text-[15px]
                      leading-relaxed
                      mt-4
                      max-w-md
                    "
                  >
                    {area.description}
                  </p>

                  {/* Bottom action */}
                  <div className="mt-auto pt-7">
                    <span
                      className="
                        inline-flex
                        items-center
                        gap-2
                        font-display
                        font-semibold
                        text-xs
                        uppercase
                        tracking-[0.12em]
                        text-brand-primary
                        transition-all
                        duration-300
                        group-hover:gap-3
                      "
                    >
                      Explore area

                      <ArrowUpRight
                        size={15}
                        className="
                          transition-transform
                          duration-300
                          group-hover:translate-x-0.5
                          group-hover:-translate-y-0.5
                        "
                      />
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-10 md:mt-12">
          <button
            onClick={() => navigate('focus-areas')}
            className="btn-outline group"
          >
            Explore All Focus Areas

            <ArrowUpRight
              size={18}
              className="
                group-hover:translate-x-1
                group-hover:-translate-y-1
                transition-transform
              "
            />
          </button>
        </div>

      </div>
    </section>
  );
}
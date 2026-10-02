import {
  ArrowRight,
  BookOpen,
  Cpu,
  FlaskConical,
  Handshake,
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
  route: string;
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

export default function FocusAreasPage() {
  const { navigate } = useRouter();
  const { ref: heroRef, visible: heroVisible } =
    useReveal<HTMLDivElement>();

  return (
    <div className="pt-24">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section
        className="section-padding relative overflow-hidden grad-flow"
        style={{
          background:
            'linear-gradient(135deg, #09090b 0%, #18181b 50%, #27272a 100%)',
          backgroundSize: '300% 300%',
        }}
      >
        <div className="container-max">
          <div
            ref={heroRef}
            className={`reveal ${
              heroVisible ? 'visible' : ''
            }`}
          >
            <p className="font-heading font-medium text-xs uppercase tracking-[0.25em] text-brand-primary/80 mb-4">
              What We Do
            </p>

            <h1 className="font-heading font-bold text-white text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              Six Focus{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary-light to-white">
                Areas
              </span>
            </h1>

            <p className="font-body text-white/65 text-xl leading-relaxed max-w-2xl">
              We focus our work across six interconnected areas —
              creating meaningful opportunities for young people and
              measurable impact for communities across Bangladesh.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          SIX FOCUS AREAS
      ========================================================= */}
      <section className="section-padding bg-ink-50">
        <div className="container-max">

          {/* Section heading */}
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-brand-primary" />

              <span className="font-display font-bold text-xs uppercase tracking-[0.2em] text-brand-primary">
                Six Focus Sectors
              </span>
            </div>

            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-brand-black leading-tight">
              Make ideas matter.
              <br />
              <span className="text-brand-primary">
                Build impact that lasts.
              </span>
            </h2>

            <p className="font-body text-ink-500 text-base md:text-lg leading-relaxed mt-5 max-w-2xl">
              Each sector represents a practical pathway for
              developing talent, solving problems, and creating
              meaningful opportunities for Bangladesh's next generation.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {focusAreas.map((area, index) => (
              <FocusAreaCard
                key={area.id}
                area={area}
                index={index}
                onNavigate={() => navigate(area.route)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="section-padding bg-brand-black relative noise-overlay">
        <div className="container-max text-center">

          <p className="font-display font-semibold text-brand-primary text-xs uppercase tracking-[0.2em] mb-5">
            Build With Us
          </p>

          <h2 className="heading-display text-white text-4xl md:text-5xl lg:text-6xl mb-6">
            Which area will you{' '}
            <span className="text-brand-primary">
              help us build?
            </span>
          </h2>

          <p className="font-body text-white/60 text-lg max-w-2xl mx-auto mb-8">
            Every focus area needs partners, mentors, and champions.
            Find yours and let's make something happen.
          </p>

          <button
            onClick={() => navigate('contact')}
            className="btn-primary group"
          >
            Get Involved

            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </section>
    </div>
  );
}


/* =============================================================
   FOCUS AREA CARD
============================================================= */

function FocusAreaCard({
  area,
  index,
  onNavigate,
}: {
  area: FocusArea;
  index: number;
  onNavigate: () => void;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  const Icon = iconMap[area.icon] ?? Cpu;

  return (
    <article
      ref={ref}
      className={`
        reveal
        ${visible ? 'visible' : ''}

        group
        relative
        h-full
        min-h-[300px]

        overflow-hidden
        rounded-sm

        border
        border-ink-200

        bg-white

        transition-all
        duration-500
        ease-out

        hover:-translate-y-1
        hover:border-brand-primary/40
        hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)]

        focus-within:ring-2
        focus-within:ring-brand-primary/40
      `}
      style={{
        transitionDelay: `${index * 70}ms`,
      }}
    >
      {/* Green top accent */}
      <div className="absolute inset-x-0 top-0 h-[3px] bg-brand-primary" />

      {/* Subtle hover glow */}
      <div
        className="
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
          pointer-events-none
        "
      />

      {/* Card content */}
      <div className="relative flex h-full flex-col p-6 md:p-7">

        {/* Top row */}
        <div className="flex items-start justify-between gap-4 mb-8">

          {/* Number */}
          <span
            className="
              font-display
              font-extrabold
              text-sm
              tracking-[0.15em]
              text-brand-primary
            "
          >
            {area.number}
          </span>

          {/* Icon */}
          <div
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center

              rounded-full

              border
              border-brand-primary/15

              bg-brand-primary/[0.06]

              text-brand-primary

              transition-all
              duration-500

              group-hover:bg-brand-primary
              group-hover:text-white
              group-hover:scale-105
            "
          >
            <Icon size={20} strokeWidth={1.8} />
          </div>
        </div>

        {/* Title */}
        <h3
          className="
            font-display
            font-bold
            text-xl
            md:text-[22px]
            leading-[1.15]
            text-brand-black

            max-w-[17rem]

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
            text-sm
            md:text-[15px]
            leading-relaxed
            text-ink-500

            mt-4

            max-w-[31rem]
          "
        >
          {area.description}
        </p>

        {/* Bottom action */}
        <div className="mt-auto pt-8">
          <button
            type="button"
            onClick={onNavigate}
            aria-label={`See events related to ${area.title}`}
            className="
              group/action

              inline-flex
              items-center
              gap-2

              min-h-11

              font-display
              font-semibold
              text-xs
              uppercase
              tracking-[0.12em]

              text-brand-primary

              transition-all
              duration-300

              hover:gap-3

              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-brand-primary
              focus-visible:ring-offset-2
            "
          >
            Explore area

            <ArrowRight
              size={15}
              className="
                transition-transform
                duration-300
                group-hover/action:translate-x-1
              "
            />
          </button>
        </div>
      </div>
    </article>
  );
}
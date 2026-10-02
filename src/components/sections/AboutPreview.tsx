import {
  ArrowRight,
  BrainCircuit,
  Building2,
  ChartNoAxesCombined,
  ChevronRight,
  CircleCheck,
  Globe2,
  GraduationCap,
  Handshake,
  HeartHandshake,
  Lightbulb,
  Microscope,
  Palette,
  Rocket,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
  Wrench,
} from 'lucide-react';

import { useReveal } from '@/hooks/useReveal';
import { useRouter } from '@/router/Router';

const activities = [
  {
    title: 'Seminars',
    icon: GraduationCap,
  },
  {
    title: 'Workshops',
    icon: Wrench,
  },
  {
    title: 'Competitions',
    icon: Trophy,
  },
  {
    title: 'Robotics & Technology',
    icon: BrainCircuit,
  },
  {
    title: 'Sports Activities',
    icon: Trophy,
  },
  {
    title: 'Cultural Programs',
    icon: Palette,
  },
  {
    title: 'Climate & Social Initiatives',
    icon: Globe2,
  },
  {
    title: 'Economic & Entrepreneurship',
    icon: ChartNoAxesCombined,
  },
];

const summaryCards = [
  {
    title: 'What We Build',
    description:
      'Events, workshops, competitions, programs, collaborations, and opportunities that turn ideas into meaningful action.',
    icon: Rocket,
  },
  {
    title: 'Where We Focus',
    description:
      'Education, innovation, economy, climate, sports, culture, and the emerging areas shaping Bangladesh’s future.',
    icon: TargetIcon,
  },
  {
    title: 'Where We Want to Go',
    description:
      'Mentorship, industry access, strategic partnerships, and future funding pathways for ambitious young people.',
    icon: Globe2,
  },
];

export default function AboutPreview() {
  const { navigate } = useRouter();

  const { ref: introRef, visible: introVisible } =
    useReveal<HTMLDivElement>();

  const { ref: innovationRef, visible: innovationVisible } =
    useReveal<HTMLDivElement>();

  const { ref: activitiesRef, visible: activitiesVisible } =
    useReveal<HTMLDivElement>();

  const { ref: statementRef, visible: statementVisible } =
    useReveal<HTMLDivElement>();

  const { ref: summaryRef, visible: summaryVisible } =
    useReveal<HTMLDivElement>();

  const { ref: missionRef, visible: missionVisible } =
    useReveal<HTMLDivElement>();

  return (
    <section className="relative overflow-hidden bg-white noise-overlay">

      {/* =========================================================
          01 — INTRO
      ========================================================= */}
      <section className="section-padding pb-16 md:pb-20">
        <div className="container-max">
          <div
            ref={introRef}
            className={`
              reveal
              ${introVisible ? 'visible' : ''}
              grid
              grid-cols-1
              lg:grid-cols-[1.1fr_0.9fr]
              gap-12
              lg:gap-20
              items-center
            `}
          >
            {/* Left */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-10 bg-brand-primary" />

                <p className="font-display font-semibold text-xs uppercase tracking-[0.2em] text-brand-primary">
                  About Why Bangladesh
                </p>
              </div>

              <h2 className="heading-display text-brand-black text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-7">
                Creating Platforms
                <br />
                Where Ideas{' '}
                <span className="text-brand-primary">
                  Turn Into Action
                </span>
              </h2>

              <div className="space-y-5 max-w-2xl">
                <p className="font-body text-ink-500 text-lg leading-relaxed">
                  Why Bangladesh exists to create meaningful platforms
                  where young people can learn, compete, collaborate,
                  innovate, and discover what they are capable of.
                </p>

                <p className="font-body text-ink-400 text-base leading-relaxed">
                  We work with universities, NGOs, institutions, and
                  communities to design and deliver events, programs,
                  competitions, and initiatives across the areas that
                  matter to Bangladesh's future.
                </p>
              </div>

              <button
                onClick={() => navigate('about')}
                className="btn-primary group mt-8"
              >
                Discover Why Bangladesh

                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>

            {/* Right visual */}
            <div className="relative">
              <div className="relative rounded-2xl bg-brand-black overflow-hidden p-7 md:p-9">

                {/* Accent */}
                <div className="absolute top-0 left-0 w-24 h-1 bg-brand-primary" />

                <div className="absolute -right-20 -top-20 w-56 h-56 rounded-full bg-brand-primary/10 blur-3xl" />

                <div className="relative">
                  <p className="font-display text-xs uppercase tracking-[0.2em] text-brand-primary mb-8">
                    Our Approach
                  </p>

                  <div className="space-y-5">
                    <ApproachItem
                      number="01"
                      title="Create the platform"
                      description="Build meaningful spaces for learning, competition, creativity, and collaboration."
                    />

                    <ApproachItem
                      number="02"
                      title="Connect the right people"
                      description="Bring together students, institutions, mentors, partners, and communities."
                    />

                    <ApproachItem
                      number="03"
                      title="Turn participation into impact"
                      description="Design experiences that create value beyond the event itself."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================
          02 — INNOVATION FOCUS
      ========================================================= */}
      <section className="bg-ink-50 border-y border-ink-100">
        <div className="container-max py-16 md:py-20">
          <div
            ref={innovationRef}
            className={`
              reveal
              ${innovationVisible ? 'visible' : ''}
              grid
              grid-cols-1
              lg:grid-cols-[0.8fr_1.2fr]
              gap-10
              lg:gap-20
              items-start
            `}
          >
            {/* Label */}
            <div>
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-primary/10 text-brand-primary mb-5">
                <Lightbulb size={28} strokeWidth={1.7} />
              </div>

              <p className="font-display font-semibold text-xs uppercase tracking-[0.2em] text-brand-primary mb-3">
                Our Strongest Focus
              </p>

              <h3 className="font-display font-bold text-3xl md:text-4xl text-brand-black leading-tight">
                A Strong Focus on
                <br />
                <span className="text-brand-primary">
                  Invention & Innovation
                </span>
              </h3>
            </div>

            {/* Content */}
            <div className="space-y-5 max-w-3xl">
              <p className="font-body text-ink-500 text-lg leading-relaxed">
                We have a strong interest in invention, innovation,
                robotics, artificial intelligence, science, engineering,
                and emerging technologies — areas where young people can
                move from being consumers of technology to creators of
                solutions.
              </p>

              <p className="font-body text-ink-400 text-base leading-relaxed">
                Through competitions, workshops, technology programs,
                collaborative projects, and hands-on experiences, we
                create opportunities for students to experiment, solve
                problems, build confidence, and explore the possibilities
                of what they can create.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  'Robotics',
                  'Artificial Intelligence',
                  'Technology',
                  'Science',
                  'Engineering',
                  'Innovation',
                ].map((item) => (
                  <span
                    key={item}
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-brand-primary/20
                      bg-white
                      px-4
                      py-2
                      font-display
                      text-xs
                      font-semibold
                      text-brand-black
                    "
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================
          03 — WHAT WE DO
      ========================================================= */}
      <section className="section-padding">
        <div className="container-max">
          <div
            ref={activitiesRef}
            className={`reveal ${
              activitiesVisible ? 'visible' : ''
            }`}
          >
            <div className="max-w-2xl mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-10 bg-brand-primary" />

                <p className="font-display font-semibold text-xs uppercase tracking-[0.2em] text-brand-primary">
                  What We Do Today
                </p>
              </div>

              <h3 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-brand-black leading-tight">
                Building opportunities
                <br />
                <span className="text-brand-primary">
                  through action.
                </span>
              </h3>

              <p className="font-body text-ink-500 text-base md:text-lg leading-relaxed mt-4">
                Our work takes different forms, but the goal remains
                consistent: create platforms that help people participate,
                learn, connect, and contribute.
              </p>
            </div>

            {/* Activity cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {activities.map((activity, index) => {
                const Icon = activity.icon;

                return (
                  <div
                    key={activity.title}
                    className="
                      group
                      min-h-[135px]
                      rounded-xl
                      border
                      border-ink-200
                      bg-white
                      p-5
                      flex
                      flex-col
                      justify-between
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-brand-primary/30
                      hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)]
                    "
                  >
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-lg
                        bg-brand-primary/[0.07]
                        text-brand-primary
                        transition-all
                        duration-300
                        group-hover:bg-brand-primary
                        group-hover:text-white
                      "
                    >
                      <Icon size={19} strokeWidth={1.8} />
                    </div>

                    <div className="flex items-end justify-between gap-2 mt-6">
                      <span className="font-display font-bold text-sm leading-tight text-brand-black">
                        {activity.title}
                      </span>

                      <span className="font-display text-[10px] text-ink-300">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================
          04 — HIGHLIGHT STATEMENT
      ========================================================= */}
      <section className="bg-brand-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/[0.12] via-transparent to-brand-primary/[0.05]" />

        <div className="container-max relative py-16 md:py-20">
          <div
            ref={statementRef}
            className={`
              reveal
              ${statementVisible ? 'visible' : ''}
              max-w-5xl
              mx-auto
              text-center
            `}
          >
            <Sparkles
              size={28}
              className="mx-auto text-brand-primary mb-6"
            />

            <blockquote className="font-display font-bold text-2xl md:text-3xl lg:text-4xl leading-tight text-white">
              “Bangladesh has the potential.
              <span className="text-brand-primary">
                {' '}We are here to help create the platforms,
                connections, and possibilities that move it forward.
              </span>”
            </blockquote>
          </div>
        </div>
      </section>


      {/* =========================================================
          05 — THREE SUMMARY CARDS
      ========================================================= */}
      <section className="section-padding bg-ink-50">
        <div className="container-max">
          <div
            ref={summaryRef}
            className={`reveal ${
              summaryVisible ? 'visible' : ''
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {summaryCards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <div
                    key={card.title}
                    className="
                      group
                      relative
                      min-h-[290px]
                      bg-white
                      border
                      border-ink-200
                      rounded-2xl
                      p-7
                      md:p-8
                      overflow-hidden
                      transition-all
                      duration-500
                      hover:-translate-y-1
                      hover:border-brand-primary/30
                      hover:shadow-[0_18px_45px_rgba(0,0,0,0.07)]
                    "
                  >
                    {/* Number */}
                    <span className="absolute right-6 top-5 font-display font-extrabold text-5xl text-ink-100 group-hover:text-brand-primary/10 transition-colors">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <div className="relative">
                      <div
                        className="
                          flex
                          h-12
                          w-12
                          items-center
                          justify-center
                          rounded-xl
                          bg-brand-primary/10
                          text-brand-primary
                          mb-8
                          transition-all
                          duration-300
                          group-hover:bg-brand-primary
                          group-hover:text-white
                        "
                      >
                        <Icon size={22} strokeWidth={1.7} />
                      </div>

                      <h3 className="font-display font-bold text-xl md:text-2xl text-brand-black mb-4">
                        {card.title}
                      </h3>

                      <p className="font-body text-ink-500 text-sm md:text-base leading-relaxed">
                        {card.description}
                      </p>

                      <div className="mt-7 inline-flex items-center gap-2 font-display font-semibold text-xs uppercase tracking-[0.12em] text-brand-primary">
                        Learn more
                        <ChevronRight
                          size={15}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================
          06 — MISSION & VISION
      ========================================================= */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div
            ref={missionRef}
            className={`reveal ${
              missionVisible ? 'visible' : ''
            }`}
          >
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="font-display font-semibold text-xs uppercase tracking-[0.2em] text-brand-primary mb-4">
                Where We Are Going
              </p>

              <h3 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-brand-black">
                Purpose first.
                <br />
                <span className="text-brand-primary">
                  Impact always.
                </span>
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

              {/* Mission */}
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-2xl
                  bg-brand-black
                  p-8
                  md:p-10
                  min-h-[340px]
                  flex
                  flex-col
                  justify-between
                "
              >
                <div className="absolute -right-20 -top-20 w-52 h-52 rounded-full bg-brand-primary/10 blur-3xl" />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-7">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-primary text-white">
                      <HeartHandshake size={21} />
                    </div>

                    <p className="font-display font-bold text-xs uppercase tracking-[0.2em] text-brand-primary">
                      Our Mission
                    </p>
                  </div>

                  <p className="font-display font-bold text-2xl md:text-3xl text-white leading-tight">
                    Create accessible platforms where young people can
                    learn, innovate, compete, collaborate, and turn
                    potential into action.
                  </p>
                </div>

                <div className="relative flex items-center gap-2 mt-10 text-white/40">
                  <CircleCheck size={16} />
                  <span className="font-body text-sm">
                    Creating opportunities through action
                  </span>
                </div>
              </div>

              {/* Vision */}
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-ink-200
                  bg-ink-50
                  p-8
                  md:p-10
                  min-h-[340px]
                  flex
                  flex-col
                  justify-between
                "
              >
                <div className="absolute -right-20 -top-20 w-52 h-52 rounded-full bg-brand-primary/5 blur-3xl" />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-7">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                      <ShieldCheck size={21} />
                    </div>

                    <p className="font-display font-bold text-xs uppercase tracking-[0.2em] text-brand-primary">
                      Our Vision
                    </p>
                  </div>

                  <p className="font-display font-bold text-2xl md:text-3xl text-brand-black leading-tight">
                    Build an ecosystem where talented and ambitious young
                    people can access the knowledge, connections, platforms,
                    and opportunities they need to grow.
                  </p>
                </div>

                <div className="relative flex items-center gap-2 mt-10 text-ink-400">
                  <Handshake size={16} />
                  <span className="font-body text-sm">
                    Connecting talent with opportunity
                  </span>
                </div>
              </div>
            </div>

            {/* Final CTA */}
            <div className="text-center mt-12">
              <button
                onClick={() => navigate('about')}
                className="btn-outline group"
              >
                Read Our Full Story

                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          </div>
        </div>
      </section>

    </section>
  );
}


/* =============================================================
   SMALL SUPPORTING COMPONENT
============================================================= */

function ApproachItem({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4 items-start">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brand-primary/30 font-display font-bold text-xs text-brand-primary">
        {number}
      </span>

      <div>
        <h4 className="font-display font-bold text-white text-base mb-1">
          {title}
        </h4>

        <p className="font-body text-white/45 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}


/* =============================================================
   ICON FALLBACK
============================================================= */

function TargetIcon({
  size = 24,
}: {
  size?: number;
}) {
  return (
    <Microscope
      size={size}
      strokeWidth={1.7}
    />
  );
}
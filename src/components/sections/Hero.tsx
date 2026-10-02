import { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  CalendarDays,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MapPin,
} from 'lucide-react';

import { useRouter } from '@/router/Router';
import recentEventsJson from '@/data/recent-events.json';

interface Dot {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

interface RecentEvent {
  image: string;
  label: string;
  title: string;
  date: string;
  location: string;
  description: string;
  detailRoute?: string;
}

interface RecentEventsJson {
  events: RecentEvent[];
}

const recentEvents = (
  recentEventsJson as RecentEventsJson
).events;

export default function Hero() {
  const { navigate } = useRouter();

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  const [mounted, setMounted] = useState(false);

  /*
   * Active event in the JSON array
   */
  const [activeEvent, setActiveEvent] = useState(0);

  const event = recentEvents[activeEvent];

  /*
   * ------------------------------------------------------------
   * ONE-TIME HERO ENTRANCE ANIMATION
   * ------------------------------------------------------------
   */

  useEffect(() => {
    const hero = heroRef.current;

    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMounted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  /*
   * ------------------------------------------------------------
   * ORIGINAL PARTICLE ANIMATION
   * ------------------------------------------------------------
   *
   * DO NOT REMOVE.
   */

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const numDots = Math.min(
      200,
      Math.floor((width * height) / 6500)
    );

    const dots: Dot[] = [];

    for (let i = 0; i < numDots; i++) {
      dots.push({
        id: i,
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: 1.5 + Math.random() * 2.5,
        opacity: 0.06 + Math.random() * 0.14,
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      dots.forEach((dot) => {
        dot.x += dot.vx;
        dot.y += dot.vy;

        if (dot.x < 0) dot.x = width;
        if (dot.x > width) dot.x = 0;

        if (dot.y < 0) dot.y = height;
        if (dot.y > height) dot.y = 0;

        ctx.beginPath();

        ctx.arc(
          dot.x,
          dot.y,
          dot.radius,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = `rgba(255, 255, 255, ${dot.opacity})`;

        ctx.fill();
      });

      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;

          const dist = Math.sqrt(
            dx * dx + dy * dy
          );

          if (dist < 80) {
            ctx.beginPath();

            ctx.moveTo(
              dots[i].x,
              dots[i].y
            );

            ctx.lineTo(
              dots[j].x,
              dots[j].y
            );

            ctx.strokeStyle = `rgba(255, 255, 255, ${
              0.06 * (1 - dist / 80)
            })`;

            ctx.lineWidth = 0.5;

            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener(
      'resize',
      handleResize
    );

    return () => {
      cancelAnimationFrame(animationId);

      window.removeEventListener(
        'resize',
        handleResize
      );
    };
  }, []);

  /*
   * ------------------------------------------------------------
   * EVENT CAROUSEL
   * ------------------------------------------------------------
   */

  const goToPreviousEvent = () => {
    setActiveEvent((current) =>
      current === 0
        ? recentEvents.length - 1
        : current - 1
    );
  };

  const goToNextEvent = () => {
    setActiveEvent((current) =>
      current === recentEvents.length - 1
        ? 0
        : current + 1
    );
  };

  const handleEventClick = () => {
    if (event?.detailRoute) {
      navigate(event.detailRoute);
    }
  };

  /*
   * Safety guard in case JSON is empty.
   */
  if (!recentEvents.length) {
    return (
      <section
        ref={heroRef}
        className="relative min-h-screen overflow-hidden bg-[#09090b]"
      >
        {/* Keep your hero here if you want fallback content */}
      </section>
    );
  }

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="absolute inset-0 grad-flow"
        style={{
          background:
            'linear-gradient(135deg, #09090b 0%, #18181b 50%, #27272a 100%)',
          backgroundSize: '300% 300%',
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(225,29,72,0.3)_0%,transparent_55%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(0,0,0,0.6)_0%,transparent_60%)]" />

      {/* =====================================================
          ORIGINAL ANIMATED PARTICLES
      ====================================================== */}

      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full opacity-60"
      />

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(380px,0.7fr)] lg:gap-16 xl:grid-cols-[1.05fr_0.72fr] xl:gap-24">

          {/* =================================================
              LEFT COLUMN
          ================================================= */}

          <div
            className={`
              max-w-3xl
              transition-all
              duration-1000
              ease-out
              ${
                mounted
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }
            `}
          >
            <p className="mb-5 font-heading font-medium text-xs uppercase tracking-[0.3em] text-brand-primary/80 sm:text-sm">
              Impact Architecture for Bangladesh
            </p>

            <h1 className="font-heading font-bold text-white text-5xl leading-[0.92] tracking-tight sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl">
              WHY{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-white to-brand-primary-light">
                BANGLADESH
              </span>
            </h1>

            <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-white/70 sm:text-lg md:text-xl md:leading-relaxed">
              Building events that move the nation forward —
              partnering with universities and NGOs to create
              real, lasting impact.
            </p>

            <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
              <button
                type="button"
                onClick={() => navigate('events')}
                className="btn-primary group"
              >
                See Our Work

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              <button
                type="button"
                onClick={() => navigate('contact')}
                className="btn-outline-dark group"
              >
                Partner With Us

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>

            <div className="mt-9 flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-white/30 sm:text-xs">
              <span className="h-px w-8 bg-brand-primary/60" />

              Universities · NGOs · Events · Impact
            </div>
          </div>

          {/* =================================================
              RIGHT COLUMN — RECENT EVENT CAROUSEL
          ================================================= */}

          <article
            className={`
              relative w-full
              transition-all
              delay-150
              duration-1000
              ease-out
              ${
                mounted
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }
            `}
          >
            {/* Card glow */}
            <div className="absolute -inset-3 rounded-[28px] bg-brand-primary/10 blur-2xl" />

            {/* =================================================
                PREVIOUS BUTTON
            ================================================= */}

            {recentEvents.length > 1 && (
              <button
                type="button"
                onClick={goToPreviousEvent}
                aria-label="Previous event"
                className="
                  absolute
                  left-0
                  top-1/2
                  z-30
                  flex
                  h-10
                  w-10
                  -translate-x-1/2
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/15
                  bg-[#111114]/90
                  text-white/70
                  shadow-xl
                  backdrop-blur-md
                  transition-all
                  duration-200
                  hover:border-brand-primary/50
                  hover:bg-brand-primary
                  hover:text-white
                  hover:scale-105
                  focus:outline-none
                  focus:ring-2
                  focus:ring-brand-primary/50
                  sm:h-11
                  sm:w-11
                  lg:-translate-x-1/2
                "
              >
                <ChevronLeft
                  size={20}
                  strokeWidth={1.8}
                />
              </button>
            )}

            {/* =================================================
                EVENT CARD
            ================================================= */}

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#101012]/90 shadow-2xl shadow-black/40 backdrop-blur-xl">

              {/* Event image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  key={event.image}
                  src={event.image}
                  alt={event.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

                {/* Badge */}
                <div className="absolute left-5 top-5">
                  <span className="inline-flex rounded-full border border-brand-primary/40 bg-brand-primary/90 px-3 py-1.5 font-heading text-[9px] font-bold uppercase tracking-[0.2em] text-white shadow-lg backdrop-blur-md sm:text-[10px]">
                    {event.label}
                  </span>
                </div>
              </div>

              {/* Event content */}
              <div className="p-5 sm:p-6">

                <h2 className="font-heading text-xl font-bold leading-tight tracking-tight text-white sm:text-2xl">
                  {event.title}
                </h2>

                {/* Date / location */}
                <div className="mt-4 flex flex-col gap-2 text-xs text-white/50 sm:flex-row sm:items-center sm:gap-4">
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays
                      size={14}
                      className="shrink-0 text-brand-primary"
                      strokeWidth={1.8}
                    />

                    {event.date}
                  </span>

                  <span className="hidden h-3 w-px bg-white/15 sm:block" />

                  <span className="inline-flex items-center gap-2">
                    <MapPin
                      size={14}
                      className="shrink-0 text-brand-primary"
                      strokeWidth={1.8}
                    />

                    {event.location}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-5 font-body text-sm leading-6 text-white/60">
                  {event.description}
                </p>

                {/* Conditional CTA */}
                {event.detailRoute && (
                  <button
                    type="button"
                    onClick={handleEventClick}
                    className="group mt-6 inline-flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:text-brand-primary"
                  >
                    View Event Highlights

                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>
                )}
              </div>
            </div>

            {/* =================================================
                NEXT BUTTON
            ================================================= */}

            {recentEvents.length > 1 && (
              <button
                type="button"
                onClick={goToNextEvent}
                aria-label="Next event"
                className="
                  absolute
                  right-0
                  top-1/2
                  z-30
                  flex
                  h-10
                  w-10
                  translate-x-1/2
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/15
                  bg-[#111114]/90
                  text-white/70
                  shadow-xl
                  backdrop-blur-md
                  transition-all
                  duration-200
                  hover:border-brand-primary/50
                  hover:bg-brand-primary
                  hover:text-white
                  hover:scale-105
                  focus:outline-none
                  focus:ring-2
                  focus:ring-brand-primary/50
                  sm:h-11
                  sm:w-11
                "
              >
                <ChevronRight
                  size={20}
                  strokeWidth={1.8}
                />
              </button>
            )}

            {/* =================================================
                EVENT POSITION INDICATOR
            ================================================= */}

            {recentEvents.length > 1 && (
              <div className="relative z-20 mt-4 flex justify-center gap-1.5">
                {recentEvents.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Go to event ${index + 1}`}
                    aria-current={
                      index === activeEvent
                        ? 'true'
                        : undefined
                    }
                    onClick={() =>
                      setActiveEvent(index)
                    }
                    className={`
                      h-1 rounded-full transition-all duration-300
                      ${
                        index === activeEvent
                          ? 'w-6 bg-brand-primary'
                          : 'w-2 bg-white/20 hover:bg-white/40'
                      }
                    `}
                  />
                ))}
              </div>
            )}
          </article>
        </div>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ====================================================== */}

      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1 sm:flex">
        <span className="font-body text-xs uppercase tracking-widest text-white/40">
          Scroll
        </span>

        <ChevronDown
          size={22}
          className="text-white/40 animate-bounce"
          strokeWidth={1.5}
        />
      </div>
    </section>
  );
}
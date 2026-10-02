import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  UsersRound,
} from 'lucide-react';
import { useRouter } from '@/router/Router';

type Page = 'home' | 'about' | 'events' | 'focus-areas' | 'contact';

export default function Footer() {
  const { navigate } = useRouter();

  const links: { label: string; page: Page }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Events', page: 'events' },
    { label: 'Focus Areas', page: 'focus-areas' },
    { label: 'Contact', page: 'contact' },
  ];

  const socials = [
    {
      name: 'Facebook',
      icon: Facebook,
      href: 'https://www.facebook.com/whybangladesh.online',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://www.instagram.com/whybangladesh',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: '#',
    },
    {
      name: 'YouTube',
      icon: Youtube,
      href: 'https://www.youtube.com/@why.bangladesh',
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-brand-black border-t border-white/10">
      {/* Subtle background accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-max px-6 md:px-12 lg:px-20 py-14 md:py-16 relative">
        {/* Main footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <button
              type="button"
              onClick={() => navigate('home')}
              className="inline-flex mb-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded-lg"
              aria-label="Go to Why Bangladesh home"
            >
              <img
                src="/White_Logo.png"
                alt="Why Bangladesh"
                className="h-12 md:h-14 w-auto object-contain"
              />
            </button>

            <p className="text-white/55 font-body text-sm md:text-[15px] max-w-lg leading-7">
              An event-hosting agency partnering with universities and NGOs
              across Bangladesh to build large-scale student and community
              initiatives that move the nation forward.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-2.5 mt-7">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={
                      social.href.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                    className="group w-10 h-10 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-white/50 transition-all duration-300 hover:border-brand-primary/50 hover:bg-brand-primary hover:text-white hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(230,57,70,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
                    aria-label={social.name}
                  >
                    <Icon
                      size={17}
                      strokeWidth={1.8}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </a>
                );
              })}

              {/* Email */}
              <a
                href="mailto:whybangladesh.info@gmail.com"
                className="group w-10 h-10 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-white/50 transition-all duration-300 hover:border-brand-primary/50 hover:bg-brand-primary hover:text-white hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(230,57,70,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
                aria-label="Send us an email"
              >
                <Mail
                  size={17}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-display font-bold text-xs uppercase tracking-[0.18em] text-white mb-5">
              Navigate
            </p>

            <ul className="space-y-3.5">
              {links.map((link) => (
                <li key={link.page}>
                  <button
                    type="button"
                    onClick={() => navigate(link.page)}
                    className="group flex items-center gap-1.5 text-white/55 font-body text-sm transition-colors duration-300 hover:text-white focus:outline-none focus-visible:text-brand-primary"
                  >
                    <span>{link.label}</span>

                    <ArrowUpRight
                      size={13}
                      className="opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 text-brand-primary"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-display font-bold text-xs uppercase tracking-[0.18em] text-white mb-5">
              Get in Touch
            </p>

            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:whybangladesh.info@gmail.com"
                  className="group flex items-start gap-3 text-white/55 hover:text-white transition-colors duration-300"
                >
                  <span className="mt-0.5 w-8 h-8 rounded-lg bg-brand-primary/10 border border-brand-primary/15 flex items-center justify-center flex-shrink-0">
                    <Mail
                      size={15}
                      className="text-brand-primary"
                      strokeWidth={1.8}
                    />
                  </span>

                  <span className="font-body text-sm leading-6 break-all">
                    whybangladesh.info@gmail.com
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="tel:+8801754080399"
                  className="group flex items-start gap-3 text-white/55 hover:text-white transition-colors duration-300"
                >
                  <span className="mt-0.5 w-8 h-8 rounded-lg bg-brand-primary/10 border border-brand-primary/15 flex items-center justify-center flex-shrink-0">
                    <Phone
                      size={15}
                      className="text-brand-primary"
                      strokeWidth={1.8}
                    />
                  </span>

                  <span className="font-body text-sm leading-6">
                    +880 1754-080399
                  </span>
                </a>
              </li>

              <li>
                <div className="flex items-start gap-3 text-white/55">
                  <span className="mt-0.5 w-8 h-8 rounded-lg bg-brand-primary/10 border border-brand-primary/15 flex items-center justify-center flex-shrink-0">
                    <MapPin
                      size={15}
                      className="text-brand-primary"
                      strokeWidth={1.8}
                    />
                  </span>

                  <span className="font-body text-sm leading-6">
                    Dhaka, Bangladesh
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Community CTA */}
        <div className="mt-12 md:mt-14">
          <a
            href="https://www.facebook.com/share/g/1CFB4jrXFB/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl border border-brand-primary/20 bg-brand-primary/[0.06] px-5 py-5 md:px-6 md:py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 transition-all duration-300 hover:border-brand-primary/50 hover:bg-brand-primary/[0.10]"
          >
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-brand-primary flex items-center justify-center text-white flex-shrink-0 shadow-[0_8px_25px_rgba(230,57,70,0.2)]">
                <UsersRound size={20} strokeWidth={1.8} />
              </div>

              <div>
                <p className="font-display font-bold text-white text-sm md:text-base">
                  Join Our Community
                </p>
                <p className="font-body text-white/45 text-xs md:text-sm mt-0.5">
                  Connect with people building the future of Bangladesh.
                </p>
              </div>
            </div>

            <span className="inline-flex items-center gap-2 font-display font-semibold text-sm text-brand-primary group-hover:text-white transition-colors">
              Join the Community
              <ArrowUpRight
                size={17}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </span>
          </a>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-7 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/35 font-body text-xs text-center md:text-left">
            © {new Date().getFullYear()} Why Bangladesh. All rights reserved.
          </p>

          <p className="text-white/35 font-body text-xs text-center md:text-right">
            Building events that move the nation forward.
          </p>
        </div>
      </div>
    </footer>
  );
}
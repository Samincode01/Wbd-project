import { Mail, Phone, MapPin, ArrowUpRight, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
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
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
    { name: 'Email', icon: Mail, href: 'mailto:whybangladesh.info@gmail.com' },
  ];

  return (
    <footer className="bg-brand-black border-t border-white/10">
      <div className="container-max px-6 md:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="mb-5">
              <img src="/White_Logo.png" alt="Why Bangladesh" className="h-14 w-auto object-contain" />
            </div>
            <p className="text-white/60 font-body text-sm max-w-md leading-relaxed">
              An event-hosting agency partnering with universities and NGOs across
              Bangladesh to build large-scale student and community initiatives that
              move the nation forward.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 transition-all duration-300 hover:border-brand-primary hover:text-brand-primary hover:bg-brand-primary/10"
                    aria-label={social.name}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wide text-white mb-4">Navigate</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => navigate(link.page)}
                    className="text-white/60 font-body text-sm transition-colors hover:text-brand-primary flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight size={14} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wide text-white mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/60 font-body text-sm">
                <Mail size={16} className="text-brand-primary flex-shrink-0" />
                <span className="truncate">whybangladesh.info@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 text-white/60 font-body text-sm">
                <Phone size={16} className="text-brand-primary flex-shrink-0" />
                <span className="truncate">+880 1754-080399</span>
              </li>
              <li className="flex items-center gap-3 text-white/60 font-body text-sm">
                <MapPin size={16} className="text-brand-primary flex-shrink-0" />
                <span className="truncate">Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 font-body text-xs">
            © {new Date().getFullYear()} Why Bangladesh. All rights reserved.
          </p>
          <p className="text-white/40 font-body text-xs">
            Building events that move the nation forward.
          </p>
        </div>
      </div>
    </footer>
  );
}






import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useRouter } from '@/router/Router';

type Page = 'home' | 'about' | 'events' | 'focus-areas' | 'contact';

const navItems: { label: string; page: Page }[] = [
  { label: 'Home', page: 'home' },
  { label: 'About', page: 'about' },
  { label: 'Events', page: 'events' },
  { label: 'Focus Areas', page: 'focus-areas' },
  { label: 'Contact', page: 'contact' },
];

export default function Navbar() {
  const { page, navigate } = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (p: Page) => {
    navigate(p);
    setMenuOpen(false);
  };

  const isDarkBackground = !scrolled && page === 'home';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-ink-200 py-2 shadow-sm'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container-max px-6 md:px-12 lg:px-20 flex items-center justify-between">
          <button
            onClick={() => handleNavigate('home')}
            className="flex items-center group"
          >
            <img
              src={isDarkBackground ? '/White_Logo.png' : '/Black_Logo.png'}
              alt="Why Bangladesh"
              className="h-12 md:h-14 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
            />
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigate(item.page)}
                className={`font-heading font-medium text-sm uppercase tracking-wide transition-colors duration-300 relative group ${
                  page === item.page
                    ? 'text-brand-primary'
                    : isDarkBackground
                      ? 'text-white/80 hover:text-white'
                      : 'text-ink-500 hover:text-brand-black'
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-0.5 bg-brand-primary rounded-full transition-all duration-300 ${
                    page === item.page ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            ))}
            <button onClick={() => handleNavigate('contact')} className="btn-primary text-xs">
              Partner With Us
            </button>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 ${isDarkBackground ? 'text-white' : 'text-brand-black'}`}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white md:hidden flex flex-col items-center justify-center gap-6 pt-20">
          <img src="/Black_Logo.png" alt="Why Bangladesh" className="h-16 w-auto object-contain mb-2" />
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => handleNavigate(item.page)}
              className={`font-heading font-bold text-2xl uppercase tracking-wide transition-colors ${
                page === item.page ? 'text-brand-primary' : 'text-brand-black'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button onClick={() => handleNavigate('contact')} className="btn-primary mt-4">
            Partner With Us
          </button>
        </div>
      )}
    </>
  );
}






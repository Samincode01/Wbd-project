import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

type Page = 'home' | 'about' | 'events' | 'focus-areas' | 'contact' | 'admin';

interface RouterContextType {
  page: Page;
  navigate: (page: Page) => void;
}

const RouterContext = createContext<RouterContextType>({
  page: 'home',
  navigate: () => {},
});

export function RouterProvider({ children }: { children: ReactNode }) {
  const [page, setPage] = useState<Page>(() => {
    const hash = window.location.hash.replace('#/', '').replace('#', '');
    if (['home', 'about', 'events', 'focus-areas', 'contact', 'admin'].includes(hash)) {
      return hash as Page;
    }
    return 'home';
  });

  const navigate = (newPage: Page) => {
    window.location.hash = `/${newPage}`;
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (['home', 'about', 'events', 'focus-areas', 'contact', 'admin'].includes(hash)) {
        setPage(hash as Page);
      } else {
        setPage('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <RouterContext.Provider value={{ page, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  return useContext(RouterContext);
}






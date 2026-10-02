import { RouterProvider, useRouter } from '@/router/Router';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import EventsPage from '@/pages/EventsPage';
import FocusAreasPage from '@/pages/FocusAreasPage';
import ContactPage from '@/pages/ContactPage';

import AdminPage from '@/pages/admin/AdminPage';

function AppContent() {
  const { page } = useRouter();

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'events':
        return <EventsPage />;
      case 'focus-areas':
        return <FocusAreasPage />;
      case 'contact':
        return <ContactPage />;
      case 'admin':
        return <AdminPage />;
      default:
        return <HomePage />;
    }
  };

  if (page === 'admin') {
    return (
      <div className="min-h-screen bg-ink-50">
        <main>{renderPage()}</main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}

export default App;






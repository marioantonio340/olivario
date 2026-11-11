import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandDNA from './components/BrandDNA';
import Solutions from './components/Solutions';
import Architecture from './components/Architecture';
import Leadership from './components/Leadership';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Sync state with URL hash for easy sharing and Google Cloud OAuth approval
  useEffect(() => {
    // Support SPA redirect from 404.html
    const search = window.location.search;
    if (search.startsWith('?/')) {
      const redirectedPath = search.slice(2).split('&')[0].replace(/~and~/g, '&');
      window.history.replaceState(null, '', '/' + redirectedPath + window.location.hash);
    }

    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      const path = window.location.pathname.toLowerCase();

      if (hash === '#privacy' || hash === '#/privacy' || path === '/privacy' || path.startsWith('/privacy')) {
        setCurrentPage('privacy');
      } else if (hash === '#terms' || hash === '#/terms' || path === '/terms' || path.startsWith('/terms')) {
        setCurrentPage('terms');
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page) => {
    setCurrentPage(page);
    if (page === 'privacy') {
      window.location.hash = 'privacy';
    } else if (page === 'terms') {
      window.location.hash = 'terms';
    } else {
      window.history.pushState('', document.title, window.location.pathname);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B132B] flex flex-col justify-between selection:bg-[#22C55E]/30 selection:text-white">
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenContact={() => setIsContactOpen(true)}
      />

      <main className="flex-grow">
        {currentPage === 'home' && (
          <>
            <Hero onOpenContact={() => setIsContactOpen(true)} />
            <BrandDNA />
            <Solutions onOpenContact={() => setIsContactOpen(true)} />
            <Architecture />
            <Leadership onOpenContact={() => setIsContactOpen(true)} />
          </>
        )}

        {currentPage === 'privacy' && (
          <PrivacyPolicy onNavigate={navigateTo} />
        )}

        {currentPage === 'terms' && (
          <TermsOfService onNavigate={navigateTo} />
        )}
      </main>

      <Footer onNavigate={navigateTo} />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}

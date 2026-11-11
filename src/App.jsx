import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import BrandDNA from './components/BrandDNA';
import Methodology from './components/Methodology';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div id="top" className="min-h-screen bg-[#0B132B] flex flex-col justify-between selection:bg-[#22C55E]/30 selection:text-white">
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      <main className="flex-grow">
        <Hero onOpenContact={() => setIsContactOpen(true)} />
        <Solutions onOpenContact={() => setIsContactOpen(true)} />
        <BrandDNA />
        <Methodology onOpenContact={() => setIsContactOpen(true)} />
        <ContactSection onOpenContact={() => setIsContactOpen(true)} />
      </main>

      <Footer onOpenContact={() => setIsContactOpen(true)} />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}

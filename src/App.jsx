import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandDNA from './components/BrandDNA';
import Solutions from './components/Solutions';
import Architecture from './components/Architecture';
import Leadership from './components/Leadership';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div id="top" className="min-h-screen bg-[#0B132B] flex flex-col justify-between selection:bg-[#22C55E]/30 selection:text-white">
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      <main className="flex-grow">
        <Hero onOpenContact={() => setIsContactOpen(true)} />
        <BrandDNA />
        <Solutions onOpenContact={() => setIsContactOpen(true)} />
        <Architecture />
        <Leadership onOpenContact={() => setIsContactOpen(true)} />
      </main>

      <Footer onOpenContact={() => setIsContactOpen(true)} />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}

import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { PackageIncludes } from './components/PackageIncludes';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';

export default function App() {
  const scrollToCalculator = () => {
    const el = document.getElementById('faq');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFBF0] text-[#2D2D2D] font-sans antialiased selection:bg-[#D42424] selection:text-white">
      
      {/* Header */}
      <Header onOpenCalculator={scrollToCalculator} />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero onOpenCalculator={scrollToCalculator} />
        <HowItWorks />
        <PackageIncludes />
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Widget */}
      <WhatsAppWidget />

    </div>
  );
}

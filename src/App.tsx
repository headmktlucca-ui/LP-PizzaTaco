import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { PackageIncludes } from './components/PackageIncludes';
import { AboutUs } from './components/AboutUs';
import { FAQ } from './components/FAQ';
import { Blog } from './components/Blog';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'blog'>('home');

  const scrollToCalculator = () => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const el = document.getElementById('faq');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('faq');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFBF0] text-[#2D2D2D] font-sans antialiased selection:bg-[#D42424] selection:text-white">
      
      {/* Header */}
      <Header 
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        onOpenCalculator={scrollToCalculator} 
      />

      {/* Main Content View */}
      {currentPage === 'home' ? (
        <main id="main-content">
          <Hero onOpenCalculator={scrollToCalculator} />
          <HowItWorks />
          <PackageIncludes />
          <AboutUs />
          <FAQ />
        </main>
      ) : (
        <Blog 
          onNavigateHome={() => {
            setCurrentPage('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }} 
        />
      )}

      {/* Footer */}
      <Footer 
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />

      {/* Floating WhatsApp Widget */}
      <WhatsAppWidget />

    </div>
  );
}

import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Features from './components/Features';
import Portfolio from './components/Portfolio';
import BeforeAfter from './components/BeforeAfter';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ContactModal from './components/ContactModal';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handler = () => setIsModalOpen(true);
    document.addEventListener('open-contact-modal', handler);
    return () => document.removeEventListener('open-contact-modal', handler);
  }, []);

  return (
    <div className="min-h-screen bg-ink">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Features />
        <Portfolio />
        <BeforeAfter />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;

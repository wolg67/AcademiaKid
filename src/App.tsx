import { useState, useEffect } from 'react';
import { Toaster } from '@/components/ui/sonner';
import { ArrowUp } from 'lucide-react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Courses from './sections/Courses';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Courses />
        <About />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-center" richColors />

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-[60] w-12 h-12 bg-python text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 group ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Volver arriba"
      >
        <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
        <div className="absolute -inset-1 bg-python/30 rounded-full animate-pulse-soft opacity-0 group-hover:opacity-100 transition-opacity" />
      </button>
    </div>
  );
}

export default App;

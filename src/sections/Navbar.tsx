import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Cursos', href: '#cursos' },
  { name: 'Nosotros', href: '#nosotros' },
  { name: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#inicio');
            }}
            className="flex items-center gap-2 group"
          >
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-white/95 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 p-1 shadow-sm">
                <img src="/assets/logo.svg" alt="AcademiaKid Logo" className="w-full h-full object-contain" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-lg leading-tight transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
                AcademiaKid
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 ${
                  isScrolled
                    ? 'text-gray-700 hover:text-python hover:bg-python/10'
                    : 'text-white/90 hover:text-white hover:bg-white/20'
                }`}
              >
                {link.name}
              </a>
            ))}
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`ml-2 p-2 rounded-xl transition-all duration-300 hover:scale-110 flex items-center justify-center ${
                isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/20'
              }`}
              title="Cambiar Modo"
            >
              <img 
                src="/assets/oscuro-claro.svg" 
                alt="Cambiar Tema" 
                className={`w-6 h-6 object-contain ${!isScrolled && theme === 'light' ? 'brightness-0 invert' : ''}`}
              />
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection('#cursos')}
              className="bg-gradient-to-r from-python to-fun-purple hover:from-python-dark hover:to-fun-purple text-white font-bold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              ¡Empieza Ahora!
            </Button>
          </div>

          {/* Mobile Menu Button Container */}
          <div className="flex md:hidden items-center gap-2">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/20'
              }`}
            >
              <img 
                src="/assets/oscuro-claro.svg" 
                alt="Cambiar Tema" 
                className={`w-6 h-6 object-contain ${!isScrolled && theme === 'light' ? 'brightness-0 invert' : ''}`}
              />
            </button>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/20'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-80 mt-4' : 'max-h-0'
          }`}
        >
          <div className="bg-white rounded-2xl shadow-xl p-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="block px-4 py-3 rounded-xl font-semibold text-gray-700 hover:text-python hover:bg-python/10 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button
              onClick={() => scrollToSection('#cursos')}
              className="w-full bg-gradient-to-r from-python to-fun-purple text-white font-bold py-3 rounded-xl mt-2"
            >
              ¡Empieza Ahora!
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

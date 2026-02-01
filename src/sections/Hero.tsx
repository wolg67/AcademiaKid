import { useEffect, useRef } from 'react';
import { ArrowRight, Play, Star, Zap, Target, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { width, height } = heroRef.current.getBoundingClientRect();
      const x = (clientX / width - 0.5) * 20;
      const y = (clientY / height - 0.5) * 20;
      
      const floatingElements = heroRef.current.querySelectorAll('.floating-element');
      floatingElements.forEach((el, index) => {
        const factor = (index + 1) * 0.5;
        (el as HTMLElement).style.transform = `translate(${x * factor}px, ${y * factor}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-hero">
        {/* Animated shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating circles */}
          <div className="floating-element absolute top-20 left-10 w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm transition-transform duration-300" />
          <div className="floating-element absolute top-40 right-20 w-32 h-32 rounded-full bg-scratch/20 backdrop-blur-sm transition-transform duration-500" />
          <div className="floating-element absolute bottom-40 left-1/4 w-16 h-16 rounded-full bg-python/20 backdrop-blur-sm transition-transform duration-400" />
          <div className="floating-element absolute bottom-20 right-1/3 w-24 h-24 rounded-full bg-arduino/20 backdrop-blur-sm transition-transform duration-600" />
          <div className="floating-element absolute top-1/3 left-1/2 w-12 h-12 rounded-full bg-sql/20 backdrop-blur-sm transition-transform duration-350" />
          
          {/* Code symbols floating */}
          <div className="floating-element absolute top-32 left-1/4 text-6xl font-bold text-white/10 transition-transform duration-700">{'</>'}</div>
          <div className="floating-element absolute bottom-1/3 right-1/4 text-5xl font-bold text-white/10 transition-transform duration-800">{'{}'}</div>
          <div className="floating-element absolute top-1/2 right-10 text-4xl font-bold text-white/10 transition-transform duration-600">{'[]'}</div>
          
          {/* Grid pattern */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-slide-up">
              <Star className="w-4 h-4 text-scratch fill-scratch" />
              <span className="text-white text-sm font-semibold">¡La mejor academia de programación para niños!</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Conviértete en un
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-scratch via-arduino to-scratch animate-pulse-soft">
                Super Developer
              </span>
              desde pequeño
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-xl mx-auto lg:mx-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Aprende a programar de forma divertida con nuestros cursos de{' '}
              <span className="font-bold text-scratch">Python</span>,{' '}
              <span className="font-bold text-arduino">Arduino</span>,{' '}
              <span className="font-bold text-scratch">Scratch</span>,{' '}
              <span className="font-bold text-sql">SQL</span>,{' '}
              <span className="font-bold text-html">HTML</span>,{' '}
              <span className="font-bold text-css">CSS</span> y{' '}
              <span className="font-bold text-js">JS</span>. ¡Despierta tu creatividad!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <Button
                onClick={() => scrollToSection('#cursos')}
                size="lg"
                className="bg-white text-python hover:bg-scratch hover:text-gray-900 font-bold px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
              >
                Ver Cursos
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => scrollToSection('#nosotros')}
                size="lg"
                variant="outline"
                className="border-2 border-white/50 text-white hover:bg-white/20 font-bold px-8 py-6 rounded-full backdrop-blur-sm transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2" />
                Conócenos
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-10 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-2 text-white/90">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-scratch" />
                </div>
                <div>
                  <p className="font-bold text-lg">20+</p>
                  <p className="text-xs text-white/70">Estudiantes</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-arduino" />
                </div>
                <div>
                  <p className="font-bold text-lg">7</p>
                  <p className="text-xs text-white/70">Cursos</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Target className="w-5 h-5 text-sql" />
                </div>
                <div>
                  <p className="font-bold text-lg">98%</p>
                  <p className="text-xs text-white/70">Satisfacción</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="hidden lg:flex justify-center items-center relative">
            {/* Main circular element */}
            <div className="relative w-96 h-96">
              {/* Outer rotating ring */}
              <div className="absolute inset-0 rounded-full border-4 border-dashed border-white/30 animate-spin-slow" />
              
              {/* Middle ring with icons */}
              <div className="absolute inset-4 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto rounded-2xl bg-white/95 flex items-center justify-center mb-4 shadow-glow-purple float-animation p-4">
                    <img src="/src/assets/logo.svg" alt="AcademiaKid Logo" className="w-full h-full object-contain" />
                  </div>
                  <p className="text-white font-bold text-xl">AcademiaKid</p>
                </div>
              </div>
              
              {/* Floating course icons - 7 elementos distribuidos en círculo */}
              {/* Python - Top */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-16 rounded-xl bg-white flex items-center justify-center shadow-glow-blue float-animation p-2" style={{ animationDelay: '0.5s' }}>
                <img src="/src/assets/python.svg" alt="Python" className="w-full h-full object-contain" />
              </div>
              
              {/* JavaScript - Top Right */}
              <div className="absolute top-8 -right-6 w-14 h-14 rounded-xl bg-white flex items-center justify-center shadow-lg float-animation p-2" style={{ animationDelay: '0.7s' }}>
                <img src="/src/assets/js.svg" alt="JavaScript" className="w-full h-full object-contain" />
              </div>
              
              {/* Arduino - Right */}
              <div className="absolute top-1/2 -translate-y-1/2 -right-6 w-14 h-14 rounded-xl bg-white flex items-center justify-center shadow-glow-orange float-animation p-2" style={{ animationDelay: '0.9s' }}>
                <img src="/src/assets/arduino.svg" alt="Arduino" className="w-full h-full object-contain" />
              </div>
              
              {/* SQL - Bottom Right */}
              <div className="absolute bottom-8 -right-6 w-14 h-14 rounded-xl bg-white flex items-center justify-center shadow-lg float-animation p-2" style={{ animationDelay: '1.1s' }}>
                <img src="/src/assets/sql.svg" alt="SQL" className="w-full h-full object-contain" />
              </div>
              
              {/* Scratch - Bottom */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-14 h-14 rounded-xl bg-white flex items-center justify-center shadow-lg float-animation p-2" style={{ animationDelay: '1.3s' }}>
                <img src="/src/assets/scratch.svg" alt="Scratch" className="w-full h-full object-contain" />
              </div>
              
              {/* CSS - Bottom Left */}
              <div className="absolute bottom-8 -left-6 w-14 h-14 rounded-xl bg-white flex items-center justify-center shadow-lg float-animation p-2" style={{ animationDelay: '1.5s' }}>
                <img src="/src/assets/css.svg" alt="CSS" className="w-full h-full object-contain" />
              </div>
              
              {/* HTML - Left */}
              <div className="absolute top-1/2 -translate-y-1/2 -left-6 w-14 h-14 rounded-xl bg-white flex items-center justify-center shadow-glow-purple float-animation p-2" style={{ animationDelay: '1.7s' }}>
                <img src="/src/assets/html.svg" alt="HTML" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#F8FAFC"
          />
        </svg>
      </div>
    </section>
  );
}

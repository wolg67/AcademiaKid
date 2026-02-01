import { 
  Heart, Mail, Phone, MapPin,
  Facebook, Instagram, Youtube, MessageCircle,
  ArrowUp
} from 'lucide-react';

const footerLinks = {
  cursos: [
    { name: 'Python', href: '#cursos' },
    { name: 'Arduino', href: '#cursos' },
    { name: 'Scratch', href: '#cursos' },
    { name: 'SQL', href: '#cursos' },
  ],
  empresa: [
    { name: 'Sobre Nosotros', href: '#nosotros' },
    { name: 'Nuestro Equipo', href: '#nosotros' },
    { name: 'Testimonios', href: '#' },
    { name: 'Blog', href: '#' },
  ],
  soporte: [
    { name: 'Preguntas Frecuentes', href: '#' },
    { name: 'Contacto', href: '#contacto' },
    { name: 'Política de Privacidad', href: '#' },
    { name: 'Términos de Servicio', href: '#' },
  ],
};

const socialLinks = [
  { icon: <Facebook className="w-5 h-5" />, name: 'Facebook', href: '#' },
  { icon: <Instagram className="w-5 h-5" />, name: 'Instagram', href: '#' },
  { icon: <Youtube className="w-5 h-5" />, name: 'YouTube', href: '#' },
  { icon: <MessageCircle className="w-5 h-5" />, name: 'WhatsApp', href: '#' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#inicio" onClick={(e) => { e.preventDefault(); scrollToSection('#inicio'); }} className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/95 flex items-center justify-center p-1 shadow-sm">
                <img src="/src/assets/logo.svg" alt="AcademiaKid Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="font-bold text-xl">AcademiaKid</span>
              </div>
            </a>
            <p className="text-gray-400 mb-6 max-w-sm">
              Formando la próxima generación de desarrolladores con educación 
              tecnológica divertida, accesible y de calidad para niños y jóvenes.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-python" />
                <span>academiawolg@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-arduino" />
                <span>+58 247477976</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-sql" />
                <span>Rubio, Táchira, Venezuela</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-gradient-to-br hover:from-python hover:to-fun-purple hover:text-white transition-all duration-300"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-bold text-lg mb-4">Cursos</h4>
            <ul className="space-y-3">
              {footerLinks.cursos.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => { 
                      e.preventDefault(); 
                      if (link.href.startsWith('#')) {
                        scrollToSection(link.href);
                      }
                    }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Soporte</h4>
            <ul className="space-y-3">
              {footerLinks.soporte.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => { 
                      e.preventDefault(); 
                      if (link.href.startsWith('#')) {
                        scrollToSection(link.href);
                      }
                    }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col items-center justify-center gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <p className="text-gray-400 text-sm flex items-center gap-1">
                © 2026-2028 AcademiaKid. Hecho con{' '}
                <Heart className="w-4 h-4 text-red-500 fill-red-500" /> en Rubio, Táchira, Venezuela.
              </p>
              <p className="text-gray-500 text-xs font-medium tracking-wider">
                Author: William O Lozano G
              </p>
            </div>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300 hover:scale-105"
            >
              <span className="text-sm">Volver arriba</span>
              <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-python transition-colors shadow-lg">
                <ArrowUp className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

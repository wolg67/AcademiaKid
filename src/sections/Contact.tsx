import { useState } from 'react';
import { 
  Mail, Phone, MapPin, Send, MessageCircle, 
  Clock, CheckCircle2, Facebook, Instagram, Youtube
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const contactInfo = [
  {
    icon: <Phone className="w-5 h-5" />,
    title: 'Teléfono',
    content: '+58 247477976',
    color: 'from-python to-blue-600',
  },
  {
    icon: <Mail className="w-5 h-5" />,
    title: 'Email',
    content: 'academiawolg@gmail.com',
    color: 'from-arduino to-orange-600',
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    title: 'Ubicación',
    content: 'Rubio, Táchira, Venezuela',
    color: 'from-sql to-green-600',
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: 'Horario',
    content: 'Lun - Sab: 8:00 a.m - 6:00 p.m',
    color: 'from-fun-purple to-purple-600',
  },
];

const socialLinks = [
  { icon: <Facebook className="w-5 h-5" />, name: 'Facebook', href: '#' },
  { icon: <Instagram className="w-5 h-5" />, name: 'Instagram', href: '#' },
  { icon: <Youtube className="w-5 h-5" />, name: 'YouTube', href: '#' },
  { icon: <MessageCircle className="w-5 h-5" />, name: 'WhatsApp', href: '#' },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success('¡Mensaje enviado con éxito! Te contactaremos pronto.');
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contacto" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-sql/10 rounded-full px-4 py-2 mb-4">
            <MessageCircle className="w-5 h-5 text-sql" />
            <span className="text-sql font-semibold text-sm">Contacto</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            ¿Listo para{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sql via-python to-fun-purple">
              comenzar?
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Contáctanos y te ayudaremos a elegir el curso perfecto para ti o tu hijo. 
            ¡Estamos aquí para responder todas tus preguntas!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-card hover:shadow-card-hover transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white flex-shrink-0`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{item.title}</p>
                    <p className="font-semibold text-gray-900">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl p-6 shadow-card">
              <h3 className="font-bold text-gray-900 mb-4">Síguenos</h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-gray-600 hover:bg-gradient-to-br hover:from-python hover:to-fun-purple hover:text-white transition-all duration-300"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick CTA */}
            <div className="bg-gradient-to-br from-python to-fun-purple rounded-2xl p-6 text-white">
              <h3 className="font-bold text-lg mb-2">¿Prefieres hablar directamente?</h3>
              <p className="text-white/80 text-sm mb-4">
                Agenda una llamada gratuita y conoce más sobre nuestros cursos.
              </p>
              <Button className="w-full bg-white text-python hover:bg-scratch hover:text-gray-900 font-bold rounded-xl transition-all duration-300">
                <Phone className="w-4 h-4 mr-2" />
                Agendar Llamada
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl shadow-card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Envíanos un mensaje
              </h3>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 mx-auto rounded-full bg-sql/20 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-10 h-10 text-sql" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">
                    ¡Mensaje enviado!
                  </h4>
                  <p className="text-gray-600">
                    Gracias por contactarnos. Te responderemos en menos de 24 horas.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-700 font-medium">
                        Nombre completo *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Tu nombre"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="h-12 rounded-xl border-gray-200 focus:border-python focus:ring-python"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-700 font-medium">
                        Correo electrónico *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="tu@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-12 rounded-xl border-gray-200 focus:border-python focus:ring-python"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-700 font-medium">
                      Teléfono (opcional)
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+58 247477976"
                      value={formData.phone}
                      onChange={handleChange}
                      className="h-12 rounded-xl border-gray-200 focus:border-python focus:ring-python"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-700 font-medium">
                      Mensaje *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Cuéntanos qué curso te interesa o cualquier pregunta que tengas..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="rounded-xl border-gray-200 focus:border-python focus:ring-python resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 bg-gradient-to-r from-python to-fun-purple hover:from-python-dark hover:to-fun-purple text-white font-bold text-lg rounded-xl transition-all duration-300 hover:shadow-lg disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Enviando...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Enviar Mensaje
                      </span>
                    )}
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    Al enviar este formulario, aceptas nuestra política de privacidad.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

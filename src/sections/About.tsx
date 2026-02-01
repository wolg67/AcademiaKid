import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { 
  Users, ChevronLeft, ChevronRight, Quote
} from 'lucide-react';

const values = [
  {
    icon: <img src="/src/assets/Pasion.png" alt="Pasión" className="w-8 h-8 object-contain" />,
    title: 'Pasión por enseñar',
    description: 'Amamos lo que hacemos y transmitimos esa pasión a nuestros estudiantes.',
    color: 'from-red-400 to-pink-500',
  },
  {
    icon: <img src="/src/assets/Aprendizaje.png" alt="Aprendizaje" className="w-8 h-8 object-contain" />,
    title: 'Aprendizaje creativo',
    description: 'Fomentamos la creatividad y el pensamiento crítico en cada clase.',
    color: 'from-yellow-400 to-orange-500',
  },
  {
    icon: <img src="/src/assets/Innovacion.png" alt="Innovación" className="w-8 h-8 object-contain" />,
    title: 'Innovación constante',
    description: 'Actualizamos nuestros contenidos para estar a la vanguardia tecnológica.',
    color: 'from-python to-fun-purple',
  },
  {
    icon: <img src="/src/assets/Entorno.png" alt="Seguridad" className="w-8 h-8 object-contain" />,
    title: 'Entorno seguro',
    description: 'Creamos un espacio seguro donde los niños pueden explorar y aprender.',
    color: 'from-sql to-cyan-500',
  },
];

const stats = [
  { number: '20+', label: 'Estudiantes felices', icon: <img src="/src/assets/NinoFeliz.png" alt="Estudiantes" className="w-8 h-8 object-contain" /> },
  { number: '7', label: 'Cursos disponibles', icon: <img src="/src/assets/Virrete.png" alt="Cursos" className="w-8 h-8 object-contain" /> },
  { number: '50+', label: 'Proyectos creados', icon: <img src="/src/assets/Proyecto.png" alt="Proyectos" className="w-8 h-8 object-contain" /> },
  { number: '98%', label: 'Satisfacción', icon: <img src="/src/assets/Satisfaccion.png" alt="Satisfacción" className="w-8 h-8 object-contain" /> },
];

const testimonials = [
  {
    name: 'Juan',
    age: '10 años',
    course: 'Python',
    text: 'Aprendí a crear mi primer juego y fue increíble. ¡Python es muy divertido!',
    image: '/src/assets/testimonial-1.png',
    color: 'text-python',
    bg: 'bg-python/10'
  },
  {
    name: 'Robert',
    age: '12 años',
    course: 'Arduino',
    text: 'Pude construir un robot que esquiva obstáculos. ¡La electrónica es mágica!',
    image: '/src/assets/testimonial-2.png',
    color: 'text-arduino',
    bg: 'bg-arduino/10'
  },
  {
    name: 'Carlos',
    age: '8 años',
    course: 'Scratch',
    text: 'Me encanta programar con bloques. Es como jugar pero creando mis historias.',
    image: '/src/assets/testimonial-3.png',
    color: 'text-scratch',
    bg: 'bg-scratch/10'
  },
  {
    name: 'Sofía',
    age: '13 años',
    course: 'SQL',
    text: 'Ahora entiendo cómo las apps guardan tanta información. ¡Las bases de datos son geniales!',
    image: '/src/assets/testimonial-5.png',
    color: 'text-sql',
    bg: 'bg-sql/10'
  },
  {
    name: 'Valentina',
    age: '11 años',
    course: 'HTML',
    text: 'Hice mi primera página web desde cero. ¡Se siente genial verla en el navegador!',
    image: '/src/assets/testimonial-6.png',
    color: 'text-html',
    bg: 'bg-html/10'
  },
  {
    name: 'Isabella',
    age: '11 años',
    course: 'CSS',
    text: 'Me encanta darle colores y animaciones a mis diseños. ¡Hago que todo se vea pro!',
    image: '/src/assets/testimonial-5.png',
    color: 'text-css',
    bg: 'bg-css/10'
  },
  {
    name: 'Diego',
    age: '14 años',
    course: 'JavaScript',
    text: 'Con JavaScript le di vida a mis proyectos. ¡Puedo controlar todo con lógica!',
    image: '/src/assets/testimonial-4.png',
    color: 'text-js',
    bg: 'bg-js/10'
  }
];

export default function About() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    skipSnaps: false
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="nosotros" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-arduino/10 rounded-full px-4 py-2 mb-4">
            <Users className="w-5 h-5 text-arduino" />
            <span className="text-arduino font-semibold text-sm">Sobre Nosotros</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Somos{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-arduino via-fun-purple to-python">
              AcademiaKid
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Una academia dedicada a formar la próxima generación de desarrolladores. 
            Creemos que todos los niños pueden aprender a programar y crear tecnología.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          <div className="bg-gradient-to-br from-python/5 to-fun-purple/5 rounded-3xl p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-python/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-500" />
            <div className="relative">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-python to-fun-purple flex items-center justify-center mb-6 shadow-lg overflow-hidden p-2">
                <img src="/src/assets/Mision.png" alt="Misión" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Misión</h3>
              <p className="text-gray-600 leading-relaxed">
                Democratizar la educación en programación para niños y jóvenes,
                proporcionando herramientas accesibles y divertidas que desarrollen
                habilidades tecnológicas, creatividad y pensamiento lógico desde temprana edad.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-arduino/5 to-scratch/5 rounded-3xl p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-arduino/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-500" />
            <div className="relative">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-arduino to-scratch flex items-center justify-center mb-6 shadow-lg overflow-hidden p-2">
                <img src="/src/assets/Vision.png" alt="Visión" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Visión</h3>
              <p className="text-gray-600 leading-relaxed">
                Ser la academia Virtual innovadora en formación tecnológica para jóvenes,
                reconocida por transformar la manera en que los niños aprenden tecnología,
                creando una comunidad de jóvenes innovadores preparados para el futuro.
              </p>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mb-20">
          <h3 className="text-xl font-bold text-gray-900 mb-8 border-l-4 border-python pl-4">
            Nuestros Valores
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-gray-100"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                  {value.icon}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-python via-fun-purple to-arduino rounded-3xl p-8 lg:p-12 mb-24 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="w-12 h-12 mx-auto rounded-xl bg-white/20 flex items-center justify-center mb-3 backdrop-blur-sm">
                  {stat.icon}
                </div>
                <p className="text-3xl lg:text-4xl font-black mb-1">{stat.number}</p>
                <p className="text-white/80 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="mt-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              Testimonios de nuestros alumnos
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Testimonios de niños que han aprendido lenguajes de programación y nuevas tecnologías. 
              En nuestro programa nos hemos dedicado a guiar a cada estudiante en su camino de aprendizaje.
            </p>
          </div>

          <div className="relative group/carousel">
            <div className="overflow-hidden cursor-grab active:cursor-grabbing px-4" ref={emblaRef}>
              <div className="flex -ml-6">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-6 py-4">
                    <div className="bg-white rounded-[2.5rem] p-8 shadow-card hover:shadow-card-hover transition-all duration-500 h-full flex flex-col items-center text-center border border-gray-100 group">
                      <div className="relative mb-6">
                        <div className={`absolute -inset-3 bg-gradient-to-br ${testimonial.bg.replace('bg-', 'from-').replace('/10', '')} to-fun-purple rounded-full opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500`} />
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-xl relative z-10 transform transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className={`absolute -bottom-2 -right-2 ${testimonial.bg} p-2.5 rounded-full shadow-lg z-20 border-2 border-white`}>
                          <Quote className={`w-4 h-4 ${testimonial.color} fill-current`} />
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-black text-2xl text-gray-900 mb-1">{testimonial.name}</h4>
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-sm font-bold text-gray-400 uppercase tracking-tighter">{testimonial.age}</span>
                          <span className="w-1 h-1 rounded-full bg-gray-300" />
                          <span className={`text-sm font-black uppercase tracking-widest ${testimonial.color}`}>{testimonial.course}</span>
                        </div>
                      </div>

                      <div className="relative">
                        <Quote className="absolute -top-4 -left-4 w-8 h-8 text-gray-100 -z-10 rotate-180" />
                        <p className="text-gray-600 text-lg italic leading-relaxed relative z-10">
                          "{testimonial.text}"
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-12 w-14 h-14 rounded-full bg-white shadow-2xl flex items-center justify-center text-gray-400 hover:text-python hover:scale-110 active:scale-95 transition-all z-20 border border-gray-50 group/btn"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-7 h-7 group-hover/btn:-translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 lg:translate-x-12 w-14 h-14 rounded-full bg-white shadow-2xl flex items-center justify-center text-gray-400 hover:text-python hover:scale-110 active:scale-95 transition-all z-20 border border-gray-50 group/btn"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-7 h-7 group-hover/btn:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className="w-2.5 h-2.5 rounded-full bg-gray-200 hover:bg-python/50 transition-colors"
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

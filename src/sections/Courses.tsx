import { useState } from 'react';
import { 
  BookOpen, Clock, Users, Star, CheckCircle2, 
  ChevronRight,
  Play, Award, TrendingUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

interface Course {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  logo: string;
  color: string;
  gradient: string;
  duration: string;
  level: string;
  students: string;
  rating: number;
  topics: string[];
  features: string[];
}

const courses: Course[] = [
  {
    id: 'python',
    name: 'Python',
    description: 'El lenguaje de programación más amigable para principiantes',
    fullDescription: 'Python es el lenguaje perfecto para iniciar tu viaje en la programación. Con una sintaxis clara y sencilla, aprenderás a crear juegos, aplicaciones y resolver problemas reales mientras desarrollas tu lógica computacional.',
    logo: '/assets/python.svg',
    color: 'python',
    gradient: 'from-python to-python-dark',
    duration: '12 semanas',
    level: 'Principiante',
    students: '20+',
    rating: 4.9,
    topics: ['Variables y tipos de datos', 'Condicionales y bucles', 'Funciones', 'Listas y diccionarios', 'Crear juegos simples', 'Proyectos prácticos'],
    features: ['Clases en vivo', 'Proyectos semanales', 'Certificado incluido', 'Soporte 24/7'],
  },
  {
    id: 'arduino',
    name: 'Arduino',
    description: 'Programación física y electrónica divertida',
    fullDescription: 'Con Arduino, la programación cobra vida. Aprende a controlar luces, motores, sensores y crear proyectos electrónicos increíbles mientras entiendes cómo funciona la tecnología que nos rodea.',
    logo: '/assets/arduino.svg',
    color: 'arduino',
    gradient: 'from-arduino to-arduino-dark',
    duration: '10 semanas',
    level: 'Intermedio',
    students: '20+',
    rating: 4.8,
    topics: ['Electrónica básica', 'Sensores y actuadores', 'Programación C++', 'Proyectos IoT', 'Robótica básica', 'Automatización'],
    features: ['Kit Arduino incluido', 'Proyectos hands-on', 'Mentoría personalizada', 'Comunidad activa'],
  },
  {
    id: 'scratch',
    name: 'Scratch',
    description: 'Programación visual con bloques de colores',
    fullDescription: 'Scratch hace que programar sea como jugar con bloques de construcción. Arrastra y suelta bloques de colores para crear animaciones, juegos y historias interactivas. ¡Perfecto para los más pequeños!',
    logo: '/assets/scratch.svg',
    color: 'scratch',
    gradient: 'from-scratch to-scratch-dark',
    duration: '8 semanas',
    level: 'Introductorio',
    students: '20+',
    rating: 5.0,
    topics: ['Bloques de movimiento', 'Eventos y control', 'Sonidos y música', 'Diseño de personajes', 'Crear juegos', 'Animaciones'],
    features: ['100% visual y divertido', 'Sin código escrito', 'Proyectos creativos', 'Para todas las edades'],
  },
  {
    id: 'html',
    name: 'HTML',
    description: 'Crea la estructura de tus propios sitios web',
    fullDescription: 'HTML es la base de cada sitio web en el mundo. Aprende a usar etiquetas para crear contenido, organizar estructuras y dar tus primeros pasos en el emocionante mundo del desarrollo web profesional.',
    logo: '/assets/html.svg',
    color: 'html',
    gradient: 'from-html to-html-dark',
    duration: '6 semanas',
    level: 'Principiante',
    students: '20+',
    rating: 4.9,
    topics: ['Estructura de documentos', 'Etiquetas de texto', 'Listas y tablas', 'Formularios web', 'Enlaces e imágenes', 'Semántica web'],
    features: ['Proyectos reales', 'Portfolio personal', 'Recursos premium', 'Guías paso a paso'],
  },
  {
    id: 'css',
    name: 'CSS',
    description: 'Diseña y da estilo a la web con colores y animaciones',
    fullDescription: 'Si HTML es el esqueleto, CSS es la piel y el estilo. Aprende a transformar sitios web aburridos en experiencias visualmente asombrosas usando colores, fuentes, layouts modernos y animaciones espectaculares.',
    logo: '/assets/css.svg',
    color: 'css',
    gradient: 'from-css to-css-dark',
    duration: '8 semanas',
    level: 'Principiante',
    students: '20+',
    rating: 4.8,
    topics: ['Selectores y colores', 'Box Model', 'Flexbox y Grid', 'Diseño Responsivo', 'Animaciones CSS', 'Variables y Mixins'],
    features: ['Diseño moderno', 'Laboratorios visuales', 'Feedback de expertos', 'Templates listos'],
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    description: 'Dale vida y magia a tus páginas web con lógica',
    fullDescription: 'JavaScript es el cerebro de la web. Aprende a programar la interactividad, crear aplicaciones dinámicas y controlar cada elemento de tu sitio web. ¡El lenguaje más popular del mundo te espera!',
    logo: '/assets/js.svg',
    color: 'js',
    gradient: 'from-js to-js-dark',
    duration: '14 semanas',
    level: 'Intermedio',
    students: '20+',
    rating: 4.9,
    topics: ['Lógica fundamental', 'Manipulación del DOM', 'Eventos y APIs', 'Programación Asíncrona', 'ES6+ moderno', 'Frameworks intro'],
    features: ['Desafíos de código', 'App real al final', 'Comunidad dev', 'Acceso de por vida'],
  },
  {
    id: 'sql',
    name: 'SQL',
    description: 'Gestión de bases de datos como un experto',
    fullDescription: 'SQL es el lenguaje que permite hablar con las bases de datos. Aprende a organizar, buscar y analizar datos como un verdadero profesional de la tecnología. ¡Una habilidad muy demandada!',
    logo: '/assets/sql.svg',
    color: 'sql',
    gradient: 'from-sql to-sql-dark',
    duration: '10 semanas',
    level: 'Intermedio',
    students: '20+',
    rating: 4.7,
    topics: ['Tablas y relaciones', 'Consultas SELECT', 'INSERT, UPDATE, DELETE', 'Filtros y ordenamiento', 'Funciones agregadas', 'Proyectos reales'],
    features: ['Bases de datos reales', 'Ejercicios prácticos', 'Casos de negocio', 'Preparación profesional'],
  },
];

export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  return (
    <section id="cursos" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Professor Presentation */}
        <div className="mb-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-card p-8 md:p-12">
            {/* Professor Photo */}
            <div className="flex justify-center mb-6">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gradient-to-r from-python via-fun-purple to-arduino shadow-lg">
                <img 
                   src="/Imagenes/williamlozano.svg" 
                  alt="William Lozano - Profesor" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Professor Message */}
            <div className="text-center">
              <p className="text-lg text-gray-700 leading-relaxed">
                Mi nombre se William Lozano, Soy profesor con <span className="font-bold text-python">30+ años de experiencia</span> enseñando a estudiantes de todos los niveles. En continua actualización en la Programación, con dominio de varios lenguajes. Me especializo en enseñar a programar desde cero. Y ahora con una didáctica Centrada en el Desarrollo de las competencias necesarias para el Aprendizaje estos lenguajes de Programación para Niños. Comienza aprender{' '}
                <span className="font-semibold text-python">Python</span>,{' '}
                <span className="font-semibold text-arduino">HTML</span>,{' '}
                <span className="font-semibold text-sql">CSS</span>,{' '}
                <span className="font-semibold text-fun-purple">JS</span>,{' '}
                <span className="font-semibold text-sql">SQL</span>,{' '}
                <span className="font-semibold text-scratch">Scratch</span>,{' '}
                <span className="font-semibold text-arduino">Arduino</span> y muchos más.
              </p>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-python/10 rounded-full px-4 py-2 mb-4">
            <BookOpen className="w-5 h-5 text-python" />
            <span className="text-python font-semibold text-sm">Nuestros Cursos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Aprende con los{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-python via-fun-purple to-arduino">
              mejores cursos
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre nuestros cursos diseñados especialmente para jóvenes desarrolladores. 
            ¡Cada uno es una aventura de aprendizaje!
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className={`group relative bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 card-hover border-2 border-transparent hover:border-${course.color}/30`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Course Header */}
              <div className={`h-32 bg-gradient-to-r ${course.gradient} relative overflow-hidden`}>
                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 left-4 w-20 h-20 rounded-full bg-white/30" />
                  <div className="absolute bottom-4 right-4 w-16 h-16 rounded-full bg-white/20" />
                  <div className="absolute top-1/2 left-1/2 w-24 h-24 rounded-full bg-white/10 -translate-x-1/2 -translate-y-1/2" />
                </div>
                
                {/* Logo SVG (In corner) */}
                <div className="absolute top-4 right-4 w-20 h-20 animate-bounce-slow flex items-center justify-center p-2 bg-white/20 backdrop-blur-sm rounded-2xl">
                  <img src={course.logo} alt={course.name} className="w-full h-full object-contain" />
                </div>
                
                {/* Main Icon Circle */}
                <div className="absolute -bottom-8 left-6 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center text-gray-700 group-hover:scale-110 transition-transform duration-300 p-3">
                  <img src={course.logo} alt={course.name} className="w-full h-full object-contain" />
                </div>
              </div>

              {/* Course Content */}
              <div className="pt-12 pb-6 px-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className={`text-2xl font-bold text-gray-900 group-hover:text-${course.color} transition-colors`}>
                    {course.name}
                  </h3>
                  <div className="flex items-center gap-1 bg-yellow-100 px-2 py-1 rounded-lg">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-bold text-yellow-700">{course.rating}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>

                {/* Course Meta */}
                <div className="flex flex-wrap gap-3 mb-5">
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Users className="w-4 h-4" />
                    <span>{course.students} estudiantes</span>
                  </div>
                  <div className={`flex items-center gap-1 text-sm font-medium text-${course.color}`}>
                    <TrendingUp className="w-4 h-4" />
                    <span>{course.level}</span>
                  </div>
                </div>

                {/* Topics Preview */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {course.topics.slice(0, 3).map((topic, i) => (
                    <span
                      key={i}
                      className={`text-xs px-3 py-1 rounded-full bg-${course.color}/10 text-${course.color}-dark font-medium`}
                    >
                      {topic}
                    </span>
                  ))}
                  {course.topics.length > 3 && (
                    <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600 font-medium">
                      +{course.topics.length - 3}
                    </span>
                  )}
                </div>

                {/* CTA Button */}
                <Button
                  onClick={() => setSelectedCourse(course)}
                  className={`w-full bg-gradient-to-r ${course.gradient} text-white font-bold py-3 rounded-xl group/btn hover:shadow-lg transition-all duration-300`}
                >
                  Ver Detalles
                  <ChevronRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-white rounded-2xl shadow-card p-6">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-python to-fun-purple flex items-center justify-center">
              <Award className="w-7 h-7 text-white" />
            </div>
            <div className="text-left">
              <p className="font-bold text-gray-900">¿No sabes por dónde empezar?</p>
              <p className="text-sm text-gray-600">Te ayudamos a elegir el curso perfecto para ti</p>
            </div>
            <Button className="bg-python hover:bg-python-dark text-white font-bold px-6 rounded-xl">
              <Play className="w-4 h-4 mr-2" />
              Test Gratis
            </Button>
          </div>
        </div>
      </div>

      {/* Course Detail Dialog */}
      <Dialog open={!!selectedCourse} onOpenChange={() => setSelectedCourse(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedCourse && (
            <>
              <DialogHeader>
                <div className={`h-24 -mx-6 -mt-6 mb-4 bg-gradient-to-r ${selectedCourse.gradient} relative overflow-hidden rounded-t-lg`}>
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-4 left-4 w-20 h-20 rounded-full bg-white/30" />
                    <div className="absolute bottom-4 right-4 w-16 h-16 rounded-full bg-white/20" />
                  </div>
                  <div className="absolute bottom-4 left-6 flex items-center gap-3">
                    <div className="w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center p-2">
                       <img src={selectedCourse.logo} alt={selectedCourse.name} className="w-full h-full object-contain" />
                    </div>
                  </div>
                </div>
                <DialogTitle className="text-2xl font-bold">{selectedCourse.name}</DialogTitle>
                <DialogDescription className="text-base">{selectedCourse.fullDescription}</DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-slate-50 rounded-xl p-4 text-center">
                    <Clock className="w-6 h-6 mx-auto mb-2 text-python" />
                    <p className="font-bold text-gray-900">{selectedCourse.duration}</p>
                    <p className="text-xs text-gray-500">Duración</p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4 text-center">
                    <Users className="w-6 h-6 mx-auto mb-2 text-arduino" />
                    <p className="font-bold text-gray-900">{selectedCourse.students}</p>
                    <p className="text-xs text-gray-500">Estudiantes</p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4 text-center">
                    <Star className="w-6 h-6 mx-auto mb-2 text-scratch fill-scratch" />
                    <p className="font-bold text-gray-900">{selectedCourse.rating}</p>
                    <p className="text-xs text-gray-500">Rating</p>
                  </div>
                </div>

                {/* Topics */}
                <div>
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-python" />
                    Lo que aprenderás
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {selectedCourse.topics.map((topic, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-sql flex-shrink-0" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5 text-arduino" />
                    Incluye
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCourse.features.map((feature, i) => (
                      <span
                        key={i}
                        className="text-sm px-4 py-2 rounded-full bg-gradient-to-r from-python/10 to-fun-purple/10 text-gray-700 font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex gap-4 pt-4">
                  <Button className={`flex-1 bg-gradient-to-r ${selectedCourse.gradient} text-white font-bold py-3 rounded-xl`}>
                    Inscribirme Ahora
                  </Button>
                  <Button variant="outline" className="px-6 rounded-xl">
                    Más Info
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

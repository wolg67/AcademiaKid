import { 
  Heart, Lightbulb, Rocket, Shield, Users, 
  Target, Sparkles, GraduationCap, Smile
} from 'lucide-react';

const values = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Pasión por enseñar',
    description: 'Amamos lo que hacemos y transmitimos esa pasión a nuestros estudiantes.',
    color: 'from-red-400 to-pink-500',
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Aprendizaje creativo',
    description: 'Fomentamos la creatividad y el pensamiento crítico en cada clase.',
    color: 'from-yellow-400 to-orange-500',
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: 'Innovación constante',
    description: 'Actualizamos nuestros contenidos para estar a la vanguardia tecnológica.',
    color: 'from-python to-fun-purple',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Entorno seguro',
    description: 'Creamos un espacio seguro donde los niños pueden explorar y aprender.',
    color: 'from-sql to-cyan-500',
  },
];

const stats = [
  { number: '20+', label: 'Estudiantes felices', icon: <Smile className="w-5 h-5" /> },
  { number: '7', label: 'Cursos disponibles', icon: <GraduationCap className="w-5 h-5" /> },
  { number: '50+', label: 'Proyectos creados', icon: <Rocket className="w-5 h-5" /> },
  { number: '98%', label: 'Satisfacción', icon: <Sparkles className="w-5 h-5" /> },
];

export default function About() {
  return (
    <section id="nosotros" className="py-20 bg-white">
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
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Una academia dedicada a formar la próxima generación de desarrolladores. 
            Creemos que todos los niños pueden aprender a programar y crear tecnología.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Mission */}
          <div className="bg-gradient-to-br from-python/5 to-fun-purple/5 rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-python/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-python to-fun-purple flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Misión</h3>
              <p className="text-gray-600 leading-relaxed">
                Democratizar la educación en programación para niños y jóvenes, 
                proporcionando herramientas accesibles y divertidas que desarrollen 
                habilidades tecnológicas, creatividad y pensamiento lógico desde temprana edad.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-arduino/5 to-scratch/5 rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-arduino/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-arduino to-scratch flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Visión</h3>
              <p className="text-gray-600 leading-relaxed">
                Ser la academia líder en Latinoamérica en formación tecnológica para jóvenes, 
                reconocida por transformar la manera en que los niños aprenden tecnología, 
                creando una comunidad de jóvenes innovadores preparados para el futuro.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Nuestros Valores
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 card-hover border border-gray-100"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {value.icon}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-python via-fun-purple to-arduino rounded-3xl p-8 lg:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="w-12 h-12 mx-auto rounded-xl bg-white/20 flex items-center justify-center mb-3">
                  {stat.icon}
                </div>
                <p className="text-3xl lg:text-4xl font-black mb-1">{stat.number}</p>
                <p className="text-white/80 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Preview */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Conoce a nuestro equipo
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Profesionales apasionados por la educación y la tecnología, dedicados a 
            guiar a cada estudiante en su camino de aprendizaje.
          </p>
          <div className="flex justify-center gap-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-python to-fun-purple flex items-center justify-center text-white font-bold text-lg border-4 border-white shadow-lg"
                style={{ marginLeft: i > 1 ? '-1rem' : 0 }}
              >
                {String.fromCharCode(64 + i)}
              </div>
            ))}
            <div
              className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-bold border-4 border-white shadow-lg"
              style={{ marginLeft: '-1rem' }}
            >
              +10
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

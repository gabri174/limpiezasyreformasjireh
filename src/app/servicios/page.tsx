'use client'

import { motion } from 'framer-motion'
import { Wrench, Sparkles, Home, Building, Car, Shield, CheckCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import GallerySection from '@/components/sections/gallery'

const reformasServices = [
  {
    icon: Home,
    title: 'Reformas Integrales',
    description: 'Transformación completa de viviendas y espacios comerciales',
    features: ['Diseño personalizado', 'Materiales premium', 'Gestión de permisos', 'Garantía extendida']
  },
  {
    icon: Wrench,
    title: 'Cocinas y Baños',
    description: 'Renovación especializada de las áreas más importantes del hogar',
    features: ['Diseño funcional', 'Instalaciones certificadas', 'Acabados de lujo', 'Optimización de espacios']
  },
  {
    icon: Building,
    title: 'Fachadas y Exteriores',
    description: 'Mejora y renovación de la imagen exterior de edificios',
    features: ['Materiales resistentes', 'Aislamiento térmico', 'Diseño moderno', 'Mantenimiento incluido']
  },
  {
    icon: Shield,
    title: 'Acabados de Lujo',
    description: 'Detalles premium que marcan la diferencia',
    features: ['Materiales exclusivos', 'Acabados personalizados', 'Trabajo artesanal', 'Resultado único']
  }
]

const limpiezaServices = [
  {
    icon: Sparkles,
    title: 'Limpieza Fin de Obra',
    description: 'Limpieza especializada después de reformas y construcciones',
    features: ['Eliminación de polvo', 'Limpieza profunda', 'Protección de superficies', 'Entrega lista']
  },
  {
    icon: Building,
    title: 'Oficinas y Empresas',
    description: 'Mantenimiento y limpieza de espacios profesionales',
    features: ['Servicio regular', 'Productos profesionales', 'Horarios flexibles', 'Discreción garantizada']
  },
  {
    icon: Home,
    title: 'Comunidades y Vecinos',
    description: 'Limpieza de zonas comunes y mantenimiento',
    features: ['Zonas comunes', 'Escaleras y pasillos', 'Garajes', 'Jardines']
  },
  {
    icon: Car,
    title: 'Hogares Particulares',
    description: 'Limpieza profunda para tu vivienda',
    features: ['Todas las estancias', 'Cocinas y baños', 'Ventanas', 'Desinfección']
  }
]

export default function ServiciosPage() {
  return (
    <main>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">
              Nuestros <span className="text-[#404f68]">Servicios</span>
            </h1>
            <p className="text-xl text-[#777777] max-w-3xl mx-auto leading-relaxed">
              Ofrecemos soluciones integrales con la más alta calidad, combinando experiencia 
              profesional y los mejores materiales del mercado.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center px-4 py-2 bg-[#404f68]/10 text-[#404f68] rounded-full text-sm font-medium mb-4">
              <Wrench className="w-4 h-4 mr-2" />
              Reformas
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Reformas de Calidad
            </h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Transformamos tus espacios con acabados de lujo y atención al detalle
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {reformasServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
                  <service.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-secondary mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-foreground">
                      <CheckCircle className="w-4 h-4 text-accent mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group">
                  Solicitar información
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4 mr-2" />
              Limpieza Profesional
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Servicios de Limpieza
            </h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Limpieza especializada para todo tipo de espacios con productos profesionales
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {limpiezaServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
                  <service.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-secondary mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-foreground">
                      <CheckCircle className="w-4 h-4 text-accent mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group">
                  Solicitar información
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">
              ¿Necesitas un servicio personalizado?
            </h2>
            <p className="text-xl text-secondary mb-8 max-w-2xl mx-auto">
              Adaptamos nuestros servicios a tus necesidades específicas. 
              Contáctanos y encontraremos la solución perfecta para ti.
            </p>
            <Link href="/contacto">
              <Button size="lg" className="group">
                Solicitar presupuesto personalizado
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">
              ¿Por qué elegirnos?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">5+</div>
                <div className="text-lg font-medium text-foreground mb-2">Años de experiencia</div>
                <div className="text-secondary">Profesionales cualificados</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">200+</div>
                <div className="text-lg font-medium text-foreground mb-2">Proyectos completados</div>
                <div className="text-secondary">Clientes satisfechos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">100%</div>
                <div className="text-lg font-medium text-foreground mb-2">Garantía de calidad</div>
                <div className="text-secondary">Resultados duraderos</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <GallerySection />
    </main>
  )
}

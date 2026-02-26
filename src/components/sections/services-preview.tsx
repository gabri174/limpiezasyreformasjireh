'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Wrench, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const services = [
  {
    icon: Wrench,
    title: 'Reformas Integrales',
    description: 'Transformación completa de espacios con acabados de lujo',
    features: ['Cocinas', 'Baños', 'Fachadas', 'Acabados premium']
  },
  {
    icon: Sparkles,
    title: 'Limpieza Profesional',
    description: 'Servicios de limpieza especializados para todo tipo de espacios',
    features: ['Fin de obra', 'Oficinas', 'Comunidades', 'Desinfección profunda']
  }
]

export default function ServicesPreview() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Ofrecemos soluciones integrales para reformas y limpieza con la más alta calidad
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
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
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full group border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 font-medium">
                Ver detalles
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/servicios">
            <Button size="lg" className="bg-primary text-white hover:bg-primary-light shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg font-semibold group">
              Ver todos los servicios
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Award, Users, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const values = [
  {
    icon: Award,
    title: 'Excelencia',
    description: 'Compromiso con la más alta calidad en cada proyecto'
  },
  {
    icon: Users,
    title: 'Responsabilidad',
    description: 'Cumplimiento de plazos y respeto por el cliente'
  },
  {
    icon: CheckCircle,
    title: 'Calidad',
    description: 'Acabados finos y atención al detalle'
  },
  {
    icon: Clock,
    title: 'Puntualidad',
    description: 'Respeto por los tiempos acordados'
  }
]

const timeline = [
  {
    year: '2019',
    title: 'Inicio de nuestra trayectoria',
    description: 'Comenzamos con un pequeño equipo y grandes sueños'
  },
  {
    year: '2021',
    title: 'Expansión de servicios',
    description: 'Incorporamos servicios de limpieza profesional'
  },
  {
    year: '2023',
    title: 'Reconocimiento local',
    description: 'Convertidos en referencia en Valencia'
  },
  {
    year: '2024',
    title: 'Crecimiento continuo',
    description: 'Más de 200 proyectos completados con éxito'
  }
]

export default function NosotrosPage() {
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
              Sobre <span className="text-[#404f68]">Jireh</span>
            </h1>
            <p className="text-xl text-[#777777] max-w-3xl mx-auto leading-relaxed">
              Empresa con 5 años de experiencia, caracterizada por la responsabilidad y acabados finos. 
              En limpieza, resaltamos por el compromiso y bienestar del cliente.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-[#333333] mb-6">
                Nuestra Historia
              </h2>
              <p className="text-[#777777] mb-4 leading-relaxed">
                Limpiezas y Reformas Jireh nació en 2019 con una misión clara: transformar espacios 
                mejorando la calidad de vida de las personas. Desde nuestros inicios, nos hemos 
                caracterizado por un enfoque personalizado y un compromiso inquebrantable con la calidad.
              </p>
              <p className="text-[#777777] mb-6 leading-relaxed">
                A lo largo de estos 5 años, hemos crecido hasta convertirnos en una empresa de referencia 
                en la Comunidad Valenciana, especializándonos tanto en reformas integrales como en servicios 
                de limpieza profesional.
              </p>
              <p className="text-[#777777] leading-relaxed">
                Nuestro equipo está formado por profesionales altamente cualificados que comparten nuestra 
                pasión por la excelencia y el servicio al cliente.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-[#404f68]/20 to-[#4a4a4a]/20 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-[#404f68] mb-2">5+</div>
                  <div className="text-xl text-[#333333] font-medium">Años de Experiencia</div>
                  <div className="text-[#777777] mt-2">Transformando espacios</div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-[#333333] mb-12">
              Nuestros Valores
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#404f68]/10 rounded-full mb-4">
                    <value.icon className="w-8 h-8 text-[#404f68]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#333333] mb-2">
                    {value.title}
                  </h3>
                  <p className="text-[#777777]">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-[#333333] mb-12 text-center">
              Nuestra Trayectoria
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {timeline.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-[#404f68] mb-2">
                    {item.year}
                  </div>
                  <h3 className="text-lg font-semibold text-[#333333] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#777777] text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-[#333333] mb-6">
              ¿Listo para trabajar con nosotros?
            </h2>
            <p className="text-xl text-[#777777] mb-8 max-w-2xl mx-auto">
              Descubre cómo podemos transformar tu espacio con la calidad y profesionalismo que nos caracterizan.
            </p>
            <Link href="/contacto">
              <Button size="lg" className="bg-[#404f68] text-white hover:bg-[#4a4a4a]">
                Contactar ahora
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

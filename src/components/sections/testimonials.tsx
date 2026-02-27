'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Quote } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

const testimonials = [
  {
    name: 'María García',
    role: 'Propietaria de vivienda',
    content: 'Excelente trabajo en la reforma de mi cocina. Muy profesionales y detallistas. El resultado superó mis expectativas.',
    image: '/images/testimonial-1.jpg'
  },
  {
    name: 'Juan Martínez',
    role: 'Administrador de fincas',
    content: 'Contratamos sus servicios de limpieza para varios edificios y siempre cumplen con los plazos y calidad acordados.',
    image: '/images/testimonial-2.jpg'
  },
  {
    name: 'Ana López',
    role: 'Empresaria',
    content: 'Transformaron por completo mi oficina. El equipo es muy profesional y el acabado es de lujo. Totalmente recomendados.',
    image: '/images/testimonial-3.jpg'
  }
]

const stats = [
  { number: '5+', label: 'Años de experiencia' },
  { number: '200+', label: 'Proyectos completados' },
  { number: '98%', label: 'Clientes satisfechos' },
  { number: '24/7', label: 'Soporte disponible' }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-[#777777] max-w-3xl mx-auto">
            La satisfacción de nuestros clientes es nuestro mejor testimonio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
            >
              <Quote className="w-8 h-8 text-[#404f68] mb-4" />
              <p className="text-[#4a4a4a] mb-6 leading-relaxed">
                {testimonial.content}
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#404f68] rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-[#333333]">{testimonial.name}</h4>
                  <p className="text-[#777777] text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#404f68] mb-2">
                {stat.number}
              </div>
              <div className="text-[#777777]">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/contacto">
            <Button size="lg" className="bg-[#404f68] text-white hover:bg-[#4a4a4a] shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg font-semibold group">
              Únete a nuestros clientes satisfechos
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

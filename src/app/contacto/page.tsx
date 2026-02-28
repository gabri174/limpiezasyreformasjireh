'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulación de envío - reemplazar con ID real de Formspree
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      })
    }, 2000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Teléfono',
      content: '+34 613 35 47 70',
      description: 'Lunes a Viernes, 9:00 - 18:00'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@limpiezasyreformasjireh.com',
      description: 'Respuesta en 24 horas'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      content: 'Valencia, Comunidad Valenciana',
      description: 'Servicio en toda la provincia'
    },
    {
      icon: Clock,
      title: 'Horario',
      content: 'Lunes a Viernes: 9:00 - 18:00',
      description: 'Emergencias 24/7'
    }
  ]

  if (isSubmitted) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-[#333333] mb-4">
              ¡Mensaje enviado!
            </h2>
            <p className="text-[#777777] mb-6">
              Gracias por contactarnos. Te responderemos en un plazo máximo de 24 horas.
            </p>
            <Button onClick={() => setIsSubmitted(false)} className="bg-[#404f68] text-white hover:bg-[#4a4a4a]">
              Enviar otro mensaje
            </Button>
          </motion.div>
        </div>
      </main>
    )
  }

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
              Contacta con <span className="text-[#404f68]">Jireh</span>
            </h1>
            <p className="text-xl text-[#777777] max-w-3xl mx-auto leading-relaxed">
              Estamos aquí para ayudarte con tu proyecto de reforma o limpieza. 
              Contáctanos y recibe asesoramiento profesional sin compromiso.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-[#333333] mb-8">
                Envíanos un mensaje
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#4a4a4a] mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#404f68] focus:border-transparent outline-none transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#4a4a4a] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#404f68] focus:border-transparent outline-none transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#4a4a4a] mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#404f68] focus:border-transparent outline-none transition-colors"
                      placeholder="+34 613 35 47 70"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-[#4a4a4a] mb-2">
                      Servicio de interés *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#404f68] focus:border-transparent outline-none transition-colors"
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="reformas">Reformas Integrales</option>
                      <option value="cocinas">Cocinas</option>
                      <option value="banos">Baños</option>
                      <option value="fachadas">Fachadas</option>
                      <option value="limpieza-fin-obra">Limpieza Fin de Obra</option>
                      <option value="limpieza-oficinas">Limpieza de Oficinas</option>
                      <option value="limpieza-comunidades">Limpieza de Comunidades</option>
                      <option value="limpieza-hogares">Limpieza de Hogares</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#4a4a4a] mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#404f68] focus:border-transparent outline-none transition-colors resize-none"
                    placeholder="Describe tu proyecto y necesidades..."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full group bg-[#404f68] text-white hover:bg-[#4a4a4a]"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar mensaje
                      <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-[#333333] mb-8">
                Información de contacto
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-[#404f68]/10 rounded-full flex-shrink-0">
                      <info.icon className="w-6 h-6 text-[#404f68]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#333333] mb-1">
                        {info.title}
                      </h3>
                      <p className="text-[#4a4a4a] mb-1">
                        {info.content}
                      </p>
                      <p className="text-sm text-[#777777]">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-gradient-to-r from-[#404f68]/20 to-[#4a4a4a]/20 rounded-2xl">
                <h3 className="text-lg font-semibold text-[#333333] mb-4">
                  ¿Prefieres una llamada?
                </h3>
                <p className="text-[#777777] mb-6">
                  Déjanos tu número y te contactaremos en el horario que prefieras.
                </p>
                <Button variant="outline" className="w-full border-[#404f68] text-[#404f68] hover:bg-[#404f68] hover:text-white">
                  Solicitar llamada
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-[#333333] mb-6">
              Área de servicio
            </h2>
            <p className="text-xl text-[#777777] mb-8 max-w-2xl mx-auto">
              Ofrecemos nuestros servicios en toda la Comunidad Valenciana, 
              con especial atención a la provincia de Valencia.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {['Valencia', 'Alicante', 'Castellón', 'Todas las provincias'].map((location, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200">
                  <div className="text-[#404f68] font-semibold">{location}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

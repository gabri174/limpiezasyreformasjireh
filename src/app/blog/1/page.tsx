'use client'

import { motion } from 'framer-motion'
import { Calendar, User, ArrowRight, Clock, Phone, Mail, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

export default function BlogPostPage() {
  return (
    <main>
      <article className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Link href="/blog" className="inline-flex items-center text-[#404f68] hover:text-[#4a4a4a] mb-6 transition-colors">
              <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
              Volver al blog
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6 leading-tight">
              Guía Definitiva para Reformas Integrales de Pisos: Cómo transformar tu hogar sin estrés
            </h1>
            
            <div className="flex flex-wrap items-center justify-center gap-4 text-[#777777] mb-8">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                Equipo Jireh
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                28 de febrero de 2024
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                8 min de lectura
              </div>
            </div>
            
            <div className="inline-flex items-center px-4 py-2 bg-[#404f68]/10 text-[#404f68] rounded-full text-sm font-medium">
              Reformas Integrales
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 mb-12"
          >
            <div className="aspect-video bg-gradient-to-br from-[#404f68]/20 to-[#4a4a4a]/20 rounded-xl mb-8 flex items-center justify-center">
              <div className="text-center text-[#404f68]">
                <div className="text-8xl mb-4">🏠</div>
                <div className="text-lg font-medium">Reformas Integrales de Pisos</div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-8"
              >
                <section>
                  <h2 className="text-2xl font-bold text-[#333333] mb-4">Introducción</h2>
                  <p className="text-[#4a4a4a] leading-relaxed">
                    Realizar una reforma integral es una de las decisiones más importantes para revalorizar tu vivienda. 
                    En Limpiezas y Reformas Jireh, sabemos que la clave del éxito no solo está en el diseño, 
                    sino en la planificación y la elección del presupuesto adecuado.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[#333333] mb-4">
                    1. ¿Por qué optar por una reforma integral?
                  </h2>
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                      <h3 className="text-lg font-semibold text-[#404f68] mb-2">
                        🏗️ Optimización del espacio
                      </h3>
                      <p className="text-[#4a4a4a]">
                        Eliminar tabiques para crear conceptos abiertos (unidos a la tendencia de búsqueda 
                        de reformas de cocinas y baños).
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                      <h3 className="text-lg font-semibold text-[#404f68] mb-2">
                        💡 Eficiencia energética
                      </h3>
                      <p className="text-[#4a4a4a]">
                        Cambiar ventanas y aislamiento reduce la factura de luz hasta un 30%.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                      <h3 className="text-lg font-semibold text-[#404f68] mb-2">
                        📈 Aumento de valor
                      </h3>
                      <p className="text-[#4a4a4a]">
                        Una reforma bien ejecutada puede incrementar el valor de tu piso hasta un 20%.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[#333333] mb-4">
                    2. Tips para una reforma de piso exitosa
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <CheckCircle className="w-6 h-6 text-[#404f68] flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-[#333333] mb-2">
                          Define tus prioridades
                        </h3>
                        <p className="text-[#4a4a4a]">
                          Haz una lista de lo "imprescindible" frente a lo "deseable".
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <CheckCircle className="w-6 h-6 text-[#404f68] flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-[#333333] mb-2">
                          Iluminación inteligente
                        </h3>
                        <p className="text-[#4a4a4a]">
                          No escatimes en puntos de luz. La tendencia actual es la iluminación LED 
                          indirecta en techos y foseados.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <CheckCircle className="w-6 h-6 text-[#404f68] flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-[#333333] mb-2">
                          Materiales duraderos
                        </h3>
                        <p className="text-[#4a4a4a]">
                          En Reformas Jireh siempre recomendamos suelos porcelánicos o tarimas 
                          de alta resistencia para zonas de mucho tránsito.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[#333333] mb-4">
                    3. Cómo buscar y elegir el mejor presupuesto
                  </h2>
                  <p className="text-[#4a4a4a] mb-4">
                    No siempre el más barato es el mejor. Para comparar de forma justa, ten en cuenta:
                  </p>
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-[#404f68] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <div>
                          <strong className="text-[#333333]">Presupuesto detallado por partidas:</strong> 
                          Exige que se especifique el coste de demolición, fontanería, electricidad, albañilería, etc.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-[#404f68] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <div>
                          <strong className="text-[#333333]">Calidades específicas:</strong> 
                          Asegúrate de que todos los presupuestos usen los mismos materiales 
                          (ej. tipo de azulejo o marca de pintura).
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-[#404f68] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <div>
                          <strong className="text-[#333333]">Plazos por escrito:</strong> 
                          Un buen presupuesto debe incluir una fecha de inicio y una de finalización.
                        </div>
                      </li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[#333333] mb-4">
                    4. Cosas vitales a tener en cuenta antes de empezar
                  </h2>
                  <div className="space-y-4">
                    <div className="bg-[#404f68]/10 rounded-lg p-6 border border-[#404f68]/20">
                      <h3 className="text-lg font-semibold text-[#404f68] mb-2">
                        📋 Licencias y Permisos
                      </h3>
                      <p className="text-[#4a4a4a]">
                        Dependiendo de la magnitud (si tocas muros de carga o no), necesitarás una 
                        licencia de obra menor o mayor. Nosotros nos encargamos de asesorarte en este proceso.
                      </p>
                    </div>
                    
                    <div className="bg-[#404f68]/10 rounded-lg p-6 border border-[#404f68]/20">
                      <h3 className="text-lg font-semibold text-[#404f68] mb-2">
                        🏢 Comunidad de vecinos
                      </h3>
                      <p className="text-[#4a4a4a]">
                        Informar a la comunidad y respetar los horarios de ruido es fundamental 
                        para evitar conflictos.
                      </p>
                    </div>
                    
                    <div className="bg-[#404f68]/10 rounded-lg p-6 border border-[#404f68]/20">
                      <h3 className="text-lg font-semibold text-[#404f68] mb-2">
                        🛡️ Seguro de responsabilidad civil
                      </h3>
                      <p className="text-[#4a4a4a]">
                        Asegúrate de que la empresa contratada cuente con seguro vigente para 
                        cubrir cualquier imprevisto.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="bg-gradient-to-r from-[#404f68]/10 to-[#4a4a4a]/10 rounded-xl p-8 border border-[#404f68]/20">
                  <h2 className="text-2xl font-bold text-[#333333] mb-4">
                    🎯 Consejos SEO para tu web "Limpiezas y Reformas Jireh"
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-[#404f68] mb-2">Palabras Clave:</h3>
                      <p className="text-[#4a4a4a]">
                        Asegúrate de incluir en el texto frases como "reformas integrales en Valencia", 
                        "presupuesto reforma baño" y "empresa de reformas de confianza".
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-[#404f68] mb-2">Imágenes de Calidad:</h3>
                      <p className="text-[#4a4a4a]">
                        Usa fotos Reales de tus trabajos "Antes y Después". Nombra los archivos de imagen 
                        como reforma-integral-piso-jireh.jpg (evita nombres genéricos como IMG_4882).
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-[#404f68] mb-2">Llamada a la Acción (CTA):</h3>
                      <p className="text-[#4a4a4a]">
                        Al final del blog, pon un botón claro: "Solicita tu presupuesto gratuito hoy mismo"
                      </p>
                    </div>
                  </div>
                </section>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h2 className="text-2xl font-bold text-[#333333] mb-4">
                ¿Listo para transformar tu hogar?
              </h2>
              <p className="text-[#777777] mb-6 max-w-2xl mx-auto">
                Nuestro equipo de expertos está listo para ayudarte a planificar y ejecutar 
                la reforma integral de tus sueños.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contacto">
                  <Button size="lg" className="bg-[#404f68] text-white hover:bg-[#4a4a4a]">
                    Solicita tu presupuesto gratuito hoy mismo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="tel:+34613354770">
                  <Button variant="outline" size="lg" className="border-[#404f68] text-[#404f68] hover:bg-[#404f68] hover:text-white">
                    <Phone className="mr-2 h-5 w-5" />
                    +34 613 35 47 70
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </article>
    </main>
  )
}

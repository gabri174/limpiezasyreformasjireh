'use client'

import { motion } from 'framer-motion'
import { Calendar, User, ArrowRight, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { formatDate } from '@/lib/utils'

const blogPosts = [
  {
    id: '1',
    title: 'Guía Definitiva para Reformas Integrales de Pisos: Cómo transformar tu hogar sin estrés',
    excerpt: 'Descubre cómo planificar y ejecutar una reforma integral exitosa. Tips expertos, presupuestos y todo lo que necesitas saber para revalorizar tu vivienda.',
    content: 'Realizar una reforma integral es una de las decisiones más importantes para revalorizar tu vivienda...',
    publishedAt: '2024-02-28',
    author: 'Equipo Jireh',
    image: '/images/blog-reformas-integrales.jpg',
    category: 'Reformas',
    readingTime: '8 min',
    featured: true
  },
  {
    id: '2',
    title: 'Tendencias en reformas de cocinas para 2024',
    excerpt: 'Descubre las últimas tendencias en diseño de cocinas que están revolucionando los espacios modernos.',
    content: 'El diseño de cocinas ha evolucionado significativamente en los últimos años...',
    publishedAt: '2024-01-15',
    author: 'Equipo Jireh',
    image: '/images/blog-cocinas.jpg',
    category: 'Reformas',
    readingTime: '5 min'
  },
  {
    id: '3',
    title: 'Guía completa de limpieza post-obra',
    excerpt: 'Aprende cómo realizar una limpieza efectiva después de una reforma para dejar tu espacio perfecto.',
    content: 'La limpieza después de una obra es crucial para disfrutar de tu renovación...',
    publishedAt: '2024-01-10',
    author: 'María González',
    image: '/images/blog-limpieza.jpg',
    category: 'Limpieza',
    readingTime: '7 min'
  },
  {
    id: '4',
    title: 'Materiales sostenibles para reformas ecológicas',
    excerpt: 'Conoce los materiales más sostenibles y respetuosos con el medio ambiente para tu próxima reforma.',
    content: 'La construcción sostenible es más que una tendencia, es una necesidad...',
    publishedAt: '2024-01-05',
    author: 'Carlos Ruiz',
    image: '/images/blog-sostenible.jpg',
    category: 'Reformas',
    readingTime: '6 min'
  },
  {
    id: '5',
    title: 'Mantenimiento de baños: consejos profesionales',
    excerpt: 'Tips expertos para mantener tus baños en perfectas condiciones y evitar problemas comunes.',
    content: 'El mantenimiento adecuado de los baños es fundamental para su durabilidad...',
    publishedAt: '2023-12-28',
    author: 'Equipo Jireh',
    image: '/images/blog-banos.jpg',
    category: 'Mantenimiento',
    readingTime: '4 min'
  }
]

const categories = ['Todos', 'Reformas', 'Limpieza', 'Mantenimiento']

export default function BlogPage() {
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
              Nuestro <span className="text-[#404f68]">Blog</span>
            </h1>
            <p className="text-xl text-[#777777] max-w-3xl mx-auto leading-relaxed">
              Consejos, noticias y tendencias sobre reformas y limpieza profesional. 
              Mantente informado con nuestros expertos.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === 'Todos'
                    ? 'bg-[#404f68] text-white'
                    : 'bg-white text-[#4a4a4a] hover:bg-[#404f68] hover:text-white border border-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
              >
                <div className="aspect-video bg-gradient-to-br from-[#404f68]/20 to-[#4a4a4a]/20 flex items-center justify-center">
                  <div className="text-center text-[#404f68]">
                    <div className="text-6xl mb-2">📝</div>
                    <div className="text-sm font-medium">Imagen del artículo</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center px-3 py-1 bg-[#404f68]/10 text-[#404f68] rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center text-[#777777] text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readingTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#333333] mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-[#777777] mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-[#777777] text-sm">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center text-[#777777] text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(post.publishedAt)}
                    </div>
                  </div>
                  
                  <Link href={`/blog/${post.id}`}>
                    <Button variant="outline" className="w-full border-[#404f68] text-[#404f68] hover:bg-[#404f68] hover:text-white">
                      Leer más
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
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
              ¿Necesitas ayuda con tu proyecto?
            </h2>
            <p className="text-xl text-[#777777] mb-8 max-w-2xl mx-auto">
              Nuestros expertos están listos para asesorarte en tu reforma o proyecto de limpieza.
            </p>
            <Link href="/contacto">
              <Button size="lg" className="bg-[#404f68] text-white hover:bg-[#4a4a4a]">
                Contactar ahora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

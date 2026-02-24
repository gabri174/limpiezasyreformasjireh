'use client'

import { motion } from 'framer-motion'
import { Calendar, User, ArrowRight, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { formatDate } from '@/lib/utils'

const blogPosts = [
  {
    id: '1',
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
    id: '2',
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
    id: '3',
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
    id: '4',
    title: 'Mantenimiento de baños: consejos profesionales',
    excerpt: 'Tips expertos para mantener tus baños en perfectas condiciones y evitar problemas comunes.',
    content: 'El mantenimiento adecuado de los baños es fundamental para su durabilidad...',
    publishedAt: '2023-12-28',
    author: 'Equipo Jireh',
    image: '/images/blog-banos.jpg',
    category: 'Mantenimiento',
    readingTime: '4 min'
  },
  {
    id: '5',
    title: 'La importancia de la desinfección profesional',
    excerpt: 'Por qué deberías optar por servicios de desinfección profesional para espacios comerciales y residenciales.',
    content: 'La higiene y desinfección se han vuelto prioritarias en los últimos tiempos...',
    publishedAt: '2023-12-20',
    author: 'Ana Martínez',
    image: '/images/blog-desinfeccion.jpg',
    category: 'Limpieza',
    readingTime: '5 min'
  },
  {
    id: '6',
    title: 'Fachadas modernas: materiales y técnicas',
    excerpt: 'Explora las opciones más innovadoras para renovar la fachada de tu edificio o vivienda.',
    content: 'La fachada es la carta de presentación de cualquier edificio...',
    publishedAt: '2023-12-15',
    author: 'Juan López',
    image: '/images/blog-fachadas.jpg',
    category: 'Reformas',
    readingTime: '8 min'
  }
]

const categories = ['Todos', 'Reformas', 'Limpieza', 'Mantenimiento']

export default function BlogPage() {
  return (
    <main>
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Nuestro <span className="text-accent">Blog</span>
            </h1>
            <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
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
                    ? 'bg-accent text-white'
                    : 'bg-background text-foreground hover:bg-accent hover:text-white border border-border'
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
                className="bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                  <div className="text-center text-accent">
                    <div className="text-6xl mb-2">📝</div>
                    <div className="text-sm font-medium">Imagen del artículo</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center text-secondary text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readingTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-secondary mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-secondary mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(post.publishedAt)}
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full group">
                    Leer más
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg">
              Cargar más artículos
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">
              ¿Necesitas ayuda profesional?
            </h2>
            <p className="text-xl text-secondary mb-8 max-w-2xl mx-auto">
              Nuestro equipo de expertos está listo para ayudarte con tu proyecto de reforma o limpieza.
            </p>
            <Link href="/contacto">
              <Button size="lg" className="group">
                Contactar con expertos
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

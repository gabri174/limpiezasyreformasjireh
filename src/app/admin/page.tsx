'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Upload, Image as ImageIcon, Trash2, Eye, Plus, LogOut, Settings, Users, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { uploadImage, deleteImage } from '@/lib/blob'

interface GalleryImage {
  id: string
  url: string
  title: string
  category: 'reforma' | 'limpieza'
  uploadedAt: string
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [images, setImages] = useState<GalleryImage[]>([])
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [newImageTitle, setNewImageTitle] = useState('')
  const [newImageCategory, setNewImageCategory] = useState<'reforma' | 'limpieza'>('reforma')

  useEffect(() => {
    // Cargar imágenes iniciales (simuladas)
    setImages([
      {
        id: '1',
        url: '/images/gallery/reforma-1.jpg',
        title: 'Reforma integral cocina',
        category: 'reforma',
        uploadedAt: '2024-01-15'
      },
      {
        id: '2',
        url: '/images/gallery/limpieza-1.jpg',
        title: 'Limpieza post-obra oficina',
        category: 'limpieza',
        uploadedAt: '2024-01-10'
      }
    ])
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulación de autenticación - en producción usar variable de entorno
    if (password === 'admin123') {
      setIsAuthenticated(true)
      setPassword('')
    } else {
      alert('Contraseña incorrecta')
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedFile(file)
    }
  }

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedFile || !newImageTitle) return

    setUploading(true)
    
    try {
      // Subir a Vercel Blob
      const folder = newImageCategory === 'reforma' ? 'gallery/reformas' : 'gallery/limpieza'
      const imageUrl = await uploadImage(selectedFile, folder)
      
      const newImage: GalleryImage = {
        id: Date.now().toString(),
        url: imageUrl,
        title: newImageTitle,
        category: newImageCategory,
        uploadedAt: new Date().toISOString().split('T')[0]
      }
      
      setImages([newImage, ...images])
      setSelectedFile(null)
      setNewImageTitle('')
      setNewImageCategory('reforma')
      alert('Imagen subida exitosamente')
    } catch (error) {
      console.error('Error subiendo imagen:', error)
      alert('Error al subir la imagen. Revisa la consola para más detalles.')
    } finally {
      setUploading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (confirm('¿Estás seguro de eliminar esta imagen?')) {
      const image = images.find(img => img.id === id)
      if (image) {
        try {
          await deleteImage(image.url)
          setImages(images.filter(img => img.id !== id))
          alert('Imagen eliminada exitosamente')
        } catch (error) {
          console.error('Error eliminando imagen:', error)
          alert('Error al eliminar la imagen')
        }
      }
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-background rounded-2xl p-8 shadow-lg max-w-md w-full mx-4"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
              <Settings className="w-8 h-8 text-accent" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-2">
              Panel de Administración
            </h1>
            <p className="text-secondary">
              Acceso exclusivo para administradores
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-colors"
                placeholder="Ingresa tu contraseña"
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Acceder
            </Button>
          </form>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-bold text-foreground">
                Panel de Administración
              </h1>
              <div className="flex space-x-2">
                <Button variant="ghost" size="sm">
                  <Users className="w-4 h-4 mr-2" />
                  Usuarios
                </Button>
                <Button variant="ghost" size="sm">
                  <FileText className="w-4 h-4 mr-2" />
                  Blog
                </Button>
              </div>
            </div>
            <Button
              variant="outline"
              onClick={() => setIsAuthenticated(false)}
            >
              <LogOut className="w-4 h-4 mr-2" />
              Cerrar sesión
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-background rounded-2xl p-6 shadow-lg mb-8"
            >
              <h2 className="text-xl font-bold text-foreground mb-6">
                Galería de Imágenes
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {images.map((image) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-muted/30 rounded-lg overflow-hidden"
                  >
                    <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                      <ImageIcon className="w-12 h-12 text-accent" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-foreground mb-1">
                        {image.title}
                      </h3>
                      <div className="flex items-center justify-between text-sm text-secondary mb-3">
                        <span className="inline-flex items-center px-2 py-1 bg-accent/10 text-accent rounded text-xs">
                          {image.category}
                        </span>
                        <span>{image.uploadedAt}</span>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Eye className="w-4 h-4 mr-1" />
                          Ver
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDelete(image.id)}
                          className="text-red-500 hover:text-red-600"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-background rounded-2xl p-6 shadow-lg"
            >
              <h2 className="text-xl font-bold text-foreground mb-6">
                Subir Nueva Imagen
              </h2>

              <form onSubmit={handleUpload} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Título
                  </label>
                  <input
                    type="text"
                    value={newImageTitle}
                    onChange={(e) => setNewImageTitle(e.target.value)}
                    className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-colors"
                    placeholder="Título de la imagen"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Categoría
                  </label>
                  <select
                    value={newImageCategory}
                    onChange={(e) => setNewImageCategory(e.target.value as 'reforma' | 'limpieza')}
                    className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-colors"
                  >
                    <option value="reforma">Reforma</option>
                    <option value="limpieza">Limpieza</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Imagen
                  </label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-accent transition-colors">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileSelect}
                      className="hidden"
                      id="file-upload"
                    />
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <Upload className="w-8 h-8 text-accent mx-auto mb-2" />
                      <p className="text-sm text-foreground">
                        {selectedFile ? selectedFile.name : 'Haz clic para seleccionar'}
                      </p>
                      <p className="text-xs text-secondary mt-1">
                        PNG, JPG, GIF hasta 10MB
                      </p>
                    </label>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={!selectedFile || !newImageTitle || uploading}
                  className="w-full"
                >
                  {uploading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Subiendo...
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4 mr-2" />
                      Subir Imagen
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-background rounded-2xl p-6 shadow-lg mt-6"
            >
              <h3 className="text-lg font-bold text-foreground mb-4">
                Estadísticas
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-secondary">Total imágenes</span>
                  <span className="font-semibold text-foreground">{images.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary">Reformas</span>
                  <span className="font-semibold text-foreground">
                    {images.filter(img => img.category === 'reforma').length}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary">Limpieza</span>
                  <span className="font-semibold text-foreground">
                    {images.filter(img => img.category === 'limpieza').length}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

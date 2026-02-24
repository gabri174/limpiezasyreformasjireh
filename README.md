# Limpiezas y Reformas Jireh

Plataforma web profesional para la empresa "Limpiezas y Reformas Jireh", especializada en reformas de lujo y servicios de limpieza profesional en la Comunidad Valenciana.

## 🌟 Características

- **Diseño Premium**: Interfaz moderna y minimalista con paleta de colores elegante
- **Responsive**: Optimizado para todos los dispositivos móviles y escritorio
- **SEO Optimizado**: Configuración completa para motores de búsqueda
- **Panel de Administración**: Gestión de galería de imágenes protegida
- **Formulario de Contacto**: Integración con Formspree para consultas
- **Animaciones Fluidas**: Experiencia de usuario con Framer Motion
- **Rendimiento Optimizado**: Imágenes WebP y lazy loading

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 14+ (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Iconos**: Lucide React
- **Animaciones**: Framer Motion
- **Despliegue**: Vercel

## 📁 Estructura del Proyecto

```
src/
├── app/                    # Páginas y layout principal
│   ├── (pages)/           # Páginas principales
│   │   ├── page.tsx       # Home
│   │   ├── nosotros/      # Sobre nosotros
│   │   ├── servicios/     # Servicios detallados
│   │   ├── blog/          # Blog y noticias
│   │   ├── contacto/      # Formulario de contacto
│   │   └── admin/         # Panel de administración
│   ├── layout.tsx         # Layout principal
│   ├── globals.css        # Estilos globales
│   ├── sitemap.ts         # Sitemap para SEO
│   └── robots.ts          # Robots.txt
├── components/
│   ├── ui/               # Componentes reutilizables
│   └── sections/         # Secciones de páginas
├── lib/                  # Utilidades y helpers
└── types/                # Definiciones TypeScript
```

## 🚀 Comenzando

### Prerrequisitos

- Node.js 18+ 
- npm o yarn

### Instalación

1. Clonar el repositorio
2. Instalar dependencias:
```bash
npm install
```

3. Configurar variables de entorno:
```bash
cp .env.example .env.local
```

4. Iniciar servidor de desarrollo:
```bash
npm run dev
```

5. Abrir [http://localhost:3000](http://localhost:3000) en tu navegador

## ⚙️ Configuración

### Variables de Entorno

Crear un archivo `.env.local` con las siguientes variables:

```env
# Formspree (para formulario de contacto)
NEXT_PUBLIC_FORMSPREE_ID=tu_formspree_id

# Token de administración (para panel /admin)
ADMIN_TOKEN=tu_token_seguro

# Google Analytics (opcional)
NEXT_PUBLIC_GA_ID=tu_ga_id
```

### Configuración de Formspree

1. Crear cuenta en [Formspree](https://formspree.io)
2. Crear nuevo formulario
3. Copiar el ID del formulario
4. Añadirlo a `NEXT_PUBLIC_FORMSPREE_ID`

### Acceso al Panel de Administración

- URL: `/admin`
- Contraseña: Configurada en `ADMIN_TOKEN`

## 📱 Páginas

### Home
- Hero section con llamada a la acción
- Vista previa de servicios
- Testimonios de clientes
- Estadísticas de la empresa

### Nosotros
- Historia de la empresa
- Misión y valores
- Trayectoria y experiencia

### Servicios
- **Reformas**: Integrales, cocinas, baños, fachadas, acabados de lujo
- **Limpieza**: Fin de obra, oficinas, comunidades, hogares, desinfección

### Blog
- Artículos sobre reformas y limpieza
- Categorización y filtrado
- Diseño limpio y minimalista

### Contacto
- Formulario funcional
- Información de contacto
- Área de servicio

## 🎨 Diseño

- **Paleta de Colores**: Tonos oscuros, blancos limpios, acentos en azul acero
- **Tipografía**: Inter (Google Fonts)
- **Espaciado**: Diseño espacioso con mucho whitespace
- **Animaciones**: Transiciones sutiles y micro-interacciones

## 🔧 SEO

- Meta tags dinámicos
- Open Graph y Twitter Cards
- Sitemap automático
- Robots.txt optimizado
- Keywords para Valencia y Comunidad Valenciana

## 📈 Rendimiento

- Imágenes optimizadas (WebP, AVIF)
- Lazy loading
- Component optimization
- Bundle splitting

## 🚀 Despliegue

### Vercel (Recomendado)

1. Conectar repositorio a Vercel
2. Configurar variables de entorno
3. Despliegue automático

### Build para Producción

```bash
npm run build
npm start
```

## 🤝 Contribuir

1. Fork del proyecto
2. Crear feature branch
3. Commit de cambios
4. Push al branch
5. Abrir Pull Request

## 📄 Licencia

Proyecto privado para Limpiezas y Reformas Jireh © 2024

## 📞 Contacto

- **Web**: https://limpiezasyreformasjireh.vercel.app
- **Email**: info@jireh.com
- **Teléfono**: +34 XXX XXX XXX
- **Ubicación**: Valencia, Comunidad Valenciana

---

Desarrollado con ❤️ por [Tu Nombre/Empresa]

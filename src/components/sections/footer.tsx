import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#404f68] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Limpiezas y Reformas Jireh
            </h3>
            <p className="text-gray-200 mb-4 max-w-md leading-relaxed">
              Empresa con 5 años de experiencia, caracterizada por la responsabilidad y acabados finos. 
              En limpieza, resaltamos por el compromiso y bienestar del cliente.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/nosotros" className="text-gray-300 hover:text-white transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-gray-300 hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-300 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-2 text-white" />
                <a href="tel:+34613354770" className="hover:text-white transition-colors">
                  +34 613 35 47 70
                </a>
              </li>
              <li className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-2 text-white" />
                <a href="mailto:info@limpiezasyreformasjireh.com" className="hover:text-white transition-colors">
                  info@limpiezasyreformasjireh.com
                </a>
              </li>
              <li className="flex items-start text-gray-300">
                <MapPin className="h-4 w-4 mr-2 text-white mt-1" />
                <span className="hover:text-white transition-colors">
                  España
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2024 Limpiezas y Reformas Jireh. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

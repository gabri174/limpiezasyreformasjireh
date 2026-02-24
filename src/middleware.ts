import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Proteger rutas de admin
  if (pathname.startsWith('/admin')) {
    const authHeader = request.headers.get('authorization')
    
    // Verificación simple con token de entorno
    const adminToken = process.env.ADMIN_TOKEN
    const providedToken = authHeader?.replace('Bearer ', '')

    if (!adminToken || providedToken !== adminToken) {
      return new NextResponse('Unauthorized', { status: 401 })
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/admin/:path*'
}

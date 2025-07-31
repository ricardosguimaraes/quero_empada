'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-brand-off-white/60 backdrop-blur-md shadow-lg sticky top-0 z-50 -mb-32">
      <div className="container-custom">
        <div className="flex items-center justify-between py-3 px-4 md:px-0">
                           {/* Logo */}
                 <div className="flex items-center space-x-3">
                   <Image
                     src="/img/logo-quero-empada.png"
                     alt="Quero Empada"
                     width={150}
                     height={80}
                     className="rounded-lg"
                   />
                 </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="https://www.instagram.com/queroempada.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-brown hover:text-brand-red transition-colors duration-200 font-medium"
            >
              Instagram
            </Link>
            <Link
              href="https://wa.me/5519986015465"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Peça Agora!
            </Link>
          </nav>

          {/* Mobile - Apenas botão Peça Agora */}
          <div className="md:hidden">
            <Link
              href="https://wa.me/5519986015465"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm px-4 py-2"
            >
              Peça Agora!
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
} 
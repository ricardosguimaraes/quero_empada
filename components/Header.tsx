'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-brand-off-white shadow-sm sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
                           {/* Logo */}
                 <div className="flex items-center space-x-3">
                   <Image
                     src="/img/logo-quero-empada.png"
                     alt="Quero Empada"
                     width={200}
                     height={160}
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

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-brand-brown hover:text-brand-red">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
} 
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Truck, Star, Package } from 'lucide-react'

export default function Hero() {
  return (
    <section className="h-[90vh] flex items-center relative bg-gradient-to-br from-brand-off-white to-orange-50">
      {/* Background pattern similar to the image */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-brand-red to-brand-yellow rounded-full opacity-20 blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-brand-yellow to-brand-red rounded-full opacity-20 blur-2xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Section - Text Content */}
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-4 md:space-y-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight font-blueberry">
                  <span className="text-brand-brown">Empadas</span>{' '}
                  <span className="text-brand-yellow">Irresistíveis</span>{' '}
                  <span className="text-brand-brown">Para</span>{' '}
                  <span className="text-brand-brown">Todos os Momentos!</span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-brand-brown/80 leading-relaxed max-w-2xl">
                  Empadas e tortas artesanais com ingredientes selecionados. 
                  Peça e surpreenda-se com o sabor.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <Link
                  href="https://wa.me/5519986015465"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-yellow hover:bg-yellow-600 text-brand-brown font-bold py-4 px-8 rounded-full text-lg transition-colors duration-200 text-center shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Peça Agora
                </Link>
                <Link
                  href="#produtos"
                  className="bg-transparent border-2 border-brand-brown text-brand-brown font-bold py-4 px-8 rounded-full text-lg hover:bg-brand-brown hover:text-white transition-all duration-200 text-center"
                >
                  Ver Produtos
                </Link>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-brand-yellow flex-shrink-0" />
                  <span className="text-sm text-brand-brown font-medium">Ingredientes Selecionados</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Package className="w-5 h-5 text-brand-yellow flex-shrink-0" />
                  <span className="text-sm text-brand-brown font-medium">Varejo e Atacado</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Truck className="w-5 h-5 text-brand-yellow flex-shrink-0" />
                  <span className="text-sm text-brand-brown font-medium">Entrega Rápida</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-brand-yellow flex-shrink-0" />
                  <span className="text-sm text-brand-brown font-medium">Qualidade Garantida</span>
                </div>
              </div>
            </div>

            {/* Right Section - Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Plate with empadas */}
                <div className="relative z-20">
                  <Image
                    src="/img/img-hero-empada.webp"
                    alt="Empadas artesanais"
                    width={500}
                    height={400}
                    className="rounded-2xl shadow-2xl"
                    priority
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-yellow rounded-full opacity-20 blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-red rounded-full opacity-20 blur-xl"></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
} 
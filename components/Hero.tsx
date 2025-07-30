'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="section-padding bg-gradient-to-br from-brand-off-white to-yellow-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-brand-brown leading-tight">
                O Sabor{' '}
                <span className="text-brand-red">Inconfundível</span> da Tradição!
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                Empadas e tortas artesanais com ingredientes selecionados. 
                Varejo e atacado para todos os momentos especiais.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://wa.me/5519986015465"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-4 text-center"
              >
                Peça Agora!
              </Link>
              <Link
                href="#produtos"
                className="bg-transparent border-2 border-brand-brown text-brand-brown font-semibold py-4 px-8 rounded-lg hover:bg-brand-brown hover:text-white transition-colors duration-200 text-center"
              >
                Ver Produtos
              </Link>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-brand-yellow rounded-full"></div>
                <span className="text-sm text-gray-600">Ingredientes Selecionados</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-brand-yellow rounded-full"></div>
                <span className="text-sm text-gray-600">Varejo e Atacado</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-brand-yellow rounded-full"></div>
                <span className="text-sm text-gray-600">Entrega Rápida</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-brand-yellow rounded-full"></div>
                <span className="text-sm text-gray-600">Qualidade Garantida</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/img/empada-hero.jpg"
                alt="Empada artesanal da Quero Empada"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-brand-yellow text-brand-brown px-4 py-2 rounded-full shadow-lg">
              <span className="font-bold">Artisanal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
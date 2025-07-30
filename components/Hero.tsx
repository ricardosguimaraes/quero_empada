'use client'

import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Truck, Star, Package } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-[75vh] flex items-center relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/img/img-hero.webp)' }}>
      {/* Overlay para melhorar legibilidade */}
      <div className="absolute inset-0 bg-black/30"></div>
             <div className="relative z-10 w-full">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="max-w-4xl">
                     {/* Content */}
           <div className="space-y-6 md:space-y-8">
             <div className="space-y-3 md:space-y-4">
               <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight">
               Empadas{' '}
                 <span className="text-brand-yellow">Irresistíveis</span> para Todos os Momentos!
               </h1>
               <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
                 Empadas e tortas artesanais com ingredientes selecionados. 
                 Peça no varejo ou atacado e surpreenda-se com o sabor e a praticidade.
               </p>
             </div>

             <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
               <Link
                 href="https://wa.me/5519986015465"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="btn-primary text-base sm:text-lg md:text-base px-6 sm:px-8 md:px-6 py-3 sm:py-4 md:py-3 text-center"
               >
                 Peça Agora!
               </Link>
               <Link
                 href="#produtos"
                 className="bg-transparent border-2 border-white text-white font-semibold py-3 sm:py-4 md:py-3 px-6 sm:px-8 md:px-6 rounded-lg hover:bg-white hover:text-gray-900 transition-colors duration-200 text-center"
               >
                 Ver Produtos
               </Link>
             </div>

                         {/* Features */}
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8 sm:pt-12">
               <div className="flex items-center space-x-2 sm:space-x-3">
                 <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-brand-yellow flex-shrink-0" />
                 <span className="text-xs sm:text-sm text-white/90 font-medium">Ingredientes Selecionados</span>
               </div>
               <div className="flex items-center space-x-2 sm:space-x-3">
                 <Package className="w-4 h-4 sm:w-5 sm:h-5 text-brand-yellow flex-shrink-0" />
                 <span className="text-xs sm:text-sm text-white/90 font-medium">Varejo e Atacado</span>
               </div>
               <div className="flex items-center space-x-2 sm:space-x-3">
                 <Truck className="w-4 h-4 sm:w-5 sm:h-5 text-brand-yellow flex-shrink-0" />
                 <span className="text-xs sm:text-sm text-white/90 font-medium">Entrega Rápida</span>
               </div>
               <div className="flex items-center space-x-2 sm:space-x-3">
                 <Star className="w-4 h-4 sm:w-5 sm:h-5 text-brand-yellow flex-shrink-0" />
                 <span className="text-xs sm:text-sm text-white/90 font-medium">Qualidade Garantida</span>
               </div>
             </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
} 
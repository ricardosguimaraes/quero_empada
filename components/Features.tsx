'use client'

import { CheckCircle, Truck, Star, Package } from 'lucide-react'

export default function Features() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-brand-brown to-brand-red relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-brand-yellow to-orange-400 rounded-full opacity-10 blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-brand-yellow to-orange-400 rounded-full opacity-10 blur-2xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-blueberry mb-4">
            Por que escolher nossas empadas?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Compromisso com qualidade e sabor em cada mordida
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-brand-yellow" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-xl">Ingredientes Selecionados</h3>
              <p className="text-white/80 text-sm mt-2">Matéria-prima de primeira qualidade</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
              <Package className="w-8 h-8 text-brand-yellow" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-xl">Varejo e Atacado</h3>
              <p className="text-white/80 text-sm mt-2">Para todos os tipos de pedidos</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
              <Truck className="w-8 h-8 text-brand-yellow" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-xl">Entrega Rápida</h3>
              <p className="text-white/80 text-sm mt-2">Entregamos em até 24h</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
              <Star className="w-8 h-8 text-brand-yellow" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-xl">Qualidade Garantida</h3>
              <p className="text-white/80 text-sm mt-2">Sabor e frescor garantidos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
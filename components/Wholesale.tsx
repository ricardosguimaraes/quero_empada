'use client'

import Link from 'next/link'
import { Factory, TrendingUp, Users, Award } from 'lucide-react'

export default function Wholesale() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-brand-brown to-brand-red relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-brand-yellow to-orange-400 rounded-full opacity-10 blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-brand-yellow to-orange-400 rounded-full opacity-10 blur-2xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Section - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-blueberry text-white">
                  Empadas no Atacado,{' '}
                  <span className="text-brand-yellow">Direto da Fábrica!</span>
                </h2>
              </div>
              
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl">
                Perfeitas para revenda, eventos ou seu negócio. Comprando no atacado, 
                você garante preço diferenciado e qualidade artesanal.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Link
                href="https://wa.me/5519986015465?text=Olá! Gostaria de solicitar um orçamento para compra no atacado."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-yellow hover:bg-yellow-600 text-brand-brown font-bold py-4 px-8 rounded-full text-lg transition-colors duration-200 text-center shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Peça um Orçamento Agora
              </Link>
              <Link
                href="#produtos"
                className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-white hover:text-brand-brown transition-all duration-200 text-center"
              >
                Ver Produtos
              </Link>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="flex items-start space-x-3">
                <TrendingUp className="w-6 h-6 text-brand-yellow flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-semibold text-lg">Preços Diferenciados</h3>
                  <p className="text-white/80 text-sm">Descontos especiais para compras em volume</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Award className="w-6 h-6 text-brand-yellow flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-semibold text-lg">Qualidade Artesanal</h3>
                  <p className="text-white/80 text-sm">Mesma qualidade premium do varejo</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Users className="w-6 h-6 text-brand-yellow flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-semibold text-lg">Ideal para Revenda</h3>
                  <p className="text-white/80 text-sm">Perfeitas para seu negócio crescer</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Factory className="w-6 h-6 text-brand-yellow flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-semibold text-lg">Produção Escalável</h3>
                  <p className="text-white/80 text-sm">Capacidade para grandes pedidos</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Visual Elements */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Factory className="w-10 h-10 text-brand-brown" />
                  </div>
                  <h3 className="text-white font-bold text-3xl mb-3">Vantagens do Atacado</h3>
                  <p className="text-white/80 text-lg">Maximize seus lucros com nossos preços especiais</p>
                </div>
                
                                 <div className="grid grid-cols-2 gap-6">
                   <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                     <div className="mb-0">
                       <span className="text-white/90 font-semibold text-lg">Preço</span>
                     </div>
                     <p className="text-brand-yellow text-lg">Condições especiais para compras em quantidade</p>
                   </div>
                   
                   <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                     <div className="mb-0">
                       <span className="text-white/90 font-semibold text-lg">Pedido Mínimo</span>
                     </div>
                     <p className="text-brand-yellow text-lg">A partir de 50 unidades</p>
                   </div>
                   
                   <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                     <div className="mb-0">
                       <span className="text-white/90 font-semibold text-lg">Prazo de Entrega</span>
                     </div>
                     <p className="text-brand-yellow text-lg">Entregamos em 24–48h úteis</p>
                   </div>
                   
                   <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                     <div className="mb-0">
                       <span className="text-white/90 font-semibold text-lg">Formas de Pagamento</span>
                     </div>
                     <p className="text-brand-yellow text-lg">Aceitamos PIX, Cartão e Dinheiro</p>
                   </div>
                 </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-yellow rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-brand-red rounded-full opacity-20 blur-xl"></div>
          </div>

        </div>
      </div>
    </section>
  )
} 
'use client'

import Image from 'next/image'
import Link from 'next/link'

const products = [
  {
    id: 1,
    name: 'Empada Tradicional',
    price: 'R$ 8,00',
    unit: 'unidade',
    image: '/img/empada-tradicional.jpg',
    description: 'Empada artesanal com massa crocante e recheio generoso'
  },
  {
    id: 2,
    name: 'Mini Empadas',
    price: 'R$ 40,00',
    unit: '50 unidades',
    image: '/img/mini-empadas.jpg',
    description: 'Pacote com 50 mini empadas perfeitas para eventos'
  },
  {
    id: 3,
    name: 'Mini Empadas',
    price: 'R$ 80,00',
    unit: '100 unidades',
    image: '/img/mini-empadas-100.jpg',
    description: 'Pacote com 100 mini empadas para grandes eventos'
  },
  {
    id: 4,
    name: 'Torta',
    price: 'R$ 30,00',
    unit: '~500g',
    image: '/img/torta.jpg',
    description: 'Torta artesanal com aproximadamente 500g'
  }
]

const flavors = [
  'Frango',
  'Palmito', 
  'Pernil desfiado com barbecue',
  'Costela desfiada',
  'Queijo'
]

export default function Products() {
  return (
    <section id="produtos" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-brown mb-4">
            Nossos Produtos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra nossa linha completa de empadas e tortas artesanais, 
            feitas com ingredientes selecionados e muito amor.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-brand-off-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-brand-brown">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-brand-red">
                      {product.price}
                    </span>
                    <span className="text-sm text-gray-500 block">
                      {product.unit}
                    </span>
                  </div>
                  <Link
                    href="https://wa.me/5519986015465"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand-yellow text-brand-brown px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-200"
                  >
                    Pedir
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Flavors Section */}
        <div className="bg-gradient-to-r from-brand-yellow/10 to-brand-red/10 rounded-3xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-brand-brown mb-4">
              Sabores Disponíveis
            </h3>
            <p className="text-lg text-gray-600">
              Escolha entre nossos deliciosos sabores artesanais
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {flavors.map((flavor, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <div className="w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-brand-brown font-bold text-lg">
                    {index + 1}
                  </span>
                </div>
                <h4 className="font-semibold text-brand-brown">
                  {flavor}
                </h4>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="https://wa.me/5519986015465"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4"
            >
              Fazer Pedido Agora!
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 
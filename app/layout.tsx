import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Quero Empada - O Sabor Inconfundível da Tradição!',
  description: 'Empadas e tortas artesanais com ingredientes selecionados. Varejo e atacado. Frango, Palmito, Pernil, Costela e Queijo.',
  keywords: 'empada, torta, artesanal, varejo, atacado, frango, palmito, pernil, costela, queijo',
  authors: [{ name: 'Quero Empada' }],
  openGraph: {
    title: 'Quero Empada - O Sabor Inconfundível da Tradição!',
    description: 'Empadas e tortas artesanais com ingredientes selecionados. Varejo e atacado.',
    url: 'https://queroempada.com.br',
    siteName: 'Quero Empada',
    images: [
      {
        url: '/img/logo-redes-sociais.png',
        width: 1200,
        height: 630,
        alt: 'Quero Empada',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quero Empada - O Sabor Inconfundível da Tradição!',
    description: 'Empadas e tortas artesanais com ingredientes selecionados. Varejo e atacado.',
    images: ['/img/logo-quero.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-off-white">
      <Header />
      <Hero />
      <Products />
      <Contact />
      <Footer />
    </main>
  )
} 
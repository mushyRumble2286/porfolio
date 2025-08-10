import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import UnifiedBackground from './components/UnifiedBackground'

function App() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <UnifiedBackground />
      <div className="relative z-10">
        <Header />
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </div>
    </div>
  )
}

export default App
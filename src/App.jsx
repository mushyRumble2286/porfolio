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
    <div 
      className="min-h-screen relative" 
      style={{
        maxWidth: '100vw',
        overflowX: 'hidden',
        width: '100vw',
        position: 'relative'
      }}
    >
      <div 
        style={{
          maxWidth: '100vw',
          overflowX: 'hidden',
          width: '100vw',
          position: 'relative'
        }}
      >
        <UnifiedBackground />
        <div 
          className="relative z-10" 
          style={{
            maxWidth: '100vw',
            overflowX: 'hidden',
            width: '100vw'
          }}
        >
          <div style={{maxWidth: '100vw', overflowX: 'hidden', width: '100%'}}>
            <Header />
          </div>
          <div style={{maxWidth: '100vw', overflowX: 'hidden', width: '100%'}}>
            <Hero />
          </div>
          <div style={{maxWidth: '100vw', overflowX: 'hidden', width: '100%'}}>
            <Services />
          </div>
          <div style={{maxWidth: '100vw', overflowX: 'hidden', width: '100%'}}>
            <Portfolio />
          </div>
          <div style={{maxWidth: '100vw', overflowX: 'hidden', width: '100%'}}>
            <Testimonials />
          </div>
          <div style={{maxWidth: '100vw', overflowX: 'hidden', width: '100%'}}>
            <Contact />
          </div>
          <div style={{maxWidth: '100vw', overflowX: 'hidden', width: '100%'}}>
            <Footer />
          </div>
          <WhatsAppButton />
        </div>
      </div>
    </div>
  )
}

export default App
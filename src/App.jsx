import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import SocialProof from './components/SocialProof'
import ProblemSolution from './components/ProblemSolution'
import Features from './components/Features'
import FAQ from './components/FAQ'
import Guarantee from './components/Guarantee'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-rose-50 text-rose-900">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <SocialProof />
        <ProblemSolution />
        <Features />
        <section id="faq"><FAQ /></section>
        <Guarantee />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}

export default App

import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MarqueeDivider from './components/MarqueeDivider'
import StatsGrid from './components/StatsGrid'
import Timeline from './components/Timeline'
import CaseStudies from './components/CaseStudies'
import Services from './components/Services'
import Expertise from './components/Expertise'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <BackToTop />
      <Navbar />
      <main>
        <Hero />
        <MarqueeDivider />
        <StatsGrid />
        <Timeline />
        <CaseStudies />
        <Services />
        <Expertise />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

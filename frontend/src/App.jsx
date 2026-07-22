import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Accommodation from './pages/Accommodation'
import DiningPage from './pages/DiningPage'
import AmenitiesPage from './pages/AmenitiesPage'
import Foints from './pages/Foints'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import SimplePage from './pages/SimplePage'
import NotFound from './pages/NotFound'
import { contactInfo } from './data/content'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accommodation" element={<Accommodation />} />
          <Route path="/dining" element={<DiningPage />} />
          <Route path="/amenities" element={<AmenitiesPage />} />
          <Route path="/foints" element={<Foints />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/privacy-policy"
            element={
              <SimplePage title="Privacy Policy">
                <p>Centre Point Hotel Navi Mumbai is committed to protecting the privacy of our guests. Any information collected through this website is used solely to respond to enquiries and improve our services, and is never sold or shared with third parties without consent.</p>
              </SimplePage>
            }
          />
          <Route
            path="/terms"
            element={
              <SimplePage title="Terms & Conditions">
                <p>By using this website and booking with Centre Point Hotel Navi Mumbai, you agree to our standard booking, cancellation, and stay policies. Please contact the hotel directly for full terms applicable to your reservation.</p>
                <p style={{ marginTop: 16 }}><a href={`mailto:${contactInfo.email}`} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{contactInfo.email}</a></p>
              </SimplePage>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

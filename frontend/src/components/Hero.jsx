import { useState, useEffect } from 'react'
import { images } from '../data/content'
import './Hero.css'

export default function Hero() {
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((s) => (s + 1) % images.hero.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="hero" id="book">
      <div className="hero-visual">
        {images.hero.map((src, i) => (
          <div
            key={src}
            className={`hero-slide ${i === slide ? 'is-active' : ''}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
        <div className="hero-band">
          <h1>Stay Centered</h1>
        </div>

        <div className="hero-dots">
          {images.hero.map((_, i) => (
            <button
              key={i}
              className={`hero-dot ${i === slide ? 'is-active' : ''}`}
              onClick={() => setSlide(i)}
              aria-label={`Show slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

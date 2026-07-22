import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import { contactInfo, images } from '../data/content'
import './Contact.css'

const initialForm = { name: '', email: '', phone: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ state: 'loading', message: '' })

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.message || 'Something went wrong. Please try again.')
      }

      setStatus({ state: 'success', message: 'Thank you! Your message has been sent. We will get back to you shortly.' })
      setForm(initialForm)
    } catch (err) {
      setStatus({ state: 'error', message: err.message || 'Unable to send message. Please try again later.' })
    }
  }

  return (
    <>
      <PageHeader eyebrow="Get In Touch" title="Contact Us" image={images.about} />
      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info">
            <span className="eyebrow">Contact</span>
            <h2>We&rsquo;d Love To Hear From You</h2>
            <p className="contact-address">{contactInfo.address}</p>
            <p>Tel: <a href={`tel:${contactInfo.phone1.replace(/\s/g, '')}`}>{contactInfo.phone1}</a></p>
            <p><a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>

            <div className="contact-map">
              <iframe
                title="Centre Point Hotel Navi Mumbai Location"
                src="https://maps.google.com/maps?q=Centre%20Point%20Hotel%20Turbhe%20Navi%20Mumbai&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Send Us A Message</h3>

            <div className="form-row">
              <label htmlFor="name">Full Name</label>
              <input id="name" name="name" type="text" value={form.name} onChange={handleChange} required />
            </div>

            <div className="form-row">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required />
            </div>

            <div className="form-row">
              <label htmlFor="phone">Phone</label>
              <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} />
            </div>

            <div className="form-row">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange} required />
            </div>

            <button type="submit" className="btn btn-primary" disabled={status.state === 'loading'}>
              {status.state === 'loading' ? 'Sending…' : 'Send Message'}
            </button>

            {status.state === 'success' && <p className="form-status success">{status.message}</p>}
            {status.state === 'error' && <p className="form-status error">{status.message}</p>}
          </form>
        </div>
      </section>
    </>
  )
}

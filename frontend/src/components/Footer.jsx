import { Link } from 'react-router-dom'
import { images, contactInfo, socialLinks, careersUrl, factSheetUrl } from '../data/content'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <hr className="section-divider" />

      <div className="container footer-grid">
        <div className="footer-col">
          <h3>Contact</h3>
          <p>{contactInfo.address}</p>
          <p>
            Tel: <a href={`tel:${contactInfo.phone1.replace(/\s/g, '')}`}><strong>{contactInfo.phone1}</strong></a>
            <br />
            <a href={`mailto:${contactInfo.email}`}><strong>{contactInfo.email}</strong></a>
          </p>
        </div>

        <div className="footer-col">
          <h3>Policies</h3>
          <ul>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms &amp; Conditions</Link></li>
            <li><a href={careersUrl} target="_blank" rel="noreferrer">Careers</a></li>
          </ul>

          <h3 className="mt">Links</h3>
          <div className="footer-social">
            {socialLinks.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noreferrer" aria-label={s.name}>
                {s.name[0]}
              </a>
            ))}
          </div>
          <a href={factSheetUrl} target="_blank" rel="noreferrer" className="footer-download">Download Fact Sheet</a>
        </div>

        <div className="footer-col footer-map">
          <iframe
            title="Centre Point Navi Mumbai"
            src="https://maps.google.com/maps?q=Centre%20Point%20Navi%20Mumbai&t=m&z=10&output=embed&iwloc=near"
            loading="lazy"
          />
        </div>
      </div>

      <div className="footer-bottom">
        <Link to="/">
          <img src={images.logo} alt="Centre Point Hotel Navi Mumbai" className="footer-logo" />
        </Link>
      </div>
    </footer>
  )
}

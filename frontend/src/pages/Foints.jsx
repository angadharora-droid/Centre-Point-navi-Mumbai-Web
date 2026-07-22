import PageHeader from '../components/PageHeader'
import { images, foinsRestaurants, foinsPrivileges } from '../data/content'
import './Foints.css'

export default function Foints() {
  return (
    <>
      <PageHeader eyebrow="Loyalty Program" title="Foints" image={images.dining1} />

      <section className="section foints">
        <div className="container">
          <div className="foints-hero">
            <span className="foints-tag">Your Food Points</span>
            <h2>Foints</h2>
            <p>
              Foints are Food Points. It&rsquo;s a cashback loyalty program.
              <br />
              <strong>1 Foint = 1 Rupee</strong>
            </p>
          </div>

          <div className="foints-grid">
            <div className="foints-card">
              <h3>Where can I use Foints?</h3>
              <p>You can redeem them at all participating restaurants.</p>
            </div>
            <div className="foints-card foints-card-dark">
              <h3>How it works</h3>
              <p>You will get <strong>10% cashback</strong> on every visit at any outlet.</p>
              <p className="foints-emphasis">More visits = more cashback</p>
            </div>
            <div className="foints-card">
              <h3>Double cashback</h3>
              <p>
                Your cashback is <strong>doubled on every 5th visit</strong> at any outlet, plus
                you become eligible for <strong>30% cashback</strong> on your birthday and
                anniversary weeks.
              </p>
            </div>
          </div>

          <div className="foints-restaurants">
            <h3>Participating Restaurants &amp; Outlets</h3>
            <ul className="pill-list">
              {foinsRestaurants.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </div>

          <div className="foints-privileges">
            <h3>Privileges</h3>
            <ul>
              {foinsPrivileges.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="foints-register">
            <div className="foints-register-text">
              <h3>How to register for Foints?</h3>
              <p>Scan the QR code to register.</p>
              <p className="foints-emphasis">Earn 2.5x Foints on registration.</p>
            </div>
            <img src={images.foinsQr} alt="Scan to register for Foints" className="foints-qr" />
          </div>
        </div>
      </section>
    </>
  )
}

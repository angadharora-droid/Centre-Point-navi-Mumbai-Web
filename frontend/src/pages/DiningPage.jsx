import PageHeader from '../components/PageHeader'
import { diningVenues, images } from '../data/content'
import './ListingPage.css'

export default function DiningPage() {
  return (
    <>
      <PageHeader eyebrow="24 Hours In Room Dining" title="Dining Options" image={images.dining1} />
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Dining at CPH</span>
            <h2 className="section-title">An Atrium Dining Experience</h2>
            <p>At Hotel Centre Point Navi Mumbai, we&rsquo;re passionate about providing an exceptional dining experience.</p>
          </div>

          <div className="listing-grid">
            {diningVenues.map((venue) => (
              <div className="listing-card" key={venue.name}>
                <div className="listing-card-img">
                  <img src={venue.img} alt={venue.name} />
                </div>
                <div className="listing-card-body">
                  <h3>{venue.name}</h3>
                  <p>{venue.desc}</p>
                  <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="btn btn-primary">Book a Table</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

import PageHeader from '../components/PageHeader'
import { galleryImages, images } from '../data/content'
import './Gallery.css'

export default function Gallery() {
  return (
    <>
      <PageHeader eyebrow="Gallery" title="Gallery" image={images.gallery2} />
      <section className="section">
        <div className="container">
          <div className="gallery-grid">
            {galleryImages.map((img, i) => (
              <div className="gallery-item" key={i}>
                <img src={img} alt={`Centre Point Hotel Navi Mumbai ${i + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

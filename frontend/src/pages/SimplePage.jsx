import PageHeader from '../components/PageHeader'
import { images } from '../data/content'

export default function SimplePage({ title, children }) {
  return (
    <>
      <PageHeader title={title} image={images.gallery3} />
      <section className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          {children}
        </div>
      </section>
    </>
  )
}

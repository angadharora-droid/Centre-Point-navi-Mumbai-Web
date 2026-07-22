import './PageHeader.css'

export default function PageHeader({ eyebrow, title, image }) {
  return (
    <section className="page-header" style={{ backgroundImage: `url(${image})` }}>
      <div className="page-header-overlay" />
      <div className="container page-header-content">
        {eyebrow && <span className="eyebrow eyebrow-light">{eyebrow}</span>}
        <h1>{title}</h1>
      </div>
    </section>
  )
}

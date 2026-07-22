import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section">
      <div className="container" style={{ textAlign: 'center', padding: '60px 0' }}>
        <h1 style={{ fontSize: 64, marginBottom: 16 }}>404</h1>
        <p style={{ marginBottom: 24, color: 'var(--color-muted)' }}>The page you&rsquo;re looking for doesn&rsquo;t exist.</p>
        <Link to="/" className="btn btn-primary">Back To Home</Link>
      </div>
    </section>
  )
}

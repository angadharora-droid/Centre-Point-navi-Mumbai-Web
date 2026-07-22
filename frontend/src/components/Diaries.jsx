import { diaries } from '../data/content'
import './Diaries.css'

export default function Diaries() {
  return (
    <section className="diaries section">
      <div className="container">
        <div className="diaries-head">
          <h2 className="section-title">Centre Point<br />Diaries</h2>
          <div className="diaries-intro">
            <p>
              Get an inside look at life at Hotel Centre Point, Navi Mumbai. Follow our blog for
              stories, tips, and insights on making the most of your stay, exploring the city, and
              experiencing the best of our hospitality.
            </p>
          </div>
        </div>

        <div className="diaries-grid">
          {diaries.map((post) => (
            <article className="diary-card" key={post.title}>
              <div className="diary-card-img">
                <img src={post.img} alt={post.title} />
              </div>
              <a href="#" className="btn btn-dark">Read More</a>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
      <hr className="section-divider" />
    </section>
  )
}

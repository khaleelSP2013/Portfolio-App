import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hello, I'm</p>
        <h1 className="hero-title">Khaleel Ahmed Mahalthy </h1>
        <p className="hero-tagline">Frontend Developer · Building clean, responsive experiences</p>
        <p className="hero-desc">
          I craft modern web applications with React, TypeScript, and a focus on performance and accessibility.
        </p>
        <div className="hero-actions">
          <Link to="/projects" className="btn btn-primary">
            View Projects
          </Link>
          <Link to="/contact" className="btn btn-outline">
            Get in Touch
          </Link>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-card" />
      </div>
    </section>
  )
}

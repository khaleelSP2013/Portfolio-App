import './About.css'

export default function About() {
  return (
    <section className="about-section">
      <h1 className="page-title">About Me</h1>
      <div className="about-grid">
        <div className="about-card">
          <h2>Who I Am</h2>
          <p>
            I'm a frontend developer passionate about building intuitive, fast, and accessible web applications.
            I enjoy turning ideas into clean code and great user experiences.
          </p>
        </div>
        <div className="about-card">
          <h2>What I Do</h2>
          <p>
            I specialize in React, TypeScript, and modern CSS. I focus on responsive design, performance,
            and maintainable code so that projects scale and stay enjoyable to work on.
          </p>
        </div>
        <div className="about-card">
          <h2>Beyond Code</h2>
          <p>
            I believe in continuous learning and sharing knowledge. When I'm not coding, I like to explore
            new tools and contribute to open source or help others get started in web development.
          </p>
        </div>
      </div>
    </section>
  )
}

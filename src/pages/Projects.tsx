import './Projects.css'

const projects = [
  {
    title: 'Project One',
    description: 'A React app with TypeScript, responsive layout, and modern UI. Built with Vite.',
    stack: ['React', 'TypeScript', 'Vite'],
    link: '#',
  },
  {
    title: 'Project Two',
    description: 'Dashboard or API-driven project with clean architecture and reusable components.',
    stack: ['React', 'REST API', 'CSS'],
    link: '#',
  },
  {
    title: 'Project Three',
    description: 'Portfolio or landing page with animations and accessibility in mind.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <section className="projects-section">
      <h1 className="page-title">Projects</h1>
      <p className="projects-intro">A selection of things I've built. Replace with your real project links and descriptions.</p>
      <div className="projects-grid">
        {projects.map((project, i) => (
          <article key={i} className="project-card">
            <h2 className="project-title">{project.title}</h2>
            <p className="project-desc">{project.description}</p>
            <div className="project-stack">
              {project.stack.map((tech, j) => (
                <span key={j} className="project-stack-tag">{tech}</span>
              ))}
            </div>
            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
              View project →
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

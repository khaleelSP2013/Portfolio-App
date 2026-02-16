import './Skill.css'

const skillGroups = [
  {
    title: 'Frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite'],
  },
  {
    title: 'Tools & Other',
    items: ['Git', 'Figma', 'REST APIs', 'Responsive Design', 'Accessibility'],
  },
]

export default function Skill() {
  return (
    <section className="skill-section">
      <h1 className="page-title">Skills</h1>
      <p className="skill-intro">Technologies and tools I work with to build modern web applications.</p>
      <div className="skill-groups">
        {skillGroups.map((group, i) => (
          <div key={i} className="skill-group">
            <h2 className="skill-group-title">{group.title}</h2>
            <ul className="skill-tags">
              {group.items.map((skill, j) => (
                <li key={j}>
                  <span className="skill-tag">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

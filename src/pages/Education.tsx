import './Education.css'

const education = [
  {
    title: 'B.A (Maths)',
    institution: 'Sri Krishnadevaraya University',
    description: 'Focus on software engineering, algorithms, and web technologies',
  },
  {
    title: 'MCA',
    institution: 'Visveswaraiah Technological University',
    description: 'computer science stream with Computer Science. Focus on software engineering, algorithms, and web technologies',
  },
]

export default function Education() {
  return (
    <section className="education-section">
      <h1 className="page-title">Education</h1>
      <div className="education-timeline">
        {education.map((item, index) => (
          <div key={index} className="education-item">
            <div className="education-dot" />
            <div className="education-content">
              <h2 className="education-title">{item.title}</h2>
              <p className="education-institution">{item.institution}</p>
              <p className="education-desc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

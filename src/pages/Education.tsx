import './Education.css'

const education = [
  {
    period: '2020 – 2024',
    title: 'Bachelor of Computer Science',
    institution: 'Your University',
    description: 'Focus on software engineering, algorithms, and web technologies.',
  },
  {
    period: '2018 – 2020',
    title: 'Higher Secondary',
    institution: 'Your College',
    description: 'Science stream with Computer Science.',
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
              <span className="education-period">{item.period}</span>
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

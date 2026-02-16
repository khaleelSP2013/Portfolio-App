import './Projects.css'

const projects = [
  {
    title: 'ServiceEdge',
    description: ':  This app is an integrated solution to enhance service department efficiency for automotive dealerships. The app featured online appointment scheduling, digital vehicle inspections, real-time customer updates, and comprehensive reporting tools. This initiative significantly improved customer satisfaction, streamlined service workflows, and provided actionable insights through advanced analytics.',
    stack: ['C#', 'ASP.Net', 'DotNet Core', 'JS', 'jQuery', 'Web Api', 'SQL server'],
    link: '#',
  },
   {
    title: 'Loan Origination System (LOS)',
    description: 'End-to-end loan origination system, Meridian link Consumer. Our proven, configurable SaaS cloud-based loan origination system (LOS) providing a full loan product suite to financial institutions nationwide. like yours to process loans, streamline internal loans (VL, PL, DA, HE, CC, BL) lending processes, and finally go 100% digital from application to approval quickly and accurately. high performance database server development. Consumer is an LOS solution that can be tailored to fit the needs of any financial.',
    stack: ['ReactJS', 'JavaScript', 'Typescript', 'C#', 'SQL Server'],
    link: '#',
  },
  {
    title: 'FI (Financial Institutions)',
    description: 'The Project is used to manage institutions’ financial performance. This project brings together budgeting, Forecasting, financial planning, Profitability and Relationship profitability and pricing on single unified platform. Transform your financials—from inputs to outcomes—with our driver-based budgeting, planning, and forecasting software. Integrated financial planning software to budget, model scenarios, analyses and drive profitability. Streamline processes and increase accuracy through automated consolidation across organization levels.',
    stack: ['C#', 'ASP.NET', 'SQL Server', 'Angular', 'Bootstrap'],
    link: '#',
  },
  {
    title: 'GMS (Grower Management System)',
    description: 'GMS is a data management platform that allows our Field Technicians to build farm profiles on more than 120, 000 farmers worldwide. This profile starts with establishing the GPS position of the grower and supports the capture of more than 900 data points. These data points include information related to farm assets (including barns), natural resource management, reforestation, farm labour health and safety, crop management, grower sustainability, and training on good agricultural labor practices. The company utilizes this data to develop risk assessments and proactively implement solutions to address challenges.',
    stack: ['ASP.NET Core 2.0', 'EF Core 2.1', 'Kendo UI Telerik', 'Angular 7'],
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

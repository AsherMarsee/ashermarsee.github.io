import { useEffect, useState } from 'react'
import './App.css'

const email = 'asher@ashermarsee.com'
const copyrightYear = new Date().getFullYear()

const projects = [
  {
    slug: 'jet-slalom',
    title: 'Jet Slalom',
    type: 'Game development',
    summary: 'A game project developed as part of an internship.',
    detail: 'Jet Slalom is a game development internship project. This portfolio entry is intentionally concise; additional project details can be added as they are ready to share.',
    number: '01',
  },
  {
    slug: 'ashers-acai',
    title: "Asher's Acai",
    type: 'Minecraft modpack',
    summary: 'A custom Minecraft modpack project.',
    detail: "Asher's Acai is a custom Minecraft modpack. More information about its design, tools, and development can be added here as the project is documented.",
    number: '02',
  },
]

function ArrowIcon({ diagonal = false }) {
  return (
    <svg aria-hidden="true" className="arrow-icon" viewBox="0 0 16 16" fill="none">
      {diagonal
        ? <path d="M4 12 12 4M5 4h7v7" />
        : <path d="M2.5 8h10m-4-4 4 4-4 4" />}
    </svg>
  )
}

function Header({ activePage }) {
  return (
    <header className="site-header">
      <a className="wordmark" href="#/home" aria-label="Asher Marsee home">
        <span className="wordmark-initials">AM</span>
        <span>Asher Marsee</span>
      </a>
      <nav aria-label="Main navigation" className="main-nav">
        <a className={activePage === 'home' ? 'nav-link active' : 'nav-link'} aria-current={activePage === 'home' ? 'page' : undefined} href="#/home">Home</a>
        <a className={activePage === 'portfolio' ? 'nav-link active' : 'nav-link'} aria-current={activePage === 'portfolio' ? 'page' : undefined} href="#/portfolio">Portfolio</a>
        <a className={activePage === 'resume' ? 'nav-link active' : 'nav-link'} aria-current={activePage === 'resume' ? 'page' : undefined} href="#/resume">Resume</a>
      </nav>
      <a className="header-contact" href={`mailto:${email}`}>Get in touch <ArrowIcon diagonal /></a>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <a href={`mailto:${email}`}>{email}</a>
      <span>© {copyrightYear} Asher Marsee</span>
      <a href="#/home">Back to top ↑</a>
    </footer>
  )
}

function SectionLabel({ children }) {
  return <p className="section-label"><span />{children}</p>
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <a className={`project-visual visual-${project.number}`} href={`#/portfolio/${project.slug}`} aria-label={`View ${project.title} project`}>
        <span className="visual-number">{project.number}</span>
        <span className="visual-orbit orbit-a" />
        <span className="visual-orbit orbit-b" />
        <span className="visual-monogram">{project.number === '01' ? 'JS' : 'AA'}</span>
        <span className="visual-open"><ArrowIcon diagonal /></span>
      </a>
      <div className="project-info">
        <div className="project-heading">
          <div>
            <p className="project-type">{project.type}</p>
            <h3><a href={`#/portfolio/${project.slug}`}>{project.title}</a></h3>
          </div>
          <span className="project-index">{project.number}</span>
        </div>
        <p className="project-summary">{project.summary}</p>
        <a className="inline-link" href={`#/portfolio/${project.slug}`}>View project <ArrowIcon /></a>
      </div>
    </article>
  )
}

function HomePage() {
  return (
    <>
      <section className="hero content-width">
        <div className="hero-content">
          <SectionLabel>SOFTWARE DEVELOPER · GAME DESIGNER</SectionLabel>
          <h1>Building thoughtful<br />digital experiences<span className="accent-dot">.</span></h1>
          <p className="hero-summary">
            I’m Asher Marsee, a software developer and game designer. I enjoy turning ideas into considered, useful experiences—from game projects to software.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#/portfolio">Explore my work <ArrowIcon /></a>
            <a className="button button-secondary" href="#/resume">View resume <ArrowIcon diagonal /></a>
          </div>
          <a className="hero-email" href={`mailto:${email}`}>{email}</a>
        </div>
        <div className="hero-composition" aria-hidden="true">
          <div className="composition-grid" />
          <div className="composition-card">
            <span className="composition-kicker">SELECTED WORK</span>
            <span className="composition-title">Ideas into<br /><em>experience.</em></span>
            <span className="composition-rule" />
            <span className="composition-foot"><span>AM</span><span>DESIGN · DEVELOPMENT</span></span>
          </div>
          <span className="composition-index">01 / 02</span>
        </div>
      </section>

      <section className="intro-band">
        <div className="content-width intro-inner">
          <SectionLabel>A LITTLE ABOUT ME</SectionLabel>
          <p>I bring a mix of creative thinking and technical curiosity to my work. I’m interested in building clear, engaging experiences and contributing to teams that care about craft.</p>
          <a className="inline-link" href="#/resume">More about my experience <ArrowIcon /></a>
        </div>
      </section>

      <section className="featured-section content-width" aria-labelledby="featured-heading">
        <div className="section-heading">
          <div>
            <SectionLabel>SELECTED WORK</SectionLabel>
            <h2 id="featured-heading">A few projects<span className="accent-dot">.</span></h2>
          </div>
          <a className="inline-link" href="#/portfolio">View all projects <ArrowIcon /></a>
        </div>
        <div className="project-grid">
          {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
      </section>

      <section className="contact-band">
        <div className="content-width contact-inner">
          <div>
            <SectionLabel>LET’S CONNECT</SectionLabel>
            <h2>Have a role or project in mind?</h2>
          </div>
          <a className="button button-light" href={`mailto:${email}`}>Email me <ArrowIcon diagonal /></a>
        </div>
      </section>
    </>
  )
}

function PortfolioPage() {
  return (
    <section className="page content-width">
      <div className="page-intro">
        <SectionLabel>PORTFOLIO</SectionLabel>
        <h1>Selected work<span className="accent-dot">.</span></h1>
        <p>A selection of game and software projects. Each entry is focused on the work itself and the context available to share.</p>
      </div>
      <div className="project-grid portfolio-grid">
        {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
      </div>
      <div className="page-contact">
        <p>Interested in discussing a project or opportunity?</p>
        <a className="inline-link" href={`mailto:${email}`}>{email} <ArrowIcon diagonal /></a>
      </div>
    </section>
  )
}

function ResumePage() {
  return (
    <section className="page content-width resume-page">
      <div className="resume-top">
        <div className="page-intro">
          <SectionLabel>RESUME</SectionLabel>
          <h1>Asher Marsee<span className="accent-dot">.</span></h1>
          <p>Software developer · Game designer</p>
        </div>
        <button className="button button-primary print-button" onClick={() => window.print()} type="button">
          Print / save as PDF <ArrowIcon />
        </button>
      </div>
      <div className="resume-contact">
        <a href={`mailto:${email}`}>{email}</a>
        <span>Software development · Game design</span>
      </div>
      <div className="resume-layout">
        <aside className="resume-aside">
          <SectionLabel>PROFILE</SectionLabel>
          <p>Software developer and game designer with experience contributing to a game development internship project. Interested in building considered digital products and interactive experiences.</p>
        </aside>
        <div className="resume-main">
          <section className="resume-section">
            <SectionLabel>EXPERIENCE</SectionLabel>
            <article className="resume-entry">
              <div className="entry-heading">
                <h2>Game development internship</h2>
                <span>Internship project</span>
              </div>
              <p className="entry-project">Jet Slalom</p>
              <p>Contributed to a game project as part of an internship.</p>
            </article>
          </section>
          <section className="resume-section">
            <SectionLabel>SELECTED PROJECTS</SectionLabel>
            {projects.map((project) => (
              <article className="resume-entry compact-entry" key={project.slug}>
                <div className="entry-heading">
                  <h2>{project.title}</h2>
                  <span>{project.type}</span>
                </div>
                <p>{project.summary}</p>
              </article>
            ))}
          </section>
        </div>
      </div>
      <p className="resume-note">This online resume reflects the information currently available. Contact me for additional details.</p>
    </section>
  )
}

function ProjectDetail({ project }) {
  return (
    <section className="page content-width detail-page">
      <a className="back-link" href="#/portfolio">← Back to portfolio</a>
      <div className="detail-header">
        <SectionLabel>{project.type}</SectionLabel>
        <h1>{project.title}<span className="accent-dot">.</span></h1>
        <p>{project.detail}</p>
      </div>
      <div className={`detail-visual visual-${project.number}`} aria-hidden="true">
        <span className="visual-orbit orbit-a" />
        <span className="visual-orbit orbit-b" />
        <span className="visual-monogram">{project.number === '01' ? 'JS' : 'AA'}</span>
      </div>
      <div className="detail-footer">
        <span>{project.type}</span>
        <a className="inline-link" href={`mailto:${email}`}>Ask me about this project <ArrowIcon diagonal /></a>
      </div>
    </section>
  )
}

function getRoute() {
  return window.location.hash.slice(1).replace(/^\/+|\/+$/g, '').split('/')
}

function App() {
  const [route, setRoute] = useState(getRoute)

  useEffect(() => {
    const updateRoute = () => setRoute(getRoute())
    window.addEventListener('hashchange', updateRoute)
    return () => window.removeEventListener('hashchange', updateRoute)
  }, [])

  const page = route[0] || 'home'
  const project = page === 'portfolio' && route[1]
    ? projects.find((item) => item.slug === route[1])
    : undefined

  let content
  if (page === 'portfolio') {
    content = project ? <ProjectDetail project={project} /> : <PortfolioPage />
  } else if (page === 'resume') {
    content = <ResumePage />
  } else {
    content = <HomePage />
  }

  return (
    <div className="site-shell">
      <Header activePage={page} />
      <main key={route.join('/')}>{content}</main>
      <Footer />
    </div>
  )
}

export default App

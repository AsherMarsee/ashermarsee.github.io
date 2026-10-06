import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import './App.css'

const pages = ['home', 'portfolio', 'orbellion']
const copyrightYear = new Date().getFullYear()

const projects = [
  {
    number: '01',
    type: 'Content creation · Add a year',
    title: 'A video or stream series',
    description:
      'Describe a channel, series, or piece of content. Add what you made, who it was for, and what you learned.',
    tags: ['Video', 'Streaming', 'Community'],
    color: 'sky',
  },
  {
    number: '02',
    type: 'Software development · Add a year',
    title: 'A software project',
    description:
      'Share an app, site, or tool you built. Explain the problem, your approach, and the technologies you used.',
    tags: ['Development', 'Add technologies'],
    color: 'teal',
  },
  {
    number: '03',
    type: 'Game design · Add a year',
    title: 'Orbellion',
    description:
      'Introduce your tabletop roleplaying project and the part of its design you would most like to share.',
    tags: ['TTRPG', 'Game design', 'In progress'],
    color: 'blue',
  },
]

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/AsherMarsee' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/asher-marsee-826873191/' },
  { name: 'YouTube', url: 'https://www.youtube.com/@AsherMarsee' },
  { name: 'Twitch', url: 'https://www.twitch.tv/AsherMarsee' },
  { name: 'Bluesky', url: 'https://bsky.app/profile/ashermarsee.com' },
  { name: 'General email', url: 'mailto:contact@ashermarsee.com' },
]

function currentPage() {
  const page = window.location.hash.slice(1)
  return pages.includes(page) ? page : 'home'
}

function ArrowIcon({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      className="arrow-icon"
      viewBox="0 0 16 16"
      fill="none"
    >
      {diagonal ? (
        <path d="M4 12 12 4M5 4h7v7" />
      ) : (
        <path d="M2.5 8h10m-4-4 4 4-4 4" />
      )}
    </svg>
  )
}

function Header({ activePage }) {
  return (
    <header className="site-header">
      <a aria-label="Asher Marsee, home" className="wordmark" href="#home">
        <span className="wordmark-mark">AM</span>
        <span>Asher Marsee</span>
      </a>
      <nav aria-label="Main navigation" className="main-nav">
        {pages.map((page) => (
          <a
            aria-current={activePage === page ? 'page' : undefined}
            className={activePage === page ? 'nav-link active' : 'nav-link'}
            href={`#${page}`}
            key={page}
          >
            {page === 'portfolio' ? 'Portfolio' : page === 'orbellion' ? 'Orbellion' : page}
          </a>
        ))}
      </nav>
      <a className="header-contact" href="mailto:business@ashermarsee.com">
        Business inquiries <ArrowIcon diagonal />
      </a>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <span>Made by Asher Marsee</span>
      <a href="#home">Back to top ↑</a>
      <span>© {copyrightYear}</span>
    </footer>
  )
}

function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Open to work and collaboration</p>
          <h1>
            Hello, I’m
            <br />
            <span className="accent-text">Asher.</span>
          </h1>
          <p className="hero-description">
            I’m a <strong>content creator, software developer, and
            game designer</strong>. I make things, share what
            I learn, and dream up tabletop worlds.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#portfolio">
              View my portfolio <ArrowIcon />
            </a>
            <a className="text-link" href="#orbellion">
              Explore Orbellion <ArrowIcon />
            </a>
          </div>
        </div>
        <div aria-label="Abstract layered illustration" className="hero-art">
          <span className="art-orbit orbit-one" />
          <span className="art-orbit orbit-two" />
          <span className="art-label">Create · Code<br />& imagine</span>
          <img src={heroImg} alt="" />
          <span className="art-caption">ASHER MARSEE — CREATOR & DESIGNER</span>
        </div>
      </section>

      <section aria-labelledby="social-heading" className="home-social">
        <div className="home-social-intro">
          <p className="section-kicker">FIND ME ONLINE</p>
          <h2 id="social-heading">Let’s connect<span className="accent-text">.</span></h2>
          <p>Follow along, see what I’m making, or get in touch about work.</p>
        </div>
        <div className="social-list">
          {socialLinks.map(({ name, url }) => (
            <a href={url} key={name} rel="noreferrer" target="_blank">
              {name} <ArrowIcon diagonal />
            </a>
          ))}
        </div>
      </section>
    </>
  )
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className={`project-art ${project.color}`}>
        <span className="project-number">{project.number}</span>
        <span aria-hidden="true" className="project-art-shape" />
        <span className="project-type">{project.type}</span>
      </div>
      <div className="project-copy">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul aria-label="Project skills" className="tag-list">
          {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
      </div>
    </article>
  )
}

function PortfolioPage() {
  return (
    <section className="inner-page">
      <div className="page-intro">
        <p className="section-kicker">CONTENT · CODE · GAME DESIGN</p>
        <h1>My <span className="accent-text">portfolio.</span></h1>
        <p>
          I’m looking for opportunities in content creation, software
          development, and game design. Here are a few places to showcase what
          I’ve made—replace the starter copy with your projects and links.
        </p>
      </div>
      <div className="project-grid work-grid">
        {projects.map((project) => <ProjectCard key={project.number} project={project} />)}
      </div>
      <div className="inline-note">
        <span className="note-star">✳</span>
        <p>Have a role or project in mind? I’d love to hear about it.</p>
        <a className="text-link" href="mailto:business@ashermarsee.com">Business inquiries <ArrowIcon /></a>
      </div>
    </section>
  )
}

function OrbellionPage() {
  return (
    <section className="inner-page pitch-page">
      <div className="page-intro">
        <p className="section-kicker">A TABLETOP ROLEPLAYING PROJECT</p>
        <h1><span className="accent-text">Orbellion.</span></h1>
        <p>
          Orbellion is my tabletop roleplaying game project. This page is a
          space to introduce its world, explain what players do, and share how
          the project is taking shape.
        </p>
      </div>
      <div className="pitch-feature">
        <div className="pitch-art">
          <span className="pitch-art-label">ORBELLION<br />WORLD NOTES</span>
          <img src={heroImg} alt="" />
          <span className="pitch-art-caption">[Add a tagline or piece of lore]</span>
        </div>
        <div className="pitch-details">
          <p className="section-kicker">THE SHORT VERSION</p>
          <h2>[What makes Orbellion an adventure worth playing?]</h2>
          <p>
            In <strong>Orbellion</strong>, players [describe who they play as]
            and [what they do]. Set in [describe the setting], the game is about
            [themes, tone, or central conflict]. Use this space for a concise
            pitch that helps a new reader picture a session.
          </p>
          <dl className="pitch-facts">
            <div><dt>Format</dt><dd>Tabletop roleplaying game</dd></div>
            <div><dt>Genre / tone</dt><dd>[Add genre and tone]</dd></div>
            <div><dt>Status</dt><dd>[Add current development stage]</dd></div>
          </dl>
        </div>
      </div>
      <div className="pitch-pillars">
        <p className="section-kicker">WHAT TO EXPECT</p>
        <div>
          <article><span>01</span><h3>[The player experience]</h3><p>What a group spends its time doing in Orbellion.</p></article>
          <article><span>02</span><h3>[A signature rule]</h3><p>A mechanic or choice that makes the game distinct.</p></article>
          <article><span>03</span><h3>[The setting]</h3><p>A glimpse of the places and stories in this world.</p></article>
        </div>
      </div>
    </section>
  )
}

function App() {
  const [activePage, setActivePage] = useState(currentPage)

  useEffect(() => {
    const updatePage = () => setActivePage(currentPage())
    window.addEventListener('hashchange', updatePage)
    return () => window.removeEventListener('hashchange', updatePage)
  }, [])

  return (
    <div className="site-shell">
      <Header activePage={activePage} />
      <main>
        {activePage === 'portfolio' ? <PortfolioPage /> :
          activePage === 'orbellion' ? <OrbellionPage /> : <HomePage />}
      </main>
      <Footer />
    </div>
  )
}

export default App

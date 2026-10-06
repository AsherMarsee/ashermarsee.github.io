import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import './App.css'

const pages = ['home', 'work', 'pitch', 'about']
const copyrightYear = new Date().getFullYear()

const projects = [
  {
    number: '01',
    type: 'Selected project · 2025',
    title: 'A project worth showing',
    description:
      'A short introduction to a project you care about. What was the idea, what did you make, and what did you learn?',
    tags: ['Research', 'Design', 'Development'],
    color: 'lilac',
  },
  {
    number: '02',
    type: 'Selected project · 2024',
    title: 'Another good thing',
    description:
      'Use this space to share a second project, collaboration, or experiment—and the part you are proudest of.',
    tags: ['Creative coding', 'Prototyping'],
    color: 'peach',
  },
  {
    number: '03',
    type: 'Small experiment · 2024',
    title: 'Something just for fun',
    description:
      'Not everything needs to be a big production. This could be a tiny tool, a weekend idea, or a work in progress.',
    tags: ['Side project', 'In progress'],
    color: 'blue',
  },
]

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/AsherMarsee' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/asher-marsee-826873191/' },
  { name: 'YouTube', url: 'https://www.youtube.com/@AsherMarsee' },
  { name: 'Twitch', url: 'https://www.twitch.tv/AsherMarsee' },
  { name: 'Bluesky', url: 'https://bsky.app/profile/ashermarsee.com' },
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
        <span className="wordmark-mark">A.</span>
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
            {page === 'pitch' ? 'Game pitch' : page === 'work' ? 'Work' : page}
          </a>
        ))}
      </nav>
      <a className="header-contact" href="mailto:contact@ashermarsee.com">
        Contact me <ArrowIcon diagonal />
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
          <p className="eyebrow"><span className="status-dot" /> Available for new things</p>
          <h1>
            Hello, I’m
            <br />
            <span className="accent-text">Asher.</span>
          </h1>
          <p className="hero-description">
            I’m a <strong>developer and game designer</strong> who loves making
            thoughtful things for people. This is my little corner of the
            internet.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">
              Explore my work <ArrowIcon />
            </a>
            <a className="text-link" href="#about">
              A little about me <ArrowIcon />
            </a>
          </div>
          <div className="hero-meta">
            <span>Based in [your city]</span>
            <span>Currently [what you’re up to]</span>
          </div>
        </div>
        <div aria-label="Abstract layered purple illustration" className="hero-art">
          <span className="art-orbit orbit-one" />
          <span className="art-orbit orbit-two" />
          <span className="art-label">A work in progress<br />& a place to begin</span>
          <img src={heroImg} alt="" />
          <span className="art-caption">FIG. 01 — IDEAS IN PROGRESS</span>
        </div>
      </section>

      <section aria-label="A little introduction" className="intro-strip">
        <span className="section-kicker">A LITTLE INTRO</span>
        <p>
          [Summary about me].
        </p>
        <a aria-label="Read more about me" className="round-link" href="#about">
          <ArrowIcon diagonal />
        </a>
      </section>

      <section className="section-block featured-section" id="selected-work">
        <div className="section-heading">
          <div>
            <p className="section-kicker">A FEW THINGS I’VE MADE</p>
            <h2>Selected work<span className="accent-text">.</span></h2>
          </div>
          <a className="text-link" href="#work">
            See all projects <ArrowIcon />
          </a>
        </div>
        <div className="project-grid">
          {projects.slice(0, 2).map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>
      </section>

      <section className="pitch-banner">
        <div>
          <p className="section-kicker">CURRENTLY DREAMING UP</p>
          <h2>A game about [your big idea].</h2>
          <p>A tiny peek at a world I can’t stop thinking about.</p>
        </div>
        <a aria-label="Read the game pitch" className="round-link" href="#pitch">
          <ArrowIcon diagonal />
        </a>
        <span aria-hidden="true" className="banner-spark">✳</span>
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

function WorkPage() {
  return (
    <section className="inner-page">
      <div className="page-intro">
        <p className="section-kicker">THE PORTFOLIO</p>
        <h1>Things I’ve <span className="accent-text">made.</span></h1>
        <p>
          A collection of projects, experiments, and collaborations. Replace
          these starter cards with the work you want people to see.
        </p>
      </div>
      <div className="project-grid work-grid">
        {projects.map((project) => <ProjectCard key={project.number} project={project} />)}
      </div>
      <div className="inline-note">
        <span className="note-star">✳</span>
        <p>Have a project in mind? I’d love to hear about it.</p>
        <a className="text-link" href="mailto:hello@example.com">Get in touch <ArrowIcon /></a>
      </div>
    </section>
  )
}

function PitchPage() {
  return (
    <section className="inner-page pitch-page">
      <div className="page-intro">
        <p className="section-kicker">A GAME PITCH · WORK IN PROGRESS</p>
        <h1>A world called <span className="accent-text">[Game Title].</span></h1>
        <p>
          A short pitch for the game you can’t stop imagining. Start with the
          feeling, the hook, and the person playing it.
        </p>
      </div>
      <div className="pitch-feature">
        <div className="pitch-art">
          <span className="pitch-art-label">CONCEPT<br />NO. 001</span>
          <img src={heroImg} alt="" />
          <span className="pitch-art-caption">[A tagline or world-building detail]</span>
        </div>
        <div className="pitch-details">
          <p className="section-kicker">THE ELEVATOR PITCH</p>
          <h2>What if you could [one-sentence hook]?</h2>
          <p>
            In <strong>[Game Title]</strong>, you play as [the protagonist], who
            must [goal] in a world where [what makes this world different].
            Explore, experiment, and discover what happens when [central
            tension].
          </p>
          <dl className="pitch-facts">
            <div><dt>Genre</dt><dd>[Genre / subgenre]</dd></div>
            <div><dt>For fans of</dt><dd>[Comparable games]</dd></div>
            <div><dt>Status</dt><dd>Early concept</dd></div>
          </dl>
        </div>
      </div>
      <div className="pitch-pillars">
        <p className="section-kicker">THE BIG THREE</p>
        <div>
          <article><span>01</span><h3>[A core feeling]</h3><p>What the player should feel, and why.</p></article>
          <article><span>02</span><h3>[A unique mechanic]</h3><p>The thing players will tell their friends about.</p></article>
          <article><span>03</span><h3>[A world to get lost in]</h3><p>The detail that makes this world yours.</p></article>
        </div>
      </div>
    </section>
  )
}

function AboutPage() {
  return (
    <section className="inner-page about-page">
      <div className="page-intro">
        <p className="section-kicker">THE PERSON BEHIND THE PROJECTS</p>
        <h1>A little more <span className="accent-text">about me.</span></h1>
      </div>
      <div className="about-layout">
        <div className="about-art">
          <img src={heroImg} alt="" />
          <span>A PLACEHOLDER FOR A PHOTO, A DRAWING, OR A VERY GOOD ROCK</span>
        </div>
        <div className="about-copy">
          <p className="about-lede">
            I’m Asher, a [your role] interested in [the things you care
            about].
          </p>
          <p>
            I believe the best work starts with curiosity. Lately, I’ve been
            spending my time [what you’re working on], learning about [something
            you’re learning], and finding excuses to [something you enjoy].
          </p>
          <p>
            Before that, I [a bit of your background]. I’m always happy to meet
            kind people making interesting things, so feel free to say hello.
          </p>
          <a className="button button-dark" href="mailto:hello@example.com">
            Get in touch <ArrowIcon diagonal />
          </a>
        </div>
      </div>
      <div className="social-section">
        <div>
          <p className="section-kicker">AROUND THE INTERNET</p>
          <h2>Find me elsewhere<span className="accent-text">.</span></h2>
        </div>
        <div className="social-list">
          {socialLinks.map(({ name, url }) => (
            <a href={url} key={name} rel="noreferrer" target="_blank">
              {name} <ArrowIcon diagonal />
            </a>
          ))}
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
        {activePage === 'work' ? <WorkPage /> :
          activePage === 'pitch' ? <PitchPage /> :
            activePage === 'about' ? <AboutPage /> : <HomePage />}
      </main>
      <Footer />
    </div>
  )
}

export default App

import { useEffect, useState } from 'react'
import graduatePhoto from './assets/Asher_Grad.jpg'
import resumePdf from './assets/AsherMarseeCV.pdf'
import './App.css'

const email = 'asher@ashermarsee.com'
const copyrightYear = new Date().getFullYear()
const projectImages = import.meta.glob('./assets/projects/*/*', { eager: true, import: 'default', query: '?url' })

function getProjectImage(projectSlug, filename) {
  return projectImages[`./assets/projects/${projectSlug}/${filename}`]
}

const projects = [
  {
    slug: 'jet-slalom-vr',
    title: 'Jet Slalom VR',
    type: 'Professional · UW Medicine',
    summary: 'A VR game created for a vision research experiment at UW Medicine.',
    cover: 'cover.jpg',
    blocks: [
      { type: 'paragraph', text: 'Jet Slalom VR is a game I made while I was an intern at UW Medicine.' },
      { type: 'paragraph', text: 'During my time at UW Medicine, most of my work focused on a research project investigating the effects of high-contrast images on vision using VR. The games available for the experiment did not quite fit what we needed. After I mentioned that I had worked on video games in my free time, my supervisor asked if I could make a game that met the experiment’s specifications. I had made a few small personal projects in Unity, and this gave me the opportunity to develop a more complete product.' },
      { type: 'paragraph', text: 'Within a week or two, I had a working version of Jet Slalom VR ready for the experiment. Players sit in a spaceship cockpit and dodge pillars while moving forward. The goal is to travel as far as possible as the obstacles become denser. Participants enjoyed the game enough to set up a whiteboard scoreboard between the test rooms and compete for the highest score. Seeing people organize that themselves around a game I had made—my first full game—was one of my most gratifying experiences.' },
      { type: 'video', id: 'E8qZVG0gaQQ', title: 'Jet Slalom VR gameplay' },
      { type: 'paragraph', text: 'This video shows the main mode participants played during the experiment, using maximum-contrast visuals to better test the effects of high contrast on vision over time. It also briefly shows the credits.' },
      { type: 'video', id: 'NjZ0-bwfa9E', title: 'High-contrast experiment mode and credits' },
      { type: 'paragraph', text: 'Here is an early-development playtest.' },
      { type: 'video', id: 'fp9RZYGtX3E', title: 'Early development playtest' },
      { type: 'paragraph', text: 'Players eventually set up this scoreboard. A couple of people managed to beat my score!' },
      { type: 'image', filename: 'Scoreboard.JPG', alt: 'Jet Slalom VR experiment participant scoreboard' },
    ],
  },
  {
    slug: 'heroscape-digital-scenario-editor',
    title: 'Heroscape DSE',
    type: 'Senior project · Software Development',
    summary: 'A Unity-based 3D level editor for designers of the Heroscape board game.',
    cover: 'cover.png',
    blocks: [
      { type: 'paragraph', text: 'For my senior project at Eastern Washington University, I proposed a 3D level-editor application for designers of the Heroscape board game, built in Unity. Two other students joined the project, and I served as its primary design lead while implementing the majority of its features.' },
      { type: 'paragraph', text: 'I researched existing software and interviewed designers connected to the Heroscape product to gather requirements. I wrote detailed design documentation covering the project vision and technical specifications. I also guided the user-interface design, prioritizing quality, usability, and a more intuitive control system than existing community-made tools.' },
      { type: 'paragraph', text: 'The tool has not yet been released publicly. The presentation below was created to introduce the project to the Heroscape owners.' },
      { type: 'presentation', src: 'https://docs.google.com/presentation/d/e/2PACX-1vTqSGU-EQN6EgjiVA1FVb7dJ0PXQ_pmALGMZDyd8wfeFSZs2X3sRSX89VwAYog0C2jOj-dR0azWe-Jj/pubembed?start=false&loop=false&delayms=5000', title: 'Heroscape Digital Scenario Editor project presentation' },
    ],
  },
  {
    slug: 'ball-world-astroll',
    title: 'Ball World & Astroll',
    type: 'Class projects · Game development',
    summary: 'Two Unity physics-based platformers built with small teams in a game development course.',
    cover: 'cover.png',
    sections: [
      {
        title: 'Physics-based 3D Platformers',
        paragraphs: [
          'In spring 2025, I took a game development class where teams made two Unity games in four weeks each. We were encouraged to use available code and frameworks to save time, so I proposed reusing a control system I had made in 2020 for a personal project inspired by the Super Monkey Ball series. My teammates agreed, and we developed Ball World. When we formed new teams of three, I proposed the same control method as a foundation for a game in a different genre, which became Astroll.',
          'I was the primary gameplay designer for both projects. I continued to refine the control system and helped the teams make engaging use of it. I was also a frequent playtester, led larger group playtests, and implemented a sound-effect system with rolling and impact sounds whose pitch and volume respond to the ball’s velocity.',
        ],
      },
      {
        title: 'Ball World',
        paragraphs: [
          'Our team split Ball World into three distinct game modes, with each person leading one minigame. I created the infinite-runner mode: players roll through a continuously generated obstacle course, collecting coins and avoiding falls. The final score depends on distance, coins, and speed.',
          'The other modes and the simple story made by my teammates added variety, while my mode provided much of the replayability and made the most of our unusual control system.',
          'The infinite level uses fewer than a dozen unique pieces. Mirroring, offsetting, and slightly tilting them creates varied, effectively endless challenges as the pieces and edits interact. Coins sit along more difficult routes—especially those that require speed—to reward riskier paths.',
          'Given the time constraints, I also worked on the visuals, aiming for a wooden-block toybox style. I created a skybox that follows the camera’s tilt and moves with the player, helping avoid motion sickness and rapidly changing visuals.',
          'Ball World was far from perfect, but I am proud of the control system and infinite-runner mode, especially given the limited development time.',
        ],
      },
      {
        title: 'Astroll',
        paragraphs: [
          'Ball World brought together different concepts from the team. Astroll had a more unified vision: I pitched a Monkey Ball-inspired rage game, in the vein of Getting Over It, Only Up, and Get to Work. We set out to build one large level the player must climb in a single run, without falling or checkpoints. I knew the concept would have a narrower audience, but had heard directly from streamers who enjoyed rage games and Monkey Ball that they would be interested in it.',
          'Each teammate built a portion of the level, which we later joined into one scene. I created reusable level-design pieces such as moving platforms and halfpipes, built my own section, and integrated the three portions into an intended difficulty curve. I am proud of the section I made and of bringing the levels together. With more polish, I believe the premise could become an intentionally challenging but fun game.',
        ],
      },
    ],
  },
  {
    slug: 'magic-card-designs',
    title: 'Fanmade MtG Cards',
    type: 'Personal · Game design',
    summary: 'Custom card concepts inspired by years of playing Magic: The Gathering.',
    cover: 'cover.jpg',
    blocks: [
      { type: 'paragraph', text: 'I have been playing Magic for around 15 years—most of my life. Imagining new Magic cards was one of my first experiences with game design, starting when I was 11. After many years, I feel I have started designing cards I can be proud of.' },
      { type: 'link', text: 'I have also built more than 50 deck concepts over the last couple of years; they are available on Moxfield.', label: 'View my decks on Moxfield', href: 'https://moxfield.com/users/AeonHero' },
      { type: 'paragraph', text: 'My favorite color combination to play is Gruul, while I relate most to Jeskai in terms of color-pie philosophy. I recently built my favorite deck: a Jeskai Dragon-kindred Commander deck led by Zurgo and Ojutai.' },
      { type: 'gallery', title: 'Original Card Designs', note: 'These cards were created solely for personal use and are not for sale. I plan to add explanations of my design process over time; for now, enjoy the cards.', groups: [
        { title: 'Original Concepts · Sultai Morph Commander', images: [
          { filename: 'Jalard, Soulmist Summoner.jpg', alt: 'Jalard, Soulmist Summoner custom card' },
          { filename: 'Master of Lost Souls.jpg', alt: 'Master of Lost Souls custom card' },
          { filename: 'Mist of War.jpg', alt: 'Mist of War custom card' },
        ] },
        { title: 'Original Concepts · Jund Kobold Planeswalker', images: [
          { filename: 'Natri, Avenger of Kher.jpg', alt: 'Natri, Avenger of Kher custom card' },
        ] },
        { title: 'Universes Beyond · Pokémon', images: [
          { filename: 'Eager Charmander.jpg', alt: 'Eager Charmander custom card' },
          { filename: 'Brash Charmeleon.jpg', alt: 'Brash Charmeleon custom card' },
          { filename: 'Charizard, Flame Tyrant.jpg', alt: 'Charizard, Flame Tyrant custom card' },
          { filename: 'Reckless Rhyhorn.jpg', alt: 'Reckless Rhyhorn custom card' },
          { filename: 'Proud Rhydon.jpg', alt: 'Proud Rhydon custom card' },
          { filename: 'Mew, the First Pokémon.jpg', alt: 'Mew, the First Pokémon custom card' },
          { filename: 'Alolan Rattata.jpg', alt: 'Alolan Rattata custom card' },
          { filename: 'Alolan Raticate.jpg', alt: 'Alolan Raticate custom card' },
        ] },
        { title: 'Universes Beyond · Kirby', images: [
          { filename: 'Kirby, Round Friend.jpg', alt: 'Kirby, Round Friend custom card' },
          { filename: 'Meta Knight, Star Warrior.jpg', alt: 'Meta Knight, Star Warrior custom card' },
          { filename: 'King Dedede, Noble Tyrant.jpg', alt: 'King Dedede, Noble Tyrant custom card' },
        ] },
      ] },
    ],
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
        <img className="wordmark-avatar" src="/favicon.png" alt="" />
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
      <a href="https://github.com/NathanMarsee" rel="noreferrer" target="_blank">GitHub <ArrowIcon diagonal /></a>
      <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} type="button">Back to top ↑</button>
    </footer>
  )
}

function SectionLabel({ children }) {
  return <p className="section-label"><span />{children}</p>
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <a className={`project-visual project-${project.slug}`} href={`#/portfolio/${project.slug}`} aria-label={`View ${project.title} project`}>
        <img className="project-cover" src={getProjectImage(project.slug, project.cover)} alt="" />
        <span className="visual-open"><ArrowIcon diagonal /></span>
      </a>
      <div className="project-info">
        <div className="project-heading">
          <div>
            <p className="project-type">{project.type}</p>
            <h3><a href={`#/portfolio/${project.slug}`}>{project.title}</a></h3>
          </div>
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
      <section className="hero content-width section-top">
        <div className="hero-content">
          <SectionLabel>ABOUT ME</SectionLabel>
          <h1>Hi, I’m Asher<span className="accent-dot">.</span></h1>
          <p className="hero-summary">
            My name is Nathan Marsee, but I prefer to go by my middle name, Asher. I’m a developer and game designer from Renton, Washington, and I use he/him or they/them pronouns.
          </p>
          <p className="hero-summary">
            While I enjoy playing games, I spend even more time analyzing their design, modifying my favorites, and creating games of my own. I’ve developed several complete video games, including a VR game for UW Medicine.
          </p>
          <p className="hero-summary">I graduated from Eastern Washington University in December 2025 with a Bachelor of Science in Computer Science, and am enrolled at Bellevue Community College to begin my master's degree.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#/portfolio">Explore my work <ArrowIcon /></a>
            <a className="button button-secondary" href="#/resume">View resume <ArrowIcon diagonal /></a>
          </div>
        </div>
        <div className="hero-photo-frame">
          <img className="hero-photo" src={graduatePhoto} alt="Asher Marsee in graduation attire" />
        </div>
      </section>

      <section className="interests-section content-width" aria-labelledby="interests-heading">
        <div className="interests-copy">
          <SectionLabel>MY INTERESTS</SectionLabel>
          <h2 id="interests-heading">Making, thinking, and telling stories<span className="accent-dot">.</span></h2>
          <p>Video games first motivated me to study computer science, but I’m drawn to software of all kinds. Planning a piece of software and solving the puzzle of implementing it is engaging and fulfilling, whatever its purpose. I also enjoy the artistic parts of software creation, such as visual design and music, though I have no formal training in either.</p>
          <p>I’m passionate about storytelling, experiencing fictional worlds, and creating my own. I also enjoy games such as Zelda: Tears of the Kingdom, Metroid Prime, and Deltarune, along with tabletop games including Dungeons &amp; Dragons, Settlers of Catan, and Magic: The Gathering, which I’ve played for nearly 15 years.</p>
        </div>
      </section>

      <section className="featured-section content-width section-top" aria-labelledby="featured-heading">
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
    <section className="page content-width section-top">
      <div className="page-intro portfolio-intro">
        <SectionLabel>PORTFOLIO</SectionLabel>
        <h1>Selected work<span className="accent-dot">.</span></h1>
        <p>Professional, academic, and personal work across software development and game design.</p>
      </div>
      <div className="project-grid portfolio-grid">
        {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
      </div>
    </section>
  )
}

function ResumePage() {
  return (
    <section className="page content-width resume-page">
      <div className="resume-file-heading">
        <div className="page-intro">
          <SectionLabel>RESUME</SectionLabel>
          <h1>Asher Marsee<span className="accent-dot">.</span></h1>
          <p>View or download my resume.</p>
        </div>
        <a className="button button-primary" href={resumePdf} download="AsherMarseeCV.pdf">
          Download resume <ArrowIcon />
        </a>
      </div>
      <div className="resume-viewer">
        <iframe
          title="Asher Marsee resume"
          src={resumePdf}
          width="100%"
          height="100%"
        >
          <p>Your browser can’t display the resume inline. <a href={resumePdf} download="AsherMarseeCV.pdf">Download the PDF</a>.</p>
        </iframe>
      </div>
    </section>
  )
}

function CardGallery({ project, block }) {
  const [isOpen, setIsOpen] = useState(false)
  const galleryId = `${project.slug}-card-gallery`

  return (
    <section className="card-gallery">
      <div className="card-gallery-heading">
        <div>
          <SectionLabel>DESIGN GALLERY</SectionLabel>
          <h2>{block.title}</h2>
        </div>
        <button
          aria-controls={galleryId}
          aria-expanded={isOpen}
          className="button button-secondary"
          onClick={() => setIsOpen((open) => !open)}
          type="button"
        >
          {isOpen ? 'Hide card designs' : 'View card designs'} <ArrowIcon diagonal={isOpen} />
        </button>
      </div>
      {isOpen && (
        <div className="card-gallery-content" id={galleryId}>
          <p className="gallery-note">{block.note}</p>
          {block.groups.map((group) => (
            <section className="card-gallery-group" key={group.title}>
              <h3>{group.title}</h3>
              <div className="card-image-grid">
                {group.images.map((image) => (
                  <figure key={image.filename}>
                    <img loading="lazy" src={getProjectImage(project.slug, image.filename)} alt={image.alt} />
                  </figure>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </section>
  )
}

function ProjectBlock({ block, project }) {
  if (block.type === 'paragraph') return <p className="project-detail-paragraph">{block.text}</p>
  if (block.type === 'link') {
    return (
      <div className="project-external-link">
        <p>{block.text}</p>
        <a className="inline-link" href={block.href} rel="noreferrer" target="_blank">{block.label} <ArrowIcon diagonal /></a>
      </div>
    )
  }
  if (block.type === 'video') {
    return (
      <div className="project-media">
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          src={`https://www.youtube.com/embed/${block.id}`}
          title={block.title}
        />
      </div>
    )
  }
  if (block.type === 'presentation') {
    return (
      <div className="project-media presentation-media">
        <iframe
          allowFullScreen
          loading="lazy"
          src={block.src}
          title={block.title}
        />
      </div>
    )
  }
  if (block.type === 'image') {
    return (
      <figure className="project-image">
        <img loading="lazy" src={getProjectImage(project.slug, block.filename)} alt={block.alt} />
      </figure>
    )
  }
  if (block.type === 'gallery') return <CardGallery block={block} project={project} />
  return null
}

function ProjectDetail({ project }) {
  return (
    <section className="page content-width detail-page">
      <a className="back-link" href="#/portfolio">← Back to portfolio</a>
      <div className="detail-header">
        <SectionLabel>{project.type}</SectionLabel>
        <h1>{project.title}<span className="accent-dot">.</span></h1>
        <p>{project.summary}</p>
      </div>
      <div className={`detail-visual project-${project.slug}`} aria-hidden="true">
        <img className="project-cover" src={getProjectImage(project.slug, project.cover)} alt="" />
      </div>
      <div className="project-detail-content">
        {project.blocks?.map((block, index) => <ProjectBlock block={block} key={`${block.type}-${index}`} project={project} />)}
        {project.sections?.map((section) => (
          <section className="project-detail-section" key={section.title}>
            <h2>{section.title}</h2>
            {section.paragraphs.map((text) => <p className="project-detail-paragraph" key={text}>{text}</p>)}
          </section>
        ))}
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
    const updateRoute = () => {
      window.scrollTo(0, 0)
      setRoute(getRoute())
    }
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

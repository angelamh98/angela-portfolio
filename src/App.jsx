import { useState } from "react";

function App() {
  const [activeWindow, setActiveWindow] = useState("about");

  const apps = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "stack", label: "Tech Stack" },
    { id: "cv", label: "CV" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="desktop">
      <div className="topbar">
        <span>Angela OS</span>
        <span>Data Engineer · Analytics · Data Science</span>
      </div>

      <section className="hero">
        <h1>Angela Martin Herrera</h1>
        <p>Building data platforms, analytics workflows and engineering projects.</p>
      </section>

      <div className="icons">
        {apps.map((app) => (
          <button key={app.id} className="desktop-icon" onClick={() => setActiveWindow(app.id)}>
            <span className="icon-box">{app.label.slice(0, 2)}</span>
            <span>{app.label}</span>
          </button>
        ))}

        <a className="desktop-icon" href="mailto:angelamarh26@gmail.com">
          <span className="icon-box">@</span>
          <span>Mail</span>
        </a>

        <a
          className="desktop-icon"
          href="https://www.linkedin.com/in/angela-martin-herrera-098a04214/"
          target="_blank"
          rel="noreferrer"
        >
          <span className="icon-box">in</span>
          <span>LinkedIn</span>
        </a>
      </div>

      <Window activeWindow={activeWindow} setActiveWindow={setActiveWindow} />
    </div>
  );
}

function Window({ activeWindow, setActiveWindow }) {
  const content = {
    about: (
      <>
        <h2>About</h2>
        <p>
          Data Engineer with a background in Physics and experience across ETL pipelines,
          automation, cloud-based environments and analytics workflows.
        </p>
      </>
    ),
    projects: (
      <>
        <h2>Projects</h2>
        <h3>Spotify Data Platform</h3>
        <p>
          End-to-end data engineering project using Python, PostgreSQL, Docker and the
          Spotify API. Includes incremental ingestion, relational modeling and analytics-ready data.
        </p>
        <a href="https://github.com/angelamh98/spotify-data-platform" target="_blank" rel="noreferrer">
          View on GitHub
        </a>
      </>
    ),
    stack: (
      <>
        <h2>Tech Stack</h2>
        <p>Python · SQL · PySpark · AWS · PostgreSQL · Docker · APIs · Power BI · Git</p>
      </>
    ),
    cv: (
      <>
        <h2>CV</h2>

        <p>Choose a version:</p>

        <div className="links">
          <a
            href="/cv-angela-english.pdf"
            target="_blank"
            rel="noreferrer"
          >
            English CV
          </a>

          <a
            href="/cv-angela-spanish.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Spanish CV
          </a>
        </div>
      </>
    ),
  };

  return (
    <div className="window">
      <div className="window-bar">
        <div>
          <button className="dot red" onClick={() => setActiveWindow(null)} />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <span>{activeWindow || "welcome"}.app</span>
      </div>

      <div className="window-content">
        {activeWindow ? content[activeWindow] : <p>Select an app from the desktop.</p>}
      </div>
    </div>
  );
}

export default App;
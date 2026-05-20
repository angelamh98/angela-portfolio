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

        <p>
          Building data platforms, analytics workflows and
          engineering projects.
        </p>
      </section>

      <div className="icons">
        {apps.map((app) => (
          <button
            key={app.id}
            className="desktop-icon"
            onClick={() => setActiveWindow(app.id)}
          >
            <span className="icon-box">
              {app.label.slice(0, 2)}
            </span>

            <span>{app.label}</span>
          </button>
        ))}

        <a
          className="desktop-icon"
          href="mailto:angelamarh26@gmail.com"
        >
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

      <Window
        activeWindow={activeWindow}
        setActiveWindow={setActiveWindow}
      />
    </div>
  );
}

function Window({ activeWindow, setActiveWindow }) {
  const content = {
    about: (
      <>
        <h2>About</h2>

        <p>
          Data Engineer with a background in Physics and
          experience across ETL pipelines, automation,
          cloud-based environments and analytics workflows.
        </p>

        <p>
          Currently working as a Data Engineer while pursuing
          a Master's Degree in Data Science.
        </p>
      </>
    ),

    projects: (
      <>
        <h2>Projects</h2>

        <div style={{ marginTop: "20px" }}>
          <h3>Spotify Data Platform</h3>

          <p>
            End-to-end data engineering project using Python,
            PostgreSQL, Docker and the Spotify API.
          </p>

          <p>
            Includes incremental ingestion, relational data
            modeling, artist/album/track pipelines and
            analytics-ready datasets.
          </p>

          <a
            href="https://github.com/angelamh98/spotify-data-platform"
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </>
    ),

    stack: (
      <>
        <h2>Tech Stack</h2>

        <p>
          <strong>Programming & Data:</strong>
          <br />
          Python · SQL · R · PySpark · Pandas · NumPy
        </p>

        <p>
          <strong>Data Engineering:</strong>
          <br />
          ETL Pipelines · PostgreSQL · Docker · APIs ·
          Control-M · AWS · Azure
        </p>

        <p>
          <strong>Analytics & Visualization:</strong>
          <br />
          Power BI · Cognos · SAP Analytics Cloud ·
          Analysis for Office
        </p>

        <p>
          <strong>Machine Learning & Data Science:</strong>
          <br />
          Machine Learning · Feature Engineering ·
          Data Analysis · Statistical Modeling
        </p>

        <p>
          <strong>Development Tools:</strong>
          <br />
          Git · GitHub · VSCode · DBeaver ·
          Jupyter Notebook
        </p>
      </>
    ),

    cv: (
      <>
        <h2>CV</h2>

        <p>Choose a version:</p>

        <div className="links">
          <a
            href="/angela-portfolio/cv-angela-english.pdf"
            target="_blank"
            rel="noreferrer"
          >
            English CV
          </a>

          <a
            href="/angela-portfolio/cv-angela-spanish.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Spanish CV
          </a>
        </div>
      </>
    ),

    contact: (
      <>
        <h2>Contact</h2>

        <p>Madrid, Spain</p>

        <p>Email: angelamarh26@gmail.com</p>

        <p>
          Open to opportunities in Data Engineering,
          Analytics and Data Science.
        </p>
      </>
    ),
  };

  return (
    <div className="window">
      <div className="window-bar">
        <div>
          <button
            className="dot red"
            onClick={() => setActiveWindow(null)}
          />

          <span className="dot yellow" />

          <span className="dot green" />
        </div>

        <span>
          {activeWindow || "welcome"}.app
        </span>
      </div>

      <div className="window-content">
        {activeWindow ? (
          content[activeWindow]
        ) : (
          <p>Select an app from the desktop.</p>
        )}
      </div>
    </div>
  );
}

export default App;
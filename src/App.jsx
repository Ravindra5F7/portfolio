import React from "react";
import "./App.css";
import Hero3D from "./Hero3D";
function App() {
  return (
    <div className="portfolio">
      
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">RAVEENDRA<span>.</span></div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="#education">Education</a>
          <a href="#certifications">Certifications</a>
        </div>

        <a href="#contact" className="nav-button">
          Let's Talk
        </a>
      </nav>

      {/* HERO */}
      <main id="home" className="hero">
        
        <div className="hero-content">
          <p className="hero-intro">HELLO, I'M</p>

          <h1>
            Raveendra
            <br />
            <span>Siraparapu</span>
          </h1>

          <h2>
            Software Developer
            <span> • </span>
            Python
            <span> • </span>
            MERN
            <span> • </span>
            AI/ML
          </h2>

          <p className="hero-description">
            I build practical software solutions by combining
            programming, full-stack development, and artificial
            intelligence.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              View My Work
              <span>↗</span>
            </a>

            <a href="#contact" className="secondary-button">
              Contact Me
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/Ravindra5F7"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/ravindra-siraparapu-1a7758280"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* HERO VISUAL */}
        <div className="hero-visual">

  <Hero3D />

  <div className="hero-tech-card card-python">
    Python
  </div>

  <div className="hero-tech-card card-ai">
    AI / ML
  </div>

  <div className="hero-tech-card card-react">
    React
  </div>

</div>
      </main>
      {/* ================= ABOUT ================= */}

  <section id="about" className="about-section">
        <div className="section-heading">
          <p className="section-label">ABOUT ME</p>

          <h2>
            Turning ideas into
            <span> practical solutions.</span>
          </h2>
        </div>

        <div className="about-content">

          <div className="about-text">
            <p>
              I'm Raveendra Siraparapu, a Computer Science graduate with
              hands-on experience in software development, AI, and
              full-stack systems.
            </p>

            <p>
              I enjoy building practical applications that combine
              programming, web technologies, APIs, and artificial
              intelligence to solve real-world problems.
            </p>

            <div className="about-stats">

              <div className="stat">
                <strong>01</strong>
                <span>AI Internship</span>
              </div>

              <div className="stat">
                <strong>02</strong>
                <span>Featured Projects</span>
              </div>

              <div className="stat">
                <strong>2026</strong>
                <span>B.Tech Graduate</span>
              </div>

            </div>
          </div>

          <div className="about-card">

            <div className="card-top">
              <span className="status-dot"></span>
              Currently exploring
            </div>

            <h3>
              Software
              <br />
              Development
              <br />
              <span>+ AI/ML</span>
            </h3>

            <p>
              Python • React • APIs • Machine Learning
            </p>

          </div>

        </div>

      </section>


      {/* ================= SKILLS ================= */}

      <section id="skills" className="skills-section">
        <div className="section-heading">
          <p className="section-label">TECHNICAL SKILLS</p>

          <h2>
            Tools I use to
            <span> build.</span>
          </h2>

          <p className="section-description">
            A practical technology stack covering programming,
            frontend, backend, databases, data libraries, and
            development tools.
          </p>
        </div>


        <div className="skills-grid">

          <div className="skill-card">
            <div className="skill-number">01</div>
            <h3>Programming</h3>

            <div className="skill-tags">
              <span>Python</span>
            </div>
          </div>


          <div className="skill-card">
            <div className="skill-number">02</div>
            <h3>Frontend</h3>

            <div className="skill-tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React.js</span>
            </div>
          </div>


          <div className="skill-card">
            <div className="skill-number">03</div>
            <h3>Backend</h3>

            <div className="skill-tags">
              <span>Node.js</span>
              <span>Express.js</span>
              <span>REST APIs</span>
            </div>
          </div>


          <div className="skill-card">
            <div className="skill-number">04</div>
            <h3>Database</h3>

            <div className="skill-tags">
              <span>MongoDB</span>
              <span>SQL</span>
            </div>
          </div>


          <div className="skill-card">
            <div className="skill-number">05</div>
            <h3>Data & AI</h3>

            <div className="skill-tags">
              <span>NumPy</span>
              <span>Pandas</span>
              <span>Matplotlib</span>
            </div>
          </div>


          <div className="skill-card">
            <div className="skill-number">06</div>
            <h3>Tools & Cloud</h3>

            <div className="skill-tags">
              <span>Git</span>
              <span>GitHub</span>
              <span>Docker</span>
              <span>Jenkins</span>
              <span>AWS</span>
              <span>Postman</span>
            </div>
          </div>

        </div>

      </section>
      {/* ================= EXPERIENCE ================= */}

<section id="experience" className="experience-section">

        <div className="section-heading">
          <p className="section-label">EXPERIENCE</p>

          <h2>
            Where I got to
            <span> build.</span>
          </h2>
        </div>

        <div className="experience-wrapper">

          <div className="experience-line">
            <div className="experience-dot"></div>
          </div>

          <div className="experience-card">

            <div className="experience-header">

              <div>
                <p className="experience-company">
                  National Institute of Technology,
                  Andhra Pradesh
                </p>

                <h3>AI Intern</h3>
              </div>

              <div className="experience-date">
                May 2025 — Aug 2025
              </div>

            </div>

            <div className="experience-location">
              Tadepalligudem, Andhra Pradesh
            </div>

            <div className="experience-content">

              <div className="experience-item">
                <span>01</span>
                <p>
                  Contributed to the development of an AI-powered
                  chatbot designed to improve accessibility and
                  learning support for students.
                </p>
              </div>

              <div className="experience-item">
                <span>02</span>
                <p>
                  Designed and implemented a clean, user-friendly
                  interface to improve the chatbot experience.
                </p>
              </div>

              <div className="experience-item">
                <span>03</span>
                <p>
                  Integrated a code compiler and execution environment
                  enabling real-time code execution inside the chatbot.
                </p>
              </div>

            </div>

            <div className="experience-tech">

              <span>AI</span>
              <span>Python</span>
              <span>UI/UX</span>
              <span>Code Execution</span>

            </div>

          </div>

        </div>

      </section>
      {/* ================= PROJECTS ================= */}

<section id="projects" className="projects-section">

  <div className="section-heading">
    <p className="section-label">SELECTED WORK</p>

    <h2>
      Things I've
      <span> built.</span>
    </h2>

    <p className="section-description">
      A selection of projects where I combined software
      development, machine learning, and practical problem solving.
    </p>
  </div>


  {/* ================= FEATURED PROJECT ================= */}

  <div className="featured-project">

    {/* PROJECT IMAGE */}

    <div className="project-visual">

      <img
        src="/traffic-detection.png"
        alt="AI-based two-wheeler traffic violation detection"
        className="traffic-project-image"
      />

      <div className="project-image-overlay"></div>

      <div className="project-number">
        01
      </div>

    </div>


    {/* PROJECT INFORMATION */}

    <div className="featured-project-content">

      <p className="project-category">
        COMPUTER VISION • AI
      </p>

      <h3>
        AI-Based Two-Wheeler
        <br />
        Traffic Violation Detection
      </h3>

      <p className="project-description">
        An AI-powered computer vision system designed to
        identify traffic violations from road images using
        object detection models.
      </p>


      {/* VIOLATIONS */}

      <div className="violation-list">

        <span>Helmet Absence</span>
        <span>Triple Riding</span>
        <span>Mobile Usage</span>
        <span>Wheeling</span>
        <span>No Parking</span>

      </div>


      {/* TECHNOLOGIES */}

      <div className="project-tech">

        <span>Python</span>
        <span>YOLOv8</span>
        <span>YOLOv11</span>
        <span>OpenCV</span>
        <span>Flask</span>

      </div>


      {/* ACTION */}

      <div className="project-actions">

        <a
          href="https://github.com/Ravindra5F7"
          target="_blank"
          rel="noreferrer"
          className="project-button"
        >
          View Project
          <span>↗</span>
        </a>

      </div>

    </div>

  </div>


  {/* ================= SECOND PROJECT ================= */}

  <div className="secondary-project">

    <div className="secondary-project-content">

      <p className="project-category">
        MACHINE LEARNING • FULL STACK
      </p>

      <h3>
        IPL Match Prediction
        <br />
        Web Application
      </h3>

      <p className="project-description">
        A full-stack web application that uses historical
        IPL data and machine learning logic to estimate
        match-winning probabilities.
      </p>

      <div className="project-tech">

        <span>React</span>
        <span>Python</span>
        <span>REST APIs</span>
        <span>Machine Learning</span>

      </div>

      <div className="project-actions">

        <a
          href="https://github.com/Ravindra5F7"
          target="_blank"
          rel="noreferrer"
          className="project-button"
        >
          View Project
          <span>↗</span>
        </a>

      </div>

    </div>


    {/* IPL VISUAL */}

    <div className="ipl-visual">

      <div className="chart-bars">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className="prediction-label">
        WIN PROBABILITY
      </div>

      <div className="prediction-value">
        ML
      </div>

    </div>

  </div>

</section>
{/* ================= EDUCATION ================= */}

<section id="education" className="education-section">

  <div className="section-heading">
    <p className="section-label">EDUCATION</p>

    <h2>
      My academic
      <span> journey.</span>
    </h2>
  </div>

  <div className="education-timeline">

    <div className="education-item">

      <div className="education-marker">
        01
      </div>

      <div className="education-card">

        <div className="education-top">
          <span>2022 — 2026</span>
          <span>B.Tech</span>
        </div>

        <h3>
          Sasi Institute of Technology & Engineering
        </h3>

        <p>
          Bachelor of Technology in Computer Science & Engineering
        </p>

        <div className="education-bottom">
          <span>CGPA</span>
          <strong>7.5 / 10.0</strong>
        </div>

      </div>

    </div>


    <div className="education-item">

      <div className="education-marker">
        02
      </div>

      <div className="education-card">

        <div className="education-top">
          <span>2020 — 2022</span>
          <span>Intermediate</span>
        </div>

        <h3>
          Govt Junior College, Pentapadu
        </h3>

        <p>
          Intermediate Education
        </p>

      </div>

    </div>

  </div>

</section>


{/* ================= CERTIFICATIONS ================= */}

<section id="certifications" className="certifications-section">

  <div className="section-heading">

    <p className="section-label">
      CERTIFICATIONS
    </p>

    <h2>
      Learning beyond
      <span> the classroom.</span>
    </h2>

  </div>


  <div className="certifications-grid">

    <div className="certificate-card">

      <div className="certificate-number">
        01
      </div>

      <div className="certificate-content">

        <p className="certificate-provider">
          NPTEL
        </p>

        <h3>
          The Joy of Computing in Python
        </h3>

        <p>
          Demonstrated foundations in problem-solving
          and Python-based algorithmic thinking.
        </p>

        <div className="certificate-score">
          <span>Score</span>
          <strong>68%</strong>
        </div>

      </div>

    </div>


    <div className="certificate-card">

      <div className="certificate-number">
        02
      </div>

      <div className="certificate-content">

        <p className="certificate-provider">
          NPTEL
        </p>

        <h3>
          Python for Data Science
        </h3>

        <p>
          Gained experience in data analysis,
          visualization, and numerical computing workflows.
        </p>

        <div className="certificate-score">
          <span>Score</span>
          <strong>64%</strong>
        </div>

      </div>

    </div>


    <div className="certificate-card">

      <div className="certificate-number">
        03
      </div>

      <div className="certificate-content">

        <p className="certificate-provider">
          HackerRank
        </p>

        <h3>
          Python & Java
        </h3>

        <p>
          Certified in Python (Basic) and Java (Basic),
          covering core programming and object-oriented fundamentals.
        </p>

        <div className="certificate-score">
          <span>Level</span>
          <strong>Basic</strong>
        </div>

      </div>

    </div>

  </div>
{/* ================= RESUME CTA ================= */}

<section className="resume-section">

  <div className="resume-card">

    <div className="resume-content">

      <p className="section-label">
        LET'S CONNECT
      </p>

      <h2>
        Interested in
        <span> working together?</span>
      </h2>

      <p>
        I'm open to software development, full-stack,
        Python, and AI/ML opportunities.
      </p>

      <div className="resume-actions">

        <a
          href="/Raveendra-Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="resume-primary"
        >
          View Resume ↗
        </a>

        <a
          href="/Raveendra-Resume.pdf"
          download
          className="resume-secondary"
        >
          Download Resume ↓
        </a>

      </div>

    </div>

    <div className="resume-decoration">
      <div className="resume-circle"></div>
      <div className="resume-circle circle-two"></div>
      <span>CV</span>
    </div>

  </div>

</section>


<section id="contact" className="contact-section">
  <div className="contact-heading">

    <p className="section-label">
      CONTACT
    </p>

    <h2>
      Let's build something
      <span> meaningful.</span>
    </h2>

    <p>
      I'm currently open to software development,
      full-stack, Python, and AI/ML opportunities.
    </p>

  </div>


  <div className="contact-grid">

    {/* EMAIL */}

    <a
      href="mailto:ravindrasiraparapu243@gmail.com"
      className="contact-card"
    >

      <div className="contact-icon">
        @
      </div>

      <div>
        <span>Email</span>
        <h3>Let's talk</h3>
        <p>Send me an email</p>
      </div>

      <strong>↗</strong>

    </a>


    {/* GITHUB */}

    <a
      href="https://github.com/Ravindra5F7"
      target="_blank"
      rel="noreferrer"
      className="contact-card"
    >

      <div className="contact-icon">
        GH
      </div>

      <div>
        <span>GitHub</span>
        <h3>View my code</h3>
        <p>Projects & repositories</p>
      </div>

      <strong>↗</strong>

    </a>


    {/* LINKEDIN */}

    <a
      href="https://linkedin.com/in/ravindra-siraparapu-1a7758280"
      target="_blank"
      rel="noreferrer"
      className="contact-card"
    >

      <div className="contact-icon">
        in
      </div>

      <div>
        <span>LinkedIn</span>
        <h3>Connect with me</h3>
        <p>Professional profile</p>
      </div>

      <strong>↗</strong>

    </a>

  </div>


  <div className="contact-location">
    Based in Andhra Pradesh, India
  </div>

</section>


{/* ================= FOOTER ================= */}

<footer className="footer">

  <div className="footer-left">
    <strong>RAVEENDRA<span>.</span></strong>
    <p>Software Developer • Python • MERN • AI/ML</p>
  </div>

  <div className="footer-links">

    <a href="#home">Home</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>

  </div>

  <div className="footer-copy">
    © 2026 Raveendra Siraparapu
  </div>

</footer>

</section>
        {/* SCROLL INDICATOR */}
      <div className="scroll-indicator">
        <span></span>
        Scroll to explore
      </div>

    </div>
  );
}

export default App;
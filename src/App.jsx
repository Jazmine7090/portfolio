import './App.css'
import { useState } from 'react';

function App() {
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('yalfares@outlook.com');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+966 532196924');
    setPhoneCopied(true);
    setTimeout(() => setPhoneCopied(false), 2000);
  };

  return (
      <div>
      {/* Header with navigation */}
      <header className="portfolio-header">
        <div className="header-left">
          <span className="name"><span className="name-bold">Yasmin</span> <span className="name-light">Alfares</span></span>
        </div>
        <nav className="portfolio-nav">
          <a href="#home">
            <img src="/home icon.png" alt="Home" className="nav-img-icon" />
            HOME
          </a>
          <a href="#work">
            <img src="/workicon.png" alt="Work" className="nav-img-icon" />
            WORK
          </a>
          <a href="#contact">
            <img src="/contacticon.png" alt="Contact" className="nav-img-icon" />
            CONTACT
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-bg-gradient"></div>
        <img src="/swirlyBlue.png" alt="Swirly Blue" className="swirly-hero-bg" />
        <div className="hero-content">
          <h2 className="hero-main-text">
            Hello, I’m Yasmin a senior <span className="bold">Software Engineering</span> Student on the AI & Data Analytics Track
          </h2>
        </div>
      </section>

      {/* Experiences Section */}
      <section id="experiences" className="experiences-section">
        <h3 className="section-title">Experience</h3>
        <div className="experiences-logos">
          <img src="/gic.png" alt="GIC Logo" className="experience-logo" />
          <img src="/labiba.png" alt="Labiba Logo" className="experience-logo" />
          <img src="/uniLogo.jpg" alt="University Logo" className="experience-logo" />
          <img src="/Logo Different Sizes.jpg" alt="Logo Different Sizes" className="experience-logo" />
        </div>
      </section>

      {/* Selected Works Section */}
      <section id="work" className="selected-works-section">
        <h1 className="section-title">Selected Works</h1>
        <div className="works-list-rows">
          <div className="work-row">
            <img src="/laptop.png" alt="Teaching Assistant Management System" className="work-row-image" />
            <div className="work-row-info">
              <h3 className="work-row-title">Teaching Assistant Management System</h3>
              <p className="work-row-desc">Built a full-stack web app for managing TA assignments, hour allocations, and task tracking for managers, instructors, and TAs.</p>
              <button className="view-work-btn">View Work</button>
            </div>
          </div>
          <div className="work-row">
            <div className="work-row-info">
              <h3 className="work-row-title">AGI Networking App</h3>
              <p className="work-row-desc">Android-based mobile application designed to streamline event communication. It provides access to agendas, announcements, and chat, all integrated through Firebase.</p>
              <button className="view-work-btn">View Work</button>
            </div>
            <img src="/mobile.png" alt="AGI Networking App" className="work-row-image" />
          </div>
          <div className="work-row">
            <img src="/ipad.png" alt="Smart Parking & Gate System" className="work-row-image" />
            <div className="work-row-info">
              <h3 className="work-row-title">Smart Parking & Gate System</h3>
              <p className="work-row-desc">An intelligent gate system that transforms traditional parking into an automated experience—using real-time sensing and motion triggers.</p>
              <button className="view-work-btn">View Work</button>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="about-section">
        <h3 className="section-title">About Me</h3>
        <p>
          I am a passionate software engineering student with a focus on AI and Data Analytics. I love learning new technologies and am always eager to take on new challenges and grow my skills.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        {/* Notification for email copied */}
        {emailCopied && (
          <div className="copy-notification">Email has been copied!</div>
        )}
        {/* Notification for phone copied */}
        {phoneCopied && (
          <div className="copy-notification">Phone number has been copied!</div>
        )}
        <div className="get-in-touch-heading">
          <span className="get">Get</span> <span className="in">in</span> <span className="touch">Touch.</span>
        </div>
        <div className="get-in-touch-subtitle">
          So that we can talk more about...
        </div>
        <div className="contact-icons-centered">
          <button className="contact-icon email" onClick={handleCopyEmail}>
            <img src="/emailIcon.png" alt="Email" className="contact-img-icon" />
          </button>
          <button className="contact-icon phone" onClick={handleCopyPhone}>
            <img src="/phoneIcon.png" alt="Phone" className="contact-img-icon" />
          </button>
          <a className="contact-icon linkedin" href="https://www.linkedin.com/in/yasminalfares/" target="_blank" rel="noopener noreferrer">
            <img src="/linkedinIcon.png" alt="LinkedIn" className="contact-img-icon" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="portfolio-footer">
        Made with <span style={{color: 'red'}}>&hearts;</span> by Yasmin Alfares
      </footer>
      </div>
  )
}

export default App

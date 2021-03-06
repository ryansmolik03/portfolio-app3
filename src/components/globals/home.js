import React from "react"
import "../styles/home.css"
import Zoom from "react-reveal/Zoom"

const Home = () => (
  <section className="hero">
    <Zoom>
      <div className="container">
        <div className="main-message">
          <p>
            Hello!<span role="img">👋</span>
            <br />
            <br />
            I'm <strong>Shania Kiat</strong>, an undergraduate student at La
            Salle University majoring in computer science & minoring in
            mathematics
            <span role="img">👩🏻‍💻</span>
            <br />
            <br />
          </p>
          <a
            className="resume-home"
            href="https://shaniakiat.dev/resume.pdf"
            rel="noopener noreferrer"
            target="_blank"
          >
            shania.resume.pdf();
          </a>
        </div>
      </div>
    </Zoom>
  </section>
)

export default Home

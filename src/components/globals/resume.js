import React from "react"
import "../styles/resume.css"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

const Resume = () => (
  <>
    <header>
      <div className="container">
        <nav className="project-nav">
          <div className="logo">
            <a href="/">SK.</a>
          </div>

          {/* <div className="nav-tem">
            <Link to="/" className="nav-link">
              HOME
            </Link>
          </div> */}

          <div>
            <ThemeToggler>
              {({ theme, toggleTheme }) => (
                <label className="switch">
                  <input
                    type="checkbox"
                    onChange={e =>
                      toggleTheme(e.target.checked ? "dark" : "light")
                    }
                    checked={theme === "dark"}
                  />
                  {theme === "dark" ? (
                    <span class="slider round"></span>
                  ) : (
                    <span class="slider round"></span>
                  )}
                </label>
              )}
            </ThemeToggler>
          </div>
        </nav>
      </div>
    </header>
    <section class="hero">
      <div id="resume" className="container">
        <div className="center">
          <div className="center-inner">
            <div className="center-inner-inner">
              <div className="introduction">
                <h4>Intro</h4>
                <div className="content">
                  <p className="intro-p">Hi there, my name is Shania Kiat</p>
                  <p className="intro-p">
                    I&#39;m an undergraduate at La Salle University,
                    Philadelphia, majoring computer science and minoring in
                    mathematics
                  </p>

                  <span className="intro-p job-pls">
                    I am an incoming Application Development Intern at Vanguard!
                  </span>
                </div>
              </div>
              <div className="education">
                <h4>Education</h4>
                <div className="content">
                  <div className="university">
                    <a href="https://www.lasalle.edu/" target="_blank">
                      La Salle University
                    </a>
                  </div>
                  <div className="college">
                    <a
                      href="https://www.lasalle.edu/computer-science/"
                      target="_blank"
                    >
                      School of Arts and Sciences / Computer Science
                    </a>
                  </div>
                  <div className="major">
                    <strong>Majors:</strong> Computer Science & Mathematics{" "}
                  </div>
                  <div className="degree">
                    <strong>Degree:</strong> Bachelor of Science
                  </div>
                  <div className="grad-date">Expected Graduation: May 2021</div>
                </div>
              </div>
              <div className="courses">
                <h4>Relevant Coursework</h4>
                <div className="content">
                  <ul className="description">
                    <li>Data Communication Networks</li>
                    <li>Computer Architecture</li>
                    <li>Database Management Systems</li>
                    <li>Object Programming</li>
                    <li>Introduction to Data Structures and Algorithms</li>
                    <li>Software Engineering</li>
                    <li>Project Implementation</li>
                    <li>Theory of Algorithms</li>
                    <li>Language Theory and Design</li>
                    <li>Computer Electronics</li>
                    <li>Multivariable Calculus</li>
                    <li>Linear Algebra and Applications</li>
                    <li>Foundations of Mathematics</li>
                    <li>Probablilty and Statistics I</li>
                    <li>Complex Variables</li>
                    <li>General Physics I</li>
                    <li>General Physics II</li>
                  </ul>
                </div>
              </div>
              <div className="experience">
                <h4>Experience</h4>
                <div className="content">
                  <div className="exp-item">
                    <div className="job">
                      <a
                        className="company"
                        href="https://www.tegraanalytics.com/"
                        target="_blank"
                      >
                        Tegra Analytics, LLC.
                      </a>
                      <div className="duration">May 2019 &mdash; Aug 2019</div>
                    </div>
                    <div className="title">Predictive Analytics Intern</div>
                    <ul className="description">
                      <li>
                        Perform exploratory data analysis to maximize post
                        engagements of the data
                      </li>
                    </ul>
                  </div>
                  <div className="exp-item">
                    <div className="job">
                      <a
                        className="company"
                        href="https://www.lasalle.edu/math-computer-science/"
                        target="_blank"
                      >
                        La Salle Mathematics and Computer Science Department
                      </a>
                      <div className="duration">May 2019 &mdash; Aug 2019</div>
                    </div>
                    <div className="title">
                      Undergraduate Student Researcher
                    </div>
                    <ul className="description">
                      <li>
                        Conduct research with Dr. Timothy Highley to determine
                        the hardness of the tropical exchange problem where each
                        person can bring multiple items to the trading venue.{" "}
                      </li>
                    </ul>
                  </div>
                  <div className="exp-item">
                    <div className="job">
                      <a
                        className="company"
                        href="https://www.lasalle.edu/math-computer-science/"
                        target="_blank"
                      >
                        La Salle Mathematics and Computer Science Department
                      </a>
                      <div className="duration">Aug 2018 &mdash; Jun 2019</div>
                    </div>
                    <div className="title">Mathematics Tutor</div>
                    <ul className="description">
                      <li>
                        Tutored La Salle’s undergraduate students in college
                        algebra, pre-calculus, and calculus I.
                      </li>
                      <li>
                        Assisted students individually or in small groups to
                        enhance their math skills.
                      </li>
                    </ul>
                  </div>
                  <div className="exp-item">
                    <div className="job">
                      <a
                        className="company"
                        href="https://www.lasalle.edu/english/"
                        target="_blank"
                      >
                        La Salle English Department
                      </a>
                      <div className="duration">Aug 2017 &mdash; PRESENT</div>
                    </div>
                    <div className="title">Student Worker</div>
                    <ul className="description">
                      <li>
                        Assist professors of English Department with various
                        tasks.
                      </li>
                      <li>Organize documents as needed.</li>
                      <li>
                        Pick up, drop off, and distribute mail and other
                        shipments between offices.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="awards">
                <h4>Awards</h4>
                <div className="content">
                  <div className="achivement">
                    <span>
                      Placed 2nd in the ACM-ICPC Mid-Atlantic Regional 2019
                      Programming Competition at Washington College &nbsp;
                    </span>
                    <strong>(Fall 2019)</strong>
                  </div>
                  <div className="achivement">
                    <span>
                      IT Leadership Award from La Salle University Computer
                      Science Advisory Board &nbsp;
                    </span>
                    <strong>(Fall 2019)</strong>
                  </div>
                  <div className="achivement">
                    <span>
                      Member of Upsilon Pi Epsilon Computer Science Honors
                      Society &nbsp;
                    </span>
                    <strong>(Spring 2019)</strong>
                  </div>
                  <div className="achivement">
                    <span>
                      🏆 1st Place Winner of Major League Hacking's Hack WCU
                      Hackathon 2019 &nbsp;
                    </span>

                    <strong>(Spring 2019)&nbsp;&nbsp;</strong>
                    <a
                      className="page"
                      href="https://devpost.com/software/gratis"
                      target="_blank"
                    >
                      Learn More&nbsp;
                    </a>
                  </div>
                  <div className="achivement">
                    <span>National Science Foundation Scholarship &nbsp;</span>
                    <strong>(Spring 2018)</strong>
                  </div>
                  <div className="achivement">
                    <span>Founder's Scholarship &nbsp;</span>
                    <strong>(Fall 2017)</strong>
                  </div>
                </div>
              </div>
              <div className="skills">
                <h4>Skills</h4>
                <div className="content">
                  <div className="skill-category">
                    <strong>Languages: &nbsp;</strong>
                    <span>Java, JavaScript (ES6), HTML5, CSS3, Python</span>
                  </div>
                  <div className="skill-category">
                    <strong>Libraries &amp; Frameworks: &nbsp;</strong>
                    <span>Node, React</span>
                  </div>
                  <div className="skill-category">
                    <strong>Tools: &nbsp;</strong>
                    <span>
                      Git &amp; Github, Command Line, IntelliJ IDEA CE, Visual
                      Studio Code, Android Studio, NetBeans, Eclipse, Adobe
                      Photoshop, Illustrator, inDesign, Jupyter Notebook, IBM
                      CPLEX
                    </span>
                  </div>
                </div>
              </div>
              <div className="projects">
                <h4>Projects</h4>
                <div className="content">
                  <div className="project-item">
                    <a
                      className="project-title"
                      href="http://shaniakiat.dev/"
                      target="_blank"
                    >
                      shaniakiat.dev
                    </a>
                    <p className="project-desc">
                      Develop and design a portfolio site using Gatsby to
                      showcase my skills and past work
                    </p>
                  </div>
                  <div className="project-item">
                    <a
                      className="project-title"
                      href="https://devpost.com/software/gratis"
                      target="_blank"
                    >
                      Gratis (Major League Hacking’s Hack WCU Hackathon)
                    </a>
                    <p className="project-desc">
                      Develop a web application using MERN (MongoDB, Express.js,
                      React, Node.js) stack that aims to provide a platform that
                      connects businesses (restaurants/cafeterias) that have
                      surplus food and shelters to provide a solution to the
                      hunger problem in Philadelphia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="resume-div">
            <a
              className="resume"
              href="https://shaniakiat.dev/resume.pdf"
              target="_blank"
            >
              <div className="resume-link">Grab a PDF of my full resume</div>
            </a>
          </div> */}
          </div>
        </div>
      </div>
    </section>
  </>
)

export default Resume
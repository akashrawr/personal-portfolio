import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faJava, faHtml5, faJs, faPython } from "@fortawesome/free-brands-svg-icons";
import { SiTypescript, SiCplusplus } from "react-icons/si";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const About: React.FC = () => {
  return (
    <section id="about">
      <div className="section-highlight" data-aos="fade-up">
        ABOUT
      </div>
      <div className="about-container" data-aos="fade-up">
        <div className="about-card">
          <section className="about-content">
            <h2>About</h2>
            <p>
              I am currently a 2nd Year Student in University of the South Pacific pursuing a
              degree in Bachelor of Software Engineering.
            </p>
            <p>I love Coding & Painting.</p>
          </section>

          <section className="about-content tech-stack-section">
            <h3>My current tech stack</h3>
            <div className="tech-stack-grid">
              <div className="tech-stack">
                <FontAwesomeIcon icon={faReact} className="about-icon" />
              </div>
              <div className="tech-stack">
                <FontAwesomeIcon icon={faJava} className="about-icon" />
              </div>
              <div className="tech-stack">
                <FontAwesomeIcon icon={faHtml5} className="about-icon" />
              </div>
              <div className="tech-stack">
                <FontAwesomeIcon icon={faJs} className="about-icon" />
              </div>
              <div className="tech-stack">
                <SiTypescript className="about-icon ts-icon" />
              </div>
              <div className="tech-stack">
                <SiCplusplus className="about-icon cpp-icon" />
              </div>
              <div className="tech-stack">
                <FontAwesomeIcon icon={faPython} className="about-icon" />
              </div>
              <div className="tech-stack">
                <FontAwesomeIcon icon={faDatabase} className="about-icon" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default About;

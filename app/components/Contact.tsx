import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact: React.FC = () => {
  return (
    <section id="contact">
      <h2 className="section-highlight" data-aos="fade-up">
        Contacts
      </h2>
      <div className="contact-container" data-aos="fade-up">
        <div className="contact-card">
          <h2>Contacts</h2>
          <p>You can contact me directly through these links</p>

          <div className="contact-links">
            <a href="https://www.instagram.com/_acnologxa" className="contact-link">
              <FontAwesomeIcon icon={faInstagram} className="contact-icons" />
              Instagram
            </a>

            <a href="mailto:akashkm553@gmail.com" className="contact-link">
              <FontAwesomeIcon icon={faEnvelope} className="contact-icons" />
              Email
            </a>

            <a href="https://www.linkedin.com/in/akashmishra-rawr" className="contact-link">
              <FontAwesomeIcon icon={faLinkedin} className="contact-icons" />
              LinkedIn
            </a>

            <a href="https://github.com/akashrawr" className="contact-link">
              <FontAwesomeIcon icon={faGithub} className="contact-icons" />
              Github
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

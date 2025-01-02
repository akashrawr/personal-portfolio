import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface HeaderProps {
  isNavVisible: boolean;
  toggleNav: () => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ isNavVisible, toggleNav, darkMode, toggleDarkMode }) => {
  return (
    <header>
      <nav className="navbar-nav">
        <div className="nav-logo">
          <h1>Rawr</h1>
        </div>

        <button
          className="mobile-nav-toggle"
          aria-controls="primary-nav"
          aria-expanded={isNavVisible}
          onClick={toggleNav}
        >
          <FontAwesomeIcon icon="fa-solid fa-angles-left" />
        </button>

        <ul
          id="primary-nav"
          className={`primary-nav ${isNavVisible ? 'visible' : ''}`}
          data-visible={isNavVisible}
        >
          <li>
            <a className="nav-link" href="#about" onClick={toggleNav}>
              About
            </a>
          </li>
          <li>
            <a className="nav-link" href="#portfolio" onClick={toggleNav}>
              Portfolio
            </a>
          </li>
          <li>
            <a className="nav-link" href="#contact" onClick={toggleNav}>
              Contact
            </a>
          </li>
          <li>
            <label className="switch" aria-label="Toggle dark mode">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={toggleDarkMode}
                aria-checked={darkMode}
              />
              <span className="slider round">
                {!darkMode ? (
                  <svg
                    className="icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="48px"
                    height="48px"
                  >
                    <path
                      fill="#FEBF10"
                      d="..." // SVG path data for the sun icon
                    />
                  </svg>
                ) : (
                  <svg
                    className="icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="48px"
                    height="48px"
                  >
                    <path
                      fill="#000000"
                      d="..." // SVG path data for the moon icon
                    />
                  </svg>
                )}
              </span>
            </label>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

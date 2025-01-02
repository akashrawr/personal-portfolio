import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons';

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
          <FontAwesomeIcon icon={faAnglesLeft} />
        </button>

        <ul
          id="primary-nav"
          className={`primary-nav ${isNavVisible ? 'visible' : ''}`}
          data-visible={isNavVisible}
        >
          <li>
            <a className="nav-link" href="#about" onClick={toggleNav}>About</a>
          </li>
          <li>
            <a className="nav-link" href="#portfolio" onClick={toggleNav}>Portfolio</a>
          </li>
          <li>
            <a className="nav-link" href="#contact" onClick={toggleNav}>Contact</a>
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
                      d="M213.4 436.9c-2.8-3.5-7.9-5.5-11.9-7.3-4.2-1.9-8.6-3.4-12.8-5.4-4.9-2.4-9.2-5.6-14-8.1-2.7 9.7-1.2 19-1.1 29.1.1 8.8-.4 17.8 1.2 26.4 5.6-2.4 11.1-5.5 16.2-8.8 7.4-4.7 16.5-10.4 21-18.3C213.1 442.7 215.1 439.1 213.4 436.9zM379.5 227.4c-15.5-43.6-57.8-72.5-104-73.1-12.6-.2-25.3 1.2-37.3 5.5-12.8 4.7-24.5 11.7-35.1 20.2-9.6 7.7-18.7 16.6-26.8 25.8-5.2 5.9-11.5 13.6-12.4 21.7-2.4 6.5-2.9 13.5-3.4 20.5-1.7 10-2.9 20.2-3.8 30.3-1.2 13.6-1.5 27.4.9 40.9 2.2 12.5 7.1 25.1 15.7 34.6 10.4 11.3 24.4 18.8 39.1 23 13.8 4 28 5.8 42.3 6.7 13.8.9 27.8 2 41.5 1.4 26.5-1.1 53.5-9.1 71.5-29.7C397.7 321.1 393.7 267.4 379.5 227.4zM253.8 246.7c-4.4 7.8-12 14.5-20.8 16.8-10 2.6-17.7-3.3-21.4-12.4-1.5-3.9 2.2-6.8 5.7-6.6.2 0 .3 0 .5 0 2 .2 3.3 1.9 3.8 3.7 0-.2-.1-.4-.1-.6.6.9.9 1.8.9 2.7 5.5 8.1 16.4.7 21.4-6.4.5-1.9 1.6-3.3 3.9-4.2C251.7 238.1 256 243 253.8 246.7z"
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
                      fill="#FEBF10"
                      d="M213.4 436.9c-2.8-3.5-7.9-5.5-11.9-7.3-4.2-1.9-8.6-3.4-12.8-5.4-4.9-2.4-9.2-5.6-14-8.1-2.7 9.7-1.2 19-1.1 29.1.1 8.8-.4 17.8 1.2 26.4 5.6-2.4 11.1-5.5 16.2-8.8 7.4-4.7 16.5-10.4 21-18.3C213.1 442.7 215.1 439.1 213.4 436.9zM379.5 227.4c-15.5-43.6-57.8-72.5-104-73.1-12.6-.2-25.3 1.2-37.3 5.5-12.8 4.7-24.5 11.7-35.1 20.2-9.6 7.7-18.7 16.6-26.8 25.8-5.2 5.9-11.5 13.6-12.4 21.7-2.4 6.5-2.9 13.5-3.4 20.5-1.7 10-2.9 20.2-3.8 30.3-1.2 13.6-1.5 27.4.9 40.9 2.2 12.5 7.1 25.1 15.7 34.6 10.4 11.3 24.4 18.8 39.1 23 13.8 4 28 5.8 42.3 6.7 13.8.9 27.8 2 41.5 1.4 26.5-1.1 53.5-9.1 71.5-29.7C397.7 321.1 393.7 267.4 379.5 227.4zM253.8 246.7c-4.4 7.8-12 14.5-20.8 16.8-10 2.6-17.7-3.3-21.4-12.4-1.5-3.9 2.2-6.8 5.7-6.6.2 0 .3 0 .5 0 2 .2 3.3 1.9 3.8 3.7 0-.2-.1-.4-.1-.6.6.9.9 1.8.9 2.7 5.5 8.1 16.4.7 21.4-6.4.5-1.9 1.6-3.3 3.9-4.2C251.7 238.1 256 243 253.8 246.7z"
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

import React, { useState } from 'react';
import { Link } from "react-scroll";
import { AiOutlineMenu } from 'react-icons/ai'; // Import the hamburger icon from react-icons library
import './Navbar.css';
import './About';
import './work';
import backgroundImage from './j.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const emailAddress = "laxmanspring2022@gmail.com";

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className='Home'>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">Logo</div>
          <div className="menu-icon" onClick={toggleMenu}>
            <AiOutlineMenu size={24} />
          </div>
          <ul className='navbar-list'>
            <Link to="profile" smooth={true} duration={500} offset={-400} className='navbar-item'>
              <li>About</li>
            </Link>
            <Link to="Projects" smooth={true} duration={500}  className='navbar-item'>
              <li>Projects</li>
            </Link>
            <Link to="work" smooth={true} duration={500} offset={200} className='navbar-item'>
              <li>Accomplishments</li>
            </Link>
          </ul>
        </div>
      </nav>
      <div className="background-container">
        <img
          src={backgroundImage} // Use the imported image variable as the src attribute
          alt="Background Image"
          className="background-image"
        />
        <div className="image-text">
          <h1>Hi I'm RajaLaxman Rao Thakkalapelli</h1>
        </div>
        <div className='icon'>
          <a href="https://www.linkedin.com/in/rajalaxman-rao-thakkalapelli" target="_blank" className='li'>
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
              <a
                href={`mailto:${emailAddress}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faEnvelope} // FontAwesome email icon
                  size="2x" // Adjust the size as needed
                  className="email-icon" // Add a CSS class for styling if necessary
                />
              </a>
              <a href='https://github.com/Laxman198' target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

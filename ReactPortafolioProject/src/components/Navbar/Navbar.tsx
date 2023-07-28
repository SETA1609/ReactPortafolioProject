import React from 'react';
import "./Navbar.css";
import Icons from './Icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon component

function Navbar() {
  return (
    <header>
      <nav>
        <ul className=''>
          {Icons.map((icon, index) => (
            <li key={index}>
              <a href={icon.url}>
                <FontAwesomeIcon icon={icon.icon} /> {/* Use FontAwesomeIcon component */}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

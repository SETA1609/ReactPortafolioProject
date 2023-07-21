import React from 'react';
import"./Navbar.css";
import Icons from './Icons';

interface Icon {
    icon: string;
    url: string;
  }

function Navbar() {
    return (
        <header>
            <nav>
            <ul>
          {Icons.map((icon:Icon, index) => (
            <li key={index}>
              <a href={icon.url}>
                <img src={icon.icon} alt="Icon" />
              </a>
            </li>
          ))}
        </ul>
            </nav>
        </header>
    );
}

export default Navbar;
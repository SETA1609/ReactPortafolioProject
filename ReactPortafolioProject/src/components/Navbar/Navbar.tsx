import React from 'react';
import "./Navbar.css";
import Icons from './Icons';
import InnerLinks from './InnerLinks';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
    return (
        <header>
            <nav className="navbar">
                <ul className="icons-list">
                    {Icons.map((icon, index) => (
                        <li key={index}>
                            <a href={icon.url}>
                                <FontAwesomeIcon icon={icon.icon} />
                            </a>
                        </li>
                    ))}
                </ul>
                <ul className="links">
                    {InnerLinks.map((link, index) => (
                        <li key={index}>
                            <a href={link.url}>
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;


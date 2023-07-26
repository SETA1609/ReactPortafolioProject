import React from 'react';
import "./Navbar.css";
import Icons from './Icons';

import { ReactComponent as GithubIcon } from './icons/github.svg';
import { ReactComponent as LinkedinIcon } from './icons/linkedin.svg';
import { ReactComponent as StackOverflowIcon } from './icons/stack.svg';
import { ReactComponent as MailIcon } from './icons/mail.svg';

interface Icon {
  icon: React.ReactNode;
  url: string;
}

function Navbar() {
  return (
    <header>
      <nav>
        <ul className=''>
          {Icons.map((icon: Icon, index) => (
            <li key={index}>
              <a href={icon.url}>
                {icon.icon}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

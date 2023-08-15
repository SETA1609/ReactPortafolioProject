import React, { useEffect, useRef } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

interface SocialIcon{
  icon:IconDefinition;
  url:string
}

const Icons: SocialIcon[] = [
  {
    icon: faGithub,
    url: "https://github.com/SETA1609",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/sebastian-tamayo-5238241ab/",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com/users/22202650/seta1609",
  },
  {
    icon: faEnvelope,
    url: "mailto:contacme1609everytime.altitude036@aleeas.com",
  },
];

export default Icons;

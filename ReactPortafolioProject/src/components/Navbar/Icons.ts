import { GithubIcon } from "./icons/github.svg";
import { LinkedinIcon } from "./icons/linkedin.svg";
import { StackOverflowIcon } from "./icons/stack.svg";
import { MailIcon } from './icons/mail.svg';

interface Icon {
  icon: React.ReactNode;
  url: string;
}

const Icons: Icon[] = [
  {
    icon: <GithubIcon/> ,
    url: "https://github.com/SETA1609",
  },
  {
    icon: <LinkedinIcon/> ,
    url: "https://www.linkedin.com/in/sebastian-tamayo-5238241ab/",
  },
  {
    icon: <StackOverflowIcon />,
    url: "https://stackoverflow.com/users/22202650/seta1609",
  },
  {
    icon: <MailIcon />,
    url: "",
  },
];

export default Icons;

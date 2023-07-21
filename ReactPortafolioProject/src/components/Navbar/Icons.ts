import github from "ReactPortafolioProject/src/assets/Icons/github-142-svgrepo-com.svg";
import linkedin from "ReactPortafolioProject/src/assets/Icons/linkedin-svgrepo-com.svg";
import stackoverflow from "ReactPortafolioProject/src/assets/Icons/stack-overflow-fill-svgrepo-com.svg";
import mail from 'ReactPortafolioProject/src/assets/Icons/mail-svgrepo-com.svg';

interface Icon {
    icon: string;
    url: string;
  }

const Icons: Icon[] = [
  {
    icon: github,
    url: "https://github.com/SETA1609",
  },
  {
    icon: linkedin,
    url: "https://www.linkedin.com/in/sebastian-tamayo-5238241ab/",
  },
  {
    icon: stackoverflow,
    url: "https://stackoverflow.com/users/22202650/seta1609",
  },
  {
    icon: mail,
    url: "",
  },
];

export default Icons;

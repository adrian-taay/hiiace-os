import Calculator from "../Calculator/Calculator";
import WelcomeScreen from "../WelcomeScreen/WelcomeScreen";
import Test from "../WelcomeScreen/Test";
import { FaInfoCircle, FaSpotify } from "react-icons/fa";
import { PiTerminalWindow } from "react-icons/pi";
import {
  FcCalculator,
  FcFolder,
  FcIdea,
  FcLike,
  FcTodoList,
} from "react-icons/fc";
import {
  FaBrain,
  FaFilePdf,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
import { SiCircleci } from "react-icons/si";
import {} from "react-icons/fc";

const iconSize = 24;
const sideIconSize = 14;

export const menu = [
  {
    id: 0,
    title: "Documents",
    content: <Test />,
    icon: <FcFolder size={iconSize} />,
  },
  {
    id: 1,
    title: "Welcome",
    content: <WelcomeScreen />,
    icon: <FcIdea size={iconSize} />,
  },
  {
    id: 2,
    title: "Calculator",
    content: <Calculator />,
    icon: <FcCalculator size={iconSize} />,
  },
  {
    id: 3,
    title: "Playrr",
    content: "",
    icon: <FaSpotify size={iconSize} color="#1FA1EF" />,
  },
  {
    id: 4,
    title: "Mathel Memory",
    content: "",
    icon: <FaBrain size={iconSize} color="#FFCACA" />,
  },
  {
    id: 5,
    title: "To-Do App",
    content: "",
    icon: <FcTodoList size={iconSize} />,
  },
  {
    id: 6,
    title: "Terminal",
    content: "",
    icon: <PiTerminalWindow size={iconSize} />,
  },
  {
    id: 7,
    title: "Rate My Work",
    content: "",
    icon: <FcLike size={iconSize} />,
  },
];

export const sidemenu = [
  {
    title: "Resume",
    url: "../../assets/downloads/Mores_FullStackDev_MERN_2023.pdf",
    icon: <FaFilePdf size={sideIconSize} />,
  },
  {
    title: "Portfolio",
    url: "https://adrian-mores.netlify.app/",
    icon: <SiCircleci size={sideIconSize} />,
  },
  {
    title: "About OS",
    url: "https://github.com/adrian-taay/hiiace-os",
    icon: <FaInfoCircle size={sideIconSize} />,
  },
  {
    title: "GitHub",
    url: "https://github.com/adrian-taay",
    icon: <FaGithub size={sideIconSize} />,
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/adrian-mores/",
    icon: <FaLinkedin size={sideIconSize} />,
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/adrian.taay/",
    icon: <FaInstagram size={sideIconSize} />,
  },
  {
    title: "Twitter",
    url: "https://twitter.com/andoytotheworld",
    icon: <FaTwitter size={sideIconSize} />,
  },
];

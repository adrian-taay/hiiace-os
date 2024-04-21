import Calculator from "../Calculator/Calculator";
import Welcome from "../Welcome/Welcome";
import ToDoApp from "../ToDoApp/ToDoApp";
import RateMyWork from "../RateMyWork/RateMyWork";
import KeyboardTester from "../KeyboardTester/KeyboardTester";
import Terminal from "../Terminal/Terminal";
import { FaInfoCircle } from "react-icons/fa";
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
  FaKeyboard,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
import { SiCircleci } from "react-icons/si";

const iconSize = 24;
const sideIconSize = 14;

export const menu = [
  {
    id: 0,
    title: "Documents",
    content: "",
    icon: <FcFolder size={iconSize} />,
    minWidth: "550px",
    minHeight: "380px",
  },
  {
    id: 1,
    title: "Welcome",
    content: <Welcome />,
    icon: <FcIdea size={iconSize} />,
    minWidth: "550px",
    minHeight: "380px",
    unMaximizable: true,
  },
  {
    id: 2,
    title: "Calculator",
    content: <Calculator />,
    icon: <FcCalculator size={iconSize} />,
    minWidth: "200px",
    minHeight: "325px",
    unMaximizable: true,
  },
  {
    id: 3,
    title: "Keyboard Tester",
    content: <KeyboardTester />,
    icon: <FaKeyboard size={iconSize} />,
    minWidth: "550px",
    minHeight: "380px",
  },
  {
    id: 4,
    title: "Mathel Memory",
    content: "",
    icon: <FaBrain size={iconSize} color="#FFCACA" />,
    minWidth: "550px",
    minHeight: "380px",
  },
  {
    id: 5,
    title: "To-Do App",
    content: <ToDoApp />,
    icon: <FcTodoList size={iconSize} />,
    minWidth: "375px",
    minHeight: "500px",
    bgBackground: "rgb(228, 228, 231)",
  },
  {
    id: 6,
    title: "Terminal",
    content: <Terminal />,
    icon: <PiTerminalWindow size={iconSize} />,
    minWidth: "550px",
    minHeight: "380px",
    bgBackground: "rgba(24, 24, 27, 0.8)",
  },
  {
    id: 7,
    title: "Rate My Work",
    content: <RateMyWork />,
    icon: <FcLike size={iconSize} />,
    minWidth: "380px",
    minHeight: "450px",
    unMaximizable: true,
  },
];

export const sidemenu = [
  {
    title: "Resume",
    url: "https://adrian-mores.netlify.app/downloads/Mores_FullStackDev_MERN_2023.pdf",
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

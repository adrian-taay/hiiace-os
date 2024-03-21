import Calculator from "../Calculator/Calculator";
import WelcomeScreen from "../Windows/WelcomeScreen";
import Test from "../Windows/Test";
import { CgCalculator } from "react-icons/cg";
import { LuPartyPopper, LuBrain, LuAppWindow, LuInfo } from "react-icons/lu";
import { FaSpotify } from "react-icons/fa";
import { PiTerminalWindow } from "react-icons/pi";

const iconSize = 24;

export const menu = [
  {
    id: 0,
    title: "Documents",
    content: <Test />,
    icon: <LuAppWindow size={iconSize} />,
  },
  {
    id: 1,
    title: "Welcome Screen",
    content: <WelcomeScreen />,
    icon: <LuPartyPopper size={iconSize} />,
  },
  {
    id: 2,
    title: "Calculator",
    content: <Calculator />,
    icon: <CgCalculator size={iconSize} />,
  },
  {
    id: 3,
    title: "Spotiphy",
    content: "",
    icon: <FaSpotify size={iconSize} />,
  },
  {
    id: 4,
    title: "Mathel Memory",
    content: "",
    icon: <LuBrain size={iconSize} />,
  },
  {
    id: 5,
    title: "Terminal",
    content: "",
    icon: <PiTerminalWindow size={iconSize} />,
  },
  {
    id: 6,
    title: "About",
    content: "",
    icon: <LuInfo size={iconSize} />,
  },
];

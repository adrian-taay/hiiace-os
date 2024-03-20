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
    title: "Documents",
    content: <Test />,
    icon: <LuAppWindow size={iconSize} />,
  },
  {
    title: "Welcome Screen",
    content: <WelcomeScreen />,
    icon: <LuPartyPopper size={iconSize} />,
  },
  {
    title: "Calculator",
    content: <Calculator />,
    icon: <CgCalculator size={iconSize} />,
  },
  {
    title: "Spotiphy",
    content: "",
    icon: <FaSpotify size={iconSize} />,
  },
  {
    title: "Mathel Memory",
    content: "",
    icon: <LuBrain size={iconSize} />,
  },
  {
    title: "Terminal",
    content: "",
    icon: <PiTerminalWindow size={iconSize} />,
  },
  {
    title: "About",
    content: "",
    icon: <LuInfo size={iconSize} />,
  },
];

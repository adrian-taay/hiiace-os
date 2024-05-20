import { useState } from "react";
import GitHubLogo from "../../assets/icons/icons8-github-96.png";
import LinkedInLogo from "../../assets/icons/icons8-linkedin-96.png";
import TwitterLogo from "../../assets/icons/icons8-twitter-96.png";
import InstagramLogo from "../../assets/icons/icons8-instagram-96.png";
import SeaShellLogo from "../../assets/icons/icons8-sea-shell-90.png";
import { FaFilePdf } from "react-icons/fa6";

function Welcome() {
  const [iconWidth] = useState(42);

  return (
    <>
      <div className="flex select-none">
        <div className="w-1/3 pt-4">
          <img
            src={SeaShellLogo}
            alt="Sea Shell from Icons8"
            width={120}
            className="mx-auto mt-4"
          />
        </div>
        <div className="flex-1 p-3">
          <h2 className="text-2xl">Hiiace OS</h2>
          <h1 className="text-5xl font-bold mb-3">Mabuhay!</h1>
          <h4 className="text-sm mb-4 font-semibold text-neutral-700">
            I&apos;m Adrian Mores. Architect. Web Developer.
          </h4>
          <p className="text-xs">
            This page is a simple implementation of a desktop environment. This
            serves as the catch-all place for all the small React projects
            I&apos;ve built, either by following a tutorial video or by trying
            out a feature or a package. I will be adding more features and
            programs as I go along. Please take a look around!
          </p>
          <div className="text-xs mt-4">
            <p>Made with ReactJS and Tailwind CSS ☑️</p>
          </div>
          <div className="quick-links my-4 mx-auto">
            <p>Quick Links:</p>
            <ul className="flex gap-4 mt-3 items-center">
              <li>
                <a href="https://github.com/adrian-taay" target="_blank">
                  <img src={GitHubLogo} alt="GitHub" width={iconWidth} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/adrian-mores/"
                  target="_blank"
                >
                  <img src={LinkedInLogo} alt="LinkedIn" width={iconWidth} />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/andoytotheworld" target="_blank">
                  <img src={TwitterLogo} alt="Twitter" width={iconWidth} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/adrian.taay/"
                  target="_blank"
                >
                  <img src={InstagramLogo} alt="Instagram" width={iconWidth} />
                </a>
              </li>
              <li className="ml-3">
                <FaFilePdf size={30} fill="#414141" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;

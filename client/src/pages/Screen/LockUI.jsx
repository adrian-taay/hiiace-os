import { useContext, useEffect, useState } from "react";
import { OpenAppsContext } from "../../providers/OpenAppsProvider";
import { TimeContext } from "../../providers/TimeProvider";
import { AnimatePresence, motion } from "framer-motion";
import { RxAvatar } from "react-icons/rx";
import { FaArrowRight } from "react-icons/fa";
import {
  RiRestartLine,
  RiShutDownLine,
  RiCameraLensFill,
} from "react-icons/ri";

function LockUI() {
  const { setShowLockUI } = useContext(OpenAppsContext);
  const { hour, mins } = useContext(TimeContext);
  const [bgDetails, setBgDetails] = useState(false);
  const [bgImage, setBgImage] = useState("");
  const [imgData, setImgData] = useState({});

  async function fetchPhoto() {
    try {
      const response = await fetch(
        `https://api.unsplash.com/photos/random?client_id=${
          import.meta.env.VITE_UNSPLASH_ACCESS_KEY
        }`,
        {
          method: "GET",
        }
      );

      if (response.ok) {
        const data = await response.json();

        localStorage.setItem("cachedImgData", JSON.stringify(data));

        setImgData(data);
        setBgImage(data.urls.regular);
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    const cachedImgData = localStorage.getItem("cachedImgData");
    if (cachedImgData) {
      const data = JSON.parse(cachedImgData);
      setImgData(data);
      setBgImage(data.urls.regular);
    } else {
      fetchPhoto();
    }
  }, []);

  useEffect(() => {
    const handleEnterKeypress = (e) => {
      if (e.key === "Enter") setShowLockUI(false);
    };
    document.addEventListener("keydown", handleEnterKeypress);
  });

  return (
    <AnimatePresence>
      <motion.div
        // key="lock"
        initial={{ y: -300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{
          y: -300,
          opacity: 0,
          onComplete: () => console.log("Exit animation completed"),
        }}
        transition={{ duration: 0.2 }}
        className="absolute left-0 w-full h-full flex flex-col justify-between pb-5 text-center bg-zinc-900 z-50 text-white"
        style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover" }}
      >
        <div className="w-full flex bg-white bg-opacity-10  text-center items-center select-none">
          <span className="flex-1 font-semibold">
            {hour}:{mins}
          </span>
          <div className="absolute flex right-0">
            <div className="p-1">
              <RiRestartLine />
            </div>
            <div className="p-1">
              <RiShutDownLine />
            </div>
          </div>
        </div>
        <div className="absolute bottom-20 left-6 flex text-xs items-center h-10">
          <div>
            <RiCameraLensFill
              className="fill-stone-800 opacity-50"
              size={40}
              onMouseEnter={() => setBgDetails(true)}
              onMouseLeave={() => setBgDetails(false)}
            />
          </div>
          {bgDetails ? null : (
            <div className="ml-3 flex flex-col items-start select-none">
              <div>Like what you&apos;re seeing? </div>
              <div>Hover to learn more</div>
              <a className="text-stone-400">Powered by Unsplash</a>
            </div>
          )}
          {bgDetails ? (
            <motion.div
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.02 }}
              className="flex items-center bg-stone-800 bg-opacity-40 pl-2 pr-4 py-2 rounded-xl shadow-md relative right-11 select-none"
              onMouseEnter={() => setBgDetails(true)}
              onMouseLeave={() => setBgDetails(false)}
            >
              <div>
                <img
                  src={
                    imgData?.user.profile_image.medium
                      ? imgData.user.profile_image.medium
                      : null
                  }
                  alt={imgData.user.username}
                  style={{ borderRadius: "50%" }}
                  width={36}
                />
              </div>
              <div className="flex flex-col items-start ml-3">
                <div>
                  <a
                    href={`${imgData.links.html}?utm_source=your_app_name&utm_medium=referral`}
                    target="_blank"
                  >
                    Photo by {imgData.user.first_name} {imgData.user.last_name}
                  </a>
                </div>
                <div>
                  <a
                    href={`${imgData.user.links.html}?utm_source=your_app_name&utm_medium=referral`}
                    target="_blank"
                  >
                    See more of their works
                  </a>
                </div>
              </div>
            </motion.div>
          ) : null}
        </div>
        <div className="flex flex-col justify-center items-center">
          <RxAvatar size={60} color="white" />
          <span className="mb-4">Guest</span>
          <div className="flex items-center bg-black bg-opacity-25 rounded-md overflow-hidden">
            <input className="h-8 p-3 bg-inherit" type="password" />
            <div className="px-2">
              <FaArrowRight size={20} onClick={() => setShowLockUI(false)} />
            </div>
          </div>
        </div>
        <div className="z-50">Hiiace OS</div>
      </motion.div>
    </AnimatePresence>
  );
}

export default LockUI;

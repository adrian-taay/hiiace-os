import { useRef } from "react";
import PropTypes from "prop-types";
import {
  MdOutlinePauseCircle,
  MdOutlinePlayCircle,
  MdSkipNext,
  MdSkipPrevious,
} from "react-icons/md";

function MusicDisplay({
  songs,
  isPlaying,
  setIsPlaying,
  currentSong,
  setCurrentSong,
  audioElem,
}) {
  const clickRef = useRef();
  const size = 20;

  function playPause() {
    setIsPlaying(!isPlaying);
  }

  function nextSong() {
    setIsPlaying(false);
    const index = songs.findIndex((x) => x.title == currentSong.title);
    if (index == songs.length - 1) {
      setCurrentSong(songs[0]);
    } else {
      setCurrentSong(songs[index + 1]);
    }
    audioElem.current.currentTime = 0;
  }

  function previousSong() {
    setIsPlaying(false);
    const index = songs.findIndex((x) => x.title == currentSong.title);
    if (index == 0) {
      setCurrentSong(songs[songs.length - 1]);
    } else {
      setCurrentSong(songs[index - 1]);
    }
    audioElem.current.currentTime = 0;
  }

  function checkWidth(e) {
    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;

    const divProgress = (offset / width) * 100;

    audioElem.current.currentTime = (divProgress / 100) * currentSong.length;
  }

  return (
    <div className="text-white mt-10">
      <div className="navigation flex">
        <div
          className="navigation wrapper bg-white bg-opacity-25 h-1 cursor-pointer"
          style={{ width: "100%" }}
          onClick={checkWidth}
          ref={clickRef}
        >
          &nbsp;
          <div
            className="seek-bar bg-white h-1 relative bottom-6"
            style={{ width: `${currentSong.progress}%` }}
          >
            &nbsp;
          </div>
        </div>
      </div>
      <div className="play-pause flex mb-2 justify-center items-center mt-3">
        <MdSkipPrevious size={size} onClick={previousSong} />
        <div className="mx-10" onClick={playPause}>
          {isPlaying ? (
            <MdOutlinePauseCircle size={size + 10} />
          ) : (
            <MdOutlinePlayCircle size={size + 10} />
          )}
        </div>
        <MdSkipNext size={size} onClick={nextSong} />
      </div>
      <div className="text-center">
        <div className="text-sm font-semibold ove">
          <a href={currentSong.href} target="_blank">
            {currentSong.title}
          </a>
        </div>
        <div className="text-xs">{currentSong.artist}</div>
      </div>
    </div>
  );
}

export default MusicDisplay;

MusicDisplay.propTypes = {
  songs: PropTypes.array,
  isPlaying: PropTypes.bool,
  setIsPlaying: PropTypes.func,
  currentSong: PropTypes.object,
  setCurrentSong: PropTypes.func,
  audioElem: PropTypes.object,
};

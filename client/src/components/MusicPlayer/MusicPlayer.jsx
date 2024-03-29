import { useEffect, useRef, useState } from "react";
import { playlist } from "./playlist";
import MusicDisplay from "../ConkyLinux/MusicDisplay";

function MusicPlayer() {
  const [songs, setSongs] = useState(playlist);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(playlist[0]);

  const audioElem = useRef();

  useEffect(() => {
    if (isPlaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  }, [isPlaying]);

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;

    setCurrentSong({
      ...currentSong,
      progress: (ct / duration) * 100,
      length: duration,
    });
  };

  return (
    <div>
      <audio src={currentSong.src} ref={audioElem} onTimeUpdate={onPlaying} />
      <MusicDisplay
        songs={songs}
        setSongs={setSongs}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        audioElem={audioElem}
      />
    </div>
  );
}

export default MusicPlayer;

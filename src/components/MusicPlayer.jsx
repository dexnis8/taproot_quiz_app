import { useState, useRef } from "react";
import { IoIosPlay } from "react-icons/io";
import { IoPause } from "react-icons/io5";
const MusicPlayer = () => {
  // State to manage play/pause status
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Function to play or pause the audio
  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <audio ref={audioRef} src="/music.mp3" loop className="hidden" />
      <button className="bg-white p-5 rounded-full" onClick={togglePlayPause}>
        {isPlaying ? <IoPause size={40} /> : <IoIosPlay size={40} />}
      </button>
    </div>
  );
};

export default MusicPlayer;

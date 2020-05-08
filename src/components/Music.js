import React, { useState } from "react";
import { Icon } from "@iconify/react";

// Components
import roundMusicNote from "@iconify/icons-ic/round-music-note";
import roundMusicOff from "@iconify/icons-ic/round-music-off";

const Music = ({ toggleMusic }) => {
  const [musicIcon, setMusicIcon] = useState(false);

  const handleMusic = () => {
    toggleMusic();
    setMusicIcon(!musicIcon);
  };

  return (
    <div className="music-wrapper">
      <Icon
        onClick={() => {
          handleMusic();
        }}
        icon={musicIcon ? roundMusicOff : roundMusicNote}
        style={{
          color: "#6fa71c",
          fontSize: "40px",
          cursor: "pointer",
        }}
      />
      <audio
        className="audio"
        autoPlay
        muted={musicIcon}
        loop
        src="/music/Caves-of-sorrow.ogg"
      ></audio>
    </div>
  );
};

export default Music;

import React, { useState } from "react";

const Music = ({ toggleMusic }) => {
  const [musicIcon, setMusicIcon] = useState(false);

  const handleMusic = () => {
    toggleMusic();
    setMusicIcon(!musicIcon);
  };

  return (
    <div>
      <img
        onClick={() => {
          handleMusic();
        }}
        src={
          musicIcon
            ? "/images/MusicMute_light.png"
            : "/images/MusicPlay_light.png"
        }
        style={{ width: "40px", height: "40px", cursor: "pointer" }}
      />
      <audio
        autoPlay
        muted={musicIcon}
        loop
        src="/music/Caves-of-sorrow.ogg"
      ></audio>
    </div>
  );
};

export default Music;

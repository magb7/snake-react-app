import React, { useState } from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  theme: state,
});

const Music = ({ toggleMusic, theme }) => {
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
            ? `/images/${theme}/MusicMute.png`
            : `/images/${theme}/MusicPlay.png`
        }
        style={{ width: "40px", height: "40px", cursor: "pointer" }}
        alt="Music Icon"
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

export default connect(mapStateToProps)(Music);

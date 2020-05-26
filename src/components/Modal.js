import React from "react";

// Components
import ModalBkgd from "./styled/ModalBkgd";
import OverMenu from "./styled/OverMenu";
import OverBtn from "./styled/OverBtn";
import OverText from "./styled/OverText";
import OverImg from "./styled/OverImg";

const Modal = () => {
  return (
    <ModalBkgd>
      <OverMenu>
        <OverText game>Game</OverText>
        <OverImg src="/images/Snake_img.png" />
        <OverText>Over</OverText>
        <OverBtn>Try Again</OverBtn>
        <OverBtn home>Back to Home</OverBtn>
      </OverMenu>
    </ModalBkgd>
  );
};

export default Modal;

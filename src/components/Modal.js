import React from "react";
import { Link } from "react-router-dom";

// Components
import ModalBkgd from "./styled/ModalBkgd";
import OverMenu from "./styled/OverMenu";
import OverBtn from "./styled/OverBtn";
import OverText from "./styled/OverText";
import OverImg from "./styled/OverImg";

const Modal = ({ showModal, resetGame }) => {
  return (
    showModal && (
      <ModalBkgd>
        <OverMenu>
          <OverText game>Game</OverText>
          <OverImg src="/images/Snake_img.png" />
          <OverText>Over</OverText>
          <OverBtn onClick={resetGame}>Try Again</OverBtn>
          <Link style={{ gridArea: "home" }} to="/">
            <OverBtn home>Back to Home</OverBtn>
          </Link>
        </OverMenu>
      </ModalBkgd>
    )
  );
};

export default Modal;

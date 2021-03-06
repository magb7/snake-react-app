import React from "react";
import { useSelector } from "react-redux";
// Components
import FooterWrapper from "./styled/FooterWrapper";

const Footer = () => {
  const theme = useSelector((state) => state);
  return (
    <FooterWrapper>
      <p>Made by Margaux Bédu</p>
      <div className="logos">
        <a
          href="https://github.com/magb7/snake-react-app"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={`/images/${theme}/GitHub.png`} alt="GitHub logo" />
        </a>
        <a
          href="https://www.linkedin.com/in/margaux-b%C3%A9du/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={`/images/${theme}/Linkedin.png`} alt="LinkedIn logo" />
        </a>
      </div>
    </FooterWrapper>
  );
};

export default Footer;

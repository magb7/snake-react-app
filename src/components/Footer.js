import React from "react";
// Components
import FooterWrapper from "./styled/FooterWrapper";

const Footer = () => {
  return (
    <FooterWrapper>
      <p>Made by Margaux Bédu</p>
      <div className="logos">
        <a
          href="https://github.com/magb7/snake-react-app"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src="/images/GitHub_light.png" alt="GitHub logo" />
        </a>
        <a
          href="https://www.linkedin.com/in/margaux-b%C3%A9du/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src="/images/Linkedin_light.png" alt="LinkedIn logo" />
        </a>
      </div>
    </FooterWrapper>
  );
};

export default Footer;

import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <p>Made by Margaux Bédu</p>
      <div className="logos">
        <a
          href="https://github.com/magb7/snake-react-app"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src="/images/GitHub.png" alt="GitHub logo" />
        </a>
        <a
          href="https://www.linkedin.com/in/margaux-b%C3%A9du/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src="/images/Linkedin.png" alt="LinkedIn logo" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

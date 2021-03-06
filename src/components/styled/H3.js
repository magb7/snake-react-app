import styled from "styled-components";

export default styled.h3`
  text-shadow: ${(props) => props.theme.color.textShadow};
  transition: ease-in-out 0.5s all;
  line-height: 3rem;
  letter-spacing: 0.1rem;
  position: ${(props) => (props.score ? "absolute" : "")};
  top: ${(props) => (props.score ? "-45px" : "")};
  left: ${(props) => (props.score ? "220px" : "")};

  @media only screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

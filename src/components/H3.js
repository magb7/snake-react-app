import styled from "styled-components";

export default styled.h3`
  color: #09a903;
  text-shadow: 3px 2px black;
  line-height: 3rem;
  letter-spacing: 0.1rem;
  position: ${(props) => (props.score ? "absolute" : "")};
  top: ${(props) => (props.score ? "-45px" : "")};
  left: ${(props) => (props.score ? "220px" : "")};

  @media only screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

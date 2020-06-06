import styled from "styled-components";

export default styled.h1`
  color: ${(props) => props.theme.color.textColor};
  text-shadow: ${(props) => props.theme.color.textShadow};
  font-size: 45px;
  line-height: 2rem;
  letter-spacing: 0.1rem;
  transition: ease-in-out 0.5s all;

  @media only screen and (max-width: 800px) {
    font-size: 35px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 30px;
  }
`;

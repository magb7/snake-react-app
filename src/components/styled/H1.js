import styled from "styled-components";

export default styled.h1`
  color: #09a903;
  text-shadow: 3px 2px black;
  font-size: 45px;
  line-height: 2rem;
  letter-spacing: 0.1rem;

  @media only screen and (max-width: 800px) {
    font-size: 35px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 30px;
  }
`;
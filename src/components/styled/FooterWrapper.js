import styled from "styled-components";

export default styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 10vw;
  width: 100vw;
  height: 15vh;
  position: sticky;
  bottom: 0;
  left: 0;

  p {
    text-shadow: ${(props) => props.theme.color.textShadow};
    font-size: 0.9rem;
    letter-spacing: 0.1rem;
  }

  img {
    margin-right: 25px;
    width: 30px;
    height: 30px;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    padding: 1.5rem;

    p {
      margin-bottom: 10px;
    }
  }
`;

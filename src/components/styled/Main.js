import styled from "styled-components";

export default styled.main`
  padding: 10vh 10vw;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  background-color: ${(props) => props.theme.color.background};
  background-image: url("/images/jungle_leafs.png");
  background-size: cover;
  background-position: center;
  box-shadow: inset 0 2px 8px rgba(9, 169, 3, 0.9), 0 8px 30px rgb(9, 169, 3);
  border: 2px solid rgba(9, 169, 3, 0.7);
  position: relative;
  z-index: 1;
  transition: ease-in-out 0.5s all;
`;

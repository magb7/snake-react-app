import styled from "styled-components";

export default styled.div`
  position: relative;
  margin: 30px;
  width: 600px;
  height: 450px;
  background-color: ${(props) => props.theme.gameArea.background};
  border: 3px solid #09a903;
  border-radius: 5px;
  box-shadow: ${(props) => props.theme.gameArea.boxShadow};
  transition: ease-in-out 0.5s all;
`;

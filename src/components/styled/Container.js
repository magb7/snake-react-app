import styled from "styled-components";

export default styled.div`
  background-color: ${(props) => props.theme.color.background};
  transition: ease-in-out 0.5s all;
  color: ${(props) => props.theme.color.textColor};
`;

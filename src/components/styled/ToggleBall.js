import styled from "styled-components";

export default styled.div`
  width: 20px;
  height: 20px;
  background: ${(props) => props.theme.color.background};
  border-radius: 50px;
  transform: ${(props) => (props.dark ? "translate(32px) " : "translate(0%)")};
  transition: ease-in-out 0.5s all;
`;

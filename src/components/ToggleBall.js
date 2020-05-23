import styled from "styled-components";

export default styled.div`
  width: 20px;
  height: 20px;
  background: ${(props) => (props.dark ? "#222222" : "white")};
  border-radius: 50px;
  transform: ${(props) => (props.dark ? "translate(45px) " : "translate(0%)")};
  transition: ease-in-out 0.5s all;
`;

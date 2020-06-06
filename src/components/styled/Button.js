import styled from "styled-components";

export default styled.button`
  color: ${(props) => props.theme.button.textColor};
  background-color: rgba(9, 169, 3, 0.5);
  font-size: ${(props) => (props.start ? "20px" : "12px")};
  letter-spacing: 0.1rem;
  border-radius: 20px;
  box-shadow: ${(props) => props.theme.button.boxShadow};
  padding: ${(props) => (props.start ? "30px 30px" : "15px 12px")};
  border: none;
  outline: none;
  text-transform: ${(props) => (props.start ? "uppercase" : "none")};
  cursor: pointer;
  transition: ease-in-out 0.5s all;

  &:hover {
    background-color: rgba(9, 169, 3, 0.8);
    transition: none;
  }

  &:active {
    box-shadow: ${(props) => props.theme.button.boxShadowActive};
    transition: none;
  }
`;

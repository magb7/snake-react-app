import styled from "styled-components";

export default styled.button`
  color: black;
  background-color: rgba(9, 169, 3, 0.5);
  font-size: ${(props) => (props.start ? "20px" : "12px")};
  letter-spacing: 0.1rem;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 3px 4px 4px rgba(206, 244, 205, 0.6);
  padding: ${(props) => (props.start ? "30px 30px" : "10px 10px")};
  border: none;
  outline: none;
  text-transform: ${(props) => (props.start ? "uppercase" : "none")};
  cursor: pointer;

  &:hover {
    background-color: rgba(9, 169, 3, 0.8);
  }

  &:focus {
    box-shadow: inset 3px 4px 4px rgba(0, 0, 0, 0.5);
  }
`;

import styled from "styled-components";

export default styled.button`
  width: 190px;
  height: 43px;
  color: #cef4cd;
  background-color: rgba(9, 169, 3, 0.5);
  box-shadow: 2px 3px 4px rgba(9, 169, 3, 0.5),
    inset 3px 4px 4px rgba(206, 244, 205, 0.5);
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 0.1rem;
  padding: 12px;
  border: none;
  outline: none;
  cursor: pointer;
  grid-area: btn;

  &:hover {
    background-color: #09a903;
  }

  &:active {
    box-shadow: 2px 3px 4px rgba(9, 169, 3, 0.5),
      inset 3px 4px 4px rgba(0, 0, 0, 0.5);
  }
`;

import styled from "styled-components";

export default styled.p`
  font-size: 45px;
  line-height: 45px;
  color: #09a903;
  text-shadow: 3px 2px 0px #cef4cd;
  grid-area: ${(props) => (props.game ? "game" : "over")};
  justify-self: ${(props) => (props.game ? "end" : "start")};
`;

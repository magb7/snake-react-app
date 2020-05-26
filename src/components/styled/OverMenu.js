import styled from "styled-components";

export default styled.div`
  background: #222222;
  box-shadow: 0px 0px 20px #09a903;
  border-radius: 10px;
  width: 827px;
  height: 487px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  padding: 50px;
  align-items: center;
  justify-items: center;
  grid-template-areas:
    "game img over"
    ". btn ."
    ". home .";
`;

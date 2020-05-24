import styled from "styled-components";

export default styled.div`
  justify-content: space-around;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;
  width: 60vw;
  height: 60vh;
  text-align: center;

  img {
    width: 180px;
    height: 120px;
  }

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

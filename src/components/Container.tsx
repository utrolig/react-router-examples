import styled from "styled-components";

export default styled.section`
  display: grid;
  max-width: 600px;
  height: 100%;
  grid-template-rows: 100px 1fr 100px;
  grid-template-columns: 150px 10px 1fr;
  grid-template-areas:
    ". . ."
    "nav . content"
    ". . .";
  margin: 0 auto;
`;

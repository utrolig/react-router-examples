import React from "react";
import styled from "styled-components";

const Home: React.FC = () => (
  <HomeContainer>This is the home page!</HomeContainer>
);

export default Home;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
`;

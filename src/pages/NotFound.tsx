import React from "react";
import styled from "styled-components";

const NotFoundPage: React.FC = () => (
  <NotFoundContainer>
    <Status>404</Status>
    This is not the page you're looking for.
  </NotFoundContainer>
);

export default NotFoundPage;

const Status = styled.p`
  color: rgba(255, 255, 255, 0.05);
  font-size: 24px;
  margin: 40% 0 0 0;
`;

const NotFoundContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  padding: 12px;
  height: 100%;
`;

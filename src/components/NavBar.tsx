import React from "react";
import styled from "styled-components";
import { NavLink as RouterNavLink } from "react-router-dom";

type NavBarProps = {
  message: string;
};

const NavBar: React.FC<NavBarProps> = ({ message }) => {
  return (
    <Nav>
      <Title>Router Examples</Title>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/tabs">Tabs</NavLink>
      <Message>{message}</Message>
    </Nav>
  );
};

export default NavBar;

const Nav = styled.nav`
  background-color: #202225;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  grid-area: nav;
`;

const NavLink = styled(RouterNavLink)`
  align-items: center;
  color: inherit;
  display: flex;
  font-size: 14px;
  height: 36px;
  padding: 0 14px;
  text-decoration: none;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  &:active {
    background-color: rgba(0, 0, 0, 0.1);
  }

  &.active {
    background-color: #7289da;
    color: #fff;
  }
`;

const Title = styled.p`
  color: #7289da;
  font-weight: 800;
  text-align: center;
  font-size: 12px;
  text-transform: uppercase;
`;

const Message = styled.p`
  margin: auto 8px 12px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

import React from "react";
import styled from "styled-components";
import {
  NavLink,
  Switch,
  Route,
  useRouteMatch,
  Redirect,
} from "react-router-dom";

type TabsProps = {
  message: string;
  setMessage: (message: string) => void;
};

const TabsPage: React.FC<TabsProps> = ({ message, setMessage }) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const match = useRouteMatch();

  return (
    <TabsContainer>
      <Title>Tabs</Title>
      <Input value={message} onChange={onChange} />
      <Tabs>
        <TabLink to={`${match.path}/corona`}>Corona</TabLink>
        <TabLink to={`${match.path}/sars`}>Sars</TabLink>
        <TabLink to={`${match.path}/heineken`}>Heineken</TabLink>
      </Tabs>
      <Switch>
        <Route
          path={`${match.path}/corona`}
          render={() => <TabContent>Corona</TabContent>}
        />
        <Route
          path={`${match.path}/sars`}
          render={() => <TabContent>Sars</TabContent>}
        />
        <Route
          path={`${match.path}/heineken`}
          render={() => <TabContent>Heineken</TabContent>}
        />
        <Redirect to={`${match.path}/corona`} />
      </Switch>
    </TabsContainer>
  );
};

export default TabsPage;

const Title = styled.p`
  margin: 12px;
  font-weight: 800;
`;

const Input = styled.input`
  background-color: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  color: inherit;
  font-family: inherit;
  margin: 0 12px;
  padding: 0 12px;
  height: 36px;
`;

const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Tabs = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  margin-top: 12px;
`;

const TabLink = styled(NavLink)`
  align-items: center;
  color: rgba(255, 255, 255, 0.25);
  display: flex;
  justify-content: center;
  flex: 1;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  padding: 12px;
  text-decoration: none;

  &:hover {
    color: rgba(255, 255, 255, 0.35);
  }

  &:active {
    color: rgba(255, 255, 255, 0.45);
  }

  &.active {
    color: #7289da;
  }

  &:last-child {
    border-right: none;
  }
`;

const TabContent = styled.section`
  align-items: center;
  justify-content: center;
  padding: 12px;
  font-size: 36px;
  display: flex;
`;

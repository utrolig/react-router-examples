import React, { useState } from "react";
import Container from "./components/Container";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import GlobalStyles from "./style/GlobalStyles";
import Body from "./components/Body";
import Home from "./pages/Home";
import TabsPage from "./pages/Tabs";
import NotFoundPage from "./pages/NotFound";

const App: React.FC = () => {
  const [message, setMessage] = useState("Message");
  return (
    <Container>
      <NavBar message={message} />

      <GlobalStyles />
      <Body>
        <Switch>
          <Route path="/home" component={Home} />
          <Route
            path="/tabs"
            render={() => (
              <TabsPage message={message} setMessage={setMessage} />
            )}
          />
          <Route component={NotFoundPage} />
        </Switch>
      </Body>
    </Container>
  );
};

export default App;

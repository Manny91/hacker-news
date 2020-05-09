import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "./store";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import styled, { ThemeProvider } from "./styled-components";
import { theme } from "./theme";
import MostRecentDashboardComponent from "./stories-module/most-recent/most-recent-dashboard.container.component";
import TopStoriesDashboardComponent from "./stories-module/top-stories/top-stories-dashboard.container.component";
import MenuPanel from "./stories-module/components/menu/menu";
import "antd/dist/antd.min.css";
import { createBrowserHistory } from "history";

import "./App.css";

function App() {
  const store = configureStore();
  const history = createBrowserHistory();
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <PageContainer>
          <BrowserRouter>
            <MenuPanelWrapper data-testid="menu">
              <MenuPanel></MenuPanel>
            </MenuPanelWrapper>
            <Container>
              <Switch>
                <Route
                  path="/most-recent/"
                  component={MostRecentDashboardComponent}
                />
                <Route component={TopStoriesDashboardComponent} />
              </Switch>
            </Container>
          </BrowserRouter>
        </PageContainer>
      </ThemeProvider>
    </Provider>
  );
}

const PageContainer = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 85px auto;
  grid-template-areas: "menu container";
  @media ${(props) => props.theme.media.lg} {
    grid-template-columns: auto;
    grid-template-rows: 85px auto;
    grid-template-areas: "menu" "container";
  }
`;
const MenuPanelWrapper = styled.div`
  grid-area: menu;
`;
const Container = styled.div`
  grid-area: container;
`;
export default App;

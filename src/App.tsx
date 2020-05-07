import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "./store";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import styled, { ThemeProvider } from "./styled-components";
import { theme } from "./theme";
import TopStoriesDashboardComponent from "./stories-module/top-stories/top-stories-dashboard.container.component";
import MenuPanel from "./stories-module/components/menu/menu";
import "antd/dist/antd.min.css";
import "./App.css";

function App() {
  const store = configureStore();
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <PageContainer>
          <MenuPanelWrapper data-testid="menu">
            <MenuPanel></MenuPanel>
          </MenuPanelWrapper>
          <Container>
            <BrowserRouter>
              <Switch>
                {/* <Route
                  path="/mostRecent/"
                  component={MostRecentDashboardComponent}
                /> */}
                <Route component={TopStoriesDashboardComponent} />
              </Switch>
            </BrowserRouter>
          </Container>
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
`;
const MenuPanelWrapper = styled.section`
  grid-area: menu;
`;
const Container = styled.section`
  grid-area: container;
`;
export default App;

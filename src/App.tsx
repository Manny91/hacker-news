import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "./store";
import styled, { ThemeProvider } from "./styled-components";
import { theme } from "./theme";

function App() {
  const store = configureStore();
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <PageContainer>Hello ground work</PageContainer>
      </ThemeProvider>
    </Provider>
  );
}

const PageContainer = styled.div`
  padding: ${(props) => props.theme.spacing.sm};
`;
export default App;

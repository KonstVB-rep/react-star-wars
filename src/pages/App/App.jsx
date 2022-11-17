import { Route, Routes } from "react-router-dom";

import routesConfig from "../../Routes/routesConfig";
import Header from "../../components/Header";
import styled from "styled-components";

const AppContainer = styled.div`
  min-height: 100vh;
  max-width: var(--max-width);
  margin: auto;
  padding: var(--spacing-large) 0;
  @media screen and (max-width: 1400px) {
    padding: var(--spacing-large);
  }
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Routes>
        {routesConfig.map((i) => (
          <Route key={i.id} path={i.path} element={i.element} strict />
        ))}
      </Routes>
    </AppContainer>
  );
}

export default App;

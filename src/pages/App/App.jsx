import React from "react";
import { Route, Routes} from "react-router-dom";

import routesConfig from "../../Routes/routesConfig";
import Header from "../../components/Header";
import {AppContainer} from "./styled";

function App() {
  return (
   <>
     <AppContainer>
       <Header />
       <Routes>
         {routesConfig.map((i) => (
           <Route key={i.id} path={i.path} element={i.element} strict />
         ))}
       </Routes>
     </AppContainer>
   </>
  );
}

export default App;

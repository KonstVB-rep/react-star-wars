import React from "react";
import { useLocation } from "react-router-dom";

import { Div, Img, InnerDiv } from "./styled";

const NotFoundPage = () => {
  let location = useLocation();

  return (
    <Div>
      <InnerDiv>
        <h1>404</h1>
        <div>
          <p>Not found page</p>
          <p>
            No match for <u>{location.pathname}</u>
          </p>
        </div>
      </InnerDiv>
      <Img src="/images/smoke.jpg" alt="Not found page" />
    </Div>
  );
};

export default NotFoundPage;

import React from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 100%;
  margin: 100px auto;
  color: black;
  text-align: center;
  font-size: var(--font-size-50);
  line-height: 1.7;
  text-shadow: 0 2px 0 var(color-light-green);
  -webkit-text-stroke-color: var(color-light-green);
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-fill-color: white;
  border-radius: 20px;
  padding: 30px;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }

  //background-color: rgba(30, 54, 72, 0.53);
`;

const ErrorMessage = () => {
  return (
    <Div>
      The cannot display data.
      <br />
      Come back when we gix everything{" "}
    </Div>
  );
};

export default ErrorMessage;

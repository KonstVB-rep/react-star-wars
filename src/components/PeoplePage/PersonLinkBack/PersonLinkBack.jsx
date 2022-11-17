import React from "react";
import { Alink } from "./styled";
import { useNavigate } from "react-router";

const PersonLinkBack = () => {
  const goBack = useNavigate();
  return (
    <Alink href="#" onClick={() => goBack(-1)}>
      <img src="/images/left-arrow.svg" alt="Go back" />
      <span>GO BACK</span>
    </Alink>
  );
};

export default PersonLinkBack;

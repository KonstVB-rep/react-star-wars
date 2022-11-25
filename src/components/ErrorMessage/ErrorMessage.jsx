import React from "react";
import UiVideo from "../Ui/UiVIdeo";
import videoMP4 from './video/Obi.mp4'
import {Div} from "./styled";


const ErrorMessage = () => {
  return (
    <Div>
      <p>The cannot display data.</p>
      <p>Come back when we fix everything.</p>.
      <UiVideo src = {videoMP4} classes = {'video'} playbackRate = {0.7} />
    </Div>

  );
};

export default ErrorMessage;

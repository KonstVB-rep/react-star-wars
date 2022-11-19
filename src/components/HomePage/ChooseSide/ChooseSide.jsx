import React from "react";
import PropTypes from "prop-types";
import {
  useTheme,
  THEME_DARK,
  THEME_LIGHT,
  THEME_NEUTRAL,
} from "context/ThemeProvider";

import imgLightSide from "./img/light-side.jpg";
import imgDarkSide from "./img/dark-side.jpg";
import imgFalcon from "./img/falcon.jpg";

import { DivContainer, DivItem, DivItemHeader, Img } from "./styled";

const ChooseSideItem = ({ classes, theme, text, img }) => {
  const isTheme = useTheme();

  return (
    <DivItem onClick={() => isTheme.change(theme)} className={classes}>
      <DivItemHeader>{text}</DivItemHeader>
      <Img src={img} alt={text} />
    </DivItem>
  );
};

ChooseSideItem.propTypes = {
  classes: PropTypes.string,
  theme: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.string,
};

const ChooseSide = () => {
  const elements = [
    {
      theme: THEME_LIGHT,
      text: "Light Side",
      img: imgLightSide,
      classes: "item__light",
    },
    {
      theme: THEME_DARK,
      text: "Dark Side",
      img: imgDarkSide,
      classes: "item__dark",
    },
    {
      theme: THEME_NEUTRAL,
      text: "I'm Han Solo",
      img: imgFalcon,
      classes: "item__neutral",
    },
  ];

  return (
    <DivContainer>
      {elements.map(({ theme, text, img, classes }, index) => (
        <ChooseSideItem
          key={index}
          theme={theme}
          text={text}
          img={img}
          classes={classes}
        />
      ))}
    </DivContainer>
  );
};

export default ChooseSide;

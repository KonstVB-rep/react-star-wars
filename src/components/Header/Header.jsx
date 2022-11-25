import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme, THEME_DARK, THEME_LIGHT } from "context/ThemeProvider";
import imgNeutralTheme from "./img/droid.svg";
import ImgLightThem from "./img/lightsaber.svg";
import imgDarkTheme from "./img/space-station.svg";

import { HeaderContainer, List, Logo } from "./styled";
import Favorite from "../Favorite";

const Header = () => {
  const [icon, setIcon] = useState(imgNeutralTheme);
  const isTheme = useTheme();

  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_LIGHT:
        setIcon(ImgLightThem);
        break;
      case THEME_DARK:
        setIcon(imgDarkTheme);
        break;
      default:
        setIcon(imgNeutralTheme);
    }
  }, [isTheme]);
  return (
    <HeaderContainer>
      <Logo src={icon} alt="Logotype theme" />
      <List>
        <li>
          <NavLink to="/">HomePage</NavLink>
        </li>
        <li>
          <NavLink to="/people/?page=1" strict="false">
            People
          </NavLink>
        </li>
        <li>
          <NavLink to="/search">
            Search
          </NavLink>
        </li>
        <li>
          <NavLink to="/fail" >
            Fail
          </NavLink>
        </li>
      </List>
      <Favorite />
    </HeaderContainer>
  );
};

export default Header;

import React from "react";
import { NavLink } from "react-router-dom";
import { HeaderContainer, List } from "./styled";
import Favorite from "../Favorite";

const Header = () => {
  const x = false;
  return (
    <HeaderContainer>
      <List>
        <li>
          <NavLink to="/">HomePage</NavLink>
        </li>
        <li>
          <NavLink to="/people/?page=1" strict="false">
            People
          </NavLink>
        </li>
      </List>
      <Favorite />
    </HeaderContainer>
  );
};

export default Header;

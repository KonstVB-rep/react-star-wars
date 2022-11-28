import React from 'react';
import {NavLink} from "react-router-dom";

import {Button, Nav, WrapperNav} from "./styled";
import {List} from "../styled";



const NavMobile = ({showMobileNav,setShowMobileNav}) => {
  return (
    <>
        <WrapperNav hide={showMobileNav}>
          <Nav hide={showMobileNav}>
            <List>
              <li>
                <NavLink to = "/react-star-wars/">HomePage</NavLink>
              </li>
              <li>
                <NavLink to = "/react-star-wars/people/?page=1" strict = "false">
                  People
                </NavLink>
              </li>
              <li>
                <NavLink to = "/react-star-wars/search">
                  Search
                </NavLink>
              </li>
              <li>
                <NavLink to = "/react-star-wars/fail">
                  Fail
                </NavLink>
              </li>
              <li>
                <NavLink to = "/react-star-wars/favorites">
                  Favorites
                </NavLink>
              </li>
            </List>
          </Nav>
          <button onClick = {() => setShowMobileNav(false)}>
            <svg width = "48" height = "48" viewBox = "0 0 48 48" fill = "none" xmlns = "http://www.w3.org/2000/svg">
              <rect width = "48" height = "48" fill = "white" fillOpacity = "0.01" />
              <path d = "M12 24L24 12L36 24" stroke = "black" strokeWidth = "4" strokeLinecap = "round"
                    strokeLinejoin = "round" />
              <path d = "M12 36L24 24L36 36" stroke = "black" strokeWidth = "4" strokeLinecap = "round"
                    strokeLinejoin = "round" />
            </svg>
          </button>
        </WrapperNav>
        <Button onClick = {() => setShowMobileNav(true)} showMobileNav={showMobileNav}>
          <span></span>
          <span></span>
          <span></span>
        </Button>
    </>)
    ;
};

export default NavMobile;
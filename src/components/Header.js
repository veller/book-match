import React from "react";
import { Nav, NavLeft, NavCenter, NavRight } from "./Header.styles";
import logo from "../images/logo.svg";
import search from "../images/search.svg";
import bell from "../images/bell.svg";
import avatar from "../images/avatar.svg";

function Header() {
  return (
    <Nav>
      <NavLeft></NavLeft>
      <NavCenter>
        <img src={logo} alt="bookmatch logo" />
      </NavCenter>
      <NavRight>
        <img src={search} alt="search icon" />
        <img src={bell} alt="bell icon" />
        <img src={avatar} alt="avatar icon" />
        <span>Administrador</span>
      </NavRight>
    </Nav>
  );
}

export default Header;

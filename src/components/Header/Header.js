import "./Header.scss"
import React from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import HeaderSocial from "./HeaderSocial";

export default function Header(props) {
  return (
    <header className="header container" id="header">
      <HeaderLogo />
      <HeaderNav />
      <HeaderSocial />
    </header>
  );
};

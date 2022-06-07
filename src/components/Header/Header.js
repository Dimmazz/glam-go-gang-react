import "./Header.scss"
import React from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import HeaderMedia from "./HeaderMedia";

export default function Header(props) {
  return (
    <header className="header container">
      <HeaderLogo />
      <HeaderNav />
      <HeaderMedia />
    </header>
  );
};

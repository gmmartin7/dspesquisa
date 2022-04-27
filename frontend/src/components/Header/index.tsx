import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./style.css";

const Header = () => (
  <header className="main-header">
    <Logo />
    <div className="Logo-text">
      <span className="logo-text-1">BigGame</span>
      <span className="logo-text-2"> Survey</span>
    </div>
  </header>
);
export default Header;

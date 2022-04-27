import React from "react";
import "./styles.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const Header = () => (
  <header className="main-header">
    <Logo />
    <div className="logo-test">
      <span className="Logo-test-1"> BigGame</span>
      <span className="Logo-test-2"> Survey</span>
    </div>
  </header>
);
export default Header;

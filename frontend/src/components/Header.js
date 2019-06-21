import React from "react";
import { Link } from "react-router-dom";
import { StyledHeader } from "./HeaderStyles"
import logo from "../assets/logo.svg";
import camera from "../assets/camera.svg";

export default function Header() {
  return (
    <StyledHeader>
      <div className="header-content">
        <Link to="/">
          <img src={logo} alt="InstaRocket" />
        </Link>
        <Link to="/new">
          <img src={camera} alt="Send story" />
        </Link>
      </div>
    </StyledHeader>
  );
}

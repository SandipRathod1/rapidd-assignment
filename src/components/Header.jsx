import React, { useState } from "react";
import { HiOutlineBell } from "react-icons/hi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "../assets/name.png";
import "./Header.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="text">Sandip Rathod</div>
        <div className="bell">
          <HiOutlineBell />
        </div>
        <div className="span">
          <span>Recents</span>
        </div>
      </div>

      <div className={`navbar-right ${showMenu ? "show" : ""}`}>
        <div className="menu-item">
          <button className="navbar-button">+ Design file</button>
          <button className="navbar-button">+ FigJam board</button>
          <button className="navbar-button">Import</button>
        </div>
      </div>

      <div className="menu" onClick={handleMenuClick}>
        {showMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
    </nav>
  );
};

export default Header;

import React from "react";
// import LoginPage from './LoginPage'
import "./../CSS files/nav-bar.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import logo from "./../assets/Logo.png";

const NavigationMenu = () => {
  const navigate = useNavigate();

  const handlelogout = () => {
    navigate("/");
  };

  const handleFirmware = () => {
    navigate("/firmware");
  };

  const handlePushFota = () => {
    navigate("/pushfota");
  };

  return (
    <div>
      <nav className="Nav-bar">
        <img src={logo} alt="Logo" />

        <ul>
          <li>
            <FontAwesomeIcon icon={faHome} />
            HOME
          </li>
          <li onClick={handleFirmware}>FIRMWARE</li>
          <li onClick={handlePushFota}>PUSHFOTA</li>
          <li onClick={handlelogout}>
            <FontAwesomeIcon icon={faSignOutAlt} />
            LOGOUT
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationMenu;

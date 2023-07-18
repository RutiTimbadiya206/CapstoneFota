import React, { useState } from 'react';
import './../CSS files/Navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import logo from './../assets/Logo.png';
import Slider from './slider'; // Import the Slider component
import slides from './../Slider.json';
import LoginPage from './LoginPage'; // Import the LoginPage component

const Navigation = () => {
  const [isLoginPageVisible, setIsLoginPageVisible] = useState(false);

  const handleLoginClick = () => {
    setIsLoginPageVisible(true);
  };

  const handleLogoutClick = () => {
    setIsLoginPageVisible(false);
  };

  return (
    <div id="root">
      <div>
        <nav className="Nav-bar">
          <img src={logo} alt="Logo" />

          <ul>
            {isLoginPageVisible ? (
              <li onClick={handleLogoutClick}>
                <FontAwesomeIcon icon={faArrowLeft} />
                BACK
              </li>
            ) : (
              <li onClick={handleLoginClick}>
                <FontAwesomeIcon icon={faSignOutAlt} />
                LOGIN
              </li>
            )}
          </ul>
        </nav>
        {isLoginPageVisible ? (
          <LoginPage />
        ) : (
          <Slider slides={slides} />
        )}
      </div>
    </div>
  );
};

export default Navigation;

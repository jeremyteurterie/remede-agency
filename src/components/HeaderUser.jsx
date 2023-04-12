import React from 'react';
// modules
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleUser,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
// styles & assets
import styles from '../styles/Header.module.css';
import logo from '../assets/img/argentBankLogo.png';

/**
 *Header component that displays the Argent Bank logo and navigation links.
 *@returns {JSX.Element} JSX.Element representing the Header component.
 */
const HeaderUser = () => {
  return (
    <header>
      <nav className={styles.mainnav}>
        <a className={styles.mainnavlogo} href="/">
          <img
            className={styles.mainnavlogoimage}
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className={styles.sronly}>Argent Bank</h1>
        </a>
        <div>
          <a className={styles.mainnavitem} href="">
            <i className={styles.signinicon}>
              <FontAwesomeIcon icon={faCircleUser} />
            </i>
            Tony
          </a>
          <a className={styles.mainnavitem} href="">
            <i className={styles.signinicon}>
              <FontAwesomeIcon icon={faRightFromBracket} />
            </i>
            Sign Out
          </a>
        </div>
      </nav>
    </header>
  );
};

export default HeaderUser;

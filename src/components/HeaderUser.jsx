import React from 'react';
import { Link } from 'react-router-dom';
// modules
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleUser,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Header.module.css';
import logo from '../assets/img/argentBankLogo.png';

const HeaderUser = () => {
  return (
    <header>
      <nav className={styles.mainnav}>
        <Link to="/">
          <a className={styles.mainnavlogo}>
            <img
              className={styles.mainnavlogoimage}
              src={logo}
              alt="Argent Bank Logo"
            />
            <h1 className={styles.sronly}>Argent Bank</h1>
          </a>
        </Link>
        <div>
          <Link to="/user">
            <a className={styles.mainnavitem}>
              <i className={styles.signinicon}>
                <FontAwesomeIcon icon={faCircleUser} />
              </i>
              Tony
            </a>
          </Link>
          <Link to="/">
            <a className={styles.mainnavitem}>
              <i className={styles.signinicon}>
                <FontAwesomeIcon icon={faRightFromBracket} />
              </i>
              Sign Out
            </a>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default HeaderUser;

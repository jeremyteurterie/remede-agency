import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Header.module.css';
import logo from '../assets/img/argentBankLogo.png';

const Header = () => {
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
          {' '}
          <i>
            <FontAwesomeIcon icon={faCircleUser} size="lg" />
          </i>
          <a className={styles.mainnavitem} href="">
            Sign In
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;

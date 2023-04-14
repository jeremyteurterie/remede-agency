import React from 'react';
// modules
import { Link } from 'react-router-dom';
// styles & assets
import styles from '../styles/Header.module.css';
import logo from '../assets/img/argentBankLogo.png';

const Header = () => {
  return (
    <header>
      <nav className={styles.mainnav}>
        <Link className={styles.mainnavlogo} to="/">
          <img
            className={styles.mainnavlogoimage}
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className={styles.sronly}>Argent Bank</h1>
        </Link>
      </nav>
    </header>
  );
};

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';
import logo from '../assets/img/argentBankLogo.png';

const Header = () => {
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
        {/* <div>
          <ButtonSignIn />
        </div> */}
      </nav>
    </header>
  );
};

export default Header;

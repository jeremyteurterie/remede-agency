import React from 'react';
import { Link } from 'react-router-dom';
// styles & assets
import styles from '../styles/Header.module.css';
import logo from '../assets/img/argentBankLogo.png';

/**
 * Header component displaying the site's logo and navigation bar.
 * @returns {JSX.Element} React element representing the Header component.
 */
const Header = () => {
  return (
    <header>
      <nav className={styles.mainnav}>
        <Link to="/" className={styles.mainnavlogo}>
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

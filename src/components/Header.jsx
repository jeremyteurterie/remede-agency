import React from 'react';
import { Link } from 'react-router-dom';
// modules
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
// styles & assets
import styles from '../styles/Header.module.css';
import logo from '../assets/img/argentBankLogo.png';

/**
 *Header component that displays the Argent Bank logo and navigation links.
 *@returns {JSX.Element} JSX.Element representing the Header component.
 */
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
        <div>
          <Link to="/signin">
            <a className={styles.mainnavitem}>
              <i className={styles.signinicon}>
                <FontAwesomeIcon icon={faCircleUser} />
              </i>
              Sign In
            </a>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

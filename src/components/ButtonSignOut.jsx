import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleUser,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/ButtonSignOut.module.css';

const ButtonSignOut = () => {
  return (
    <>
      <nav className={styles.mainnav}>
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
      </nav>
    </>
  );
};

export default ButtonSignOut;

import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/ButtonSignIn.module.css';

const ButtonSignIn = () => {
  return (
    <>
      <nav className={styles.mainnav}>
        <Link to="/signin">
          <a className={styles.mainnavitem}>
            <i className={styles.signinicon}>
              <FontAwesomeIcon icon={faCircleUser} />
            </i>
            Sign In
          </a>
        </Link>
      </nav>
    </>
  );
};

export default ButtonSignIn;

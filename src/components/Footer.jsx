import React from 'react';
import styles from '../styles/Footer.module.css';

/**
 * Footer component displaying the site's copyright text.
 * @returns {JSX.Element} React element representing the Footer component.
 */
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footertext}>Copyright 2020 Argent Bank</p>
    </footer>
  );
};

export default Footer;

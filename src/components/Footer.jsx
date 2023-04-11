import React from 'react';
// styles
import styles from '../styles/Footer.module.css';

/**
 * React component representing the footer of the application.
 * @function Footer
 * @returns {JSX.Element} The footer content.
 */
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footertext}>Copyright 2020 Argent Bank</p>
    </footer>
  );
};

export default Footer;

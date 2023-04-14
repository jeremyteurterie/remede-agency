import React from 'react';
// modules
import { Link } from 'react-router-dom';
// styles
import styles from '../styles/Error404.module.css';

const Error404 = () => {
  return (
    <div className={styles.errorpage}>
      <h1>Oops!</h1>
      <h2>Error 404 : Page not found</h2>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <Link to="/">Return to the Home.</Link>
      </p>
    </div>
  );
};

export default Error404;

import React, { useState } from 'react';
// modules
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
// components
import Header from '../components/Header';
import Footer from '../components/Footer';
// styles
import styles from '../styles/UserConnexion.module.css';

const UserConnexion = () => {
  return (
    <>
      <header>
        <Header />
        <nav className={styles.mainnav}>
          <Link className={styles.mainnavitem} to="/connexion">
            <i className={styles.signinicon}>
              <FontAwesomeIcon icon={faCircleUser} />
            </i>
            Sign In
          </Link>
        </nav>
      </header>
      <div className={styles.main}>
        <main className={styles.mainsignin}>
          <section className={styles.signincontent}>
            <i className={styles.signinicon}>
              <FontAwesomeIcon icon={faCircleUser} />
            </i>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
              <div className={styles.inputwrapper}>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={styles.inputwrapper}>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className={styles.inputremember}>
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
              </div>
              <button
                className={styles.signinbutton}
                onClick={(e) => handleSubmit(e)}
              >
                Sign In
              </button>
            </form>
          </section>
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default UserConnexion;

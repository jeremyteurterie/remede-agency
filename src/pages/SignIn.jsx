import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

import Header from '../components/Header';
import Footer from '../components/Footer';

import styles from '../styles/SignIn.module.css';

const SignIn = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <div className={styles.main}>
        <main className={styles.mainsignin}>
          <section className={styles.signincontent}>
            <i className={styles.signinicon}>
              <FontAwesomeIcon icon={faCircleUser} />
            </i>
            <h1>Sign In</h1>
            <form>
              <div className={styles.inputwrapper}>
                <label for="username">Username</label>
                <input type="text" id="username" />
              </div>
              <div className={styles.inputwrapper}>
                <label for="password">Password</label>
                <input type="password" id="password" />
              </div>
              <div className={styles.inputremember}>
                <input type="checkbox" id="remember-me" />
                <label for="remember-me">Remember me</label>
              </div>
              <Link to="/user">
                <button href="/user" className={styles.signinbutton}>
                  Sign In
                </button>
              </Link>
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

export default SignIn;

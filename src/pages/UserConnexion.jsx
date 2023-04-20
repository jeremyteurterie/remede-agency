import React from 'react';
// modules
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
// components
import Header from '../components/Header';
import Footer from '../components/Footer';
// // slices
// import { loginUser } from '../slices/Auth.Slice';
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
            <form>
              <div className={styles.inputwrapper}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" />
              </div>
              <div className={styles.inputwrapper}>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
              </div>
              <div className={styles.inputremember}>
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
              </div>
              <Link to="/profil">
                <button className={styles.signinbutton} type="submit">
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

export default UserConnexion;

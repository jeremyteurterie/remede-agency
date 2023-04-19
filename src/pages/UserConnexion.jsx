import React from 'react';
// modules
import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
// components
import Header from '../components/Header';
import Footer from '../components/Footer';
// services

// styles
import styles from '../styles/UserConnexion.module.css';

const UserConnexion = () => {
  // const dispatch = useDispatch();
  // const auth = useSelector((state) => state.auth);

  // console.log(auth);

  // const [user, setUser] = useState({
  //   email: '',
  //   password: '',
  // });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(registerIser(user));
  // };

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
                <input
                  type="text"
                  id="username"
                  // onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </div>
              <div className={styles.inputwrapper}>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  // onChange={(e) =>
                  //   setUser({ ...user, password: e.target.value })
                  // }
                />
              </div>
              <div className={styles.inputremember}>
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
              </div>
              <Link to="/profil">
                <button className={styles.signinbutton}>Sign In</button>
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

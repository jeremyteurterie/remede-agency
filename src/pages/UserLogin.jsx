import React, { useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
// api
import { userLogin } from '../services/api';
// slice
import {
  setDataStorage,
  setConnected,
  setFirstName,
  setLastName,
  setDataState,
  setEmail,
  setPassword,
} from '../slices/authSlice';
// components
import Header from '../components/Header';
import Footer from '../components/Footer';
// styles
import styles from '../styles/UserLogin.module.css';

/**
 * Component for user login page
 * @return {JSX.Element} The JSX code representing the user login page.
 */
const UserLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState('');

  const { email: userEmail, password: userPassword } = useSelector(
    (state) => state.login
  );
  const storedEmail = localStorage.getItem('email');
  const storedPassword = localStorage.getItem('password');

  /**
   * Store user email and password in state
   * @param {string} email - The user email
   * @param {string} password - The user password
   */
  const storeUserCredentials = useCallback((email, password) => {
    if (email && password) {
      dispatch(setEmail(email));
      dispatch(setPassword(password));
    }
  }, []);

  useEffect(() => {
    storeUserCredentials(storedEmail, storedPassword);
  }, []);

  /**
   * Handles the form submission and logs in the user
   * @param {Event} e - The form submission event
   */
  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();
    const checkBox = document.getElementById('remember-me');
    const response = await userLogin(userEmail, userPassword, checkBox.checked);

    if (!userEmail || !userPassword) {
      setError('Invalid email or password!');
    }

    if (response != null) {
      const { firstName, lastName } = response;
      dispatch(setDataStorage(response));
      dispatch(setDataState(localStorage.getItem('data')));
      dispatch(setConnected(true));
      dispatch(setFirstName(firstName));
      dispatch(setLastName(lastName));
      navigate('/profil');
    } else {
      dispatch(setConnected(false));
    }
  };

  return (
    <>
      <header>
        <Header />
        <nav className={styles.mainnav}>
          <Link className={styles.mainnavitem} to="/login">
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
            <form onSubmit={handleLoginFormSubmit}>
              <div className={styles.inputwrapper}>
                <label htmlFor="username">Username</label>
                <input
                  type="email"
                  name="email"
                  id="username"
                  value={userEmail}
                  onChange={(e) => {
                    dispatch(setEmail(e.target.value));
                  }}
                />
              </div>
              <div className={styles.inputwrapper}>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={userPassword}
                  onChange={(e) => {
                    dispatch(setPassword(e.target.value));
                  }}
                />
                <div className="password error"></div>
              </div>
              <div className={styles.inputremember}>
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
              </div>
              <div className={styles.error}>{error}</div>
              <button className={styles.signinbutton} type="submit">
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

export default UserLogin;

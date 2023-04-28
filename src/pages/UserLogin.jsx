import React, { useEffect, useState } from 'react';
// modules
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import {
  setDataStorage,
  userLogin,
  setConnected,
  setFirstName,
  setLastName,
  setDataState,
  removeError,
  setError,
  setEmail,
  setPassword,
} from '../slices/authSlice';
// import { toast } from 'react-toastify';
// slice
// components
import Header from '../components/Header';
import Footer from '../components/Footer';
// styles
import styles from '../styles/UserLogin.module.css';

const UserLogin = () => {
  const [msgError, setMsgError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userEmail = useSelector((state) => state.login.email);
  const userPassword = useSelector((state) => state.login.password);
  let emailStorage = localStorage.getItem('email');
  let passwordStorage = localStorage.getItem('password');

  async function checkEmailStorage(emailStorage) {
    if (emailStorage && passwordStorage != null) {
      dispatch(setEmail(emailStorage));
      dispatch(setPassword(passwordStorage));
    }
  }
  checkEmailStorage(emailStorage);
  async function checkForm(e) {
    e.preventDefault();
    const checkBox = document.getElementById('remember-me');
    const response = await userLogin(userEmail, userPassword, checkBox.checked);
    if (response != null) {
      dispatch(setDataStorage(response));
      dispatch(setDataState(localStorage.getItem('data')));
      dispatch(setConnected(true));
      dispatch(setFirstName(response.firstName));
      dispatch(setLastName(response.lastName));
      dispatch(removeError(false));
      setMsgError(false);
      navigate('/profil');
    } else {
      dispatch(setError(true));
      dispatch(setConnected(false));
      setMsgError(true);
    }
  }

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
            <form onSubmit={checkForm}>
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
                  // value={email}
                  // onChange={onChange}
                />
                <div className="email error"></div>
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
                  // value={password}
                  // onChange={onChange}
                />
                <div className="password error"></div>
              </div>
              <div className={styles.inputremember}>
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
              </div>
              {/* {errorField && <p>{errorField}</p>} */}
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

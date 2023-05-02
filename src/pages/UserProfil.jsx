import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleUser,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
// api
import { userProfil } from '../services/api';
// slice
import {
  setDataStorage,
  setFirstName,
  setLastName,
  logout,
} from '../slices/authSlice';
// components
import Header from '../components/Header';
import Footer from '../components/Footer';
// styles
import styles from '../styles/UserProfil.module.css';

/**
 * Component representing the user profile page.
 * @return {JSX.Element} The JSX code representing the user profile page.
 */
const UserProfil = () => {
  const [firstNames, setFirstNames] = useState('');
  const [lastNames, setLastNames] = useState('');

  const firstName = JSON.parse(localStorage.getItem('firstName'));
  const lastName = JSON.parse(localStorage.getItem('lastName'));
  const token = JSON.parse(localStorage.getItem('token'));

  const inputFirstName = document.getElementById('firstName');
  const inputLastName = document.getElementById('lastName');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  /**
   * Handler function for the 'Edit Name' button.
   * @param {Event} e - The event object.
   */
  const handleEditName = async (e) => {
    e.preventDefault();
    const response = await userProfil(firstNames, lastNames, token);
    if (response != null) {
      dispatch(setDataStorage(response));
      dispatch(setFirstName(firstNames));
      dispatch(setLastName(lastNames));
      navigate('/profil');
      inputFirstName.value = '';
      inputLastName.value = '';
    } else {
      alert('Error Unauthorized');
    }
  };

  /**
   * Handler function for the 'Logout' button.
   */
  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <>
      <header>
        <Header />
        <nav className={styles.mainnav}>
          <Link className={styles.mainnavitem} to="/profil">
            <i className={styles.signinicon}>
              <FontAwesomeIcon icon={faCircleUser} />
            </i>
            {firstName + ' '}
          </Link>
          <button className={styles.mainnavitembutton} onClick={handleLogout}>
            <i className={styles.signinicon}>
              <FontAwesomeIcon icon={faRightFromBracket} />
            </i>
            Sign Out
          </button>
        </nav>
      </header>
      <div className={styles.main}>
        <div className={styles.mainuser}>
          <div className={styles.header}>
            <h1>
              Welcome back
              <br />
              {firstName + ' '}
              {lastName + '!'}
            </h1>
            <form onSubmit={handleEditName}>
              <div className={styles.editname}>
                <div>
                  <div>
                    <label htmlFor="firstName"></label>
                    <input
                      type="text"
                      id="firstName"
                      placeholder="First Name"
                      pattern="[A-z]{2,}"
                      onChange={(e) => {
                        setFirstNames(e.target.value);
                      }}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName"></label>
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Last Name"
                      pattern="[A-z]{2,}"
                      onChange={(e) => {
                        setLastNames(e.target.value);
                      }}
                      required
                    />
                  </div>
                  <div>
                    <button className={styles.editbutton}>Edit Name</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <h2 className={styles.sronly}>Accounts</h2>
          <section className={styles.account}>
            <div className={styles.accountcontentwrapper}>
              <h3 className={styles.accounttitle}>
                Argent Bank Checking (x8349)
              </h3>
              <p className={styles.accountamount}>$2,082.79</p>
              <p className={styles.accountamountdescription}>
                Available Balance
              </p>
            </div>
            <div className={styles.accountcontentwrapper + ' ' + styles.cta}>
              <button className={styles.transactionbutton}>
                View transactions
              </button>
            </div>
          </section>
          <section className={styles.account}>
            <div className={styles.accountcontentwrapper}>
              <h3 className={styles.accounttitle}>
                Argent Bank Savings (x6712)
              </h3>
              <p className={styles.accountamount}>$10,928.42</p>
              <p className={styles.accountamountdescription}>
                Available Balance
              </p>
            </div>
            <div className={styles.accountcontentwrapper + ' ' + styles.cta}>
              <button className={styles.transactionbutton}>
                View transactions
              </button>
            </div>
          </section>
          <section className={styles.account}>
            <div className={styles.accountcontentwrapper}>
              <h3 className={styles.accounttitle}>
                Argent Bank Credit Card (x8349)
              </h3>
              <p className={styles.accountamount}>$184.30</p>
              <p className={styles.accountamountdescription}>Current Balance</p>
            </div>
            <div className={styles.accountcontentwrapper + ' ' + styles.cta}>
              <button className={styles.transactionbutton}>
                View transactions
              </button>
            </div>
          </section>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default UserProfil;

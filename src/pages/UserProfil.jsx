import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  userProfil,
  setDataStorage,
  setFirstName,
  setLastName,
  logout,
} from '../slices/authSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleUser,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
// components
import Header from '../components/Header';
import Footer from '../components/Footer';
// styles
import styles from '../styles/UserProfil.module.css';

const UserProfil = () => {
  const dispatch = useDispatch();
  let firstName = JSON.parse(localStorage.getItem('firstName'));
  let lastName = JSON.parse(localStorage.getItem('lastName'));
  let token = JSON.parse(localStorage.getItem('token'));
  let inputFirstName = document.getElementById('firstName');
  let inputLastName = document.getElementById('lastName');

  const [firstNames, setFirstNames] = useState('');
  const [lastNames, setLastNames] = useState('');
  const navigate = useNavigate();

  const handleEditName = async (e) => {
    e.preventDefault();
    const response = await userProfil(firstName, lastName, token);
    console.log(response);
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

  function isLogout() {
    dispatch(logout());
    navigate('/');
  }

  return (
    <>
      <header>
        <Header />
        <nav className={styles.mainnav}>
          <Link className={styles.mainnavitem} to="/user">
            <i className={styles.signinicon}>
              <FontAwesomeIcon icon={faCircleUser} />
            </i>
            {firstName + ' '}
          </Link>
          <button className={styles.mainnavitembutton} onClick={isLogout}>
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

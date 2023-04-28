import React, { useState, useEffect } from 'react';
// modules
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setFirstName, setLastName, logout, reset } from '../slices/authSlice';
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
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { firstName, lastName } = useSelector((state) => state.auth);

  console.log(firstName);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };

  // let firstName = JSON.parse(localStorage.getItem('firstName'));
  // let lastName = JSON.parse(localStorage.getItem('lastName'));
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');

  // const handleUpdateProfile = async (e) => {
  //   e.preventDefault();
  //   const userData = {
  //     firstName,
  //     lastName,
  //   };
  //   dispatch(profil(userData));
  // };

  return (
    <>
      <header>
        <Header />
        <nav className={styles.mainnav}>
          <Link className={styles.mainnavitem} to="/user">
            <i className={styles.signinicon}>
              <FontAwesomeIcon icon={faCircleUser} />
            </i>
            Tony
          </Link>
          <button className={styles.mainnavitembutton} onClick={onLogout}>
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
            <button className={styles.editbutton}>Edit Name</button>
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

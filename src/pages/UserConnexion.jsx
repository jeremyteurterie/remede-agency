import React, { useState } from 'react';
// modules
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
// components
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
// styles
import styles from '../styles/UserConnexion.module.css';

const UserConnexion = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [responseData, setResponseData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data = responseData } = await axios.post(
        'http://localhost:3001/api/v1/user/login',
        { ...values }
      );
      setResponseData(data);
      console.log('Data received from API: ', data);
    } catch (err) {
      console.log(err);
      if (data.status !== 'success') {
        throw new Error('Error from API: ' + data.message);
      }
    }
  };

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
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className={styles.inputwrapper}>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="email"
                  id="username"
                  onChange={(e) =>
                    setValues({ ...values, [e.target.name]: e.target.value })
                  }
                />
              </div>
              <div className={styles.inputwrapper}>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={(e) =>
                    setValues({ ...values, [e.target.name]: e.target.value })
                  }
                />
              </div>
              <div className={styles.inputremember}>
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
              </div>
              <button className={styles.signinbutton}>Sign In</button>
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

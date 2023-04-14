import React from 'react';
// modules
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
// components
import Header from '../components/Header';
import Footer from '../components/Footer';
// services
import Auth from '../services/auth';
// styles
import styles from '../styles/UserConnexion.module.css';

const UserConnexion = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    Auth.login(email, password)
      .then(() => {
        navigate('/profil');
      })
      .catch((error) => {
        setError(error.response.data.message);
      });
  };

  return (
    <>
      <header>
        <Header />
        <nav className={styles.mainnav}>
          <Link to="/connexion">
            <a className={styles.mainnavitem}>
              <i className={styles.signinicon}>
                <FontAwesomeIcon icon={faCircleUser} />
              </i>
              Sign In
            </a>
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
            <form onSubmit={handleLogin}>
              <div className={styles.inputwrapper}>
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className={styles.inputwrapper}>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <div className={styles.inputremember}>
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
              </div>
              {error && <div className={styles.error}>{error}</div>}
              <button type="submit" className={styles.signinbutton}>
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
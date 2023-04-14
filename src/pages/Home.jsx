import React from 'react';
// modules
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
// components
import Header from '../components/Header';
import Footer from '../components/Footer';
// styles & assets
import styles from '../styles/Home.module.css';
import iconchat from '../assets/img/icon-chat.png';
import iconmoney from '../assets/img/icon-money.png';
import iconsecurity from '../assets/img/icon-security.png';

const Home = () => {
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
      <main>
        <div className={styles.hero}>
          <section className={styles.herocontent}>
            <h2 className={styles.sronly}>Promoted Content</h2>
            <p className={styles.subtitle}>No fees.</p>
            <p className={styles.subtitle}>No minimum deposit.</p>
            <p className={styles.subtitle}>High interest rates.</p>
            <p className={styles.text}>
              Open a savings account with Argent Bank today!
            </p>
          </section>
        </div>
        <section className={styles.features}>
          <h2 className={styles.sronly}>Features</h2>
          <div className={styles.featureitem}>
            <img
              src={iconchat}
              alt="Chat Icon"
              className={styles.featureicon}
            />
            <h3 className={styles.featureitemtitle}>You are our #1 priority</h3>
            <p>
              Need to talk to a representative? You can get in touch through our
              24/7 chat or through a phone call in less than 5 minutes.
            </p>
          </div>
          <div className={styles.featureitem}>
            <img
              src={iconmoney}
              alt="Chat Icon"
              className={styles.featureicon}
            />
            <h3 className={styles.featureitemtitle}>
              More savings means higher rates
            </h3>
            <p>
              The more you save with us, the higher your interest rate will be!
            </p>
          </div>
          <div className={styles.featureitem}>
            <img
              src={iconsecurity}
              alt="Chat Icon"
              className={styles.featureicon}
            />
            <h3 className={styles.featureitemtitle}>Security you can trust</h3>
            <p>
              We use top of the line encryption to make sure your data and money
              is always safe.
            </p>
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;

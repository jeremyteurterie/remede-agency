import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ButtonSignOut from '../components/ButtonSignOut';
import ButtonTransactions from '../components/ButtonTransactions';
import ButtonEdit from '../components/ButtonEdit';
import AccountChecking from '../components/AccountChecking';
import AccountSavings from '../components/AccountSavings';
import AccountCreditCard from '../components/AccountCreditCard';
import styles from '../styles/User.module.css';

const User = () => {
  return (
    <>
      <header>
        <Header />
        <ButtonSignOut />
      </header>
      <div className={styles.main}>
        <div className={styles.mainuser}>
          <h2 className={styles.sronly}>Accounts</h2>
          <ButtonEdit />
          <section className={styles.account}>
            <AccountChecking />
            <ButtonTransactions />
          </section>
          <section className={styles.account}>
            <AccountSavings />
            <ButtonTransactions />
          </section>
          <section className={styles.account}>
            <AccountCreditCard />
            <ButtonTransactions />
          </section>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default User;

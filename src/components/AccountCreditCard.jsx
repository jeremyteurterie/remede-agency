import React from 'react';
import styles from '../styles/Account.module.css';

const AccountCreditCard = () => {
  return (
    <div className={styles.accountcontentwrapper}>
      <h3 className={styles.accounttitle}>Argent Bank Credit Card (x8349)</h3>
      <p className={styles.accountamount}>$184.30</p>
      <p className={styles.accountamountdescription}>Current Balance</p>
    </div>
  );
};

export default AccountCreditCard;

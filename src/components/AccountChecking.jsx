import React from 'react';
import styles from '../styles/Account.module.css';

const AccountChecking = () => {
  return (
    <div className={styles.accountcontentwrapper}>
      <h3 className={styles.accounttitle}>Argent Bank Checking (x8349)</h3>
      <p className={styles.accountamount}>$2,082.79</p>
      <p className={styles.accountamountdescription}>Available Balance</p>
    </div>
  );
};

export default AccountChecking;

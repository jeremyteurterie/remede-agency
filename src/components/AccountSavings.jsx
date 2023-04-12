import React from 'react';
import styles from '../styles/Account.module.css';

const AccountSavings = () => {
  return (
    <div className={styles.accountcontentwrapper}>
      <h3 className={styles.accounttitle}>Argent Bank Savings (x6712)</h3>
      <p className={styles.accountamount}>$10,928.42</p>
      <p className={styles.accountamountdescription}>Available Balance</p>
    </div>
  );
};

export default AccountSavings;

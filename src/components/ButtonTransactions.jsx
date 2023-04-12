import React from 'react';
import styles from '../styles/ButtonTransactions.module.css';

const ButtonTransactions = () => {
  return (
    <div className={styles.accountcontentwrapper + ' ' + styles.cta}>
      <button className={styles.transactionbutton}>View transactions</button>
    </div>
  );
};

export default ButtonTransactions;

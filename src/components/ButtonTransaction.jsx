import React from 'react';
import styles from '../styles/ButtonTransaction.module.css';

const ButtonTransaction = () => {
  return (
    <div className={styles.accountcontentwrapper + ' ' + styles.cta}>
      <button className={styles.transactionbutton}>View transactions</button>
    </div>
  );
};

export default ButtonTransaction;

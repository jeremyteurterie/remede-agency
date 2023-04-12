import React from 'react';
import styles from '../styles/ButtonEdit.module.css';

const ButtonEdit = () => {
  return (
    <div className={styles.header}>
      <h1>
        Welcome back
        <br />
        Tony Jarvis!
      </h1>
      <button className={styles.editbutton}>Edit Name</button>
    </div>
  );
};

export default ButtonEdit;

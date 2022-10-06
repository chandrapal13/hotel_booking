import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.scss';

function Header() {
  return (
    <div className={styles.header}> 
      <div className={styles.headerList}>
      <FontAwesomeIcon icon="fa-solid fa-bed" />
      </div>
    </div>
  )
}

export default Header

import React from "react";
import styles from './NavBar.module.scss'

function NavBar() {
  return (
    <>
      <div className={styles.navBar}>
        <div className={styles.navContainer}>
        <span className="logo">lamabooking</span>
          <ul>
            <li><a href="/">Login</a></li>
            <li><a href="/home">Home</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
import React from "react";
import styles from './NavBar.module.scss'

function NavBar() {
  return (
    <>
<ul>
  <li><a  href="/">Login</a></li>
  <li><a href="/home">Home</a></li>
  <li><a href="/contact">Contact</a></li>
  <li><a href="/about">About</a></li>
</ul>
    </>
  );
}

export default NavBar;
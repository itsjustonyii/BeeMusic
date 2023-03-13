import React from "react";
import { accessUrl } from "./spotify";
import styles from '../css/Login.module.css'
import { SiCloudbees } from "react-icons/si";

function Login() {
  return (
    <div>
      <div className={styles.logo}>
      <SiCloudbees className={styles.span} size={35}/>
      <h1><span className={styles.span}>Bee</span>Music</h1>
      </div>
      <a href={accessUrl} className={styles.login}>CONNECT WITH SPOTIFY</a>
    </div>
  );
}

export default Login;

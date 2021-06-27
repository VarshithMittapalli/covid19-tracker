import React from "react";
import styles from "./Footer.module.css";


function Footer(){
     var year = new Date().getFullYear();
     return(
         <footer> <p className={styles.footerStyle}>Copyright © Varshith {year} </p></footer>
     );
}   

export default Footer;
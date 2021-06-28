import React from "react";
import styles from "./Footer.module.css";


function Footer(){
     var year = new Date().getFullYear();
     return(
         <footer> <p className={styles.footerStyle}>Created by Varshith {year} </p></footer>
     );
}   

export default Footer;

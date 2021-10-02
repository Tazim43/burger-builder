import React from "react";
import classes from "../styles/Header.module.css";

export default function Header() {
   return (
      <nav className={classes.navbar}>
         <h1>Burger Builder</h1>
      </nav>
   );
}

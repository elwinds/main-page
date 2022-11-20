import React from 'react';
import classes from './Logo.module.scss'

const Logo = () => {
    return (
      <div className={classes.container}>
        <img
          className={classes.img}
          src={require("../../../../img/logo.png")}
          alt="logo"
        ></img>
        <span className={classes.text}>
            основана в 1874
        </span>
      </div>
    );
}
 
export default Logo;
import React from "react";
import classes from "./Footer.module.scss";
import { Anchor } from "antd";

const { Link } = Anchor;

const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <img
          className={classes.img}
          src={require("../../img/footer-logo.png")}
          alt="logo"
        ></img>
      </div>
      <div className={classes.links}>
        <Link href="#about" title="О поселке" />
        <Link href="#infrustructure" title="Инфраструктура" />
        <Link href="#history" title="Историческая справка" />
        <Link href="#partners" title="Партнеры" />
      </div>
      <div className={classes.contacts}>
        <span className={classes.contacts__tel}>8 (495) 747-31-10</span>
        <span className={classes.contacts__email}>5378082@mail.ru</span>
      </div>
    </div>
  );
};

export default Footer;

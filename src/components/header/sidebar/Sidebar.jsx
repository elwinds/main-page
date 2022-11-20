import React from "react";
import Logo from "./logo/Logo";
import classes from "./Sidebar.module.scss";
import { Anchor } from "antd";

const { Link } = Anchor;

const Sidebar = () => {
  return (
    <div className={classes.container}>
      <Logo />
      <div className={classes.menu}>
        <div className={classes.item}>
          <span className={classes.item__num}>01</span>
          <Link
            href="#about"
            title="О поселке"
            className={classes.item__text}
          />
        </div>
        <div className={classes.item}>
          <span className={classes.item__num}>02</span>
          <Link
            href="#history"
            title="Историческое место"
            className={classes.item__text}
          />
        </div>
        <div className={classes.item}>
          <span className={classes.item__num}>03</span>
          <Link
            href="#infrustructure"
            title="Инфраструктура"
            className={classes.item__text}
          />
        </div>
        <div className={classes.item}>
          <span className={classes.item__num}>04</span>
          <Link href="#plan" title="Генплан" className={classes.item__text} />
        </div>
        <div className={classes.item}>
          <span className={classes.item__num}>05</span>
          <Link href="#gallery" title="Галерея" className={classes.item__text} />
        </div>
        <div className={classes.item}>
          <span className={classes.item__num}>06</span>
          <Link
            href="#partners"
            title="Партнеры"
            className={classes.item__text}
          />
        </div>
      </div>
      <div className={classes.booklet}>
        <img
          className={classes.img}
          src={require("../../../img/booklet.png")}
          alt="booklet"
        ></img>
        <span className={classes.booklet__text}>
          Скачать <br />
          PDF буклет
        </span>
      </div>
    </div>
  );
};

export default Sidebar;

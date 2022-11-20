import React from "react";
import classes from "./Burger.module.scss";
import { Anchor } from "antd";
import Logo from "../header/sidebar/logo/Logo";

const { Link } = Anchor;

const Burger = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const changeMenuState = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={classes.container}>
        <Logo className={classes.logo} />
        <div className={classes.burger} onClick={() => changeMenuState()}>
          <img
            className={classes.burger__logo}
            src={
              isMenuOpen
                ? require("../../img/cross.png")
                : require("../../img/burger.png")
            }
            alt="menu"
          ></img>
        </div>
      </div>
      <div
        className={
          isMenuOpen
            ? [classes.list, classes["list--open"]].join(" ")
            : classes.list
        }
      >
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
            <Link
              href="#gallery"
              title="Галерея"
              className={classes.item__text}
            />
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
      </div>
    </>
  );
};

export default Burger;
